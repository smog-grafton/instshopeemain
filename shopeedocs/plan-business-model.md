Seller Business Model Implementation Plan

1. Database Schema Updates

1.1 Enhance Users Table

Add seller-specific fields to track seller status:





Migration: add_seller_fields_to_users_table





is_seller (boolean, default false)



seller_status (enum: pending, approved, rejected, suspended)



seller_application_date (timestamp, nullable)



seller_approved_date (timestamp, nullable)



bank_account_name (string, nullable)



bank_account_number (string, nullable)



bank_name (string, nullable)



identity_document_url (string, nullable)



business_registration_url (string, nullable)

1.2 Enhance Vendors Table

Link vendors to user accounts as their seller shops:





Migration: enhance_vendors_table





Make user_id NOT NULL (currently nullable)



Add wallet_id (foreign key to wallets table)



Add foreign key constraint on user_id



Add unique constraint on user_id (one shop per seller)

1.3 Enhance Wallets Table

Make wallets more robust for seller operations:





Migration: enhance_wallets_table





Add type (enum: general - used for both buyer/seller)



Add available_balance (for pending transactions)



Add pending_balance (funds on hold)



Add unique constraint on user_id + type

1.4 Enhance Wallet Transactions Table

Track order lifecycle and fulfillment costs:





Migration: enhance_wallet_transactions_table





Add transaction_reference (string, unique)



Add vendor_id (foreign key, nullable)



Add description (text)



Add balance_before (decimal)



Add balance_after (decimal)



Expand type enum: 





topup, withdrawal, order_fulfillment_cost, order_payout, refund, adjustment

1.5 Enhance Orders Table

Track vendor and fulfillment:





Migration: enhance_orders_table





Add vendor_id (foreign key to vendors)



Add fulfillment_cost (decimal - cost to process order)



Add seller_payout (decimal - amount credited to seller)



Add delivered_at (timestamp, nullable)



Add auto_complete_at (timestamp, nullable - for auto-delivery)



Add confirmed_by (enum: buyer, auto, admin, nullable)

1.6 Create Catalog Products Table (NEW)

Admin-managed catalog that sellers can add to shops:





Migration: create_catalog_products_table





id, title, description, base_price, wholesale_price



category_slug, thumbnail_url, images (json)



specifications (json)



min_order_quantity, available_stock



is_active, timestamps

1.7 Create Product Catalog Links Table (NEW)

Track which sellers added which catalog products:





Migration: create_product_catalog_links_table





id, product_id (FK to products)



catalog_product_id (FK to catalog_products)



added_at (timestamp)



Unique constraint on product_id

1.8 Create Seller Applications Table (NEW)

Track seller registration requests:





Migration: create_seller_applications_table





id, user_id (FK)



shop_name, shop_description



business_type (enum: individual, company)



identity_document_url, business_registration_url



bank_account_name, bank_account_number, bank_name



status (enum: pending, approved, rejected)



rejection_reason (text, nullable)



reviewed_by (FK to users, nullable)



reviewed_at (timestamp, nullable)



timestamps

2. Eloquent Models Updates

2.1 User Model (app/Models/User.php)

Add relationships and methods:

// Relationships
public function vendor() { return $this->hasOne(Vendor::class); }
public function wallet() { return $this->hasOne(Wallet::class); }
public function sellerApplication() { return $this->hasOne(SellerApplication::class); }

// Methods
public function isSeller(): bool
public function canSell(): bool // approved seller
public function applyAsSeller(array $data): SellerApplication
public function approveSeller(): void // creates vendor + wallet

2.2 Vendor Model (app/Models/Vendor.php)

Add relationships:

public function user() { return $this->belongsTo(User::class); }
public function wallet() { return $this->belongsTo(Wallet::class); }
public function orders() { return $this->hasMany(Order::class); }

2.3 Wallet Model (app/Models/Wallet.php)

Add relationships and business logic:

public function user() { return $this->belongsTo(User::class); }
public function transactions() { return $this->hasMany(WalletTransaction::class); }

// Business logic methods
public function deduct(float $amount, string $type, array $meta): WalletTransaction
public function credit(float $amount, string $type, array $meta): WalletTransaction
public function hasSufficientBalance(float $amount): bool
public function reserveFunds(float $amount, Order $order): WalletTransaction
public function releaseFunds(Order $order): void

2.4 Order Model (app/Models/Order.php)

Add vendor relationship and fulfillment methods:

public function vendor() { return $this->belongsTo(Vendor::class); }

// Calculate fulfillment cost (product cost + shipping + fees)
public function calculateFulfillmentCost(): float
// Calculate seller payout (total_payment - fulfillment_cost)
public function calculateSellerPayout(): float
// Process order completion and payout
public function complete(): void

