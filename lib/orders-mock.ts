/**
 * Mock order & payment store for the Next.js frontend.
 *
 * This file is intentionally self-contained and documented so that when the
 * Laravel backend is ready, you can replace the implementation while keeping
 * the types and call‑sites stable.
 *
 * STORAGE STRATEGY
 * ----------------
 * - Uses window.localStorage under the key `instshopee_mock_orders_v1`.
 * - This is **client-side only** and purely for demo / UX development.
 * - In production with Laravel:
 *   - Replace `loadOrders`, `saveOrders`, `placeOrderMock`, etc. with real
 *     HTTP calls (e.g. via fetch/axios) to your Laravel API.
 */

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

export interface OrderItemSnapshot {
  productSlug: string;
  title: string;
  imageSrc: string;
  variation: string;
  unitPrice: number;
  quantity: number;
}

export interface AddressSnapshot {
  fullName: string;
  phoneNumber: string;
  stateArea: string;
  postalCode: string;
  unitNo: string;
  streetAddress: string;
  labelAs: string;
}

export interface PaymentRecord {
  id: string;
  method: PaymentMethodKey;
  amount: number;
  status: PaymentStatus;
  providerRef?: string;
  createdAt: string;
}

export interface OrderRecord {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItemSnapshot[];
  address: AddressSnapshot;
  paymentMethod: PaymentMethodKey;
  payments: PaymentRecord[];
  merchandiseSubtotal: number;
  shippingSubtotal: number;
  shippingDiscount: number;
  totalPayment: number;
  createdAt: string;
}

const STORAGE_KEY = "instshopee_mock_orders_v1";

function safeParseOrders(raw: string | null): OrderRecord[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as OrderRecord[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function loadOrders(): OrderRecord[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return safeParseOrders(raw);
}

export function saveOrders(orders: OrderRecord[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch {
    // ignore write errors in mock layer
  }
}

export function getOrderById(id: string): OrderRecord | undefined {
  return loadOrders().find((o) => o.id === id);
}

function generateId(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(
    36
  )}`;
}

function generateOrderNumber(): string {
  const now = new Date();
  const y = now.getFullYear().toString().slice(-2);
  const m = `${now.getMonth() + 1}`.padStart(2, "0");
  const d = `${now.getDate()}`.padStart(2, "0");
  return `SP${y}${m}${d}${Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0")}`;
}

/**
 * Input required for placing a mock order from the checkout page.
 */
export interface PlaceOrderInput {
  items: OrderItemSnapshot[];
  address: AddressSnapshot;
  paymentMethod: PaymentMethodKey;
  merchandiseSubtotal: number;
  shippingSubtotal: number;
  shippingDiscount: number;
  totalPayment: number;
}

export interface PlaceOrderResult {
  order: OrderRecord;
  primaryPayment: PaymentRecord;
}

/**
 * Determine initial order + payment status based on payment method.
 *
 * This models the behaviour we'd expect from a real backend:
 * - Some methods are immediately PAID (e.g. voucher/internal credit)
 * - Others wait for offline or external confirmation.
 */
function initialStatusesForMethod(
  method: PaymentMethodKey
): { orderStatus: OrderStatus; paymentStatus: PaymentStatus } {
  switch (method) {
    case "voucher":
      return { orderStatus: "PAID", paymentStatus: "PAID" };
    case "cash":
      return { orderStatus: "AWAITING_CASH", paymentStatus: "PENDING" };
    case "online-banking":
    case "card":
    case "google-pay":
    case "usdt-tron":
    case "btc":
    case "usdt-eth":
    default:
      return { orderStatus: "PENDING_PAYMENT", paymentStatus: "PENDING" };
  }
}

/**
 * Mock implementation of placing an order.
 *
 * FRONTEND CONTRACT (what Next.js expects):
 * - Call this after the user hits "Place Order" and basic validation passes.
 * - Receive an `order` and its first `payment` back.
 * - Use `order.status` and `payment.status` to decide which success/follow‑up
 *   UI to show (e.g. redirect to /user/purchase, show crypto instructions, etc.).
 *
 * BACKEND MIGRATION NOTES (for Laravel):
 * - Replace this implementation with an HTTP POST to your Laravel endpoint:
 *   e.g. POST /api/orders
 * - Laravel would:
 *   1. Validate data + inventory
 *   2. Create Order + Payment records in the database
 *   3. Call out to payment gateway if needed
 *   4. Return JSON shaped like `PlaceOrderResult`
 */
export async function placeOrderMock(input: PlaceOrderInput): Promise<PlaceOrderResult> {
  const now = new Date().toISOString();
  const { orderStatus, paymentStatus } = initialStatusesForMethod(
    input.paymentMethod
  );

  const payment: PaymentRecord = {
    id: generateId("pay"),
    method: input.paymentMethod,
    amount: input.totalPayment,
    status: paymentStatus,
    createdAt: now,
  };

  const order: OrderRecord = {
    id: generateId("ord"),
    orderNumber: generateOrderNumber(),
    status: orderStatus,
    items: input.items,
    address: input.address,
    paymentMethod: input.paymentMethod,
    payments: [payment],
    merchandiseSubtotal: input.merchandiseSubtotal,
    shippingSubtotal: input.shippingSubtotal,
    shippingDiscount: input.shippingDiscount,
    totalPayment: input.totalPayment,
    createdAt: now,
  };

  const existing = loadOrders();
  existing.unshift(order); // newest first
  saveOrders(existing);

  // Simulate small network latency
  await new Promise((resolve) => setTimeout(resolve, 300));

  return { order, primaryPayment: payment };
}

