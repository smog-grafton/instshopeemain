"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { UserDashboardLayout } from "@/components/user-dashboard";
import { formatPrice } from "@/lib/utils";
import {
  getOrders,
  type OrderRecord,
  type OrderStatus,
} from "@/lib/api-client-orders";

const NO_ORDER_IMAGE = "/images/common/user/account/no-order.png";

type FilterTab =
  | "all"
  | "to-pay"
  | "to-ship"
  | "to-receive"
  | "completed"
  | "cancelled";

function statusToTab(status: OrderStatus): FilterTab {
  switch (status) {
    case "PENDING_PAYMENT":
    case "AWAITING_CASH":
      return "to-pay";
    case "PAID":
    case "PROCESSING":
      return "to-ship";
    case "SHIPPED":
      return "to-receive";
    case "DELIVERED":
      return "completed";
    case "CANCELLED":
    default:
      return "cancelled";
  }
}

const TAB_LABELS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "to-pay", label: "To Pay" },
  { key: "to-ship", label: "To Ship" },
  { key: "to-receive", label: "To Receive" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

export function PurchaseContent() {
  const searchParams = useSearchParams();
  const highlightedOrderId = searchParams.get("orderId");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [orders, setOrders] = useState<OrderRecord[]>([]);

  useEffect(() => {
    let mounted = true;
    getOrders()
      .then((data) => {
        if (mounted) {
          setOrders(data);
        }
      })
      .catch(() => {
        if (mounted) setOrders([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const filteredOrders = useMemo(() => {
    if (activeTab === "all") return orders;
    return orders.filter((o) => statusToTab(o.status) === activeTab);
  }, [orders, activeTab]);

  const hasOrders = orders.length > 0;

  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="pb-2.5 px-8">
              <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  My Purchase
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  View and manage your orders
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-6 border-b border-b-zinc-100 mt-2">
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

              {/* Empty state */}
              {!hasOrders && (
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
              {hasOrders && filteredOrders.length === 0 && (
                <div className="py-10 text-center text-sm text-zinc-600">
                  No orders in this tab yet.
                </div>
              )}

              {filteredOrders.length > 0 && (
                <div className="mt-4 space-y-4">
                  {filteredOrders.map((order) => {
                    const isHighlighted = order.id === highlightedOrderId;
                    const firstItem = order.items[0];
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
                            {statusToTab(order.status).replace("-", " ")}
                          </div>
                        </div>
                        <div className="px-4 py-3 flex gap-3">
                          <div className="w-16 h-16 flex-shrink-0">
                            <Image
                              src={firstItem.imageSrc}
                              alt={firstItem.title}
                              width={64}
                              height={64}
                              className="w-16 h-16 object-cover border border-zinc-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between gap-4">
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
                              <div className="text-right text-sm text-zinc-700">
                                <div className="text-xs text-zinc-500">
                                  Total Payment
                                </div>
                                <div className="text-base text-[#ee4d2d] font-medium">
                                  {formatPrice(order.currencySymbol || "RM", order.totalPayment)}
                                </div>
                              </div>
                            </div>
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
