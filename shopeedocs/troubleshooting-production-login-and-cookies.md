# Production Login & Cookie Loop — Troubleshooting

This document explains the **401**, **404**, and **login/seller redirect loop** you see in production when using `https://www.instshopee.com.co`, `https://www.instshopee.com.mx`, and `https://seller.instshopee.com.co` / `https://seller.instshopee.com.mx`. It does **not** edit any local app files; it only describes what is wrong and what to change in **backend (Laravel) .env and server config** and, if needed, **frontend env**.

---

## 1. The errors you see

| Error | URL | Meaning |
|-------|-----|--------|
| **401 Unauthorized** | `GET https://api.instshopee.com/api/v1/auth/me` | Expected when not logged in. The problem is the flow that follows (CSRF + cookie). |
| **404 Not Found** | `GET https://api.instshopee.com/api/sanctum/csrf-cookie` | The backend does **not** serve the CSRF cookie at this path. |
| **Redirect loop** | Login on www → redirect to seller → seller redirects back to login | Session/cookie not valid on seller subdomain or wrong domain/config. |

---

## 2. Fix 1: 404 on `sanctum/csrf-cookie` (path mismatch)

**Cause:**  
The frontend calls:

- `https://api.instshopee.com/**api**/sanctum/csrf-cookie`

because `NEXT_PUBLIC_LARAVEL_API_URL` is set to `https://api.instshopee.com/api`.  
In Laravel, the **Sanctum** route is registered **outside** the `api` prefix (it is a web/stateful route), so it lives at:

- `https://api.instshopee.com/sanctum/csrf-cookie`  
  (no `/api` in the path.)

So the 404 is a **path** issue: `/api/sanctum/csrf-cookie` does not exist on the backend.

**Options (choose one):**

- **Option A — Backend (recommended):** Expose the CSRF cookie under the API prefix so the frontend URL stays as-is.  
  In **Laravel** (instshopee-lara), add a route that delegates to Sanctum, for example in `routes/api.php` (inside the existing `api` prefix), or in a route file that is mounted under `api`:

  ```php
  // e.g. in routes/api.php, before or after the v1 group, so it’s under prefix 'api'
  Route::get('/sanctum/csrf-cookie', [\Laravel\Sanctum\Http\Controllers\CsrfCookieController::class, 'show'])
      ->middleware(['web', 'guest']);
  ```

  **Implemented in instshopee-lara:** `routes/api.php` now defines `GET /sanctum/csrf-cookie` (full path `/api/sanctum/csrf-cookie`) using the `api` middleware; it sets the `XSRF-TOKEN` cookie from the session and returns 204. The frontend can keep calling `https://api.instshopee.com/api/sanctum/csrf-cookie`.

- **Option B — Frontend:** Change the base URL used **only** for the CSRF request so it does **not** include `/api`.  
  So the CSRF cookie is requested from `https://api.instshopee.com/sanctum/csrf-cookie` (e.g. derive from `NEXT_PUBLIC_LARAVEL_API_URL` by stripping the trailing `/api`).  
  Then the backend must serve `/sanctum/csrf-cookie` at the root (no prefix); Laravel’s default Sanctum setup does this.

Until one of these is done, **login will fail** after “Log In” because the CSRF cookie is never set (404).

---

## 3. Fix 2: Session and Sanctum cookie domain (redirect loop)

**Cause:**  
Your production `.env` has:

```env
SESSION_DOMAIN=.instshopee.com
```

But your sites are **not** under `instshopee.com`. They are under:

- `instshopee.com.co`
- `instshopee.com.mx`
- etc.

A cookie with `Domain=.instshopee.com` is **not** sent by the browser to `instshopee.com.co` or `instshopee.com.mx` (different hostnames). So:

- Session and Sanctum cookies set with `SESSION_DOMAIN=.instshopee.com` are **never** sent to `www.instshopee.com.co` or `seller.instshopee.com.co`.
- You log in on `www.instshopee.com.co`, but when you are redirected to `seller.instshopee.com.co`, that site does not receive the session cookie, so the backend sees you as unauthenticated and redirects to login again → **loop**.

