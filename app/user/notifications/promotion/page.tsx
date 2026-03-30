"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserDashboardLayout } from "@/components/user-dashboard";
import {
  PromotionsListWithLoader,
  type PromoItem,
} from "@/components/user-dashboard/promotions";
import { getNotifications, type ApiNotification } from "@/lib/api-client";

function transformApiNotificationToPromotion(n: ApiNotification): PromoItem {
  return {
    id: n.id,
    title: n.title,
    description: n.message || n.title,
    smallIconUrl: "/images/common/promo/small.png", // Default icon
    dateTime: new Date(n.createdAt).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).replace(",", ""),
  };
}

export default function UserNotificationsPromotionPage() {
  const [promos, setPromos] = useState<PromoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const notifications = await getNotifications("promotion");
        const transformed = notifications.map(transformApiNotificationToPromotion);
        setPromos(transformed);
      } catch (error) {
        console.error("Failed to fetch promotion notifications:", error);
        setPromos([]);
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
          <div className="flex flex-col gap-3 border-b border-zinc-100 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-lg font-medium leading-6 text-zinc-800">
                Promotions
              </h1>
              <p className="mt-1 text-sm leading-5 text-neutral-600">
                Deals, voucher alerts, and buyer campaign updates.
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
                Loading promotions...
              </div>
            ) : (
              <PromotionsListWithLoader basePromos={promos} />
            )}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
