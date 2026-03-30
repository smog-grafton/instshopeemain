"use client";

import { useEffect, useState } from "react";
import { UserDashboardLayout } from "@/components/user-dashboard";
import { OrderUpdatesEmpty } from "@/components/user-dashboard/order-updates-empty";
import {
  OrderUpdateCard,
  type OrderUpdateItem,
} from "@/components/user-dashboard/order-updates";
import { getNotifications, type ApiNotification } from "@/lib/api-client";

function transformApiNotificationToOrderUpdate(n: ApiNotification): OrderUpdateItem {
  // Try to extract status from message or title
  let status: "shipped" | "delivered" | "confirmed" | "out_for_delivery" = "confirmed";
  const lowerMessage = (n.message || n.title).toLowerCase();
  if (lowerMessage.includes("shipped")) status = "shipped";
  else if (lowerMessage.includes("delivered")) status = "delivered";
  else if (lowerMessage.includes("out for delivery")) status = "out_for_delivery";

  return {
    id: n.id,
    title: n.title,
    message: n.message || n.title,
    orderId: n.orderId || "",
    status,
    timeAgo: new Date(n.createdAt).toLocaleString(),
    href: n.orderId ? `/user/purchase?order=${n.orderId}` : "#",
  };
}

export default function UserNotificationsOrderPage() {
  const [items, setItems] = useState<OrderUpdateItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const notifications = await getNotifications("order");
        const transformed = notifications.map(transformApiNotificationToOrderUpdate);
        setItems(transformed);
      } catch (error) {
        console.error("Failed to fetch order notifications:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    fetchNotifications();
  }, []);

  return (
    <UserDashboardLayout>
      <div className="min-w-0 w-full rounded-sm bg-white shadow-sm lg:ml-7 lg:w-[980px]">
        <div className="px-4 pb-4 sm:px-6 lg:px-8" role="main">
          <div className="border-b border-zinc-100 py-5">
            <h1 className="text-lg font-medium leading-6 text-zinc-800">
              Order Updates
            </h1>
            <p className="mt-1 text-sm leading-5 text-neutral-600">
              Shipping, delivery, and purchase status changes for your orders.
            </p>
          </div>

          <div className="py-6">
            {loading ? (
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-10 text-center text-sm text-zinc-500 sm:px-6">
                Loading notifications...
              </div>
            ) : items.length === 0 ? (
              <OrderUpdatesEmpty />
            ) : (
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <OrderUpdateCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
