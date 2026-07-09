# Codex Task: Fix Seller Portal Password Buttons, Withdrawal Record Responsiveness, Reset Password Flow, My Account Spacing, and Enforce Store Closure/Vacation Policies

We are working on a connected Shopee ecommerce system with one Laravel backend and two frontend portals.

## Projects

### Backend / Laravel API / Filament Admin

```bash
/Applications/XAMPP/xamppfiles/htdocs/instshopee-lara
```

This backend powers both the buyer/customer frontend and seller portal.

### Buyer / Customer Frontend

```bash
/Applications/XAMPP/xamppfiles/htdocs/instshopee-main
```

This is the buyers portal and main site.

### Seller / Merchant Portal

```bash
/Applications/XAMPP/xamppfiles/htdocs/sellerportal
```

This is the seller/merchant/vendor portal.

## Database

Database name:

```bash
instshopee-lara
```

Use XAMPP MySQL:

```bash
/Applications/XAMPP/bin/mysql -u root -e "SHOW TABLES FROM \`instshopee-lara\`;"
```

---

# Main Goal

Fix the remaining seller portal and backend issues, improve responsive UI, simplify verification-code screens where required, and add/enforce Shopee seller platform policies around store closure, vacation mode, pending orders, withdrawals, and suspended stores.

Do not only add policy text. Check whether the business logic already exists and enforce the policies in the backend, seller portal, and Filament admin panel where needed.

---

# 1. Fix “Modify Login Password” Submit Button

Affected area:

```bash
/Applications/XAMPP/xamppfiles/htdocs/sellerportal
```

Issue:

The **Modify Login Password** submit button reportedly does nothing or fails to submit.

## Required fix

Find the page/component responsible for modifying login password. Inspect:

* frontend form component
* submit handler
* validation
* API call
* backend route/controller
* auth middleware
* password update logic
* error/success response handling

## Expected behavior

When seller changes login password:

1. Seller enters old password if required.
2. Seller enters new password.
3. Seller confirms new password.
4. Seller enters verification/CAPTCHA code if the form uses one.
5. Submit button shows loading state.
6. Backend validates request.
7. Password updates successfully.
8. Seller sees success message.
9. Form resets safely.
10. If there is an error, seller sees a clear message.

## Important

* Prevent double submit.
* Do not silently fail.
* Show validation errors clearly.
* Button should not stay stuck in loading.
* Keep password fields readable and mobile friendly.

---

# 2. Improve `/portal/withdrawals-record` Responsive UI

Affected page:

```text
/portal/withdrawals-record
```

Issue:

The withdrawals record page is not responsive on phones. Content extends beyond the phone edges and shoots through the screen.

## Required fix

Find the component/page responsible for `/portal/withdrawals-record`.

Inspect:

* table layout
* cards
* long transaction IDs
* amount/status columns
* date columns
* fixed-width containers
* overflow styling
* mobile breakpoints

## Required mobile behavior

The page must fit inside the phone screen.

Recommended approach:

### Desktop

* Table layout is acceptable.
* Columns can show full details.

### Mobile

Use cards instead of forcing a full table.

Each withdrawal record card should show:

* Amount
* Method
* Status badge
* Request date
* Updated/paid date if available
* Wallet address / bank info summarized
* Reference ID truncated with copy button if needed
* Notes/rejection reason if available

## Required UI improvements

* No horizontal overflow.
* Long text wraps or truncates.
* Transaction/reference IDs should not break layout.
* Add empty state if no records exist.
* Add loading state.
* Status badges should be clear:

  * Pending
  * Approved
  * Rejected
  * Paid
  * Cancelled

---

# 3. Fix Reset Password Responsiveness and Simplify Code Flow

Affected area:

```bash
/Applications/XAMPP/xamppfiles/htdocs/sellerportal
```

Also check backend if reset password APIs are shared:

```bash
/Applications/XAMPP/xamppfiles/htdocs/instshopee-lara
```

Issue:

The reset-password screens are not responsive on mobile, and the current flow sends an email code. We need to simplify the flow so the user sees a generated code on the screen and enters it to continue.

## Important security note for implementation

An on-screen random code is only a CAPTCHA-style challenge. It does **not** prove email ownership.

