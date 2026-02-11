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
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px] overflow-x-hidden overflow-y-hidden flex flex-col text-sm leading-tight text-black/80">
        <div className="pb-2.5 px-8">
          <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100 flex items-center justify-between gap-4">
            <div>
              <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                Shopee Updates
              </h1>
              <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                Platform news and tips
              </div>
            </div>
            <Link
              href="#"
              className="text-black/26 hover:text-black/54 text-sm whitespace-nowrap focus:outline-none"
            >
              Mark all as read
            </Link>
          </div>
          {loading ? (
            <div className="py-8 text-center text-gray-500">Loading shopee updates...</div>
          ) : (
            <ShopeeUpdatesListWithLoader baseUpdates={updates} />
          )}
        </div>
      </div>
    </UserDashboardLayout>
  );
}
