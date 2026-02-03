"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FlashSaleProductCard } from "./flash-sale-product-card";
import { WobbleLoader } from "./wobble-loader";
import { flashSaleGridProducts, type FlashSaleGridProduct } from "./data";

const ROWS_BEFORE_LOADER = 4;
const PRODUCTS_PER_ROW = 4;
const INITIAL_VISIBLE = ROWS_BEFORE_LOADER * PRODUCTS_PER_ROW; // 16

export function ProductGridWithLoader() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const allProducts = flashSaleGridProducts;
  const hasMore = visibleCount < allProducts.length;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    // Simulate network delay
    const t = setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PRODUCTS_PER_ROW * 2, allProducts.length));
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(t);
  }, [hasMore, isLoading, allProducts.length]);

  useEffect(() => {
    const el = loaderRef.current;
    if (!el || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "100px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore, hasMore]);

  const visibleProducts: FlashSaleGridProduct[] = allProducts.slice(0, visibleCount);
  const showLoader = hasMore || isLoading;

  return (
    <div className="text-sm leading-tight text-black/80 w-full max-w-[1200px] mx-auto my-5">
      <div
        className="grid grid-cols-4 gap-x-[1%] gap-y-2.5 w-full items-stretch"
        style={{ fontFamily: "Roboto,SHPBurmese,SHPKhmer,Helvetica Neue,Helvetica,Arial,sans-serif" }}
      >
        {visibleProducts.map((product) => (
          <FlashSaleProductCard key={product.id} product={product} />
        ))}
      </div>

      {showLoader && (
        <div ref={loaderRef}>
          <WobbleLoader />
        </div>
      )}

      <div className="w-full h-72" aria-hidden />
    </div>
  );
}
