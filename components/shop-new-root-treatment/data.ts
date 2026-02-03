/**
 * Shop "🎉NEW ROOT TREATMENT🎊" section data.
 * In e-commerce, "NEW ROOT TREATMENT" is a collection for newly launched root-treatment products.
 * Uses getProductsByShopCollection; replace with API (e.g. shopCollection=249763764) later.
 */

import type { CollectionProductItem } from "@/components/shop-root-booster-line/data";
import {
  getProductsByShopCollection,
  getShopById,
} from "@/lib/products-data";

const COLLECTION_SLUG = "new-root-treatment";
const LIMIT = 12;

/**
 * Returns products for the "NEW ROOT TREATMENT" collection for a shop (12 products, two rows of 6).
 */
export function getNewRootTreatmentProducts(slug: string): CollectionProductItem[] {
  const products = getProductsByShopCollection(slug, COLLECTION_SLUG, LIMIT);
  return products.map((p) => {
    const shop = getShopById(p.shopId);
    return {
      ...p,
      storeName: shop?.name ?? "Store",
    };
  });
}
