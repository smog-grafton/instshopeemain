"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DailyDiscoverCard } from "@/components/daily-discover/daily-discover-card";
import { getRecommendedProducts, type ApiProduct } from "@/lib/api-client";
import { formatPrice } from "@/lib/utils";
import type { DailyDiscoverProduct } from "@/components/daily-discover/data";
import { getDailyDiscoverImageSrc } from "@/components/daily-discover/data";

const MAX_CART_RECOMMENDATIONS = 12; // 6 columns × 2 rows

function transformApiProductToDailyDiscover(p: ApiProduct, index: number): DailyDiscoverProduct {
  const discountPercent = p.originalPrice
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : 0;
  const sold = p.soldCount >= 1000
    ? `${(p.soldCount / 1000).toFixed(1)}k+`
    : String(p.soldCount);
  
  return {
    id: p.slug,
    title: p.title,
    discountPercent,
    price: formatPrice(p.currencySymbol, p.price),
    sold,
    href: `/product/${p.slug}`,
    findSimilarHref: `/search?keyword=${encodeURIComponent(p.title)}`,
    imageIndex: ((index % 7) + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7,
    hasVideo: false,
    badges: [
      ...(p.textBadges || []),
      ...(p.imageBadges || []),
    ] as DailyDiscoverProduct["badges"],
    promotionLabel: p.promotionLabel || undefined,
    hasFlagLabel: false,
  };
}

/** Bottom section on /cart: 6×2 grid of recommended products. */
export function CartYouMayAlsoLike() {
  const [products, setProducts] = useState<DailyDiscoverProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommended() {
      try {
        const apiProducts = await getRecommendedProducts(MAX_CART_RECOMMENDATIONS);
        const transformed = apiProducts.map((p, i) => transformApiProductToDailyDiscover(p, i));
        setProducts(transformed);
      } catch (error) {
        console.error("Failed to fetch recommended products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRecommended();
  }, []);

  return (
    <section
      className="mt-6"
      aria-label="You may also like"
    >
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h2 className="text-sm font-medium uppercase tracking-normal text-black/87">
          You May Also Like
        </h2>
        <Link
          href="/daily_discover?pageNumber=2"
          className="text-xs no-underline cursor-pointer text-black/80 hover:text-black"
        >
          <span className="flex cursor-pointer items-baseline">
            See All
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-700">
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                className="relative inline-block h-2.5 w-2.5 fill-white align-baseline overflow-hidden"
                aria-hidden
              >
                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
              </svg>
            </span>
          </span>
        </Link>
      </div>
      <div className="px-4 pb-4">
        {loading ? (
          <div className="py-8 text-center text-gray-500">Loading recommendations...</div>
        ) : (
          <div className="grid grid-cols-6 gap-x-2 gap-y-2">
            {products.map((product) => (
              <div key={product.id} className="min-w-0">
                <DailyDiscoverCard product={product} variant="fromSameShop" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

