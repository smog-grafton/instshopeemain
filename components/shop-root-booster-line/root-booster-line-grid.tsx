import { CollectionProductCard } from "./collection-product-card";
import type { CollectionProductItem } from "./data";

interface RootBoosterLineGridProps {
  products: CollectionProductItem[];
}

/**
 * Six-column grid for Root Booster Line (16.666% each).
 * Same layout as Top Products section.
 */
export function RootBoosterLineGrid({ products }: RootBoosterLineGridProps) {
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
