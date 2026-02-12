"use client";

import { useEffect, useState } from "react";
import { ShockingSaleHeader } from "./header";
import { ProductCarousel } from "./product-carousel";
import { getShockingSaleHome, type ApiShockingSaleConfig } from "@/lib/api-client";
import type { ShockingSaleProduct } from "./data";
import { WobbleLoader } from "@/components/common/wobble-loader";

export function ShockingSale() {
  const [config, setConfig] = useState<ApiShockingSaleConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShockingSale() {
      try {
        const data = await getShockingSaleHome();
        setConfig(data);
      } catch (error) {
        console.error("Failed to fetch shocking sale:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchShockingSale();
  }, []);

  if (loading) {
    return (
      <div
        role="main"
        className="w-full max-w-[1200px] mx-auto px-3 sm:px-4 md:-mt-[25rem]"
      >
        <div className="bg-white min-h-72">
          <div className="py-8 text-center text-gray-500">Loading flash deals...</div>
        </div>
      </div>
    );
  }

  if (!config || config.products.length === 0) {
    return null;
  }

  // Transform API products to component format
  const products: ShockingSaleProduct[] = config.products.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    discount: p.discount,
    status: p.status,
    statusValue: p.statusValue,
    badge: p.badge,
    href: p.href,
    imageSrc: p.imageSrc,
  }));

  const componentConfig = {
    title: config.title,
    titleImageUrl: config.titleImageUrl ?? undefined,
    seeAllHref: config.seeAllHref,
    promotionId: config.promotionId || "",
    endsAt: config.endsAt ?? undefined,
    countdown: config.countdown,
    products,
  };

  return (
    <div
      role="main"
      className="w-full max-w-[1200px] mx-auto px-3 sm:px-4 md:-mt-[25rem]"
    >
      <div className="bg-white min-h-72">
        <ShockingSaleHeader config={componentConfig} />
        <ProductCarousel products={products} />
      </div>
    </div>
  );
}