Do not accidentally create a serious vulnerability where anyone can reset another person’s password by typing their email and copying a displayed code.

Implement this safely according to the current architecture:

* If this is for logged-in password change, the displayed code is acceptable as confirmation friction.
* If this is for “forgot password,” keep whatever account-ownership protection exists, or explicitly document that the displayed code is only a CAPTCHA-style check.
* Do not bypass secure reset token/session protections if they already exist.

## Required flow copy

When the user enters an email, the next screen should show wording like:

```text
Your email smoggrafton@gmail.com has been captured.
Enter the verification code below to continue.
```

Replace:

```text
Resend
```

with:

```text
Regenerate
```

## Required behavior

1. User enters email.
2. Backend/frontend validates email format.
3. System generates a random verification code.
4. Code is displayed on the screen.
5. User enters the displayed code.
6. User can click **Regenerate** to get a new code.
7. Wrong code blocks progress.
8. Correct code allows the next reset step.
9. All reset screens are responsive on mobile.
10. No screen should overflow horizontally.

## Required UI

* Clean mobile card layout.
* Dark readable input text.
* Clear labels.
* Visible buttons.
* No huge fonts.
* No clipped forms.
* No horizontal scrolling.
* Use polished wording:

  * “Verification Code”
  * “Enter the code shown above”
  * “Regenerate Code”
  * “Continue”
  * “Code is incorrect”

---

# 4. Reduce Spacing on `/portal/my-account`

Affected page:

```text
/portal/my-account
```

Issue:

The grouped dashboard items have too much vertical spacing between groups. The page feels too stretched vertically on mobile.

## Required fix

Reduce gaps between grouped quick-access items.

The layout should feel more like a compact tabular icon grid, similar to a mobile ecommerce account dashboard.

## Required behavior

* Reduce margin and padding between groups.
* Keep items readable and tappable.
* Maintain at least 44px tap targets.
* Use clean rows/columns.
* Avoid overly tall cards.
* Icons should align neatly.
* Labels should not wrap awkwardly.
* No horizontal overflow.

## Suggested mobile layout

Use compact icon grids:

```text
4 icons per row
```

or:

```text
2 icons per row
```

depending on what looks best, but avoid large vertical cards that make the page too long.

---

# 5. Add Shopee Seller Policy Under Platform Policies

We need to place the following policy content under Platform Policies and also enforce it in the system.

Affected frontend policy pages:

```bash
/Applications/XAMPP/xamppfiles/htdocs/instshopee-main
```

Also check seller portal policy pages if they exist:

```bash
/Applications/XAMPP/xamppfiles/htdocs/sellerportal
```

Backend/admin:

```bash
/Applications/XAMPP/xamppfiles/htdocs/instshopee-lara
```

## Required action

1. Check if platform policy pages already exist.
2. Check if there is already a policies table, CMS/page system, or Filament policy manager.
3. Add this policy under Platform Policies.
4. Update buyer/main frontend policy pages to include this policy.
5. Add seller portal access/link to the policy if relevant.
6. Make sure the policy is not only written but also enforced in backend logic.

---

# Shopee Seller Policy – Store Closure & Vacation Mode

## 1. Store Closure Eligibility

Sellers who wish to permanently close their shop must first fulfill all outstanding obligations to buyers and the platform.

A shop is eligible for closure only if:

* There are no pending orders awaiting processing or shipment.
* All completed orders have been fulfilled in accordance with Shopee's Seller Terms.
* There are no ongoing disputes, return/refund requests, chargebacks, or claims.
* All seller obligations and account-related responsibilities have been completed.
* The seller account is in good standing and complies with Shopee's policies.

Shopee reserves the right to decline or postpone a store closure request if these conditions are not met.

## 2. Pending Orders

Pending orders remain the seller's responsibility regardless of whether the seller intends to continue operating the shop.

Sellers must:

* Process all paid orders within the required processing period.
* Ship orders before the shipping deadline.
* Maintain communication with buyers regarding order fulfillment.
* Comply with all marketplace fulfillment standards.

Failure to process pending orders may result in:

* Seller penalty points.
* Account restrictions or suspension.
* Delayed release of seller funds.
* Rejection of store closure requests.

## 3. Available Balance & Withdrawals

