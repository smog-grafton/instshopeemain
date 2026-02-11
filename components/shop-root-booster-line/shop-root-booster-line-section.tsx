"use client";

import { useEffect, useState } from "react";
import { RootBoosterLineHeader } from "./root-booster-line-header";
import { RootBoosterLineGrid } from "./root-booster-line-grid";
import { getShopCollectionProducts, type ApiProduct } from "@/lib/api-client";
import type { CollectionProductItem } from "./data";

interface ShopRootBoosterLineSectionProps {
  shopSlug: string;
}

function transformApiProduct(p: ApiProduct, shopName: string): CollectionProductItem {
  return {
    slug: p.slug,
    title: p.title,
    shopId: p.shopId,
    categorySlug: p.categorySlug,
    price: p.price,
    originalPrice: p.originalPrice ?? undefined,
    imageSrc: p.imageSrc,
    soldCount: p.soldCount,
    rating: p.rating,
    location: p.location,
    promotionLabel: p.promotionLabel ?? undefined,
    textBadges: p.textBadges,
    imageBadges: p.imageBadges,
    storeName: shopName,
  };
}

/**
 * Shop "Root Booster Line" section: header + 6-column product grid.
 * In e-commerce, a "product line" / "collection" is a curated set of related
 * products (same brand/benefit).
 */
export function ShopRootBoosterLineSection({
  shopSlug,
}: ShopRootBoosterLineSectionProps) {
  const [products, setProducts] = useState<CollectionProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getShopCollectionProducts(shopSlug, {
          shopCollection: "246436636", // ROOT BOOSTER LINE collection ID from mock data
          limit: 6,
        });
        const transformed = response.products.map((p) => transformApiProduct(p, shopSlug));
        setProducts(transformed);
      } catch (error) {
        console.error("Failed to fetch root booster line products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [shopSlug]);

  if (loading) {
    return (
      <div className="shopee-header-section__content">
        <RootBoosterLineHeader shopSlug={shopSlug} />
        <div className="py-8 text-center text-gray-500">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="shopee-header-section__content">
      <RootBoosterLineHeader shopSlug={shopSlug} />
      <RootBoosterLineGrid products={products} />
    </div>
  );
}
