# Frontend Checkout → Orders Mock Flow (Next.js)

This document explains how the **Next.js** app currently simulates the checkout
→ order creation → purchase history flow _before_ the Laravel backend exists.

The goal is to make it trivial to swap in real Laravel HTTP endpoints later
without changing the UI behaviour.

---

## 1. Where the mock order system lives

- Types & storage utilities:
  - `lib/orders-mock.ts`
- Used from:
  - `components/checkout/checkout-products-summary.tsx`
  - `app/user/purchase/page.tsx`

### Key exported types

```ts
export type PaymentMethodKey =
  | "voucher"
  | "online-banking"
  | "card"
  | "cash"
  | "google-pay"
  | "usdt-tron"
  | "btc"
  | "usdt-eth";

export type OrderStatus =
  | "PENDING_PAYMENT"
  | "AWAITING_CASH"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export type PaymentStatus =
  | "PENDING"
  | "REQUIRES_ACTION"
  | "PAID"
  | "FAILED"
  | "CANCELLED";
```

The full interfaces (`OrderRecord`, `PaymentRecord`, `OrderItemSnapshot`,
`AddressSnapshot`) are in `lib/orders-mock.ts` and should map 1:1 (or very
close) to future Laravel Eloquent models / resources.

### Storage strategy (mock only)

- Uses `window.localStorage` under the key:  
  `instshopee_mock_orders_v1`
- All logic is **client‑side only** and only meant for development / UX
  iteration.
- In a real deployment the data should come from the Laravel backend instead.

---

## 2. Placing an order from the checkout page

The **Place Order** button lives in:

- `components/checkout/checkout-products-summary.tsx`

Important parts:

```ts
const [selectedPayment, setSelectedPayment] = useState<PaymentMethodKey | null>(null);
const [errorMessage, setErrorMessage] = useState<string | null>(null);

const handlePlaceOrder = async () => {
  // 1) Basic validations (address + payment method)
  if (!address) {
    setErrorMessage("Please add a delivery address before placing your order.");
    return;
  }

  if (!selectedPayment) {
    setErrorMessage("Please select payment option");
    return;
  }

  // 2) Build order item snapshots
  const itemSnapshots = groups.flatMap((group) =>
    group.items.map((item) => ({
      productSlug: item.slug,
      title: item.title,
      imageSrc: item.imageSrc,
      variation: ...,
      unitPrice: item.price,
      quantity: item.quantity,
    }))
  );

  // 3) Call mock order API
  const result = await placeOrderMock({
    items: itemSnapshots,
    address: { ...derived from StoredAddress },
    paymentMethod: selectedPayment,
    merchandiseSubtotal,
    shippingSubtotal,
    shippingDiscount,
    totalPayment,
  });

  // 4) Redirect to purchases page, highlighting the new order
  router.push(`/user/purchase?orderId=${encodeURIComponent(result.order.id)}`);
};
```

### Method: `placeOrderMock`

Signature:

```ts
export async function placeOrderMock(input: PlaceOrderInput): Promise<PlaceOrderResult>;
```

Responsibilities:

1. Generate `order.id`, `orderNumber` and `payment.id`.
2. Compute initial `order.status` + `payment.status` based on the selected
   payment method:

   - `voucher` → `order.status = PAID`, `payment.status = PAID`
   - `cash` → `order.status = AWAITING_CASH`, `payment.status = PENDING`
   - others (online banking, card, Google Pay, crypto) →  
     `order.status = PENDING_PAYMENT`, `payment.status = PENDING`

3. Insert the new order at the **front** of the localStorage list so the most
   recent orders appear first on `/user/purchase`.
4. Return `{ order, primaryPayment }` to the caller.

### Backend migration notes (Laravel)

When a real API is available, replace `placeOrderMock` with something like:

```ts
export async function placeOrderMock(input: PlaceOrderInput): Promise<PlaceOrderResult> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) throw new Error("Failed to place order");
  return (await res.json()) as PlaceOrderResult;
}
```

And update Laravel to:

1. Validate the payload.
2. Create Order + Payment models.
3. Initiate payment with gateway when needed.
4. Return JSON with the same shape as `PlaceOrderResult`.

---

## 3. My Purchase page (`/user/purchase`)

File:

- `app/user/purchase/page.tsx`

This page is now a **client component** (`"use client"`) so it can read from
localStorage via `loadOrders()`.

### Loading and filtering orders

```ts
const [orders, setOrders] = useState<OrderRecord[]>([]);
const [activeTab, setActiveTab] = useState<FilterTab>("all");

useEffect(() => {
  setOrders(loadOrders());
}, []);

const filteredOrders = useMemo(() => {
  if (activeTab === "all") return orders;
  return orders.filter((o) => statusToTab(o.status) === activeTab);
}, [orders, activeTab]);
```

Tabs:

- `All`
- `To Pay`
- `To Ship`
- `To Receive`
- `Completed`
- `Cancelled`

Mapping from `OrderStatus` → tab is in the helper `statusToTab`.

### Highlighting the last placed order

When `placeOrderMock` completes the checkout, the checkout page redirects to:

```ts
router.push(`/user/purchase?orderId=${encodeURIComponent(result.order.id)}`);
```

The purchases page reads this query and visually highlights that order card
with an orange border:

```ts
const searchParams = useSearchParams();
const highlightedOrderId = searchParams.get("orderId");

const isHighlighted = order.id === highlightedOrderId;
// => adds `border-[#ee4d2d]` instead of `border-zinc-200`
```

---

## 4. Checkout error modal (validation UX)

File:

- `components/checkout/checkout-error-modal.tsx`

Usage:

- In `CheckoutProductsAndSummary`, if the user clicks **Place Order** without a
  selected payment method (or without an address), we display this Shopee-like
  blocking modal:

```ts
setErrorMessage("Please select payment option");

<CheckoutErrorModal
  open={errorMessage != null}
  message={errorMessage ?? ""}
  onClose={() => setErrorMessage(null)}
/>;
```

Behaviour:

- Dims the background.
- Shows a centered white dialog with the message and an orange **OK** button.
- Closes on:
  - OK click
  - Outside click
  - `Esc` or `Enter` key

This UX should remain exactly the same when the Laravel backend is wired in:
only the underlying order/payment creation behaviour changes.

---

## 5. How to replace the mock with Laravel in the future

1. **Keep the TypeScript contracts** in `lib/orders-mock.ts` as the canonical
   shape for orders/payments on the frontend.
2. Gradually:
   - Replace `loadOrders` / `saveOrders` with real `GET /orders` HTTP calls
     (possibly paginated) and cache client‑side only if needed.
   - Replace `placeOrderMock` with a real `POST /orders` call as shown above.
3. Remove the localStorage fallback once the backend is stable.
4. Ensure `/user/purchase` renders from API data instead of localStorage:
   - Either server‑side via `fetch` in a server component.
   - Or client‑side via SWR/React Query/etc., preserving the same UI + tabs.

Until that migration happens, the current mock implementation provides:

- A realistic, Shopee‑style end‑to‑end checkout UX.
- A clear contract for the Laravel API team to implement against.