Available balances may be subject to review if seller obligations remain outstanding.

Shopee may temporarily delay withdrawals when:

* There are overdue unprocessed orders.
* The account is under investigation.
* Seller obligations have not been fulfilled.
* Platform policies require a temporary fund hold for buyer protection.

Funds become eligible for withdrawal once the account meets all payout requirements.

## 4. Vacation Mode — Temporary Store Pause

If sellers are temporarily unable to operate their shop, they are encouraged to enable Vacation Mode instead of closing their store.

Vacation Mode allows sellers to:

* Temporarily stop receiving new orders.
* Keep existing shop information.
* Resume operations at a later time.

Before enabling Vacation Mode, sellers should:

* Complete all existing orders.
* Resolve pending customer inquiries.
* Ensure there are no overdue shipments.

Vacation Mode does not remove a seller's responsibility to fulfill existing orders.

## 5. Store Suspension

If a shop has been suspended, sellers remain responsible for all outstanding orders placed before the suspension.

Depending on the reason for suspension, Shopee may require sellers to:

* Process pending orders.
* Resolve buyer complaints.
* Complete ongoing transactions.
* Meet platform compliance requirements before any remaining funds are released.

## 6. Permanent Store Closure

Once all obligations have been completed, sellers may request permanent store closure.

Before approval, Shopee will verify that:

* No active orders remain.
* No pending disputes exist.
* No seller obligations are outstanding.
* The account is eligible for closure under applicable marketplace policies.

Store closure is irreversible in most cases. Sellers should ensure they have withdrawn eligible funds and downloaded any required business records before submitting a closure request.

---

# 6. Enforce Store Closure and Vacation Mode Policies

Do not stop at adding text. Implement or verify enforcement.

## Store Closure Enforcement

A seller should not be able to request or complete store closure if:

* they have pending orders
* they have paid orders awaiting processing
* they have orders awaiting shipment
* they have frozen orders
* they have open disputes/refunds/claims
* their account is suspended or under investigation
* they have unresolved obligations
* withdrawal/fund holds are active

## Required backend behavior

Check if store closure request logic exists.

If missing, add a safe workflow:

1. Seller submits store closure request.
2. Backend checks eligibility.
3. If eligible, request is submitted or store is closed depending on current design.
4. If not eligible, return clear reasons.
5. Admin can review closure requests in Filament.
6. Store closure action is logged.

## Seller-facing error examples

```text
Your store cannot be closed yet because you still have pending orders.
```

```text
Please resolve active disputes before requesting store closure.
```

```text
Your available balance is temporarily under review due to outstanding seller obligations.
```

## Filament admin requirements

Admin should be able to:

* View store closure requests.
* See seller/store details.
* See eligibility status.
* See blocking reasons.
* Approve or reject closure request.
* Add admin notes.
* View pending/frozen/disputed order counts.

---

# 7. Vacation Mode Enforcement

Check if Vacation Mode exists.

If missing, add it carefully.

## Required behavior

Vacation Mode should:

* Stop the store from receiving new orders.
* Keep the shop profile visible or hidden depending on existing marketplace design.
* Not cancel or remove existing orders.
* Not remove seller responsibility for pending orders.
* Show a clear status on seller portal.

## Before enabling Vacation Mode

Seller should be warned if they still have active obligations:

* pending orders
* overdue shipments
* active disputes
* unanswered support/order issues

Depending on existing business rules, either:

* allow Vacation Mode but warn that existing orders must still be handled, or
* block Vacation Mode until critical obligations are resolved.

Choose the safest implementation based on current architecture and document it.

## Frontend UI

Add seller portal UI if not existing:

* Vacation Mode toggle/request button.
* Explanation text.
* Warning card for existing obligations.
* Status badge:

  * Vacation Mode Active
  * Store Open
  * Store Closure Pending

## Backend/API

Add or verify:

* store vacation mode field/status
* API to toggle/request vacation mode
* order placement check that blocks new orders from vacation stores
* admin visibility in Filament

---

# 8. Withdrawal Holds Based on Seller Obligations

Policy says withdrawals may be delayed if seller obligations remain outstanding.

## Required behavior

Before seller withdraws funds, backend should check:

