"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DailyDiscoverHeader } from "./daily-discover-header";
import { DailyDiscoverCard } from "./daily-discover-card";
import { getRecommendedProducts, type ApiProduct } from "@/lib/api-client";
import { formatPrice } from "@/lib/utils";
import type { DailyDiscoverProduct } from "./data";
import { getDailyDiscoverImageSrc } from "./data";

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

export function DailyDiscover() {
  const [products, setProducts] = useState<DailyDiscoverProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const apiProducts = await getRecommendedProducts(42); // Show first page of products
        const transformed = apiProducts.map((p, i) => transformApiProductToDailyDiscover(p, i));
        setProducts(transformed);
      } catch (error) {
        console.error("Failed to fetch daily discover products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="relative z-0">
      <div className="-mt-6">
        <DailyDiscoverHeader />
        <section className="w-full min-h-[10rem] pt-1.5">
          {loading ? (
            <div className="py-8 text-center text-gray-500">Loading products...</div>
          ) : (
            <div className="flex flex-wrap content-start gap-0 pt-1.5">
              {products.map((product) => (
                <div key={product.id} className="w-2/12 p-1.5">
                  <DailyDiscoverCard product={product} />
                </div>
              ))}
              <div className="mt-5 w-full text-center">
                <Link
                  href="/daily_discover?pageNumber=2"
                  className="inline-flex h-9 cursor-pointer items-center justify-center rounded-sm border border-solid border-black/[0.09] bg-white px-6 text-sm capitalize leading-none text-neutral-700 no-underline shadow-sm outline-none hover:bg-black/[0.02] active:bg-black/[0.02] active:shadow-inner"
                >
                  See More
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
