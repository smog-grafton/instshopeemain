"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ShopeeUpdateCard } from "./shopee-update-card";
import type { ShopeeUpdateItem } from "./data";
import { WobbleLoader } from "@/components/shocking-sale-page/product-grid-section/wobble-loader";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

interface ShopeeUpdatesListWithLoaderProps {
  baseUpdates: ShopeeUpdateItem[];
}

function extendUpdates(
  updates: ShopeeUpdateItem[],
  startIndex: number,
  count: number
): ShopeeUpdateItem[] {
  const result: ShopeeUpdateItem[] = [];
  for (let i = 0; i < count; i++) {
    const source = updates[(startIndex + i) % updates.length];
    result.push({
      ...source,
      id: `load-${startIndex + i}-${source.id}`,
    });
  }
  return result;
}

export function ShopeeUpdatesListWithLoader({
  baseUpdates,
}: ShopeeUpdatesListWithLoaderProps) {
  const [items, setItems] = useState<ShopeeUpdateItem[]>(() =>
    baseUpdates.slice(0, Math.min(INITIAL_COUNT, baseUpdates.length))
  );
  const [isLoading, setIsLoading] = useState(false);
  const loadIndexRef = useRef(Math.min(INITIAL_COUNT, baseUpdates.length));
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    if (isLoading || baseUpdates.length === 0) return;
    setIsLoading(true);
    const t = setTimeout(() => {
      setItems((prev) => {
        const next = extendUpdates(
          baseUpdates,
          loadIndexRef.current,
          LOAD_MORE_COUNT
        );
        loadIndexRef.current += LOAD_MORE_COUNT;
        return [...prev, ...next];
      });
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, [isLoading, baseUpdates]);

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
    <div className="flex flex-col">
      <div className="flex flex-col divide-y divide-black/9">
        {items.map((item) => (
          <ShopeeUpdateCard key={item.id} item={item} />
        ))}
      </div>
      <div
        ref={loaderRef}
        className="min-h-[60px] flex items-center justify-center py-2"
      >
        <WobbleLoader />
      </div>
    </div>
  );
}
