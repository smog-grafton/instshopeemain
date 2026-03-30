"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserDashboardLayout } from "@/components/user-dashboard";
import {
  ShopeeUpdatesListWithLoader,
  type ShopeeUpdateItem,
} from "@/components/user-dashboard/shopee-updates";
import { getNotifications, type ApiNotification } from "@/lib/api-client";

function transformApiNotificationToShopeeUpdate(n: ApiNotification): ShopeeUpdateItem {
  return {
    id: n.id,
    title: n.title,
    description: n.message || n.title, // Use message as description if available
    imageUrl: "/images/common/user/shopee/1.png", // Default image
    dateTime: new Date(n.createdAt).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).replace(",", ""),
    href: "#",
  };
}

export default function UserNotificationsShopeePage() {
  const [updates, setUpdates] = useState<ShopeeUpdateItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const notifications = await getNotifications("shopee");
        const transformed = notifications.map(transformApiNotificationToShopeeUpdate);
        setUpdates(transformed);
      } catch (error) {
        console.error("Failed to fetch shopee notifications:", error);
        setUpdates([]);
      } finally {
        setLoading(false);
      }
    }
    fetchNotifications();
  }, []);

  return (
    <UserDashboardLayout>
      <div className="min-w-0 w-full rounded-sm bg-white shadow-sm lg:ml-7 lg:w-[980px]">
        <div className="px-4 pb-4 text-sm leading-tight text-black/80 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 border-b border-zinc-100 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-lg font-medium leading-6 text-zinc-800">
                Shopee Updates
              </h1>
              <p className="mt-1 text-sm leading-5 text-neutral-600">
                Platform news, buyer tips, and service announcements.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              Mark all as read
            </Link>
          </div>

          <div className="py-6">
            {loading ? (
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-10 text-center text-sm text-zinc-500 sm:px-6">
                Loading shopee updates...
              </div>
            ) : (
              <ShopeeUpdatesListWithLoader baseUpdates={updates} />
            )}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
