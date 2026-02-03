"use client";

import Link from "next/link";
import { DailyDiscoverCard } from "@/components/daily-discover/daily-discover-card";
import { dailyDiscoverProducts } from "@/components/daily-discover/data";

const MAX_CART_RECOMMENDATIONS = 12; // 6 columns × 2 rows
const CART_RECOMMENDED_PRODUCTS = dailyDiscoverProducts.slice(
  0,
  MAX_CART_RECOMMENDATIONS
);

/** Bottom section on /cart: 6×2 grid of recommended products. */
export function CartYouMayAlsoLike() {
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
        <div className="grid grid-cols-6 gap-x-2 gap-y-2">
          {CART_RECOMMENDED_PRODUCTS.map((product) => (
            <div key={product.id} className="min-w-0">
              <DailyDiscoverCard product={product} variant="fromSameShop" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

