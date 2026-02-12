# Vercel Deployment & Custom Domains Guide

**Project:** InstShopee (multi-country marketplace)  
**Last updated:** 2025  
**Audience:** DevOps, frontend deployers

---

## Table of contents

1. [Overview](#1-overview)
2. [Vercel environment variables](#2-vercel-environment-variables)
3. [Custom domains – Buyer app (instshopee-main)](#3-custom-domains--buyer-app-instshopee-main)
4. [Seller portal deployment and domains](#4-seller-portal-deployment-and-domains)
5. [Seller Centre link – parent-domain awareness](#5-seller-centre-link--parent-domain-awareness)
6. [Backend API and CORS](#6-backend-api-and-cors)
7. [DNS checklist](#7-dns-checklist)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Overview

| Component        | Hosting   | Example URLs |
|-----------------|-----------|--------------|
| **Buyer app**   | Vercel    | `https://instshopee.com.co`, `https://instshopee.com.mx`, … |
| **Seller portal** | Vercel | `https://seller.instshopee.com.co`, `https://seller.instshopee.com.mx`, … |
| **API**         | Your server | `https://api.instshopee.com` |

- One Vercel **project** per app (one for buyer, one for seller).
- Each project can have **multiple custom domains**; the same build serves all of them.
- The buyer app derives the correct seller URL from the **current domain** (e.g. `instshopee.com.co` → `seller.instshopee.com.co`).

---

## 2. Vercel environment variables

### Where to edit

1. Open [vercel.com](https://vercel.com) → your team/account.
2. Select the project (e.g. **instshopee-main** or **sellerportal**).
3. Go to **Settings** → **Environment Variables**.

### When they apply

- Changes apply to **new deployments**.
- To apply to the current production deployment: **Deployments** → … on latest → **Redeploy**.

### Recommended variables

**Buyer app (instshopee-main)**

| Name | Example | Notes |
|------|---------|--------|
| `NEXT_PUBLIC_LARAVEL_API_URL` | `https://api.instshopee.com` | No trailing slash. Used for API calls. |
| `NEXT_PUBLIC_SITE_URL` | `https://instshopee.com` | Optional; can also derive from current host at runtime. |

**Seller portal (sellerportal)**

| Name | Example | Notes |
|------|---------|--------|
| `NEXT_PUBLIC_LARAVEL_API_URL` | `https://api.instshopee.com` | Same API as buyer app. |

**Environment scope:** set for **Production** (and optionally Preview/Development).

---

## 3. Custom domains – Buyer app (instshopee-main)

### Steps

1. In Vercel: select the **instshopee-main** project.
2. Go to **Settings** → **Domains**.
3. Click **Add** and enter each domain, for example:
   - `instshopee.com.co`
   - `instshopee.com.mx`
   - `instshopee.co.id`
   - `instshopee.com.my`
   - (add all country domains you use)
4. For each domain, Vercel shows **DNS instructions**:
   - **A** record → `76.76.21.21`, or  
   - **CNAME** → `cname.vercel-dns.com` (if applicable).
5. In your **DNS provider** (where you manage `com.co`, `com.mx`, etc.), create the corresponding A or CNAME records for each host.
6. Wait for DNS propagation; Vercel will issue SSL and show the domain as **Valid**.

All these domains point at the **same** Vercel project and the **same** build.

---

## 4. Seller portal deployment and domains

### Deploy sellerportal

1. In Vercel, create a **new project** (or use an existing one) and connect the **sellerportal** repository.
2. Configure build settings if needed (e.g. framework: Next.js, root: `./`).
3. Set environment variables (see [Section 2](#2-vercel-environment-variables)).
4. Deploy from the main branch (or your preferred branch).

### Add seller subdomains

1. In the **sellerportal** project: **Settings** → **Domains**.
2. Add each seller domain, for example:
   - `seller.instshopee.com.co`
   - `seller.instshopee.com.mx`
   - `seller.instshopee.com.my`
   - (one per country root domain)
3. In DNS, for each **root** (e.g. `instshopee.com.co`), add:
   - **Name:** `seller` (so the full host is `seller.instshopee.com.co`).
   - **Type:** CNAME (or A if Vercel instructs).
   - **Value:** Vercel’s target (e.g. `cname.vercel-dns.com` or the project’s Vercel hostname).

Result: buyer at `https://instshopee.com.co` and seller at `https://seller.instshopee.com.co` both work, with the same country “family.”

---

## 5. Seller Centre link – parent-domain awareness

When a user is on `https://instshopee.com.co` and clicks **Seller Centre**, they should go to `https://seller.instshopee.com.co` (same country), not a single fixed URL.

### Recommended: derive from current host

In the **buyer app** (instshopee-main), build the seller URL at **runtime** from the current host:

- If host is `instshopee.com.co` → seller URL = `https://seller.instshopee.com.co`
- If host is `instshopee.com.mx` → seller URL = `https://seller.instshopee.com.mx`

**Formula:** `https://seller.${window.location.hostname}`

Use this for the “Seller Centre” link in the top navbar (or left section). Do **not** rely on a single `NEXT_PUBLIC_SELLER_CENTRE_URL` for all domains unless you explicitly set it per domain; deriving from the current host keeps the link correct for every country domain.

---

## 6. Backend API and CORS

### API base URL

- Production backend: **https://api.instshopee.com**
- Frontends call e.g. `https://api.instshopee.com/api/v1/...` (or your actual path prefix). Set `NEXT_PUBLIC_LARAVEL_API_URL=https://api.instshopee.com` (no trailing slash) in both buyer and seller Vercel projects.

### CORS

The Laravel backend must allow origins for **all** frontend domains, for example:

- `https://instshopee.com.co`
- `https://instshopee.com.mx`
- `https://instshopee.com.my`
- …
- `https://seller.instshopee.com.co`
- `https://seller.instshopee.com.mx`
- …

Configure CORS in Laravel (e.g. `config/cors.php`) so that these origins are allowed for the API routes. Use a pattern or list that includes every buyer and seller domain you use.

---

## 7. DNS checklist

- [ ] Buyer domains: A or CNAME for each (e.g. `instshopee.com.co`, `instshopee.com.mx`, …) pointing to Vercel.
- [ ] Seller subdomains: CNAME (or A) for `seller` under each root (e.g. `seller.instshopee.com.co`).
- [ ] API: A or CNAME for `api.instshopee.com` pointing to your backend server.
- [ ] SSL: Vercel handles SSL for frontends; ensure your API server has a valid certificate for `api.instshopee.com`.

---

## 8. Troubleshooting

| Issue | What to check |
|-------|----------------|
| Env vars not updating | Redeploy after changing variables; confirm environment (Production vs Preview). |
| Domain not working | DNS propagation (can take up to 48h); correct A/CNAME at DNS provider; Vercel domain status. |
| “Seller Centre” wrong country | Ensure link uses current host (e.g. `https://seller.${window.location.hostname}`), not a hardcoded URL. |
| API 401 / CORS errors | Backend CORS allows the exact origin (e.g. `https://instshopee.com.co`); cookies/credentials if using session auth. |
| Mixed content | Use `https://api.instshopee.com` everywhere in production; no `http://` for API. |

---

*End of document*
