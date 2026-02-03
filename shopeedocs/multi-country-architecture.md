Below is a **clean, internal technical document** you can drop into your repo or Notion/Confluence.
It is written **developer-to-developer**, neutral, and scalable.

---

# 📘 1instshopee — Multi-Country Marketplace Architecture Documentation

**Project Name:** 1instshopee
**Stack:**

* Frontend: **Next.js (TypeScript)**
* Backend: **Laravel (API-first)**
* Architecture: **Multi-country, single platform, Shopee-inspired**

---

## 1. Big Misconceptions to Kill First ❌

Before touching any code, it is critical to correct two very common misunderstandings:

❌ **“If I buy `shopee.my`, it automatically knows to show Malaysian products.”**
❌ **“Each country domain must have its own backend and database.”**

### Reality ✅

* **Domains do nothing by themselves**
* **Backends decide behavior**
* **Databases are filtered, not duplicated (at least initially)**

A domain is just a **string** sent in the HTTP request header:

```
Host: 1instshopee.my
```

Everything else happens in the **application layer**.

---

## 2. High-Level System Overview

1instshopee is a **multi-vendor, multi-country marketplace**, not a multitenant SaaS.

### Core Principles

* One **shared codebase**
* One **logical backend**
* One **country-aware system**
* Domain determines **context**, not infrastructure

### What changes per country:

* Products
* Vendors
* Prices
* Currency
* Language
* Logistics & payments
* Promotions

### What stays shared:

* Code
* Business logic
* APIs
* Admin tooling
* Auth systems

---

## 3. Domain Strategy (How Multiple Domains Work)

### Example Domains

* `1instshopee.com` → Neutral landing / region selector
* `1instshopee.my` → Malaysia
* `1instshopee.co.th` → Thailand
* `1instshopee.co.id` → Indonesia

### DNS Setup

All domains point to **the same backend infrastructure**:

```
1instshopee.com      → 34.xxx.xxx.xxx
1instshopee.my       → 34.xxx.xxx.xxx
1instshopee.co.th    → 34.xxx.xxx.xxx
```

No separate servers required.

---

## 4. Backend Responsibility (Laravel)

### 4.1 Domain → Country Resolution (Core Concept)

Laravel determines the active country **from the incoming domain**.

```php
$request->getHost(); // e.g. 1instshopee.my
```

This value is mapped to a country configuration.

---

### 4.2 Countries as the Central Model

The **countries table is the anchor of the entire system**.

#### `countries` table

| id | code | domain            | currency | default_language |
| -- | ---- | ----------------- | -------- | ---------------- |
| 1  | MY   | 1instshopee.my    | MYR      | en               |
| 2  | TH   | 1instshopee.co.th | THB      | th               |
| 3  | ID   | 1instshopee.co.id | IDR      | id               |

This table defines:

* Which domain belongs to which country
* Default language
* Currency
* Business rules

---

### 4.3 Country Detection Middleware (Laravel)

A global middleware runs on **every request**:

```php
public function handle($request, Closure $next)
{
    $host = $request->getHost();

    $country = Country::where('domain', $host)->firstOrFail();

    app()->instance('country', $country);
    app()->setLocale($country->default_language);

    return $next($request);
}
```

From this point onward:

* `app('country')` is available everywhere
* Controllers, services, queries become **country-aware**

---

## 5. Data Model Strategy (Single Database, Country-Scoped)

### 5.1 Why One Database First

* Easier development
* Easier reporting
* Easier scaling
* Proven pattern used by large marketplaces early on

---

### 5.2 Country-Scoped Tables

Every business-critical table contains `country_id`.

#### Vendors

| id | name         | country_id |
| -- | ------------ | ---------- |
| 10 | Ali Store    | 1 (MY)     |
| 22 | Bangkok Shop | 2 (TH)     |

#### Products

| id  | vendor_id | country_id | price  |
| --- | --------- | ---------- | ------ |
| 100 | 10        | 1          | 120.00 |
| 200 | 22        | 2          | 350.00 |

---

### 5.3 Query Pattern (MANDATORY)

All queries must be filtered by active country:

```php
Product::where('country_id', app('country')->id)->get();
```

This ensures:

* `1instshopee.my` → ONLY Malaysian data
* `1instshopee.co.th` → ONLY Thai data

No exceptions.

---

## 6. Scaling Later: Multiple Databases (Optional)

At scale, the architecture can evolve to:

* `instshopee_my_db`
* `instshopee_th_db`
* `instshopee_id_db`

Laravel supports **runtime database switching**:

```php
config(['database.default' => 'mysql_my']);
```

Still:

* Same codebase
* Same API
* Same logic

Only the **connection** changes.

---

## 7. Frontend Responsibility (Next.js)

### 7.1 Domain-Based Rendering

Next.js does **not** guess country by IP.

Instead:

* The domain already tells us the country
* Backend confirms it
* Frontend consumes country-scoped APIs

---

### 7.2 API Communication

Every API response is already filtered by country.

Frontend simply renders:

* Products
* Prices
* Currency
* Language

No country logic duplication in frontend business rules.

---

### 7.3 Language Handling (i18n)

Language resolution priority:

1. Country default
2. User preference
3. Browser language
4. Manual switch (stored in cookie / profile)

Next.js uses:

* Built-in i18n routing or `next-i18next`
* Locale loaded based on API response

---

## 8. Why `1instshopee.com` Exists (Neutral Landing Page)

The neutral domain is intentional.

### Purpose:

* No assumptions
* Avoid IP misdetection
* Let users choose region
* App download entry point
* Marketing & SEO landing

This mirrors Shopee’s strategy exactly.

---

## 9. Operational Separation Without Code Duplication

Even with one backend:

* Country ops teams can be separated
* Admin dashboards can be filtered by country
* Permissions can be country-scoped
* Support agents see only their region

All enforced via `country_id`.

---

## 10. Mental Model (Critical for All Developers)

> **Domains are identifiers, not containers**

They do not:

* Store data
* Decide products
* Decide language

They only:

* Tell the backend **which country context to load**

---

## 11. Summary

* One backend can serve unlimited country domains
* Domains are resolved via middleware
* `countries` table is the system backbone
* All data is filtered by `country_id`
* Laravel handles logic, Next.js renders results
* This is the same conceptual model used by Shopee, Amazon, Uber (early), and Booking

---

## 12. Next Documentation Sections (To Be Added)

* Database schema (ERD)
* API contract standards
* Country-aware admin permissions
* Payments & logistics per country
* SEO & hreflang strategy
* Deployment & DNS configuration

---

If you want, next I can:

* Turn this into a **README.md**
* Generate **ER diagrams**
* Write **Laravel policies & middleware**
* Or document **Next.js folder structure** for country-aware routing

This is solid system design — you’re doing it right.
