"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getCategoryFilterOptions, type CategoryFilterOptions } from "@/lib/api-client";
import { FilterIcon } from "./icons";
import { FilterGroupWithMore } from "../search-results/search-filter-sidebar/FilterGroupWithMore";
import { PriceRangeField } from "../search-results/search-filter-sidebar/PriceRangeField";
import { RatingField } from "../search-results/search-filter-sidebar/RatingField";

interface CategoryFilterSidebarProps {
  categoryId?: number;
}

const wrapperStyles = "w-[190px] flex-shrink-0";
const headerStyles = "flex items-center gap-2 pb-4";
const headerTitleStyles = "font-bold text-base";
const clearAllButtonStyles =
  "bg-[rgb(238,77,45)] uppercase w-full h-[30px] mt-5 font-normal outline-none relative overflow-visible cursor-pointer text-white select-none border-0 rounded-sm justify-center items-center text-sm leading-[14px] flex shadow-[0_1px_1px_rgba(0,0,0,0.09)] hover:opacity-90";

function useCheckboxSet(initial: string[] = []) {
  const [set, setSet] = useState<Set<string>>(() => new Set(initial));
  const toggle = useCallback((value: string) => {
    setSet((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }, []);
  const clear = useCallback(() => setSet(new Set()), []);
  return [set, { toggle, clear }] as const;
}

export function CategoryFilterSidebar({ categoryId }: CategoryFilterSidebarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filterOptions, setFilterOptions] = useState<CategoryFilterOptions | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize filters from URL params
  const getInitialFilters = useCallback(() => {
    const subcategoryIdsParam = searchParams.get("subcategory_ids");
    const brandsParam = searchParams.get("brands");
    const shippingOptionsParam = searchParams.get("shipping_options");
    const servicePromotionsParam = searchParams.get("service_promotions");
    const ratingParam = searchParams.get("rating");
    const minPriceParam = searchParams.get("min_price");
    const maxPriceParam = searchParams.get("max_price");

    return {
      subcategoryIds: subcategoryIdsParam ? subcategoryIdsParam.split(",") : [],
      brands: brandsParam ? brandsParam.split(",") : [],
      shippingOptions: shippingOptionsParam ? shippingOptionsParam.split(",") : [],
      servicePromotions: servicePromotionsParam ? servicePromotionsParam.split(",") : [],
      rating: ratingParam ? parseFloat(ratingParam) : null,
      minPrice: minPriceParam || "",
      maxPrice: maxPriceParam || "",
    };
  }, [searchParams]);

  const initialFilters = getInitialFilters();
  const [subcategoryIds, subcategoryIdsActions] = useCheckboxSet(initialFilters.subcategoryIds);
  const [brands, brandsActions] = useCheckboxSet(initialFilters.brands);
  const [shippingOptions, shippingOptionsActions] = useCheckboxSet(initialFilters.shippingOptions);
  const [servicePromotions, servicePromotionsActions] = useCheckboxSet(initialFilters.servicePromotions);
  const [rating, setRating] = useState<number | null>(initialFilters.rating);
  const [minPrice, setMinPrice] = useState(initialFilters.minPrice);
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice);

  // Fetch filter options from backend
  useEffect(() => {
    if (!categoryId) {
      setLoading(false);
      return;
    }

    async function fetchFilterOptions() {
      try {
        setLoading(true);
        const response = await getCategoryFilterOptions(categoryId);
        setFilterOptions(response.filterOptions);
      } catch (error) {
        console.error("Failed to fetch filter options:", error);
        setFilterOptions({
          subcategories: [],
          brands: [],
          shippingOptions: [],
          servicePromotions: [],
        });
      } finally {
        setLoading(false);
      }
    }

    fetchFilterOptions();
  }, [categoryId]);

  // Update URL when filters change
  const updateURL = useCallback(() => {
    if (!categoryId) return;

    const params = new URLSearchParams(searchParams.toString());

    // Remove filter params
    [
      "subcategory_ids",
      "brands",
      "shipping_options",
      "service_promotions",
      "rating",
      "min_price",
      "max_price",
      "page", // Reset to page 1 when filters change
    ].forEach((key) => {
      params.delete(key);
    });

    // Add active filters
    if (subcategoryIds.size > 0) {
      params.set("subcategory_ids", Array.from(subcategoryIds).join(","));
    }
    if (brands.size > 0) {
      params.set("brands", Array.from(brands).join(","));
    }
    if (shippingOptions.size > 0) {
      params.set("shipping_options", Array.from(shippingOptions).join(","));
    }
    if (servicePromotions.size > 0) {
      params.set("service_promotions", Array.from(servicePromotions).join(","));
    }
    if (rating !== null) {
      params.set("rating", String(rating));
    }
    if (minPrice) {
      params.set("min_price", minPrice);
    }
    if (maxPrice) {
      params.set("max_price", maxPrice);
    }

    // Get current pathname (should be like /mobile-accessories-cat.1)
    const pathname = window.location.pathname;
    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`);
  }, [
    subcategoryIds,
    brands,
    shippingOptions,
    servicePromotions,
    rating,
    minPrice,
    maxPrice,
    searchParams,
    router,
    categoryId,
  ]);

  // Update URL when filters change (debounced) - but not on initial mount
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const timer = setTimeout(() => {
      updateURL();
    }, 500);
    return () => clearTimeout(timer);
  }, [updateURL]);

  const handlePriceApply = useCallback(
    (min: string, max: string) => {
      setMinPrice(min);
      setMaxPrice(max);
      // Price apply triggers immediate update (not debounced)
      setTimeout(() => {
        updateURL();
      }, 100);
    },
    [updateURL]
  );

  const handleClearAll = useCallback(() => {
    subcategoryIdsActions.clear();
    brandsActions.clear();
    shippingOptionsActions.clear();
    servicePromotionsActions.clear();
    setRating(null);
    setMinPrice("");
    setMaxPrice("");
  }, [
    subcategoryIdsActions,
    brandsActions,
    shippingOptionsActions,
    servicePromotionsActions,
  ]);

  // Convert subcategories to FilterGroupWithMore format
  const subcategoryOptions =
    filterOptions?.subcategories.map((sub) => ({
      value: String(sub.id),
      label: sub.name,
    })) || [];

  // Convert brands to FilterGroupWithMore format
  const brandOptions = filterOptions?.brands.map((brand) => ({
    value: brand,
    label: brand,
  })) || [];

  // Convert shipping options to FilterGroupWithMore format
  const shippingOptionItems = filterOptions?.shippingOptions.map((option) => ({
    value: option,
    label: option,
  })) || [];

  // Convert service promotions to FilterGroupWithMore format
  const servicePromotionItems = filterOptions?.servicePromotions.map((option) => ({
    value: option,
    label: option,
  })) || [];

  return (
    <aside className={wrapperStyles} aria-label="Category filters">
      <div className={headerStyles}>
        <FilterIcon />
        <h2 className={headerTitleStyles}>Filter</h2>
      </div>

      {loading ? (
        <div className="py-4 text-center text-sm text-gray-500">Loading filters...</div>
      ) : (
        <>
          {/* By Category (Subcategories) */}
          {subcategoryOptions.length > 0 && (
            <FilterGroupWithMore
              legend="By Category"
              options={subcategoryOptions}
              selected={subcategoryIds}
              onToggle={subcategoryIdsActions.toggle}
            />
          )}

          {/* Brand */}
          {brandOptions.length > 0 && (
            <FilterGroupWithMore
              legend="Brand"
              options={brandOptions}
              selected={brands}
              onToggle={brandsActions.toggle}
            />
          )}

          {/* Price Range */}
          <PriceRangeField
            onApply={handlePriceApply}
            initialMin={minPrice}
            initialMax={maxPrice}
          />

          {/* Rating */}
          <RatingField value={rating} onChange={setRating} />

          {/* Shipping Options */}
          {shippingOptionItems.length > 0 && (
            <FilterGroupWithMore
              legend="Shipping Options"
              options={shippingOptionItems}
              selected={shippingOptions}
              onToggle={shippingOptionsActions.toggle}
            />
          )}

          {/* Service & Promotion */}
          {servicePromotionItems.length > 0 && (
            <FilterGroupWithMore
              legend="Service & Promotion"
              options={servicePromotionItems}
              selected={servicePromotions}
              onToggle={servicePromotionsActions.toggle}
            />
          )}

          {/* Clear All Button */}
          <button
            type="button"
            aria-label="Clear all filters"
            className={clearAllButtonStyles}
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </>
      )}
    </aside>
  );
}
