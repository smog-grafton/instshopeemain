/**
 * Shop "Top Products" section data.
 * Uses existing product mock data for the shop; replace with API later.
 */

import type { ProductRecord } from "@/lib/products-data";
import { getProductsByShopSlug, getShopById } from "@/lib/products-data";

export interface ShopTopProductItem extends ProductRecord {
  /** 1-based rank for TOP badge (1–6) */
  rank: number;
  /** Store display name for card */
  storeName: string;
}

const TOP_PRODUCTS_LIMIT = 6;

/**
 * Returns top N products for a shop (by slug), with rank and store name.
 * Uses getProductsByShopSlug; later replace with API e.g. /shop/:slug/top-products.
 */
export function getShopTopProducts(slug: string): ShopTopProductItem[] {
  const products = getProductsByShopSlug(slug, TOP_PRODUCTS_LIMIT);
  return products.map((p, i) => {
    const shop = getShopById(p.shopId);
    return {
      ...p,
      rank: i + 1,
      storeName: shop?.name ?? "Store",
    };
  });
}
