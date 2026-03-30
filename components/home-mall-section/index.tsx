"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMallStores, type ApiMallStore } from "@/lib/api-client";
import { WobbleLoader } from "@/components/common/wobble-loader";
import { MallHeader } from "@/components/mall-header";
import { mockMallHeaderConfig } from "@/components/mall-header/data";
import { MallProductsSection } from "@/components/mall-header/mall-products-section";
import { isBackendImage } from "@/lib/utils";

function StoreTile({ store }: { store: ApiMallStore }) {
  return (
    <Link
      href={store.href}
      className="group border border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f4_100%)] p-3 transition hover:border-black/10 hover:shadow-sm"
    >
      <div className="relative mx-auto aspect-square w-full max-w-[5.75rem]">
        <Image
          src={store.logoUrl}
          alt={store.name}
          fill
          className="object-contain"
          sizes="96px"
          unoptimized={isBackendImage(store.logoUrl)}
        />
      </div>
      <div className="mt-3 line-clamp-2 min-h-[2.4rem] text-center text-sm font-medium leading-5 text-neutral-800">
        {store.name}
      </div>
    </Link>
  );
}

export function HomeMallSection() {
  const [stores, setStores] = useState<ApiMallStore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStores() {
      try {
        const mallStores = await getMallStores();
        setStores(mallStores);
      } catch (error) {
        console.error("Failed to fetch mall stores:", error);
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
                    Trusted brands from the backend Mall catalogue.
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
