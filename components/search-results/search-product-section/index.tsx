"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useCallback, useEffect } from "react";
import { searchProducts, type ApiProduct } from "@/lib/api-client";
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
  const [loading, setLoading] = useState(true);
  const [rawProducts, setRawProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        // Get filter params from URL
        const filterParams: any = {};
        const shippedFrom = searchParams.get("shipped_from");
        const shippingOption = searchParams.get("shipping_option");
        const shopType = searchParams.get("shop_type");
        const servicePromotion = searchParams.get("service_promotion");
        const category = searchParams.get("category");
        const brand = searchParams.get("brand");
        const paymentOption = searchParams.get("payment_option");
        const conditions = searchParams.get("conditions");
        const rating = searchParams.get("rating");
        const minPrice = searchParams.get("min_price");
        const maxPrice = searchParams.get("max_price");

        if (shippedFrom) filterParams.shipped_from = shippedFrom;
        if (shippingOption) filterParams.shipping_option = shippingOption;
        if (shopType) filterParams.shop_type = shopType;
        if (servicePromotion) filterParams.service_promotion = servicePromotion;
        if (category) filterParams.category = category;
        if (brand) filterParams.brand = brand;
        if (paymentOption) filterParams.payment_option = paymentOption;
        if (conditions) filterParams.conditions = conditions;
        if (rating) filterParams.rating = rating;
        if (minPrice) filterParams.min_price = minPrice;
        if (maxPrice) filterParams.max_price = maxPrice;

        const response = await searchProducts({
          keyword: keyword || undefined,
          page: currentPage,
          per_page: PRODUCTS_PER_PAGE,
          ...filterParams,
        });
        const transformed: Product[] = response.products.map((p) => ({
          id: p.slug,
          slug: p.slug,
          title: p.title,
          price: p.price.toFixed(2),
          originalPrice: p.originalPrice ? p.originalPrice.toFixed(2) : undefined,
          imageSrc: p.imageSrc,
          soldCount: String(p.soldCount),
          rating: p.rating,
          location: p.location,
          href: `/product/${p.slug}`,
        }));
        setRawProducts(transformed);
        setTotal(response.pagination.total);
      } catch (error) {
        console.error("Failed to search products:", error);
        setRawProducts([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [keyword, currentPage, searchParams]);

  // Pad first page to 60 products by cycling when mock has fewer (for 5×12 grid).
  const products = useMemo(() => {
    if (rawProducts.length === 0) return [];
    if (rawProducts.length >= PRODUCTS_PER_PAGE || currentPage > 1) return rawProducts;
    const padded: typeof rawProducts = [];
    for (let i = 0; i < PRODUCTS_PER_PAGE; i++) {
      const src = rawProducts[i % rawProducts.length];
      if (!src) break;
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
      {loading ? (
        <div className="py-8 text-center text-gray-500">Searching products...</div>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}