2.5 New Models to Create





CatalogProduct (app/Models/CatalogProduct.php)



ProductCatalogLink (app/Models/ProductCatalogLink.php)



SellerApplication (app/Models/SellerApplication.php)

3. Filament Resources

3.1 VendorResource (NEW)

Location: app/Filament/Resources/VendorResource.php





Display: name, user, status, wallet balance, products count, orders count



Filters: status (pending/active/suspended), user.is_seller



Actions: Activate, Suspend



Relation managers: ProductsRelationManager, OrdersRelationManager

3.2 WalletResource (NEW)

Location: app/Filament/Resources/WalletResource.php





Display: user name, balance, available_balance, pending_balance, currency



Filters: Has pending balance, currency



Actions: Adjust Balance (admin can add/deduct)



Relation managers: TransactionsRelationManager

3.3 WalletTransactionResource (NEW)

Location: app/Filament/Resources/WalletTransactionResource.php





Display: reference, wallet.user, type, amount, status, order_id, created_at



Filters: type, status, date range



Sortable: created_at, amount



Actions: View details (meta JSON)

3.4 SellerApplicationResource (NEW)

Location: app/Filament/Resources/SellerApplicationResource.php





Display: user name/email, shop_name, business_type, status, applied date



Filters: status (pending/approved/rejected)



Actions:





Approve Application (creates Vendor + Wallet, updates user)



Reject Application (with reason)



View Documents (identity, business registration)

3.5 CatalogProductResource (NEW)

Location: app/Filament/Resources/CatalogProductResource.php





Admin-only catalog management



Display: title, category, base_price, wholesale_price, available_stock, is_active



Actions: Edit, Deactivate, View sellers using this product



Relation managers: LinkedProductsRelationManager (shows sellers who added this)

3.6 Enhance UserResource

Add to existing app/Filament/Resources/UserResource.php:





Display is_seller, seller_status columns



Filter: Is Seller, Seller Status



Actions: "Upgrade to Seller" (bypasses application process)



Relation managers: Add VendorRelationManager, WalletRelationManager

3.7 Enhance OrderResource

Add to existing app/Filament/Resources/OrderResource.php:





Display: vendor name, fulfillment_cost, seller_payout



Actions: 





Mark as Delivered (triggers payout)



Set Auto-complete Date



Show wallet transaction references

4. Business Logic & Services

4.1 Order Fulfillment Service (NEW)

Location: app/Services/OrderFulfillmentService.php

class OrderFulfillmentService
{
    // Check if seller has sufficient wallet balance for order
    public function canFulfillOrder(Order $order): bool
    
    // Deduct fulfillment cost from seller wallet when order is PAID
    public function processOrderPayment(Order $order): void
    
    // Credit seller wallet when order is DELIVERED
    public function processOrderCompletion(Order $order): void
    
    // Handle refunds (return funds to seller)
    public function processOrderRefund(Order $order): void
}

4.2 Seller Approval Service (NEW)

Location: app/Services/SellerApprovalService.php

class SellerApprovalService
{
    // Approve seller application
    public function approveApplication(SellerApplication $application): Vendor
    
    // Creates: Vendor record, Wallet (with 0 balance), updates User
    // Reject application with reason
    public function rejectApplication(SellerApplication $application, string $reason): void
    
    // Admin bypass: directly upgrade user to seller
    public function upgradeUserToSeller(User $user, array $shopData): Vendor
}

4.3 Order Observer Enhancement

Update existing app/Observers/OrderObserver.php:





On status change to PAID: Call OrderFulfillmentService::processOrderPayment()



On status change to DELIVERED: Call OrderFulfillmentService::processOrderCompletion()



On status change to CANCELLED or REFUNDED: Handle wallet reversal

4.4 Auto-Complete Orders Command (NEW)

Location: app/Console/Commands/AutoCompleteOrders.php





Runs daily via scheduler



Finds orders with status = SHIPPED and auto_complete_at <= now()



Marks them as DELIVERED with confirmed_by = auto



Triggers payout via OrderFulfillmentService

5. API Endpoints (Backend)

5.1 Seller Application API

Routes in routes/api.php:

// Public/Buyer endpoints (require auth)
Route::middleware('api.token')->group(function () {
    Route::post('/seller/apply', [SellerApplicationController::class, 'apply']);
    Route::get('/seller/application', [SellerApplicationController::class, 'getMyApplication']);
    Route::get('/seller/dashboard', [SellerDashboardController::class, 'index']); // if approved
});

Controller: app/Http/Controllers/Api/SellerApplicationController.php

5.2 Wallet API

