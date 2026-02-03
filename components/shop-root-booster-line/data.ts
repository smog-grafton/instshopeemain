/**
 * Shop "Root Booster Line" section data.
 * In e-commerce, a "product line" or "collection" is a curated set of related products
 * (same brand/benefit). Root Booster Line = collection of products in that line.
 * Uses getProductsByShopCollection; replace with API (e.g. shopCollection=246436636) later.
 */

import type { ProductRecord } from "@/lib/products-data";
import {
  getProductsByShopCollection,
  getShopById,
} from "@/lib/products-data";

export interface CollectionProductItem extends ProductRecord {
  /** Store display name for card */
  storeName: string;
}

const COLLECTION_SLUG = "root-booster-line";
const LIMIT = 6;

/**
 * Returns products for the "Root Booster Line" collection for a shop.
 */
export function getRootBoosterLineProducts(slug: string): CollectionProductItem[] {
  const products = getProductsByShopCollection(slug, COLLECTION_SLUG, LIMIT);
  return products.map((p) => {
    const shop = getShopById(p.shopId);
    return {
      ...p,
      storeName: shop?.name ?? "Store",
    };
  });
}
