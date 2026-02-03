"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState, useCallback } from "react";
import {
  getShopAllProductsSidebarCategories,
  getShopAllProducts,
  type ShopAllProductsSort,
} from "./data";
import { ShopCategorySidebar } from "./shop-category-sidebar";
import { ShopAllProductsSortBar } from "./shop-all-products-sort-bar";
import { ShopAllProductsGrid } from "./shop-all-products-grid";
import { ShopAllProductsPagination } from "./shop-all-products-pagination";

interface ShopAllProductsSectionProps {
  shopSlug: string;
}

const VALID_SORTS: ShopAllProductsSort[] = [
  "popular",
  "latest",
  "top_sales",
  "price_asc",
  "price_desc",
];

export function ShopAllProductsSection({ shopSlug }: ShopAllProductsSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const shopCollectionParam = searchParams.get("shopCollection");
  const sortParam = searchParams.get("sort");

  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const currentShopCollection = shopCollectionParam ?? null;
  const [sortOption, setSortOption] = useState<ShopAllProductsSort>(() =>
    sortParam && VALID_SORTS.includes(sortParam as ShopAllProductsSort)
      ? (sortParam as ShopAllProductsSort)
      : "popular"
  );

  const categories = useMemo(
    () => getShopAllProductsSidebarCategories(shopSlug),
    [shopSlug]
  );

  const { items, totalPages } = useMemo(() => {
    return getShopAllProducts(shopSlug, currentPage, sortOption);
  }, [shopSlug, currentPage, sortOption]);

  const safePage = Math.min(currentPage, Math.max(1, totalPages));

  const buildPageHref = useCallback(
    (page: number) => {
      const params = new URLSearchParams();
      if (page > 1) params.set("page", String(page));
      if (sortOption !== "popular") params.set("sort", sortOption);
      if (currentShopCollection) params.set("shopCollection", currentShopCollection);
      const q = params.toString();
      return q ? `/shop/${shopSlug}?${q}#product_list` : `/shop/${shopSlug}#product_list`;
    },
    [shopSlug, sortOption, currentShopCollection]
  );

  const handleSortChange = useCallback(
    (option: ShopAllProductsSort) => {
      setSortOption(option);
      const params = new URLSearchParams();
      if (option !== "popular") params.set("sort", option);
      if (currentShopCollection) params.set("shopCollection", currentShopCollection);
      const q = params.toString();
      router.replace(q ? `/shop/${shopSlug}?${q}#product_list` : `/shop/${shopSlug}#product_list`);
    },
    [shopSlug, currentShopCollection, router]
  );

  return (
    <section
      id="product_list"
      aria-label="All products"
      className="w-full flex gap-0"
    >
      <ShopCategorySidebar
        categories={categories}
        currentShopCollection={currentShopCollection}
      />
      <div className="flex-1 min-w-0 flex flex-col">
        <ShopAllProductsSortBar
          currentPage={safePage}
          totalPages={totalPages}
          sortOption={sortOption}
          onSortChange={handleSortChange}
          buildPageHref={buildPageHref}
        />
        <ShopAllProductsGrid items={items} />
        {totalPages > 1 && (
          <ShopAllProductsPagination
            currentPage={safePage}
            totalPages={totalPages}
            buildPageHref={buildPageHref}
          />
        )}
      </div>
    </section>
  );
}
