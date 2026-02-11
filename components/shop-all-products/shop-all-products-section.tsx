"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState, useCallback, useEffect } from "react";
import {
  type ShopAllProductsSort,
  type ShopAllProductItem,
  type ShopSidebarCategory,
} from "./data";
import { ShopCategorySidebar } from "./shop-category-sidebar";
import { ShopAllProductsSortBar } from "./shop-all-products-sort-bar";
import { ShopAllProductsGrid } from "./shop-all-products-grid";
import { ShopAllProductsPagination } from "./shop-all-products-pagination";
import { getShopProducts, getShopCollectionProducts, getShopNavigation } from "@/lib/api-client";

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

  const [categories, setCategories] = useState<ShopSidebarCategory[]>([]);
  const [items, setItems] = useState<ShopAllProductItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch navigation for sidebar categories
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
          const params = new URLSearchParams(href.slice(q));
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
        // Fallback to empty categories
        setCategories([{
          label: "All Products",
          href: `/shop/${shopSlug}#product_list`,
          isAllProducts: true,
        }]);
      }
    }
    fetchNavigation();
  }, [shopSlug]);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let response;
        if (currentShopCollection) {
          // Fetch collection products
          const collectionResponse = await getShopCollectionProducts(shopSlug, {
            shopCollection: currentShopCollection,
            limit: 100, // Get all collection products, pagination handled client-side
          });
          // Transform to paginated response format
          const perPage = 10;
          const start = (currentPage - 1) * perPage;
          const end = start + perPage;
          const paginatedProducts = collectionResponse.products.slice(start, end);
          response = {
            products: paginatedProducts,
            pagination: {
              page: currentPage,
              per_page: perPage,
              total: collectionResponse.products.length,
              last_page: Math.ceil(collectionResponse.products.length / perPage),
            },
          };
        } else {
          // Fetch all shop products
          response = await getShopProducts(shopSlug, {
            page: currentPage,
            per_page: 10,
          });
        }
        const transformedItems: ShopAllProductItem[] = response.products.map((p) => {
          const item: ShopAllProductItem = {
            slug: p.slug,
            title: p.title,
            shopId: p.shopId,
            categorySlug: p.categorySlug,
            price: p.price,
            originalPrice: p.originalPrice ?? undefined, // Convert null to undefined
            imageSrc: p.imageSrc,
            soldCount: p.soldCount,
            rating: p.rating,
            location: p.location,
            storeName: shopSlug, // We can enhance this later with shop name
          };
          // Only include optional fields if they have values (not null)
          if (p.promotionLabel != null) {
            item.promotionLabel = p.promotionLabel;
          }
          if (p.textBadges) {
            item.textBadges = p.textBadges;
          }
          if (p.imageBadges) {
            item.imageBadges = p.imageBadges;
          }
          return item;
        });
        setItems(transformedItems);
        setTotalPages(response.pagination.last_page);
      } catch (error) {
        console.error("Failed to fetch shop products:", error);
        setItems([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [shopSlug, currentPage, sortOption, currentShopCollection]);

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
        {loading ? (
          <div className="py-8 text-center text-gray-500">Loading products...</div>
        ) : (
          <ShopAllProductsGrid items={items} />
        )}
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
