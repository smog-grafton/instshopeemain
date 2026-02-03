"use client";

import { ShopProfileCard } from "./shop-profile-card";
import { ShopStatsGrid } from "./shop-stats-grid";
import type { ShopProfileData } from "./data";

interface ShopProfileSectionProps {
  data: ShopProfileData;
}

/**
 * Shop profile content section: store card (avatar, name, status, Follow/Chat)
 * and stats grid (products, followers, following, rating, Chat Performance, joined).
 * Uses local assets for profile image and Shopee Mall badge; data can be from API later.
 */
export function ShopProfileSection({ data }: ShopProfileSectionProps) {
  return (
    <div className="w-full bg-white py-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex w-[1200px] max-w-[1200px] overflow-hidden pt-5">
        <ShopProfileCard data={data} />
        <ShopStatsGrid data={data} />
      </div>
    </div>
  );
}
