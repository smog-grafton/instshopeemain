"use client";

import { ShopAllProductsCard } from "./shop-all-products-card";
import type { ShopAllProductItem } from "./data";

interface ShopAllProductsGridProps {
  items: ShopAllProductItem[];
}

/**
 * 5-column product grid for shop "All Products" (2 rows of 5 = 10 per page).
 */
export function ShopAllProductsGrid({ items }: ShopAllProductsGridProps) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
      {items.map((item) => (
        <ShopAllProductsCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