**Important:** With a **single** Laravel app serving all countries (e.g. `api.instshopee.com`), you cannot set one `SESSION_DOMAIN` that works for both `.instshopee.com.co` and `.instshopee.com.mx` at the same time, because they are different domains. You can only share cookies between subdomains of the **same** domain (e.g. `www.instshopee.com.co` and `seller.instshopee.com.co`).

**What to do:**

1. **Per-country backend (recommended for correct cookies):**  
   Run one API per country (e.g. `api.instshopee.com.co`, `api.instshopee.com.mx`) and set for each:
   - `SESSION_DOMAIN=.instshopee.com.co` for CO (so `www` and `seller` for CO share the cookie).
   - `SESSION_DOMAIN=.instshopee.com.mx` for MX (same for MX).

2. **Single backend (api.instshopee.com):**  
   You must set the session (and Sanctum) cookie domain **per request** from the request host (e.g. from the `Origin` or `Referer` and map that to a country, then set e.g. `.instshopee.com.co`). Laravel does not support this out of the box; it would require custom middleware or config that sets `config('session.domain')` (and Sanctum’s cookie domain if used) dynamically. This is more involved and easy to get wrong (security and CORS).

So for a **single** backend and multiple country domains, the practical fix is either:
- Use **per-country API subdomains** (e.g. `api.instshopee.com.co`) with the matching `SESSION_DOMAIN`, or  
- Implement **dynamic** session/Sanctum cookie domain based on the requesting frontend origin (advanced).

Until the session cookie is set for the **same** domain (and subdomains) the user is on, the **redirect loop** between www and seller will continue.

---

## 3b. Fix 2b: SameSite=None for single API (session lost on reload / redirect loop)

**Cause:**  
With a **single** API at `https://api.instshopee.com` and frontends at `https://www.instshopee.com.co`, `https://seller.instshopee.com.co`, etc., the browser treats requests from the frontend to the API as **cross-site** (different eTLD+1: `instshopee.com.co` vs `instshopee.com`). With Laravel’s default **SameSite=Lax**, the session cookie is **not** sent on those cross-origin `fetch()` calls. So:

- **Buyer:** After login you are logged in; on **reload**, `GET /api/v1/auth/me` is sent without the session cookie → 401 → UI shows login/signup again.
- **Seller:** Same: no cookie on `GET /api/v1/auth/me` → 401 → redirect to buyer login → **redirect loop**.

**Fix (single API, cross-origin cookies):**  
The API must set the session cookie so the browser sends it on cross-origin requests. That requires:

1. **SESSION_SAME_SITE=none**  
   So the cookie is sent on cross-site requests from www/seller to api.
2. **SESSION_SECURE_COOKIE=true**  
   Browsers require `Secure` when `SameSite=None`.

**Backend config:**  
In **instshopee-lara** `config/session.php`, `secure` is now parsed with `filter_var(..., FILTER_VALIDATE_BOOLEAN)` so that `SESSION_SECURE_COOKIE=false` in `.env` is not treated as true (PHP’s `env('SESSION_SECURE_COOKIE')` returns the string `"false"`, which is truthy). Set in production:

```env
SESSION_SAME_SITE=none
SESSION_SECURE_COOKIE=true
```

After changing `.env`, run `php artisan config:clear` (and restart PHP if needed). In the browser (DevTools → Application → Cookies for `https://api.instshopee.com`), after login the session cookie should show **SameSite=None** and **Secure** and be sent on the next `GET /api/v1/auth/me` from www or seller.

**SESSION_DOMAIN:** For a single API at `api.instshopee.com`, you can leave `SESSION_DOMAIN` unset (cookie defaults to the API host) or set `SESSION_DOMAIN=.instshopee.com`. The cookie is stored for the API; the critical part is that it is **sent** on cross-origin requests, which is what SameSite=None fixes.

---

## 4. Fix 3: `SANCTUM_STATEFUL_DOMAINS` must include `www`

**Cause:**  
You use:

- `https://www.instshopee.com.co` (with **www**)
- `https://www.instshopee.com.mx`

But in `.env` you have:

```env
SANCTUM_STATEFUL_DOMAINS=instshopee.co.id,seller.instshopee.co.id,...,instshopee.com.co,seller.instshopee.com.co,...
```