* overdue unprocessed orders
* frozen orders
* active disputes/refunds/claims
* account investigation/suspension
* fund hold flags

If obligations exist:

* block withdrawal or mark withdrawal as pending review depending on current design
* show clear reason to seller
* allow admin to review in Filament

## Seller-facing wording

```text
Your withdrawal request is under review because your account has outstanding seller obligations.
```

or:

```text
Please complete pending orders before withdrawing available funds.
```

Do not silently fail.

---

# 9. Update Policy Pages in Buyer/Main Frontend

Affected project:

```bash
/Applications/XAMPP/xamppfiles/htdocs/instshopee-main
```

Update the relevant policy pages to include the new store closure and vacation mode policy.

Check routes like:

* `/terms-of-service`
* `/privacy-policy`
* `/platform-policies`
* `/seller-policy`
* any existing policy page route

## Required behavior

* Policy page should look professional.
* Use Shopee branding.
* Add table of contents if the policy page is long.
* Mobile-friendly layout.
* No raw developer text.
* No placeholder/provisional wording.
* Add links from signup/footer/account policy areas if current design supports it.

---

# 10. Filament Admin Updates

Affected backend:

```bash
/Applications/XAMPP/xamppfiles/htdocs/instshopee-lara
```

Check and update Filament for:

## Platform Policies

* Manage policy content if CMS exists.
* Add Store Closure & Vacation Mode under Platform Policies.
* Allow status active/inactive if existing policy manager supports it.

## Store Closure Requests

If implementing closure workflow, add/admin support:

* list closure requests
* filter by pending/approved/rejected
* view blocking reasons
* approve/reject
* admin notes

## Vacation Mode

Admin should see:

* stores in vacation mode
* stores requesting closure
* stores with blocked withdrawal
* stores with unresolved obligations

## Withdrawals

Add clear admin visibility for withdrawal holds caused by:

* pending orders
* frozen orders
* disputes
* account review

---

# 11. UI/UX Rules

Use polished customer-facing wording.

Avoid:

* “u get”
* “backend issue”
* “screenshot file”
* “it shoots through”
* “random code hack”
* internal variable names
* raw developer notes

Use:

* “Verification Code”
* “Regenerate Code”
* “Store Closure”
* “Vacation Mode”
* “Pending Obligations”
* “Withdrawal Under Review”
* “Platform Policies”
* “Modify Login Password”
* “Withdrawal Records”

---

# 12. Testing Checklist

## Password Modification

* Modify login password button submits.
* Loading state works.
* Success message appears.
* Wrong input shows validation errors.
* Password actually changes.
* No silent failure.

## Withdrawal Records

* `/portal/withdrawals-record` fits on 360px, 390px, and 414px screens.
* No horizontal overflow.
* Long IDs do not break layout.
* Status badges show properly.
* Empty state works.

## Reset Password

* All reset-password screens are responsive.
* Email capture screen works.
* Verification code screen displays the captured email.
* “Regenerate” replaces “Resend.”
* Wrong code blocks progress.
* Correct code continues safely.
* No horizontal overflow.

## My Account

* Gaps between grouped items reduced.
* Icons are arranged in compact grid style.
* Page feels shorter and more polished.
* No mobile swaying.

## Policies

* Store Closure & Vacation Mode policy appears under Platform Policies.
* Policy page works on mobile.
* Policy links work.
* No placeholder wording.

## Policy Enforcement

* Seller with pending orders cannot close store.
* Seller with frozen orders cannot close store.
* Seller with active disputes cannot close store.
* Withdrawal can be held/reviewed when seller has obligations.
* Vacation Mode blocks new orders if implemented.
* Existing orders remain seller responsibility.
* Filament shows relevant closure/vacation/withdrawal information.

---

# Deliverables

When done, provide:

1. Short diagnosis of each issue.
2. List of changed files.
3. Backend/API changes made.
4. Filament resources/pages/actions updated.
5. Policy enforcement rules implemented.
6. Any migrations/seeders created.
7. Commands I need to run.
8. Testing results.
9. Any remaining risks/manual checks.
10. Whether changes were pushed or the exact commands to push them.

Work carefully. These changes affect password security, seller funds, withdrawals, store status, policy compliance, and buyer/seller trust.
