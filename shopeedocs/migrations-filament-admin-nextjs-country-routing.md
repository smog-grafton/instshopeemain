Excellent — this is now a **complete, production-grade blueprint**.
I’ll deliver this in **three clean sections**, written as **internal technical documentation** for **1instshopee**.

---

# 🧱 1instshopee — Laravel Migrations, Filament Design, Next.js Country Routing

---

# PART 1 — Laravel Migrations (Country-First Schema)

> **Golden rule:**
> `countries.id` must appear everywhere data is region-specific.

---

## 1️⃣ Countries Migration (CORE TABLE)

📁 `database/migrations/xxxx_create_countries_table.php`

```php
Schema::create('countries', function (Blueprint $table) {
    $table->id();
    $table->string('code', 5)->unique();        // MY, TH, ID
    $table->string('name');
    $table->string('domain')->unique();         // 1instshopee.my
    $table->string('currency', 5);              // MYR, THB
    $table->string('language', 10);              // en, th, id
    $table->boolean('active')->default(true);
    $table->timestamps();
});
```

This table:

* Resolves domains
* Sets locale
* Controls availability

---

## 2️⃣ Vendors Migration

```php
Schema::create('vendors', function (Blueprint $table) {
    $table->id();
    $table->foreignId('country_id')->constrained()->cascadeOnDelete();
    $table->foreignId('owner_id')->constrained('users');
    $table->string('name');
    $table->enum('status', ['pending', 'active', 'suspended'])->default('pending');
    $table->timestamps();
});
```

✔ Vendors belong to **one country only**

---

## 3️⃣ Products Migration

```php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->foreignId('country_id')->constrained()->cascadeOnDelete();
    $table->foreignId('vendor_id')->constrained()->cascadeOnDelete();
    $table->string('name');
    $table->text('description')->nullable();
    $table->decimal('price', 12, 2);
    $table->integer('stock')->default(0);
    $table->boolean('active')->default(true);
    $table->timestamps();
});
```

✔ `country_id` duplicated intentionally for fast filtering
✔ Avoids deep joins at scale

---

## 4️⃣ Customers Migration

```php
Schema::create('customers', function (Blueprint $table) {
    $table->id();
    $table->foreignId('country_id')->constrained()->cascadeOnDelete();
    $table->foreignId('user_id')->constrained();
    $table->string('phone')->nullable();
    $table->timestamps();
});
```

---

## 5️⃣ Orders & Order Items

```php
Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->foreignId('country_id')->constrained()->cascadeOnDelete();
    $table->foreignId('customer_id')->constrained();
    $table->decimal('total_amount', 12, 2);
    $table->enum('status', ['pending', 'paid', 'shipped', 'completed', 'cancelled']);
    $table->timestamps();
});
```

```php
Schema::create('order_items', function (Blueprint $table) {
    $table->id();
    $table->foreignId('order_id')->constrained()->cascadeOnDelete();
    $table->foreignId('product_id')->constrained();
    $table->integer('quantity');
    $table->decimal('price', 12, 2);
});
```

---

# PART 2 — Filament Admin Panels (Country-Aware)

> **Goal:**
> Admins only see and manage data for their assigned country.

---

## 1️⃣ Admin User → Country Assignment

Add to `users` table:

```php
$table->foreignId('country_id')->nullable()->constrained();
```

This allows:

* Global super admins (null)
* Country-restricted admins

---

## 2️⃣ Filament Global Scope (MANDATORY)

📁 `AppServiceProvider.php`

```php
use Filament\Facades\Filament;

Filament::serving(function () {
    if (auth()->check() && auth()->user()->country_id) {
        app()->instance(
            'country',
            auth()->user()->country
        );
    }
});
```

---

## 3️⃣ Filament Resource Query Scoping

### Example: ProductResource

```php
public static function getEloquentQuery(): Builder
{
    return parent::getEloquentQuery()
        ->where('country_id', app('country')->id);
}
```

This ensures:

* No cross-country leakage
* No mistakes by junior admins

---

## 4️⃣ Auto-Inject Country on Create

```php
protected static function mutateFormDataBeforeCreate(array $data): array
{
    $data['country_id'] = app('country')->id;
    return $data;
}
```

---

## 5️⃣ Country-Aware Navigation

```php
public static function shouldRegisterNavigation(): bool
{
    return auth()->user()->country_id !== null;
}
```

---

## 6️⃣ Super Admin vs Country Admin

| Role          | Permissions      |
| ------------- | ---------------- |
| Super Admin   | All countries    |
| Country Admin | One country only |
| Support Staff | Read-only        |
| Vendor Admin  | Vendor-scoped    |

---

# PART 3 — Next.js Country Routing + i18n

> **Key principle:**
> **Domain defines country — NOT URL params**

---

## 1️⃣ Domain-Based Routing (Correct Way)

### Example domains:

* `1instshopee.my`
* `1instshopee.co.th`

Next.js receives requests already separated.

---

## 2️⃣ Country Bootstrap API Call

On first load:

```ts
GET /api/bootstrap
```

Backend returns:

```json
{
  "country": {
    "code": "MY",
    "currency": "MYR",
    "language": "en"
  }
}
```

Frontend stores this globally.

---

## 3️⃣ Global Country Context

```ts
export const CountryContext = createContext(null);
```

Injected at root layout:

```tsx
<CountryContext.Provider value={bootstrap.country}>
  {children}
</CountryContext.Provider>
```

---

## 4️⃣ i18n Strategy (Recommended)

### Folder structure

```
/locales
  /en
  /th
  /id
```

Use:

* `next-intl` OR `next-i18next`

---

## 5️⃣ Language Resolution Priority

1. User profile preference
2. Cookie
3. Country default
4. Browser fallback

```ts
const locale = userLocale ?? country.language;
```

---

## 6️⃣ Currency Formatting

Never hardcode currency.

```ts
new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: country.currency,
}).format(price);
```

---

## 7️⃣ SEO: hreflang Strategy

Each domain sets:

```html
<link rel="alternate" hreflang="en-my" href="https://1instshopee.my" />
<link rel="alternate" hreflang="th-th" href="https://1instshopee.co.th" />
```

Handled via Next.js `metadata`.

---

## 8️⃣ Why NO Geo-IP Redirect by Default

✔ Users travel
✔ VPNs break IP detection
✔ Ecommerce errors are expensive

Landing page → manual choice is intentional.

---

# FINAL ARCHITECTURAL SUMMARY

* **Domains are identifiers**
* **Countries table is the backbone**
* **Laravel enforces country context**
* **Filament respects country boundaries**
* **Next.js consumes country-scoped APIs**
* **Scaling to Shopee-level is possible later**

---

## What I Can Generate Next (Optional)

* Mermaid / PlantUML ER diagrams (visual)
* Filament dashboards (KPIs per country)
* Vendor dashboards
* Payment & logistics country abstraction
* Deployment + DNS + Cloudflare setup

You’ve designed this at **real marketplace-engineering level** — solid work 👊