So you have `instshopee.com.co` and `seller.instshopee.com.co`, but **not** `www.instshopee.com.co` (and same for `.mx`).  
Sanctum only treats origins listed in `SANCTUM_STATEFUL_DOMAINS` as “stateful” (cookie-based). If the login page is on `www.instshopee.com.co`, that origin must be in the list; otherwise Sanctum may not accept or set cookies for it correctly.

Also set **SESSION_SECURE_COOKIE=true** in production (HTTPS) so the browser sends the session cookie on secure requests.

**What to do:**  
Add **www** for every country you use:

```env
SANCTUM_STATEFUL_DOMAINS=instshopee.co.id,www.instshopee.co.id,seller.instshopee.co.id,...,instshopee.com.co,www.instshopee.com.co,seller.instshopee.com.co,instshopee.com.mx,www.instshopee.com.mx,seller.instshopee.com.mx,...,api.instshopee.com
```

(Keep your full list; the important part is that **www** variants are present for CO, MX, and any other country where you use `www`.)

---

## 5. Fix 4: CORS origins for `www`

**Cause:**  
Your `CORS_ALLOWED_ORIGINS` lists:

- `https://instshopee.com.co`, `https://seller.instshopee.com.co`
- but not `https://www.instshopee.com.co` (and same for MX).

If at some point you set `CORS_ALLOW_ALL=false`, requests from `https://www.instshopee.com.co` could be rejected by CORS.

**What to do:**  
Add the **www** origins for every country:

```env
CORS_ALLOWED_ORIGINS=https://instshopee.co.id,https://www.instshopee.co.id,https://seller.instshopee.co.id,...,https://instshopee.com.co,https://www.instshopee.com.co,https://seller.instshopee.com.co,https://instshopee.com.mx,https://www.instshopee.com.mx,https://seller.instshopee.com.mx,...
```

You currently have `CORS_ALLOW_ALL=true`, so CORS may still allow all origins, but having **www** in the list is the correct production setup and avoids issues when you later restrict CORS.

---

## 6. Summary checklist (backend / production)

| # | Issue | Where to fix | What to do |
|---|--------|--------------|------------|
| 1 | **404** on `/api/sanctum/csrf-cookie` | Laravel backend (or frontend base URL for CSRF) | Either add a route under `api` that serves the Sanctum CSRF cookie, or have the frontend call `https://api.instshopee.com/sanctum/csrf-cookie` (no `api`). |
| 2 | **Redirect loop** / **session lost on reload** (single API) | Backend `.env` | Set `SESSION_SAME_SITE=none` and `SESSION_SECURE_COOKIE=true` so the session cookie is sent on cross-origin requests from www/seller to api. Clear config cache after change. |
| 2b | **Redirect loop** (per-country API / cookie domain) | Backend `.env` | If using per-country API: set `SESSION_DOMAIN=.instshopee.com.co` (or `.mx`) for that API. Do not use `SESSION_DOMAIN=.instshopee.com` for frontends on `instshopee.com.co` / `instshopee.com.mx`. |
| 3 | Cookies not accepted for **www** | Backend `.env` | Add `www.instshopee.com.co`, `www.instshopee.com.mx`, and other **www** variants to `SANCTUM_STATEFUL_DOMAINS`. |
| 4 | CORS for **www** | Backend `.env` | Add `https://www.instshopee.com.co`, `https://www.instshopee.com.mx`, etc. to `CORS_ALLOWED_ORIGINS`. |

---

## 7. Why it works locally

Locally you typically use:

- One host (e.g. `instshopee.test`, `seller.instshopee.test`) and often a single session domain, or no strict domain.
- Same site for login and seller in the same env, so cookies are shared.
- No `www` vs non-`www` mismatch.

So you don’t hit the path mismatch (`/api/sanctum/csrf-cookie` vs `/sanctum/csrf-cookie`), the wrong `SESSION_DOMAIN`, or the missing **www** in Sanctum/CORS. Applying the fixes above in production (and optionally adjusting the frontend CSRF URL) should resolve the 404, 401 flow, and the login/seller redirect loop.
