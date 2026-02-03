import { NewRootTreatmentHeader } from "./new-root-treatment-header";
import { NewRootTreatmentGrid } from "./new-root-treatment-grid";
import type { CollectionProductItem } from "@/components/shop-root-booster-line/data";

interface ShopNewRootTreatmentSectionProps {
  products: CollectionProductItem[];
}

/**
 * Shop "🎉NEW ROOT TREATMENT🎊" section: title-only header + 6-column product grid.
 * "NEW ROOT TREATMENT" = collection for newly launched root-treatment products (no See All).
 */
export function ShopNewRootTreatmentSection({
  products,
}: ShopNewRootTreatmentSectionProps) {
  return (
    <div className="shopee-header-section__content">
      <NewRootTreatmentHeader />
      <NewRootTreatmentGrid products={products} />
    </div>
  );
}
