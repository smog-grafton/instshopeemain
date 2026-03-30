/**
 * Order API client functions - separated to avoid circular dependencies
 */

import { apiFetch } from "./api-client";

export type PaymentMethodKey =
  | "voucher"
  | "wallet"
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
  unitNo?: string;
  streetAddress: string;
  labelAs?: string;
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
  currencySymbol?: string;
  createdAt: string;
}

export interface PaymentEvidence {
  accountHolderName: string;
  transactionScreenshot: string; // Base64 or URL
}

export interface PlaceOrderInput {
  items: OrderItemSnapshot[];
  address: AddressSnapshot;
  paymentMethod: PaymentMethodKey;
  merchandiseSubtotal: number;
  shippingSubtotal: number;
  shippingDiscount: number;
  totalPayment: number;
  paymentEvidence?: PaymentEvidence;
}

export interface PlaceOrderResult {
  order: OrderRecord;
  primaryPayment: PaymentRecord;
  orders?: OrderRecord[];
  primaryPayments?: PaymentRecord[];
  splitByShop?: boolean;
}

export async function getOrders(): Promise<OrderRecord[]> {
  try {
    const response = await apiFetch<{ orders: OrderRecord[] }>("/orders", {}, true);
    return response.orders;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
}

export async function getOrderById(id: string): Promise<OrderRecord | null> {
  try {
    const response = await apiFetch<{ order: OrderRecord }>(`/orders/${id}`, {}, true);
    return response.order;
  } catch (error) {
    console.error(`Failed to fetch order ${id}:`, error);
    return null;
  }
}

export async function placeOrder(input: PlaceOrderInput): Promise<PlaceOrderResult> {
  const response = await apiFetch<PlaceOrderResult>(
    "/orders",
    {
      method: "POST",
      body: JSON.stringify(input),
    },
    true
  );

  return response;
}

export async function confirmOrderDelivery(id: string): Promise<OrderRecord> {
  const response = await apiFetch<{ success: boolean; order: OrderRecord }>(
    `/orders/${id}/confirm-delivery`,
    { method: "POST" },
    true
  );

  return response.order;
}
