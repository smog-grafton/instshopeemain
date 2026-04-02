"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getMallHighlights, type ApiMallStore } from "@/lib/api-client";
import { WobbleLoader } from "@/components/common/wobble-loader";
import { MallEntityImage } from "@/components/common/mall-entity-image";
import { MallHeader } from "@/components/mall-header";
import { mockMallHeaderConfig } from "@/components/mall-header/data";
import { MallProductsSection } from "@/components/mall-header/mall-products-section";

function StoreTile({ store }: { store: ApiMallStore }) {
  return (
    <Link
      href={store.href}
      className="group border border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f4_100%)] p-2.5 transition hover:border-black/10 hover:shadow-sm"
    >
      <div className="relative mx-auto aspect-square w-full max-w-[5.75rem] overflow-hidden rounded-sm bg-[#f1f1f1]">
        <MallEntityImage
          src={store.logoUrl}
          alt={store.name}
          className="object-contain p-2.5"
          sizes="96px"
        />
      </div>
      <div className="mt-2.5 line-clamp-2 min-h-[2.4rem] text-center text-sm font-medium leading-5 text-neutral-800">
        {store.name}
      </div>
      {store.secondaryText ? (
        <div className="mt-1 line-clamp-1 text-center text-xs text-neutral-500">
          {store.secondaryText}
        </div>
      ) : null}
    </Link>
  );
}

export function HomeMallSection() {
  const [stores, setStores] = useState<ApiMallStore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStores() {
      try {
        const mallStores = await getMallHighlights();
        setStores(mallStores);
      } catch (error) {
        console.error("Failed to fetch mall highlights:", error);
        setStores([]);
      } finally {
        setLoading(false);
      }
    }

    void fetchStores();
  }, []);

  const featuredStores = stores.slice(0, 4);

  return (
    <section id="home-mall" className="mx-auto mt-5 w-full max-w-[1200px] px-3 sm:px-4 md:px-6">
      <div className="overflow-hidden bg-white shadow-sm">
        <MallHeader config={mockMallHeaderConfig} />
        <div className={`grid min-w-0 ${loading || featuredStores.length > 0 ? "lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]" : ""}`}>
          {(loading || featuredStores.length > 0) && (
            <div className="border-b border-black/5 bg-[linear-gradient(180deg,#fff8f4_0%,#ffffff_100%)] p-4 lg:border-b-0 lg:border-r lg:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    Official Stores
                  </div>
                  <div className="mt-1 text-sm leading-5 text-neutral-700">
                    Trusted brands and featured shop collections from the backend catalogue.
                  </div>
                </div>
                <Link href="/mall" className="shrink-0 text-sm font-medium text-[#ee4d2d] hover:text-[#d9481c]">
                  See all
                </Link>
              </div>

              {loading ? (
                <WobbleLoader className="py-14" />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {featuredStores.map((store) => (
                    <StoreTile key={store.id} store={store} />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="min-w-0">
            <MallProductsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
