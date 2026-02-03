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

function extendVouchers(
  vouchers: VoucherItem[],
  startIndex: number,
  count: number
): VoucherItem[] {
  const result: VoucherItem[] = [];
  for (let i = 0; i < count; i++) {
    const source = vouchers[(startIndex + i) % vouchers.length];
    result.push({
      ...source,
      id: `load-${startIndex + i}-${source.id}`,
    });
  }
  return result;
}

export function VoucherListWithLoader({
  baseVouchers,
}: VoucherListWithLoaderProps) {
  const [items, setItems] = useState<VoucherItem[]>(() =>
    baseVouchers.slice(0, Math.min(INITIAL_COUNT, baseVouchers.length))
  );
  const [isLoading, setIsLoading] = useState(false);
  const loadIndexRef = useRef(Math.min(INITIAL_COUNT, baseVouchers.length));
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    if (isLoading || baseVouchers.length === 0) return;
    setIsLoading(true);
    const t = setTimeout(() => {
      setItems((prev) => {
        const next = extendVouchers(
          baseVouchers,
          loadIndexRef.current,
          LOAD_MORE_COUNT
        );
        loadIndexRef.current += LOAD_MORE_COUNT;
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

  return (
    <div className="z-0 relative mt-4">
      <div className="flex flex-wrap">
        {items.map((item) => (
          <VoucherCard key={item.id} item={item} />
        ))}
      </div>
      <div
        ref={loaderRef}
        className="min-h-[60px] flex items-center justify-center py-4 w-full"
      >
        <WobbleLoader />
      </div>
    </div>
  );
}
