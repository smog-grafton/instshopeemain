/**
 * Shop "All Products" section data.
 * Sidebar categories = All Products + shop nav collections (from getMockShopNav).
 * Product list uses getShopAllProductsPaginated; replace with API later.
 */

import type { ProductRecord } from "@/lib/products-data";
import {
  getShopAllProductsPaginated,
  getShopById,
  type ShopAllProductsSort,
} from "@/lib/products-data";
import { getMockShopNav } from "@/components/shop-navigation/data";

export type { ShopAllProductsSort };

export interface ShopSidebarCategory {
  label: string;
  href: string;
  /** When true, this category is "All Products" (no shopCollection param). */
  isAllProducts?: boolean;
  /** Query param value e.g. "47117342" for Fulfilled by Shopee. */
  shopCollection?: string;
}

const PER_PAGE = 10;

/**
 * Returns sidebar category list: "All Products" first, then nav items except Home.
 */
export function getShopAllProductsSidebarCategories(slug: string): ShopSidebarCategory[] {
  const { mainTabs, moreItems } = getMockShopNav(slug);
  const baseUrl = `/shop/${slug}`;
  const allProducts: ShopSidebarCategory = {
    label: "All Products",
    href: `${baseUrl}#product_list`,
    isAllProducts: true,
  };
  const getCollection = (href: string): string | undefined => {
    const q = href.indexOf("?");
    if (q === -1) return undefined;
    const params = new URLSearchParams(href.slice(q));
    return params.get("shopCollection") ?? undefined;
  };
  const rest = mainTabs
    .filter((t) => t.label !== "Home" && t.label !== "All Products")
    .map((t) => ({
      label: t.label,
      href: t.href,
      isAllProducts: false,
      shopCollection: getCollection(t.href),
    }));
  const more = moreItems.map((t) => ({
    label: t.label,
    href: t.href,
    isAllProducts: false,
    shopCollection: getCollection(t.href),
  }));
  return [allProducts, ...rest, ...more];
}

export interface ShopAllProductItem extends ProductRecord {
  storeName: string;
}

/**
 * Returns one page of products for the shop "All Products" list with sort.
 */
export function getShopAllProducts(
  shopSlug: string,
  page: number,
  sort: ShopAllProductsSort = "popular"
): { items: ShopAllProductItem[]; total: number; totalPages: number } {
  const { products, total } = getShopAllProductsPaginated(
    shopSlug,
    page,
    PER_PAGE,
    sort
  );
  const items: ShopAllProductItem[] = products.map((p) => {
    const shop = getShopById(p.shopId);
    return { ...p, storeName: shop?.name ?? "Store" };
  });
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  return { items, total, totalPages };
}

export const SHOP_ALL_PRODUCTS_PER_PAGE = PER_PAGE;
