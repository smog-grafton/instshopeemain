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
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
      {products.map((item) => (
        <div key={item.slug} className="min-w-0">
          <ShopTopProductCard item={item} />
        </div>
      ))}
    </div>
  );
}
