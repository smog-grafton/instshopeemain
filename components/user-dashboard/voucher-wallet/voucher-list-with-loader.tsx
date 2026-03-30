"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { VoucherCard } from "./voucher-card";
import type { VoucherItem } from "./data";
import { WobbleLoader } from "@/components/shocking-sale-page/product-grid-section/wobble-loader";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 6;

interface VoucherListWithLoaderProps {
  baseVouchers: VoucherItem[];
}

export function VoucherListWithLoader({
  baseVouchers,
}: VoucherListWithLoaderProps) {
  const initialCount = Math.min(INITIAL_COUNT, baseVouchers.length);
  const [items, setItems] = useState<VoucherItem[]>(() =>
    baseVouchers.slice(0, initialCount)
  );
  const [isLoading, setIsLoading] = useState(false);
  const loadIndexRef = useRef(initialCount);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    if (isLoading || baseVouchers.length === 0 || loadIndexRef.current >= baseVouchers.length) {
      return;
    }

    setIsLoading(true);
    const t = setTimeout(() => {
      setItems((prev) => {
        const next = baseVouchers.slice(
          loadIndexRef.current,
          loadIndexRef.current + LOAD_MORE_COUNT
        );
        loadIndexRef.current += next.length;
        return [...prev, ...next];
      });
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, [isLoading, baseVouchers]);

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "120px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  useEffect(() => {
    const nextInitialCount = Math.min(INITIAL_COUNT, baseVouchers.length);
    setItems(baseVouchers.slice(0, nextInitialCount));
    loadIndexRef.current = nextInitialCount;
    setIsLoading(false);
  }, [baseVouchers]);

  if (baseVouchers.length === 0) {
    return (
      <div className="relative z-0 mt-4 rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 px-6 py-14 text-center text-black/54">
        No vouchers yet. Get more from the link above or redeem a code.
      </div>
    );
  }

  return (
    <div className="relative z-0 mt-5">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <VoucherCard key={item.id} item={item} />
        ))}
      </div>
      {items.length < baseVouchers.length && (
        <div
          ref={loaderRef}
          className="min-h-[60px] flex items-center justify-center py-4 w-full"
        >
          <WobbleLoader />
        </div>
      )}
    </div>
  );
}
