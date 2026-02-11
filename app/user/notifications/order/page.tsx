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
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="pb-2.5 px-8">
              <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  Order Updates
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  Notifications about your orders
                </div>
              </div>
              {loading ? (
                <div className="py-8 text-center text-gray-500">Loading notifications...</div>
              ) : items.length === 0 ? (
                <OrderUpdatesEmpty />
              ) : (
                <div className="py-6 px-8 flex flex-col gap-3">
                  {items.map((item) => (
                    <OrderUpdateCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
