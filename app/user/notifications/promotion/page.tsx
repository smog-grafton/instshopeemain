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
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="pb-2.5 px-8">
              <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100 flex items-center justify-between gap-4">
                <div>
                  <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                    Promotions
                  </h1>
                  <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                    Deals and voucher notifications
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-black/80 text-sm whitespace-nowrap hover:underline focus:outline-none focus-visible:underline"
                >
                  Mark all as read
                </Link>
              </div>
              {loading ? (
                <div className="py-8 text-center text-gray-500">Loading promotions...</div>
              ) : (
                <PromotionsListWithLoader basePromos={promos} />
              )}
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
