"use client";

import Link from "next/link";
import { DailyDiscoverCard } from "@/components/daily-discover/daily-discover-card";
import { dailyDiscoverProducts } from "@/components/daily-discover/data";

const YOU_MAY_ALSO_LIKE_COUNT = 40;
const YOU_MAY_ALSO_LIKE_PRODUCTS = dailyDiscoverProducts.slice(0, YOU_MAY_ALSO_LIKE_COUNT);

export function YouMayAlsoLike() {
  return (
    <section
      className="w-full pt-6"
      aria-label="You may also like"
    >
      <h2 className="mb-4 text-base font-medium uppercase tracking-normal text-black/87">
        You May Also Like
      </h2>
      <div className="grid grid-cols-5 gap-x-2 gap-y-2">
        {YOU_MAY_ALSO_LIKE_PRODUCTS.map((product) => (
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
