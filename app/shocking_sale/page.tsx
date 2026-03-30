"use client";

import { Suspense, useEffect, useState } from "react";
import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import {
  FlashSaleHeaderBar,
  ShockingSaleHero,
  SessionSlotBar,
  CategoryNavBar,
  ProductGridWithLoader,
} from "@/components/shocking-sale-page";
import { SiteFooter } from "@/components/site-footer";
import { getShockingSalePage, getShockingSaleSessions, type ApiShockingSalePageResponse, type ApiShockingSaleSession } from "@/lib/api-client";
import { useSearchParams } from "next/navigation";
import type { SessionSlot, CategoryTab, MoreMenuItem } from "@/components/shocking-sale-page";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";

function ShockingSaleContent() {
  const searchParams = useSearchParams();
  const promotionId = searchParams.get("promotionId");
  const categoryId = parseInt(searchParams.get("categoryId") || "0", 10);
  
  const [pageData, setPageData] = useState<ApiShockingSalePageResponse | null>(null);
  const [sessions, setSessions] = useState<ApiShockingSaleSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [page, sessionList] = await Promise.all([
          getShockingSalePage({ 
            promotionId: promotionId ? String(promotionId) : undefined, 
            categoryId: categoryId || undefined 
          }),
          getShockingSaleSessions(),
        ]);
        setPageData(page);
        setSessions(sessionList);
      } catch (error) {
        console.error("Failed to load shocking sale page:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [promotionId, categoryId]);

  const sessionSlots: SessionSlot[] = sessions.map((s) => ({
    time: s.time,
    label: s.label,
    href: s.href,
    isActive: s.isActive,
  }));

  // Split categories into main tabs and more menu based on showInMainTabs flag
  const allCategories = pageData?.categories || [];
  const categoryTabs: CategoryTab[] = allCategories
    .filter((c) => c.showInMainTabs !== false)
    .slice(0, 5)
    .map((c) => ({
      label: c.label,
      categoryId: c.categoryId,
      href: c.href,
    }));

  const moreMenuItems: MoreMenuItem[] = allCategories
    .filter((c) => c.showInMainTabs === false || allCategories.indexOf(c) >= 5)
    .map((c) => ({
      label: c.label,
      href: c.href,
    }));

  const config = pageData?.session ? {
    title: pageData.session.title,
    titleImageUrl: pageData.session.titleImageUrl ?? undefined,
    seeAllHref: "",
    promotionId: String(pageData.session.id),
    endsAt: pageData.session.endsAt ?? undefined,
    countdown: pageData.session.countdown,
    products: [],
  } : null;

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      {loading ? (
        <div className="py-8 text-center text-gray-500">Loading flash sale...</div>
      ) : (
        <>
          {config && (
            <section className="bg-white">
              <div className="max-w-[1200px] mx-auto py-2">
                <FlashSaleHeaderBar config={config} />
              </div>
            </section>
          )}
          <ShockingSaleHero />
          {sessionSlots.length > 0 && <SessionSlotBar slots={sessionSlots} />}
          {categoryTabs.length > 0 && (
            <CategoryNavBar
              tabs={categoryTabs.slice(0, 5)}
              moreMenuItems={moreMenuItems}
              activeCategoryId={categoryId}
            />
          )}
          <section className="bg-[rgb(245,245,245)]">
            <ProductGridWithLoader products={pageData?.products || []} />
          </section>
        </>
      )}
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}

export default function ShockingSalePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[rgb(245,245,245)] flex items-center justify-center text-gray-500">Loading...</div>}>
      <ShockingSaleContent />
    </Suspense>
  );
}
