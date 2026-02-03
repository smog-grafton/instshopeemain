import { RootBoosterLineHeader } from "./root-booster-line-header";
import { RootBoosterLineGrid } from "./root-booster-line-grid";
import type { CollectionProductItem } from "./data";

interface ShopRootBoosterLineSectionProps {
  shopSlug: string;
  products: CollectionProductItem[];
}

/**
 * Shop "Root Booster Line" section: header + 6-column product grid.
 * In e-commerce, a "product line" / "collection" is a curated set of related
 * products (same brand/benefit). Uses getRootBoosterLineProducts; replace with
 * API (e.g. shopCollection=246436636) later.
 */
export function ShopRootBoosterLineSection({
  shopSlug,
  products,
}: ShopRootBoosterLineSectionProps) {
  return (
    <div className="shopee-header-section__content">
      <RootBoosterLineHeader shopSlug={shopSlug} />
      <RootBoosterLineGrid products={products} />
    </div>
  );
}
