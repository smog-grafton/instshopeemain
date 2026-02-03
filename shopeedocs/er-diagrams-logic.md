Perfect 👍
Below is **developer-grade documentation + implementation** for **1instshopee**, split into **ER diagrams** and **Laravel middleware & policies**. This is written so another backend dev can jump in immediately.

---

# 📐 1instshopee — ER Diagrams (Conceptual + Logical)

> **Design rule:**
> `countries` is the **central anchor table**.
> Almost everything relates to a country either **directly or indirectly**.

---

## 1️⃣ Core ER Diagram (High-Level)

```
COUNTRIES
  └── VENDORS
        └── PRODUCTS
              └── ORDER_ITEMS
                    └── ORDERS
                          └── CUSTOMERS
```

But let’s expand it properly 👇

---

## 2️⃣ Core Tables & Relationships (Detailed ER)

```
+----------------+
|   countries    |
+----------------+
| id (PK)        |
| code           |
| name           |
| domain         |
| currency       |
| language       |
+----------------+
        |
        | 1-to-many
        |
+----------------+
|   vendors      |
+----------------+
| id (PK)        |
| country_id FK  |
| name           |
| status         |
+----------------+
        |
        | 1-to-many
        |
+----------------+
|   products     |
+----------------+
| id (PK)        |
| vendor_id FK   |
| country_id FK  |
| name           |
| price          |
| stock          |
+----------------+
        |
        | many-to-many (via order_items)
        |
+----------------+        +----------------+
| order_items   | <----> |   orders       |
+----------------+        +----------------+
| id (PK)        |        | id (PK)        |
| order_id FK   |        | customer_id FK |
| product_id FK |        | country_id FK  |
| quantity      |        | total_amount   |
| price         |        | status         |
+----------------+        +----------------+
                                   |
                                   | many-to-1
                                   |
                            +----------------+
                            |  customers     |
                            +----------------+
                            | id (PK)        |
                            | country_id FK  |
                            | email          |
                            | name           |
                            +----------------+
```

---

## 3️⃣ Why This ER Design Works

### ✔ Country-first design

* Country is **resolved once** (via domain)
* Every query is filtered automatically

### ✔ Easy scaling

* Single DB → multiple DBs later
* Minimal schema changes

### ✔ Operational separation

* Admins, vendors, customers never mix data across countries

---

## 4️⃣ Optional Supporting Tables (Recommended)

```
countries
 ├── currencies
 ├── languages
 ├── tax_rules
 ├── shipping_zones
 ├── payment_providers
```

This allows **true Shopee-style localization**.

---

# 🔐 Laravel Middleware (Country Awareness)

## 1️⃣ Country Detection Middleware (MANDATORY)

📁 `app/Http/Middleware/ResolveCountry.php`

```php
<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Country;

class ResolveCountry
{
    public function handle($request, Closure $next)
    {
        $host = $request->getHost();

        $country = Country::where('domain', $host)->first();

        if (!$country) {
            abort(404, 'Country not supported');
        }

        // Bind country globally
        app()->instance('country', $country);

        // Set locale
        app()->setLocale($country->language);

        return $next($request);
    }
}
```

### Register Middleware

📁 `app/Http/Kernel.php`

```php
protected $middlewareGroups = [
    'api' => [
        \App\Http\Middleware\ResolveCountry::class,
    ],
];
```

Now **every API request is country-aware**.

---

## 2️⃣ Helper Access Anywhere

```php
$country = app('country');
$country->id;
$country->currency;
```

---

# 🔐 Laravel Authorization Policies

> **Rule:**
> A user must never access or mutate data from another country.

---

## 1️⃣ Vendor Policy

📁 `app/Policies/VendorPolicy.php`

```php
<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Vendor;

class VendorPolicy
{
    public function view(User $user, Vendor $vendor)
    {
        return $vendor->country_id === app('country')->id;
    }

    public function update(User $user, Vendor $vendor)
    {
        return $vendor->country_id === app('country')->id
            && $user->id === $vendor->owner_id;
    }
}
```

---

## 2️⃣ Product Policy

📁 `app/Policies/ProductPolicy.php`

```php
<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Product;

class ProductPolicy
{
    public function view(User $user, Product $product)
    {
        return $product->country_id === app('country')->id;
    }

    public function update(User $user, Product $product)
    {
        return $product->country_id === app('country')->id
            && $user->id === $product->vendor->owner_id;
    }

    public function delete(User $user, Product $product)
    {
        return $this->update($user, $product);
    }
}
```

---

## 3️⃣ Order Policy

📁 `app/Policies/OrderPolicy.php`

```php
<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Order;

class OrderPolicy
{
    public function view(User $user, Order $order)
    {
        return $order->country_id === app('country')->id
            && $order->customer_id === $user->id;
    }
}
```

---

## 4️⃣ Register Policies

📁 `app/Providers/AuthServiceProvider.php`

```php
protected $policies = [
    Vendor::class => VendorPolicy::class,
    Product::class => ProductPolicy::class,
    Order::class => OrderPolicy::class,
];
```

---

# 🧠 Critical Enforcement Rule

### Always combine:

✔ Middleware (country resolution)
✔ Database filtering
✔ Authorization policies

❌ Never rely on frontend logic
❌ Never trust request parameters for country

---

# 🚦 Example Secure Query Pattern

```php
Product::where('country_id', app('country')->id)
       ->where('status', 'active')
       ->get();
```

This is **non-negotiable**.

---

# 🧩 What This Enables Later

* Multi-DB routing per country
* Country-specific admins
* Country-specific tax engines
* Country-specific payment providers
* Edge caching per domain
* SEO hreflang per country

---

# ✅ Final Takeaway

**Shopee-style architecture is NOT magic.**
It’s:

* Clean data modeling
* Domain-aware middleware
* Country-scoped authorization
* Discipline in queries

You’re building this the **correct enterprise way**.

---

If you want next, I can:

* Draw **visual ER diagrams (PlantUML / Mermaid)**
* Generate **Laravel migrations**
* Design **Filament admin panels per country**
* Document **Next.js country routing + i18n**

Just say the word 🚀
