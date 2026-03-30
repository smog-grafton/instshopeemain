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
      <div className="min-w-0 w-full rounded-sm bg-white shadow-sm lg:ml-7 lg:w-[980px]">
        <div className="px-4 pb-4 sm:px-6 lg:px-8" role="main">
          <div className="border-b border-zinc-100 py-5">
            <h1 className="text-lg font-medium leading-6 text-zinc-800">
              Wallet Updates
            </h1>
            <p className="mt-1 text-sm leading-5 text-neutral-600">
              Payment confirmations, top-up approvals, deductions, and refunds.
            </p>
          </div>

          <div className="py-6">
            {loading ? (
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-10 text-center text-sm text-zinc-500 sm:px-6">
                Loading wallet updates...
              </div>
            ) : items.length === 0 ? (
              <WalletUpdatesEmpty />
            ) : (
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <WalletUpdateCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
