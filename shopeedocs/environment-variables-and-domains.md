# Environment Variables & Custom Domains

This document defines the **complete environment variable setup** for production across the buyer app, seller app, and backend. Use it when configuring Vercel, your Laravel server, or local `.env` files.

---

## 1. Domain list (canonical)

Reference: [`shopeedocs/domains/lists.md`](../domains/lists.md).

| Domain | Purpose |
|--------|--------|
| **Buyer (marketplace)** | |
| `https://instshopee.co.id` | Indonesia |
| `https://instshopee.tw` | Taiwan |
| `https://instshopee.vn` | Vietnam |
| `https://instshopee.co.th` | Thailand |
| `https://instshopee.ph` | Philippines |
| `https://instshopee.com.my` | Malaysia |
| `https://instshopee.sg` | Singapore |
| `https://instshopee.com.br` | Brazil |
| `https://instshopee.com.mx` | Mexico |
| `https://instshopee.com.co` | Colombia |
| `https://instshopee.cl` | Chile |
| `https://instshopee.com.ar` | Argentina |
| **Seller (portal)** | |
| `https://seller.instshopee.co.id` | Seller Centre (ID) |
| `https://seller.instshopee.tw` | Seller Centre (TW) |
| … | Same pattern: `seller.{buyer-domain}` |
| `https://seller.instshopee.com.co` | Seller Centre (CO) |
| `https://seller.instshopee.com.mx` | Seller Centre (MX) |
| **Backend (API)** | |
| `https://api.instshopee.com` | Single API for all countries |

---

## 2. Buyer app (instshopee-main) — Vercel / Production

One Vercel project can serve **all buyer domains** (instshopee.com.my, instshopee.com.co, etc.). Use a **single** set of env vars; the app can derive the current domain at runtime for the “Seller Centre” link.

### 2.1 Recommended production block (copy-paste)

```env
# --- Buyer frontend (instshopee-main) — Production ---
NODE_ENV=production

# Primary buyer domain (used for sitemap/canonical when not using multi-domain routing).
# For single-deployment multi-domain, this can be any one of your buyer domains.
NEXT_PUBLIC_SITE_URL=https://instshopee.com.my

# Backend API (single API for all countries). Add /api if Laravel routes are under /api (e.g. /api/v1/...).
NEXT_PUBLIC_LARAVEL_API_URL=https://api.instshopee.com/api

# Seller Centre: use same-country subdomain. For multi-domain on Vercel, the app
# should derive this at runtime from window.location.hostname (e.g. seller.instshopee.com.co).
# This value is fallback when runtime host is not available (e.g. SSR).
NEXT_PUBLIC_SELLER_CENTRE_URL=https://seller.instshopee.com.my

# Domain → country code map (buyer + seller hosts). Used for routing/analytics.
# All buyer and seller domains from the domain list above.
NEXT_PUBLIC_DOMAIN_COUNTRY_MAP={"instshopee.co.id":"ID","seller.instshopee.co.id":"ID","instshopee.tw":"TW","seller.instshopee.tw":"TW","instshopee.vn":"VN","seller.instshopee.vn":"VN","instshopee.co.th":"TH","seller.instshopee.co.th":"TH","instshopee.ph":"PH","seller.instshopee.ph":"PH","instshopee.com.my":"MY","seller.instshopee.com.my":"MY","instshopee.sg":"SG","seller.instshopee.sg":"SG","instshopee.com.br":"BR","seller.instshopee.com.br":"BR","instshopee.com.mx":"MX","seller.instshopee.com.mx":"MX","instshopee.com.co":"CO","seller.instshopee.com.co":"CO","instshopee.cl":"CL","seller.instshopee.cl":"CL","instshopee.com.ar":"AR","seller.instshopee.com.ar":"AR"}

# Optional: Google Maps (e.g. address selection)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 2.2 Vercel notes (buyer)

- **Environment Variables**: Project → Settings → Environment Variables. Add each line above; set **Production** (and Preview if desired).
- **Domains**: Settings → Domains → Add each buyer domain (e.g. `instshopee.com.my`, `instshopee.com.co`, `instshopee.com.mx`, …). One project, many domains.
- **Seller Centre link**: Implement runtime logic so the link is `https://seller.${window.location.hostname}` (e.g. on instshopee.com.co → seller.instshopee.com.co). Use `NEXT_PUBLIC_SELLER_CENTRE_URL` only as fallback.

---

## 3. Seller app (sellerportal) — Vercel / Production

One Vercel project serves all **seller** subdomains (seller.instshopee.com.my, seller.instshopee.com.co, etc.).

### 3.1 Recommended production block (copy-paste)

```env
# --- Seller frontend (sellerportal) — Production ---
NODE_ENV=production

# Seller domain for this deployment (fallback when not using runtime host).
# For single-deployment multi-domain, can be any one of your seller domains.
NEXT_PUBLIC_SITE_URL=https://seller.instshopee.com.my

# Backend API (same as buyer). Add /api if your Laravel API is mounted under /api.
NEXT_PUBLIC_API_URL=https://api.instshopee.com

# Buyer marketplace URL (for redirects / links back to shop).
# Fallback when not derived from current host (e.g. buyer.instshopee.com.co).
NEXT_PUBLIC_BUYER_URL=https://instshopee.com.my

# Same domain–country map as buyer app (seller + buyer hosts).
NEXT_PUBLIC_DOMAIN_COUNTRY_MAP={"instshopee.co.id":"ID","seller.instshopee.co.id":"ID","instshopee.tw":"TW","seller.instshopee.tw":"TW","instshopee.vn":"VN","seller.instshopee.vn":"VN","instshopee.co.th":"TH","seller.instshopee.co.th":"TH","instshopee.ph":"PH","seller.instshopee.ph":"PH","instshopee.com.my":"MY","seller.instshopee.com.my":"MY","instshopee.sg":"SG","seller.instshopee.sg":"SG","instshopee.com.br":"BR","seller.instshopee.com.br":"BR","instshopee.com.mx":"MX","seller.instshopee.com.mx":"MX","instshopee.com.co":"CO","seller.instshopee.com.co":"CO","instshopee.cl":"CL","seller.instshopee.cl":"CL","instshopee.com.ar":"AR","seller.instshopee.com.ar":"AR"}

# Optional: port for local dev
# PORT=3001
```

