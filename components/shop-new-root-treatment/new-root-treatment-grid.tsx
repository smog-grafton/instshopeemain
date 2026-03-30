import { CollectionProductCard } from "@/components/shop-root-booster-line/collection-product-card";
import type { CollectionProductItem } from "@/components/shop-root-booster-line/data";

interface NewRootTreatmentGridProps {
  products: CollectionProductItem[];
}

/**
 * Six-column grid for NEW ROOT TREATMENT (16.666% each).
 * Reuses CollectionProductCard from Root Booster Line (same card design).
 */
export function NewRootTreatmentGrid({ products }: NewRootTreatmentGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
      {products.map((item) => (
        <div key={item.slug} className="min-w-0">
          <CollectionProductCard item={item} />
        </div>
      ))}
    </div>
  );
}
