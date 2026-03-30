"use client";

import { useEffect, useState } from "react";
import { NewRootTreatmentHeader } from "./new-root-treatment-header";
import { NewRootTreatmentGrid } from "./new-root-treatment-grid";
import { getShopCollectionProducts, type ApiProduct } from "@/lib/api-client";
import type { CollectionProductItem } from "@/components/shop-root-booster-line/data";

interface ShopNewRootTreatmentSectionProps {
  shopSlug: string;
  shopName?: string;
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
    currencySymbol: p.currencySymbol ?? "RM",
    storeName: shopName,
  };
}

/**
 * Shop "🎉NEW ROOT TREATMENT🎊" section: title-only header + 6-column product grid.
 * "NEW ROOT TREATMENT" = collection for newly launched root-treatment products (no See All).
 */
export function ShopNewRootTreatmentSection({
  shopSlug,
  shopName,
}: ShopNewRootTreatmentSectionProps) {
  const [products, setProducts] = useState<CollectionProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Try to fetch by collection slug - backend will need to support this or we use shopCollection ID
        // For now, we'll fetch all products and filter client-side, or backend can add slug support
        const response = await getShopCollectionProducts(shopSlug, {
          shopCollection: "249763764", // NEW ROOT TREATMENT collection ID from mock data
          limit: 12,
        });
        const transformed = response.products.map((p) =>
          transformApiProduct(p, p.shopName || shopName || shopSlug)
        );
        setProducts(transformed);
      } catch (error) {
        console.error("Failed to fetch new root treatment products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [shopName, shopSlug]);

  if (loading) {
    return (
      <div className="shopee-header-section__content">
        <NewRootTreatmentHeader />
        <div className="py-8 text-center text-gray-500">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="shopee-header-section__content">
      <NewRootTreatmentHeader />
      <NewRootTreatmentGrid products={products} />
    </div>
  );
}
