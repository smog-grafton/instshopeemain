"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { UserDashboardLayout } from "@/components/user-dashboard";
import { formatPrice, isBackendImage } from "@/lib/utils";
import {
  confirmOrderDelivery,
  getOrders,
  type OrderRecord,
  type OrderStatus,
} from "@/lib/api-client-orders";

const NO_ORDER_IMAGE = "/images/common/user/account/no-order.png";

type FilterTab =
  | "all"
  | "pending-payments"
  | "to-be-delivered"
  | "awaiting-receipt"
  | "to-be-evaluated"
  | "refunded";

function statusToTab(status: OrderStatus): FilterTab {
  switch (status) {
    case "PENDING_PAYMENT":
    case "AWAITING_CASH":
      return "pending-payments";
    case "PAID":
    case "PROCESSING":
      return "to-be-delivered";
    case "SHIPPED":
      return "awaiting-receipt";
    case "DELIVERED":
      return "to-be-evaluated";
    case "CANCELLED":
    default:
      return "refunded";
  }
}

const TAB_LABELS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pending-payments", label: "Pending Payments" },
  { key: "to-be-delivered", label: "To be Delivered" },
  { key: "awaiting-receipt", label: "Awaiting Receipt" },
  { key: "to-be-evaluated", label: "To be Evaluated" },
  { key: "refunded", label: "Refunded" },
];

function formatDateTime(value?: string | null) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString();
}

