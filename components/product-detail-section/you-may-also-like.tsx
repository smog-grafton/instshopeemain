"use client";

import Link from "next/link";
import { DailyDiscoverCard } from "@/components/daily-discover/daily-discover-card";
import type { DailyDiscoverProduct } from "@/components/daily-discover/data";
import type { ApiProduct } from "@/lib/api-client";
import { normalizeBadgeList } from "@/lib/product-badges";
import { formatPrice } from "@/lib/utils";

const YOU_MAY_ALSO_LIKE_COUNT = 40;

interface YouMayAlsoLikeProps {
  products?: ApiProduct[];
}

export function YouMayAlsoLike({ products }: YouMayAlsoLikeProps) {
  // Transform API products to DailyDiscoverProduct format
  const displayProducts: DailyDiscoverProduct[] = products && products.length > 0
    ? products.slice(0, YOU_MAY_ALSO_LIKE_COUNT).map((p, index) => {
        const discountPercent = p.originalPrice != null && p.originalPrice > 0
          ? Math.round((1 - p.price / p.originalPrice) * 100)
          : 0;
        const badgeKeys = ["shopee-lagi-murah", "cod", "mall", "new-arrival", "preferred", "sea-shipping"] as const;
        const badges = [...normalizeBadgeList(p.textBadges), ...normalizeBadgeList(p.imageBadges)]
          .map((b) => typeof b === "string" && badgeKeys.includes(b.toLowerCase() as typeof badgeKeys[number]) ? b.toLowerCase() as typeof badgeKeys[number] : null)
          .filter((b): b is (typeof badgeKeys)[number] => b != null)
          .filter((badge, badgeIndex, allBadges) => allBadges.indexOf(badge) === badgeIndex);
        return {
          id: p.slug,
          slug: p.slug,
          title: p.title,
          discountPercent,
          price: formatPrice(p.currencySymbol, p.price),
          originalPrice: p.originalPrice ? formatPrice(p.currencySymbol, p.originalPrice) : undefined,
          imageSrc: p.imageSrc,
          imageIndex: (index % 7) + 1,
          sold: p.soldCount >= 1000 ? `${(p.soldCount / 1000).toFixed(1)}k+` : String(p.soldCount),
          soldCount: String(p.soldCount),
          rating: p.rating,
          location: p.location,
          href: `/product/${p.slug}`,
          findSimilarHref: "#",
          hasVideo: false,
          badges,
          promotionLabel: p.promotionLabel ?? undefined,
        };
      })
    : [];

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section
      className="w-full pt-6"
      aria-label="You may also like"
    >
      <h2 className="mb-4 text-base font-medium uppercase tracking-normal text-black/87">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {displayProducts.map((product) => (
          <div key={product.id} className="min-w-0">
            <DailyDiscoverCard product={product} variant="fromSameShop" />
          </div>
        ))}
      </div>
      <div className="mt-5 w-full text-center">
        <Link
          href="/daily_discover?pageNumber=2"
          className="inline-flex h-9 cursor-pointer items-center justify-center rounded-sm border border-solid border-black/[0.09] bg-white px-6 text-sm capitalize leading-none text-neutral-700 no-underline shadow-sm outline-none hover:bg-black/[0.02] active:bg-black/[0.02] active:shadow-inner"
        >
          See More
        </Link>
      </div>
    </section>
  );
}
