"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryFilterSidebar } from "./category-filter-sidebar";
import { ProductSortBar } from "./product-sort-bar";
import { ProductGrid } from "./product-grid";
import { CategoryPagination } from "./category-pagination";
import { getProducts, getCategoryProducts, type ApiProduct } from "@/lib/api-client";
import { formatPrice } from "@/lib/utils";
import { productRecordToProduct } from "./data";
import type { Product } from "./data";

interface CategoryProductListingProps {
  /** Category ID from [category] route (e.g. 11000979). */
  categoryId?: number;
  /** Category slug from /m/[slug] or [category] (e.g. mobile-accessories) - for backward compatibility. */
  categorySlug?: string;
  /** Promo slug from /m/[slug] (e.g. free-shipping-deals). */
  promoSlug?: string;
}

const PRODUCTS_PER_PAGE = 60;

export function CategoryProductListing({
  categoryId,
  categorySlug,
  promoSlug,
}: CategoryProductListingProps = {}) {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("popular");
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // Read filter parameters from URL
  const getFilterParams = () => {
    const subcategoryIdsParam = searchParams.get("subcategory_ids");
    const brandsParam = searchParams.get("brands");
    const shippingOptionsParam = searchParams.get("shipping_options");
    const servicePromotionsParam = searchParams.get("service_promotions");
    const ratingParam = searchParams.get("rating");
    const minPriceParam = searchParams.get("min_price");
    const maxPriceParam = searchParams.get("max_price");
    const pageParam = searchParams.get("page");

    return {
      subcategory_ids: subcategoryIdsParam
        ? subcategoryIdsParam.split(",").map(Number).filter((n) => !isNaN(n))
        : undefined,
      brands: brandsParam ? brandsParam.split(",").map((b) => b.trim()) : undefined,
      shipping_options: shippingOptionsParam
        ? shippingOptionsParam.split(",").map((s) => s.trim())
        : undefined,
      service_promotions: servicePromotionsParam
        ? servicePromotionsParam.split(",").map((s) => s.trim())
        : undefined,
      rating: ratingParam ? parseFloat(ratingParam) : undefined,
      min_price: minPriceParam ? parseFloat(minPriceParam) : undefined,
      max_price: maxPriceParam ? parseFloat(maxPriceParam) : undefined,
      page: pageParam ? parseInt(pageParam, 10) : currentPage,
    };
  };

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const filterParams = getFilterParams();
        const page = filterParams.page || currentPage;

        let response;

        // Use categoryId if available, otherwise fallback to categorySlug
        if (categoryId) {
          response = await getCategoryProducts(categoryId, {
            page,
            per_page: PRODUCTS_PER_PAGE,
            subcategory_ids: filterParams.subcategory_ids,
            brands: filterParams.brands,
            shipping_options: filterParams.shipping_options,
            service_promotions: filterParams.service_promotions,
            rating: filterParams.rating,
            min_price: filterParams.min_price,
            max_price: filterParams.max_price,
          });
        } else {
          response = await getProducts({
            category: categorySlug,
            page,
            per_page: PRODUCTS_PER_PAGE,
          });
        }

        // Transform API products to Product format
        const apiProducts = response.products;
        const transformedProducts: Product[] = apiProducts.map((p: ApiProduct) => ({
          id: p.slug,
          slug: p.slug,
          title: p.title,
          price: formatPrice(p.currencySymbol, p.price),
          originalPrice: p.originalPrice ? formatPrice(p.currencySymbol, p.originalPrice) : undefined,
          discount: p.originalPrice
            ? Math.round((1 - p.price / p.originalPrice) * 100)
            : undefined,
          imageSrc: p.imageSrc,
          soldCount:
            p.soldCount >= 1000
              ? `${(p.soldCount / 1000).toFixed(1)}k`
              : String(p.soldCount),
          rating: p.rating,
          location: p.location,
          textBadges: Array.isArray(p.textBadges) ? (p.textBadges as Product["textBadges"]) : undefined,
          imageBadges: Array.isArray(p.imageBadges) ? (p.imageBadges as Product["imageBadges"]) : undefined,
          promotionLabel: p.promotionLabel || undefined,
          href: `/product/${p.slug}`,
        }));

        setProducts(transformedProducts);
        setTotal(response.pagination.total);
        setCurrentPage(page);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categoryId, categorySlug, promoSlug, searchParams.toString()]);

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
      <CategoryFilterSidebar categoryId={categoryId} />
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
          {loading ? (
            <div className="py-8 text-center text-gray-500">Loading products...</div>
          ) : (
            <>
              <ProductGrid products={products} />
              <CategoryPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
}
