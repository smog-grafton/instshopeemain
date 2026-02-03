"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PromoCard } from "./promo-card";
import type { PromoItem } from "./data";
import { WobbleLoader } from "@/components/shocking-sale-page/product-grid-section/wobble-loader";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

interface PromotionsListWithLoaderProps {
  /** Base list of promos (e.g. 6 items). More are appended on scroll. */
  basePromos: PromoItem[];
}

function extendPromos(promos: PromoItem[], startIndex: number, count: number): PromoItem[] {
  const result: PromoItem[] = [];
  for (let i = 0; i < count; i++) {
    const source = promos[(startIndex + i) % promos.length];
    result.push({
      ...source,
      id: `load-${startIndex + i}-${source.id}`,
    });
  }
  return result;
}

export function PromotionsListWithLoader({ basePromos }: PromotionsListWithLoaderProps) {
  const [items, setItems] = useState<PromoItem[]>(() =>
    basePromos.slice(0, Math.min(INITIAL_COUNT, basePromos.length))
  );
  const [isLoading, setIsLoading] = useState(false);
  const loadIndexRef = useRef(Math.min(INITIAL_COUNT, basePromos.length));
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    if (isLoading || basePromos.length === 0) return;
    setIsLoading(true);
    const t = setTimeout(() => {
      setItems((prev) => {
        const next = extendPromos(basePromos, loadIndexRef.current, LOAD_MORE_COUNT);
        loadIndexRef.current += LOAD_MORE_COUNT;
        return [...prev, ...next];
      });
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, [isLoading, basePromos]);

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
      <div className="flex flex-col divide-y divide-zinc-100">
        {items.map((item) => (
          <PromoCard key={item.id} item={item} />
        ))}
      </div>
      <div ref={loaderRef} className="min-h-[60px] flex items-center justify-center py-2">
        <WobbleLoader />
      </div>
    </div>
  );
}