### 3.2 Vercel notes (seller)

- Add **seller** domains in Settings → Domains: `seller.instshopee.com.my`, `seller.instshopee.com.co`, `seller.instshopee.com.mx`, etc.
- In DNS, for each root (e.g. `instshopee.com.co`), add a CNAME: name `seller` → Vercel target (e.g. `cname.vercel-dns.com`).

---

## 4. Backend (instshopee-lara) — Production

Single API at `https://api.instshopee.com`. Must allow CORS for all buyer and seller origins and use a shared cookie domain so session works across buyer/seller.

### 4.1 Key production variables (copy-paste)

```env
# --- Laravel API (instshopee-lara) — Production ---
APP_NAME="InstShopee API"
APP_ENV=production
APP_KEY=base64:your-app-key-here
APP_DEBUG=false
APP_URL=https://api.instshopee.com

# Session & Sanctum: shared across buyer and seller subdomains.
# Use the root domain so cookies work for api, buyer, and seller.
SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_DOMAIN=.instshopee.com
SESSION_SECURE_COOKIE=true
SESSION_SAME_SITE=lax

# Sanctum: list all stateful (cookie) origins (buyer + seller, no protocol).
SANCTUM_STATEFUL_DOMAINS=instshopee.co.id,seller.instshopee.co.id,instshopee.tw,seller.instshopee.tw,instshopee.vn,seller.instshopee.vn,instshopee.co.th,seller.instshopee.co.th,instshopee.ph,seller.instshopee.ph,instshopee.com.my,seller.instshopee.com.my,instshopee.sg,seller.instshopee.sg,instshopee.com.br,seller.instshopee.com.br,instshopee.com.mx,seller.instshopee.com.mx,instshopee.com.co,seller.instshopee.com.co,instshopee.cl,seller.instshopee.cl,instshopee.com.ar,seller.instshopee.com.ar,api.instshopee.com

# CORS: allow all buyer and seller origins (comma-separated, full URL with https).
CORS_ALLOWED_ORIGINS=https://instshopee.co.id,https://seller.instshopee.co.id,https://instshopee.tw,https://seller.instshopee.tw,https://instshopee.vn,https://seller.instshopee.vn,https://instshopee.co.th,https://seller.instshopee.co.th,https://instshopee.ph,https://seller.instshopee.ph,https://instshopee.com.my,https://seller.instshopee.com.my,https://instshopee.sg,https://seller.instshopee.sg,https://instshopee.com.br,https://seller.instshopee.com.br,https://instshopee.com.mx,https://seller.instshopee.com.mx,https://instshopee.com.co,https://seller.instshopee.com.co,https://instshopee.cl,https://seller.instshopee.cl,https://instshopee.com.ar,https://seller.instshopee.com.ar

# Optional: regex if you need to allow dynamic subdomains
# CORS_ALLOWED_ORIGIN_PATTERNS=^https:\/\/([a-z0-9-]+\.)?instshopee\.(com\.my|co\.id|com\.co|com\.mx|com\.ar|com\.br|co\.th|ph|sg|vn|tw|cl)$
```

**Note on `SESSION_DOMAIN`:**  
If you use **multiple root domains** (e.g. `instshopee.com.my`, `instshopee.com.co`), a single cookie domain cannot cover all. In that case either:

- Use **per-country API subdomains** (e.g. `api.instshopee.com.my`, `api.instshopee.com.co`) with `SESSION_DOMAIN=.instshopee.com.my` for MY, etc., or  
- Keep one API and **avoid cross-domain cookies**: use token-based auth or same-site cookies per domain and accept no shared session across different TLDs.

The block above assumes a **single API** at `api.instshopee.com`; if your API is under a country-specific host (e.g. `api.instshopee.com.my`), set `SESSION_DOMAIN` and `SANCTUM_STATEFUL_DOMAINS` for that host and its buyer/seller pair.

---

## 5. Quick reference

| App | Key URL vars | Backend |
|-----|----------------|--------|
| **instshopee-main** | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_LARAVEL_API_URL`, `NEXT_PUBLIC_SELLER_CENTRE_URL`, `NEXT_PUBLIC_DOMAIN_COUNTRY_MAP` | `https://api.instshopee.com` |
| **sellerportal** | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_BUYER_URL`, `NEXT_PUBLIC_DOMAIN_COUNTRY_MAP` | Same |
| **instshopee-lara** | `APP_URL`, `SESSION_DOMAIN`, `SANCTUM_STATEFUL_DOMAINS`, `CORS_ALLOWED_ORIGINS` | — |

---

## 6. Domain list source

The canonical list of buyer and seller domains is maintained in:

- ** [`shopeedocs/domains/lists.md`](../domains/lists.md)**

When adding a new country or domain, update that file, then add the new domain to:

1. Vercel (buyer and/or seller project)  
2. `NEXT_PUBLIC_DOMAIN_COUNTRY_MAP` (both frontends)  
3. Backend `SANCTUM_STATEFUL_DOMAINS` and `CORS_ALLOWED_ORIGINS`