export function PurchaseContent() {
  const searchParams = useSearchParams();
  const highlightedOrderId = searchParams.get("orderId");
  const highlightedOrderIds = useMemo(
    () =>
      (searchParams.get("orderIds") ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean),
    [searchParams]
  );
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmingOrderId, setConfirmingOrderId] = useState<string | null>(null);

  const loadOrders = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getOrders();
      setOrders(data);
    } catch {
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadOrders();
  }, [loadOrders]);

  const filteredOrders = useMemo(() => {
    if (activeTab === "all") return orders;
    return orders.filter((o) => statusToTab(o.status) === activeTab);
  }, [orders, activeTab]);

  const hasOrders = orders.length > 0;

  const handleConfirmDelivery = async (orderId: string) => {
    try {
      setConfirmingOrderId(orderId);
      await confirmOrderDelivery(orderId);
      await loadOrders();
    } finally {
      setConfirmingOrderId(null);
    }
  };

  return (
    <UserDashboardLayout>
      <div className="relative min-h-[400px] grow rounded-sm bg-white shadow-sm lg:ml-7 lg:w-[980px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="px-4 pb-2.5 sm:px-6 lg:px-8">
              <div className="border-b border-b-zinc-100 py-5 [border-bottom-style:solid]">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  My Purchase
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  View and manage your orders
                </div>
              </div>

              {/* Tabs */}
              <div className="-mx-4 mt-2 overflow-x-auto border-b border-b-zinc-100 px-4 sm:mx-0 sm:px-0">
                <div className="flex min-w-max gap-6">
                {TAB_LABELS.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`relative py-3 text-sm ${
                        isActive ? "text-[#ee4d2d]" : "text-zinc-700"
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#ee4d2d]" />
                      )}
                    </button>
                  );
                })}
                </div>
              </div>

              {loading && (
                <div className="py-10 text-center text-sm text-zinc-600">
                  Loading your orders...
                </div>
              )}

              {!loading && !hasOrders && (
                <div className="flex flex-col items-center justify-center py-16 px-8">
                  <div className="relative w-48 h-48 mb-6">
                    <Image
                      src={NO_ORDER_IMAGE}
                      alt="No orders"
                      width={192}
                      height={192}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <p className="text-zinc-600 text-sm text-center">
                    No orders yet. Start shopping to see your purchases here.
                  </p>
                </div>
              )}

              {/* Orders list */}
              {!loading && hasOrders && filteredOrders.length === 0 && (
                <div className="py-10 text-center text-sm text-zinc-600">
                  No orders in this tab yet.
                </div>
              )}

              {!loading && filteredOrders.length > 0 && (
                <div className="mt-4 space-y-4">
                  {filteredOrders.map((order) => {
                    const isHighlighted =
                      order.id === highlightedOrderId || highlightedOrderIds.includes(order.id);
                    const firstItem = order.items[0];
                    const logistics = order.logisticsTimeline || [];
                    return (
                      <div
                        key={order.id}
                        className={`border rounded-[3px] overflow-hidden text-sm ${
                          isHighlighted ? "border-[#ee4d2d]" : "border-zinc-200"
                        }`}
                      >
                        <div className="flex items-center justify-between bg-[#f5f5f5] px-4 py-2">
                          <div className="text-xs text-zinc-600">
                            <span className="mr-2">Order No:</span>
                            <span className="font-medium text-zinc-800">
                              {order.orderNumber}
                            </span>
                          </div>
                          <div className="text-xs font-medium text-[#ee4d2d] capitalize">
                            {TAB_LABELS.find((tab) => tab.key === statusToTab(order.status))?.label || order.status}
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row">
                          <div className="h-16 w-16 flex-shrink-0">
                            {isBackendImage(firstItem.imageSrc) ? (
                              <img
                                src={firstItem.imageSrc}
                                alt={firstItem.title}
                                width={64}
                                height={64}
                                className="h-16 w-16 border border-zinc-200 object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <Image
                                src={firstItem.imageSrc}
                                alt={firstItem.title}
                                width={64}
                                height={64}
                                className="h-16 w-16 border border-zinc-200 object-cover"
                              />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-4">
                              <div className="min-w-0">
                                <div className="text-sm text-zinc-800 truncate">
                                  {firstItem.title}
                                  {order.items.length > 1 && (
                                    <span className="text-xs text-zinc-500 ml-1">
                                      +{order.items.length - 1} more item
                                      {order.items.length - 1 > 1 ? "s" : ""}
                                    </span>
                                  )}
                                </div>
                                <div className="mt-1 text-xs text-zinc-500 truncate">
                                  {firstItem.variation}
                                </div>
                                <div className="mt-1 text-xs text-zinc-500">
                                  {order.address.streetAddress},{" "}
                                  {order.address.stateArea} {order.address.postalCode}
                                </div>
                              </div>
                              <div className="text-left text-sm text-zinc-700 sm:text-right">
                                <div className="text-xs text-zinc-500">
                                  Total Payment
                                </div>
                                <div className="text-base text-[#ee4d2d] font-medium">
                                  {formatPrice(order.currencySymbol || "RM", order.totalPayment)}
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-3">
                              <div className="text-xs text-zinc-500">
                                Status: <span className="font-medium text-zinc-700">{order.status.replace("_", " ")}</span>
                              </div>
                              {order.status === "SHIPPED" && (
                                <button
                                  type="button"
                                  onClick={() => handleConfirmDelivery(order.id)}
                                  disabled={confirmingOrderId === order.id}
                                  className="inline-flex h-9 items-center justify-center rounded-[2px] border border-[#ee4d2d] px-4 text-[13px] font-medium text-[#ee4d2d] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                  {confirmingOrderId === order.id ? "Confirming..." : "Confirm the receipt of goods"}
                                </button>
                              )}
                            </div>
                            <div className="mt-3 grid gap-3 border-t border-zinc-100 pt-3 sm:grid-cols-3">
                              <div>
                                <div className="text-[11px] uppercase text-zinc-400">Upfront used</div>
                                <div className="text-sm font-medium text-zinc-800">
                                  {formatPrice(order.currencySymbol || "RM", order.fulfillmentCost || 0)}
                                </div>
                              </div>
                              <div>
                                <div className="text-[11px] uppercase text-zinc-400">Profit on receipt</div>
                                <div className="text-sm font-medium text-emerald-700">
                                  {formatPrice(order.currencySymbol || "RM", order.sellerPayout || 0)}
                                </div>
                              </div>
                              <div>
                                <div className="text-[11px] uppercase text-zinc-400">Tracking number</div>
                                <div className="break-all text-sm font-medium text-zinc-800">
                                  {order.trackingNumber || "Not available"}
                                </div>
                              </div>
                            </div>
                            {(order.shippingProvider || order.trackingNumber || logistics.length > 0) && (
                              <div className="mt-3 border-t border-zinc-100 pt-3">
                                <div className="mb-2 text-sm font-medium text-zinc-900">Logistics Information</div>
                                <div className="text-xs text-zinc-600">
                                  Shipping address: {order.address.fullName}, {order.address.streetAddress} {order.address.stateArea} {order.address.postalCode}
                                </div>
                                {order.trackingNumber && (
                                  <div className="mt-1 text-xs text-zinc-600">
                                    Tracking number: <span className="font-medium text-[#ee4d2d]">{order.trackingNumber}</span>
                                  </div>
                                )}
                                <div className="mt-3 space-y-2">
                                  {logistics.map((event, index) => (
                                    <div key={`${event.label}-${index}`} className="grid grid-cols-[1.25rem_1fr] gap-2 text-xs">
                                      <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${index === 0 ? "border-emerald-500 text-emerald-600" : "border-zinc-300 text-zinc-400"}`}>
                                        {index === 0 ? "✓" : index + 1}
                                      </div>
                                      <div>
                                        <div className={index === 0 ? "font-medium text-emerald-700" : "text-zinc-500"}>{event.label}</div>
                                        {event.timestamp && <div className="mt-0.5 text-[11px] text-zinc-400">{formatDateTime(event.timestamp)}</div>}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
