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
    <div
      className="flex flex-wrap box-border -mx-1.5"
      style={{ flex: "0 1 auto" }}
    >
      {products.map((item) => (
        <div
          key={item.slug}
          className="box-border w-full px-1.5"
          style={{
            flexBasis: "16.666%",
            maxWidth: "16.666%",
          }}
        >
          <CollectionProductCard item={item} />
        </div>
      ))}
    </div>
  );
}
