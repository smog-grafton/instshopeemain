"use client";

import { useEffect, useState } from "react";
import { UserDashboardLayout } from "@/components/user-dashboard";
import {
  WalletUpdateCard,
  WalletUpdatesEmpty,
  type WalletUpdateItem,
} from "@/components/user-dashboard/wallet-updates";
import { getNotifications, type ApiNotification } from "@/lib/api-client";

function transformApiNotificationToWalletUpdate(n: ApiNotification): WalletUpdateItem {
  // Try to extract type from message or title
  let type: "top_up" | "refund" | "cashback" | "withdrawal" | "payment" = "payment";
  const lowerMessage = (n.message || n.title).toLowerCase();
  if (lowerMessage.includes("top-up") || lowerMessage.includes("top up")) type = "top_up";
  else if (lowerMessage.includes("refund")) type = "refund";
  else if (lowerMessage.includes("cashback")) type = "cashback";
  else if (lowerMessage.includes("withdrawal")) type = "withdrawal";

  return {
    id: n.id,
    title: n.title,
    message: n.message || n.title,
    type,
    timeAgo: new Date(n.createdAt).toLocaleString(),
    href: "#",
  };
}

export default function UserNotificationsWalletPage() {
  const [items, setItems] = useState<WalletUpdateItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const notifications = await getNotifications("wallet");
        const transformed = notifications.map(transformApiNotificationToWalletUpdate);
        setItems(transformed);
      } catch (error) {
        console.error("Failed to fetch wallet notifications:", error);
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
                  Wallet Updates
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  Notifications about your wallet and payments
                </div>
              </div>
              {loading ? (
                <div className="py-8 text-center text-gray-500">Loading wallet updates...</div>
              ) : items.length === 0 ? (
                <WalletUpdatesEmpty />
              ) : (
                <div className="py-6 px-8 flex flex-col gap-3">
                  {items.map((item) => (
                    <WalletUpdateCard key={item.id} item={item} />
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
