"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import {
  type ShopAllProductsSort,
  type ShopAllProductItem,
  type ShopSidebarCategory,
} from "./data";
import { ShopCategorySidebar } from "./shop-category-sidebar";
import { ShopAllProductsSortBar } from "./shop-all-products-sort-bar";
import { ShopAllProductsGrid } from "./shop-all-products-grid";
import { ShopAllProductsPagination } from "./shop-all-products-pagination";
import {
  getShopProducts,
  getShopCollectionProducts,
  getShopNavigation,
  searchShopProducts,
} from "@/lib/api-client";

interface ShopAllProductsSectionProps {
  shopSlug: string;
  shopName?: string;
}

const VALID_SORTS: ShopAllProductsSort[] = [
  "popular",
  "latest",
  "top_sales",
  "price_asc",
  "price_desc",
];

export function ShopAllProductsSection({
  shopSlug,
  shopName,
}: ShopAllProductsSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const keywordParam = (searchParams.get("keyword") ?? "").trim();
  const shopCollectionParam = searchParams.get("shopCollection");
  const sortParam = searchParams.get("sort");

  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const currentKeyword = keywordParam;
  const currentShopCollection = shopCollectionParam ?? null;
  const [sortOption, setSortOption] = useState<ShopAllProductsSort>(() =>
    sortParam && VALID_SORTS.includes(sortParam as ShopAllProductsSort)
      ? (sortParam as ShopAllProductsSort)
      : "popular"
  );

  const [categories, setCategories] = useState<ShopSidebarCategory[]>([]);
  const [items, setItems] = useState<ShopAllProductItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nextSort =
      sortParam && VALID_SORTS.includes(sortParam as ShopAllProductsSort)
        ? (sortParam as ShopAllProductsSort)
        : "popular";
    setSortOption(nextSort);
  }, [sortParam]);

  useEffect(() => {
    async function fetchNavigation() {
      try {
        const nav = await getShopNavigation(shopSlug);
        const baseUrl = `/shop/${shopSlug}`;
        const allProducts: ShopSidebarCategory = {
          label: "All Products",
          href: `${baseUrl}#product_list`,
          isAllProducts: true,
        };
        const getCollection = (href: string): string | undefined => {
          const q = href.indexOf("?");
          if (q === -1) return undefined;
          const params = new URLSearchParams(href.slice(q + 1));
          return params.get("shopCollection") ?? undefined;
        };
        const rest = [...nav.mainTabs, ...nav.moreItems]
          .filter((t) => t.label !== "Home" && t.label !== "All Products")
          .map((t) => ({
            label: t.label,
            href: t.href,
            isAllProducts: false,
            shopCollection: getCollection(t.href),
          }));
        setCategories([allProducts, ...rest]);
      } catch (error) {
        console.error("Failed to fetch navigation:", error);
        setCategories([
          {
            label: "All Products",
            href: `/shop/${shopSlug}#product_list`,
            isAllProducts: true,
          },
        ]);
      }
    }
    fetchNavigation();
  }, [shopSlug]);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let response:
          | Awaited<ReturnType<typeof getShopProducts>>
          | Awaited<ReturnType<typeof searchShopProducts>>
          | Awaited<ReturnType<typeof getShopCollectionProducts>>;

        if (currentKeyword) {
          response = await searchShopProducts(shopSlug, {
            keyword: currentKeyword,
            page: currentPage,
            per_page: 10,
            sort: sortOption,
            shopCollection: currentShopCollection ?? undefined,
          });
        } else if (currentShopCollection) {
          response = await getShopCollectionProducts(shopSlug, {
            shopCollection: currentShopCollection,
            page: currentPage,
            per_page: 10,
            sort: sortOption,
          });
        } else {
          response = await getShopProducts(shopSlug, {
            page: currentPage,
            per_page: 10,
            sort: sortOption,
          });
        }

        const transformedItems: ShopAllProductItem[] = response.products.map((p) => {
          const item: ShopAllProductItem = {
            slug: p.slug,
            title: p.title,
            shopId: p.shopId,
            categorySlug: p.categorySlug,
            price: p.price,
            originalPrice: p.originalPrice ?? undefined,
            imageSrc: p.imageSrc,
            soldCount: p.soldCount,
            rating: p.rating,
            location: p.location,
            storeName: p.shopName || shopName || shopSlug,
          };
          if (p.promotionLabel != null) item.promotionLabel = p.promotionLabel;
          if (p.textBadges) item.textBadges = p.textBadges;
          if (p.imageBadges) item.imageBadges = p.imageBadges;
          item.currencySymbol = p.currencySymbol ?? "RM";
          return item;
        });

        setItems(transformedItems);
        setTotalPages(response.pagination?.last_page ?? 1);
      } catch (error) {
        console.error("Failed to fetch shop products:", error);
        setItems([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [shopSlug, shopName, currentPage, sortOption, currentShopCollection, currentKeyword]);

  const safePage = Math.min(currentPage, Math.max(1, totalPages));

  const buildPageHref = useCallback(
    (page: number) => {
      const params = new URLSearchParams();
      if (currentKeyword) params.set("keyword", currentKeyword);
      if (page > 1) params.set("page", String(page));
      if (sortOption !== "popular") params.set("sort", sortOption);
      if (currentShopCollection) params.set("shopCollection", currentShopCollection);
      const q = params.toString();
      return q ? `/shop/${shopSlug}?${q}#product_list` : `/shop/${shopSlug}#product_list`;
    },
    [currentKeyword, currentShopCollection, shopSlug, sortOption]
  );

  const handleSortChange = useCallback(
    (option: ShopAllProductsSort) => {
      setSortOption(option);
      const params = new URLSearchParams();
      if (currentKeyword) params.set("keyword", currentKeyword);
      if (option !== "popular") params.set("sort", option);
      if (currentShopCollection) params.set("shopCollection", currentShopCollection);
      const q = params.toString();
      router.replace(q ? `/shop/${shopSlug}?${q}#product_list` : `/shop/${shopSlug}#product_list`);
    },
    [currentKeyword, currentShopCollection, router, shopSlug]
  );

  return (
    <section id="product_list" aria-label="All products" className="w-full pt-5">
      {currentKeyword && (
        <div className="mb-3 rounded-sm bg-white px-4 py-3 text-sm text-black/80 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          Results for <span className="font-medium text-black">{currentKeyword}</span>
        </div>
      )}

      <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-0">
        <ShopCategorySidebar
          categories={categories}
          currentShopCollection={currentShopCollection}
        />
        <div className="min-w-0 flex-1">
          <ShopAllProductsSortBar
            currentPage={safePage}
            totalPages={totalPages}
            sortOption={sortOption}
            onSortChange={handleSortChange}
            buildPageHref={buildPageHref}
          />
          {loading ? (
            <div className="mt-3 rounded-sm bg-white px-4 py-10 text-center text-gray-500 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              Loading products...
            </div>
          ) : items.length > 0 ? (
            <ShopAllProductsGrid items={items} />
          ) : (
            <div className="mt-3 rounded-sm bg-white px-4 py-10 text-center text-black/54 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              No products match this view yet.
            </div>
          )}
          {totalPages > 1 && (
            <ShopAllProductsPagination
              currentPage={safePage}
              totalPages={totalPages}
              buildPageHref={buildPageHref}
            />
          )}
        </div>
      </div>
    </section>
  );
}
