"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getMallStores, type ApiMallStore } from "@/lib/api-client";
import { MallEntityImage } from "@/components/common/mall-entity-image";

function TrustIcon({ type }: { type: "shield" | "truck" | "return" }) {
  const path =
    type === "truck"
      ? "M3 7h11v8H3zM14 10h3.5l2 2.5V15H14M6 18a2 2 0 100-4 2 2 0 000 4Zm11 0a2 2 0 100-4 2 2 0 000 4Z"
      : type === "return"
        ? "M7 7h8a4 4 0 010 8H6M8 4 4 8l4 4"
        : "M12 3 5 6v5c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3Z";

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={path} />
    </svg>
  );
}

export function MallStoresListing() {
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
    fetchStores();
  }, []);

  if (loading) {
    return (
      <div className="rounded-sm bg-white p-5 shadow-sm sm:p-8">
        <div className="py-8 text-center text-gray-500">Loading mall stores...</div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-sm bg-white shadow-sm">
      <div className="bg-[#ee4d2d] px-4 py-5 text-white sm:px-8 sm:py-7">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">Shopee Mall</div>
        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl">Official Stores</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90">
              Discover official shops, promoted stores, and collections selected for reliable shopping.
            </p>
          </div>
          <Link href="/products" className="inline-flex h-9 w-fit items-center rounded-sm bg-white px-4 text-sm font-medium text-[#ee4d2d] no-underline shadow-sm">
            Browse Products
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 border-b border-black/5 bg-white text-xs text-neutral-700 sm:text-sm">
        <div className="flex min-w-0 items-center justify-center gap-1.5 border-r border-black/5 px-2 py-3">
          <TrustIcon type="shield" />
          <span className="truncate">100% Authentic</span>
        </div>
        <div className="flex min-w-0 items-center justify-center gap-1.5 border-r border-black/5 px-2 py-3">
          <TrustIcon type="return" />
          <span className="truncate">Easy Returns</span>
        </div>
        <div className="flex min-w-0 items-center justify-center gap-1.5 px-2 py-3">
          <TrustIcon type="truck" />
          <span className="truncate">Fast Shipping</span>
        </div>
      </div>
      
      {stores.length === 0 ? (
        <div className="py-8 text-center text-gray-500">No mall stores available.</div>
      ) : (
        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:gap-4 sm:p-6 lg:grid-cols-4 xl:grid-cols-6">
          {stores.map((store) => (
            <Link
              key={store.id}
              href={store.href}
              className="group flex min-w-0 flex-col items-center rounded-sm border border-black/5 bg-white p-3 transition hover:border-[#ee4d2d] hover:shadow-md sm:p-4"
            >
              <div className="relative mb-3 aspect-square w-full max-w-[8rem] overflow-hidden rounded-md bg-[#f7f7f7]">
                <MallEntityImage
                  src={store.logoUrl}
                  alt={store.name}
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 200px"
                />
              </div>
              <h3 className="line-clamp-2 min-h-[2.25rem] text-center text-sm font-medium leading-5 text-black/87">
                {store.name}
              </h3>
              <span className="mt-2 inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-[11px] font-medium text-[#ee4d2d]">
                Visit Store
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
