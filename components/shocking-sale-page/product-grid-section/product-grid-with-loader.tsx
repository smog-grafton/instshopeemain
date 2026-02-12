"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FlashSaleProductCard } from "./flash-sale-product-card";
import { WobbleLoader } from "./wobble-loader";
import type { FlashSaleGridProduct } from "./data";
import type { ApiShockingSaleProduct } from "@/lib/api-client";

const ROWS_BEFORE_LOADER = 4;
const PRODUCTS_PER_ROW = 4;
const INITIAL_VISIBLE = ROWS_BEFORE_LOADER * PRODUCTS_PER_ROW; // 16

interface ProductGridWithLoaderProps {
  products?: ApiShockingSaleProduct[];
}

function transformApiProduct(p: ApiShockingSaleProduct): FlashSaleGridProduct {
  // Use originalPrice from API if available, otherwise calculate from discount
  const priceNum = parseFloat(p.price);
  let originalPrice: string;
  
  const rawOriginal = p.originalPrice;
  if (rawOriginal != null) {
    // Backend provides originalPrice (string or number)
    originalPrice = typeof rawOriginal === "string" ? rawOriginal : String(Number(rawOriginal).toFixed(2));
  } else if (p.discount > 0) {
    // Calculate from discount if originalPrice not provided
    originalPrice = (priceNum / (1 - p.discount / 100)).toFixed(2);
  } else {
    // No discount, original price equals current price
    originalPrice = p.price;
  }

  // Map badge - filter out "top-picks" as it's not in the type
  let badge: "choice" | "preferred" | "mall" | undefined = undefined;
  if (p.badge === "choice" || p.badge === "preferred" || p.badge === "mall") {
    badge = p.badge;
  }

  return {
    id: p.id,
    name: p.name,
    imageSrc: p.imageSrc || "",
    originalPrice,
    price: p.price,
    discount: p.discount,
    rating: 4.5, // Default rating, can be enhanced later
    status: p.status,
    statusValue: p.statusValue,
    badge,
    href: p.href,
  };
}

export function ProductGridWithLoader({ products = [] }: ProductGridWithLoaderProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const allProducts = products.map(transformApiProduct);
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
