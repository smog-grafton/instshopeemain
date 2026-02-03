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
