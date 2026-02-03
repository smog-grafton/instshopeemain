# 1InstShopee – Multi‑Country Marketplace Architecture (Laravel + Next.js)

## 1. Big misconception to kill first ❌

❌ **“If I buy shopee.my, it automatically knows to show Malaysian products”**
❌ **“Each domain must have its own backend and database”**

Both are **false**.

Domains are just *addresses*. They don’t carry business logic. What decides *which products, vendors, currency, language, payment methods* to show is **your application logic**, not the domain itself.

Shopee (and systems like it) use:

* **One core backend architecture**
* **Country-aware data models**
* **Domain → country mapping**

---

## 2. High‑Level Architecture (How Shopee-like systems really work)

### Single Logical Platform

* One Laravel backend (can be horizontally scaled)
* One database *cluster* (not necessarily one physical DB)
* One Next.js frontend codebase

### Multiple Country Experiences

* Multiple domains (`.my`, `.co`, `.ph`, etc.)
* Each domain maps to **one country context**
* Country context controls:

  * Vendors
  * Products
  * Currency
  * Language
  * Payment gateways
  * Logistics providers

---

## 3. Domain → Country Resolution Flow

### Example

| Domain        | Country Code | Default Language | Currency |
| ------------- | ------------ | ---------------- | -------- |
| shopee.com.my | MY           | en               | MYR      |
| shopee.co.id  | ID           | id               | IDR      |
| shopee.ph     | PH           | en               | PHP      |

### How Laravel knows

1. Request hits backend
2. Middleware reads:

   * `Host` header (`shopee.com.my`)
3. Query `countries` table
4. Set `App::instance('country')`
5. Every query is now scoped to that country

---

## 4. Core Database Design (Country‑Centric)

### Country is the **root entity**

Everything belongs to a country:

* Vendors
* Users
* Products
* Orders
* Payments
* Logistics

---

## 5. ER Diagram (Textual Representation)

```
COUNTRIES
- id
- code (MY, UG, KE)
- domain
- default_language
- currency

USERS
- id
- country_id
- role (admin, vendor, customer)

VENDORS
- id
- country_id
- user_id

PRODUCTS
- id
- vendor_id
- country_id

ORDERS
- id
- country_id
- user_id

PAYMENTS
- id
- order_id
- country_id

LOGISTICS_PROVIDERS
- id
- country_id
```

---

## 6. Laravel Migrations (Core Examples)

### countries table

```php
Schema::create('countries', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('code', 2)->unique();
    $table->string('domain')->unique();
    $table->string('currency');
    $table->string('default_language');
    $table->timestamps();
});
```

### vendors table

```php
Schema::create('vendors', function (Blueprint $table) {
    $table->id();
    $table->foreignId('country_id')->constrained();
    $table->foreignId('user_id')->constrained();
    $table->string('shop_name');
    $table->timestamps();
});
```

---

## 7. Laravel Middleware (Country Resolver)

```php
class ResolveCountryMiddleware
{
    public function handle($request, Closure $next)
    {
        $host = $request->getHost();

        $country = Country::where('domain', $host)->firstOrFail();

        app()->instance('country', $country);

        return $next($request);
    }
}
```

Registered globally so **every request knows its country**.

---

## 8. Laravel Policies (Country Isolation)

### Example: VendorPolicy

```php
public function view(User $user, Vendor $vendor)
{
    return $user->country_id === $vendor->country_id;
}
```

This ensures:

* No vendor sees another country’s data

---

## 9. Filament Admin Panel (Per‑Country)

### Super Admin

* Can manage all countries
* Assign domains

### Country Admin

* Sees only their country’s:

  * Vendors
  * Orders
  * Payments

### Filament Scoping

```php
protected static function getEloquentQuery(): Builder
{
    return parent::getEloquentQuery()
        ->where('country_id', app('country')->id);
}
```

---

## 10. Next.js Country Routing

### Domain‑Based Routing (Recommended)

* One Next.js app
* No `/my`, `/ug` URLs
* Domain defines country

### Middleware (`middleware.ts`)

```ts
export function middleware(req) {
  const host = req.headers.get('host')
  req.headers.set('x-country-domain', host)
}
```

Backend uses this header to resolve country.

---

## 11. Next.js i18n Strategy

### Language Rules

* Default language from country
* User can override

```ts
i18n: {
  locales: ['en', 'id', 'sw'],
  defaultLocale: 'en'
}
```

Language stored in cookie, not domain.

---

## 12. Payments (Country Abstraction)

### payment_providers table

| country_id | provider | config |

Laravel selects provider dynamically:

```php
$provider = PaymentProvider::where('country_id', app('country')->id)->first();
```

Examples:

* MY → Stripe
* UG → Mobile Money
* KE → M‑Pesa

---

## 13. Logistics Abstraction

Each country has its own logistics drivers:

* J&T
* DHL
* Local boda services

Orders resolve logistics via country.

---

## 14. Deployment Strategy

### Backend

* Laravel on VPS / Kubernetes
* One codebase
* Auto‑scaled

### Frontend

* Next.js deployed once
* Handles all domains

---

## 15. DNS & Cloudflare Setup

### Domains

* Buy:

  * instshopee.my
  * instshopee.co.ug

### Cloudflare

* All domains point to same IP
* SSL per domain
* CDN enabled

Laravel resolves country via domain.

---

## 16. Why This Scales Like Shopee

✅ One codebase
✅ One team
✅ Clear country isolation
✅ Easy onboarding of new countries

Add a country =

1. Buy domain
2. Add country row
3. Configure payments & logistics

---

## 17. Final Mental Model

> **Domains select the country.**
> **Country selects the data.**
> **Backend stays the same.**

This is how Shopee, Lazada, Amazon, and Uber actually scale.

---

If you want next:

* Multi‑tenant vs country‑tenant comparison
* Database sharding when traffic grows
* Vendor sub‑stores (`vendor.instshopee.my`)
