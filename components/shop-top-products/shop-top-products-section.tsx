import { ShopTopProductsHeader } from "./shop-top-products-header";
import { ShopTopProductsGrid } from "./shop-top-products-grid";
import type { ShopTopProductItem } from "./data";

interface ShopTopProductsSectionProps {
  shopSlug: string;
  products: ShopTopProductItem[];
}

/**
 * Shop "Top Products" section: header (Top Products + See All) and 6-column product grid.
 * Uses existing mock product data for the shop; replace with API later.
 */
export function ShopTopProductsSection({
  shopSlug,
  products,
}: ShopTopProductsSectionProps) {
  return (
    <div className="shopee-header-section__content">
      <ShopTopProductsHeader shopSlug={shopSlug} />
      <ShopTopProductsGrid products={products} />
    </div>
  );
}
