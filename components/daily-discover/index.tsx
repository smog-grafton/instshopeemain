"use client";

import Link from "next/link";
import { DailyDiscoverHeader } from "./daily-discover-header";
import { DailyDiscoverCard } from "./daily-discover-card";
import { dailyDiscoverProducts } from "./data";

export function DailyDiscover() {
  return (
    <div className="relative z-0">
      <div className="-mt-6">
        <DailyDiscoverHeader />
        <section className="w-full min-h-[10rem] pt-1.5">
          <div className="flex flex-wrap content-start gap-0 pt-1.5">
            {dailyDiscoverProducts.map((product) => (
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
        </section>
      </div>
    </div>
  );
}
