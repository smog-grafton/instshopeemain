import { ShopTopProductCard } from "./shop-top-product-card";
import type { ShopTopProductItem } from "./data";

interface ShopTopProductsGridProps {
  products: ShopTopProductItem[];
}

/**
 * Six-column grid for shop top products (16.666% each).
 * Matches inspected layout: flex row wrap, -5px horizontal margin, 5px padding per column.
 */
export function ShopTopProductsGrid({ products }: ShopTopProductsGridProps) {
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
          <ShopTopProductCard item={item} />
        </div>
      ))}
    </div>
  );
}
