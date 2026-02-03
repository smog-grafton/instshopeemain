"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useCallback } from "react";
import { getProductsForListing } from "@/components/category-product-listing/data";
import type { Product } from "@/components/category-product-listing/data";
import type { SearchSortOption } from "./search-filter-sort-bar";
import { SearchResultHeading } from "./search-result-heading";
import { SearchFilterSortBar } from "./search-filter-sort-bar";
import { SearchProductGrid } from "./search-product-grid";
import { SearchPagination } from "./search-pagination";

const PRODUCTS_PER_PAGE = 60;

function sortProducts(products: Product[], sort: SearchSortOption): Product[] {
  if (sort === "price_asc") {
    return [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  }
  if (sort === "price_desc") {
    return [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }
  if (sort === "latest") {
    return [...products].reverse();
  }
  return products;
}

export function SearchProductSection() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";
  const pageParam = searchParams.get("page");
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const [sortOption, setSortOption] = useState<SearchSortOption>("relevance");

  const { products: rawProducts, total } = useMemo(() => {
    return getProductsForListing({
      page: currentPage,
      perPage: PRODUCTS_PER_PAGE,
    });
  }, [currentPage]);

  // Pad first page to 60 products by cycling when mock has fewer (for 5×12 grid).
  const products = useMemo(() => {
    if (rawProducts.length >= PRODUCTS_PER_PAGE || currentPage > 1) return rawProducts;
    const padded: typeof rawProducts = [];
    for (let i = 0; i < PRODUCTS_PER_PAGE; i++) {
      const src = rawProducts[i % rawProducts.length]!;
      padded.push({ ...src, id: `${src.slug}-${i}`, slug: `${src.slug}-dup-${i}`, href: src.href });
    }
    return padded;
  }, [rawProducts, currentPage]);

  const sortedProducts = useMemo(
    () => sortProducts(products, sortOption),
    [products, sortOption]
  );

  const totalPages = Math.max(1, Math.ceil(total / PRODUCTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const buildPageHref = useCallback(
    (page: number) => {
      const params = new URLSearchParams();
      if (keyword) params.set("keyword", keyword);
      if (page > 1) params.set("page", String(page));
      const q = params.toString();
      return q ? `/search?${q}` : "/search";
    },
    [keyword]
  );

  return (
    <section aria-label="Search product results" className="w-full">
      <SearchResultHeading keyword={keyword || "..."} />
      <SearchFilterSortBar
        keyword={keyword}
        currentPage={safePage}
        totalPages={totalPages}
        sortOption={sortOption}
        onSortChange={setSortOption}
        buildPageHref={buildPageHref}
      />
      <div className="mt-3">
        <SearchProductGrid products={sortedProducts} />
      </div>
      {totalPages > 1 && (
        <SearchPagination
          currentPage={safePage}
          totalPages={totalPages}
          buildPageHref={buildPageHref}
        />
      )}
    </section>
  );
}