Route::middleware('api.token')->group(function () {
    Route::get('/wallet', [WalletController::class, 'show']);
    Route::get('/wallet/transactions', [WalletController::class, 'transactions']);
    Route::post('/wallet/topup/request', [WalletController::class, 'requestTopup']);
    Route::post('/wallet/withdraw/request', [WalletController::class, 'requestWithdrawal']);
});

Controller: app/Http/Controllers/Api/WalletController.php

5.3 Catalog Products API

// List available catalog products for sellers to add
Route::middleware('api.token')->group(function () {
    Route::get('/catalog-products', [CatalogProductController::class, 'index']);
    Route::post('/seller/products/add-from-catalog', [SellerProductController::class, 'addFromCatalog']);
});

5.4 Enhance Order Confirmation API

Update app/Http/Controllers/Api/OrderController.php:





Add buyer delivery confirmation endpoint: POST /orders/{id}/confirm-delivery



Check sufficient wallet balance before allowing seller orders

6. Seeders

6.1 WalletSeeder (NEW)

Create wallets for existing users:





Super admin: $10,000 balance



Regular users: $0-500 random balance



All sellers: minimum $1,000 balance

6.2 CatalogProductSeeder (NEW)

Seed 50-100 products in admin catalog:





Various categories (Electronics, Fashion, Home, etc.)



Realistic wholesale vs retail pricing



Stock quantities

6.3 SellerApplicationSeeder (NEW)

Create sample seller applications:





5 pending applications



10 approved (already converted to vendors)



3 rejected

6.4 VendorWalletSeeder (NEW)

Link existing vendors to wallets:





Update existing vendors with wallet_id



Create wallets for vendors without users (mock data)

6.5 WalletTransactionSeeder (NEW)

Create realistic transaction history:





Top-ups, withdrawals



Order fulfillment costs



Order payouts (completed orders)

6.6 Update DatabaseSeeder

Call all new seeders in correct order:

$this->call([
    // Existing seeders...
    WalletSeeder::class,
    CatalogProductSeeder::class,
    SellerApplicationSeeder::class,
    VendorWalletSeeder::class,
    WalletTransactionSeeder::class,
]);

7. Frontend Integration (Future Phase - Out of Scope for Now)

The following frontend features will be needed but are marked for later implementation:





Seller application form page



Seller dashboard (products, orders, wallet)



Catalog product browser for sellers



Wallet top-up/withdrawal UI



Order delivery confirmation button for buyers

Note: For now, we'll focus on backend, database, Filament resources, and seeders to make the system functional.

8. Testing & Validation

After implementation:





Run migrations: php artisan migrate



Seed database: php artisan db:seed



In Filament Admin:





View Seller Applications → Approve one



Verify Vendor created with Wallet



View Wallets → Check balances



View Catalog Products



Create Order → Verify wallet deduction on PAID status



Mark Order DELIVERED → Verify seller payout credited



Test API endpoints with Postman/curl

Key Files Summary

New Files to Create (22)

Migrations (8):





add_seller_fields_to_users_table.php



enhance_vendors_table.php



enhance_wallets_table.php



enhance_wallet_transactions_table.php



enhance_orders_table.php



create_catalog_products_table.php



create_product_catalog_links_table.php



create_seller_applications_table.php

Models (3):





CatalogProduct.php



ProductCatalogLink.php



SellerApplication.php

Filament Resources (5):





VendorResource.php



WalletResource.php



WalletTransactionResource.php



SellerApplicationResource.php



CatalogProductResource.php

Services (2):





OrderFulfillmentService.php



SellerApprovalService.php

Commands (1):





AutoCompleteOrders.php

Controllers (3):





SellerApplicationController.php



WalletController.php



CatalogProductController.php (or add to existing SellerProductController)

Seeders (5):





WalletSeeder.php



CatalogProductSeeder.php



SellerApplicationSeeder.php



VendorWalletSeeder.php



WalletTransactionSeeder.php

Files to Modify (8)





User.php - add relationships & methods



Vendor.php - add relationships



Wallet.php - add business logic



WalletTransaction.php - add relationships



Order.php - add fulfillment logic



OrderObserver.php - trigger wallet operations



UserResource.php - add seller columns/actions



OrderResource.php - add vendor/wallet columns



DatabaseSeeder.php - call new seeders

Implementation Order





Phase 1: Database Foundation





All 8 migrations



Update models with relationships



Phase 2: Core Business Logic





Services (OrderFulfillmentService, SellerApprovalService)



Update OrderObserver



Create console command



Phase 3: Admin Interface





All 5 new Filament resources



Enhance UserResource and OrderResource



Phase 4: Data Population





All 5 new seeders



Test complete workflow



Phase 5: API Layer





Seller application endpoints



Wallet endpoints



Catalog product endpoints

This plan ensures the complete seller business model works end-to-end with proper wallet management, order fulfillment costs, seller payouts, and admin oversight.