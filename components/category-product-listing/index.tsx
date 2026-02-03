"use client";

import { useState, useMemo } from "react";
import { CategoryFilterSidebar } from "./category-filter-sidebar";
import { ProductSortBar } from "./product-sort-bar";
import { ProductGrid } from "./product-grid";
import { CategoryPagination } from "./category-pagination";
import { getProductsForListing } from "./data";

interface CategoryProductListingProps {
  /** Category slug from /m/[slug] or [category] (e.g. mobile-accessories). */
  categorySlug?: string;
  /** Promo slug from /m/[slug] (e.g. free-shipping-deals). */
  promoSlug?: string;
}

const PRODUCTS_PER_PAGE = 60;

export function CategoryProductListing({
  categorySlug,
  promoSlug,
}: CategoryProductListingProps = {}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("popular");

  const { products, total } = useMemo(
    () =>
      getProductsForListing({
        categorySlug,
        promoSlug,
        page: currentPage,
        perPage: PRODUCTS_PER_PAGE,
      }),
    [categorySlug, promoSlug, currentPage]
  );

  const totalPages = Math.max(1, Math.ceil(total / PRODUCTS_PER_PAGE));
  const productsPerPage = PRODUCTS_PER_PAGE;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to first page on sort change
  };

  return (
    <div className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 w-[1200px] mx-auto flex gap-4 mt-5">
      <CategoryFilterSidebar />
      <div role="main" className="flex-1">
        <section aria-label="Product Listing">
          <ProductSortBar
            currentPage={currentPage}
            totalPages={totalPages}
            productsPerPage={productsPerPage}
            totalItems={total}
            sortOption={sortOption}
            onSortChange={handleSortChange}
            onPageChange={handlePageChange}
          />
          <ProductGrid products={products} />
          <CategoryPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </div>
  );
}
