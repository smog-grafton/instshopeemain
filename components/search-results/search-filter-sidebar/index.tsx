"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FilterFunnelIcon } from "./icons";
import {
  SHIPPED_FROM_OPTIONS,
  SHIPPING_OPTION_OPTIONS,
  SHOP_TYPE_OPTIONS,
  SERVICE_PROMOTION_OPTIONS,
  BY_CATEGORY_OPTIONS,
  BRAND_OPTIONS,
  PAYMENT_OPTION_OPTIONS,
  CONDITIONS_OPTIONS,
} from "./data";
import { FilterGroupWithMore } from "./FilterGroupWithMore";
import { PriceRangeField } from "./PriceRangeField";
import { RatingField } from "./RatingField";

const wrapperStyles =
  "flex-[0_0_190px] min-w-0 mr-5 mb-5";
const headerStyles =
  "uppercase text-black/80 justify-start items-center h-[30px] text-base font-bold flex";
const headerTitleStyles = "font-bold text-base flex-1 min-w-0";
const srOnlyStyles =
  "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 clip-[rect(0,0,0,0)] clip-path-[inset(100%)]";
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

export function SearchFilterSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize filters from URL params
  const getInitialFilters = useCallback(() => {
    const shippedFromParam = searchParams.get("shipped_from");
    const shippingOptionParam = searchParams.get("shipping_option");
    const shopTypeParam = searchParams.get("shop_type");
    const servicePromotionParam = searchParams.get("service_promotion");
    const categoryParam = searchParams.get("category");
    const brandParam = searchParams.get("brand");
    const paymentOptionParam = searchParams.get("payment_option");
    const conditionsParam = searchParams.get("conditions");
    const ratingParam = searchParams.get("rating");
    const minPriceParam = searchParams.get("min_price");
    const maxPriceParam = searchParams.get("max_price");

    return {
      shippedFrom: shippedFromParam ? shippedFromParam.split(",") : [],
      shippingOption: shippingOptionParam ? shippingOptionParam.split(",") : [],
      shopType: shopTypeParam ? shopTypeParam.split(",") : [],
      servicePromotion: servicePromotionParam ? servicePromotionParam.split(",") : [],
      byCategory: categoryParam ? categoryParam.split(",") : [],
      brand: brandParam ? brandParam.split(",") : [],
      paymentOption: paymentOptionParam ? paymentOptionParam.split(",") : [],
      conditions: conditionsParam ? conditionsParam.split(",") : [],
      rating: ratingParam ? parseFloat(ratingParam) : null,
      minPrice: minPriceParam || "",
      maxPrice: maxPriceParam || "",
    };
  }, [searchParams]);

  const initialFilters = getInitialFilters();
  const [shippedFrom, shippedFromActions] = useCheckboxSet(initialFilters.shippedFrom);
  const [shippingOption, shippingOptionActions] = useCheckboxSet(initialFilters.shippingOption);
  const [shopType, shopTypeActions] = useCheckboxSet(initialFilters.shopType);
  const [servicePromotion, servicePromotionActions] = useCheckboxSet(initialFilters.servicePromotion);
  const [byCategory, byCategoryActions] = useCheckboxSet(initialFilters.byCategory);
  const [brand, brandActions] = useCheckboxSet(initialFilters.brand);
  const [paymentOption, paymentOptionActions] = useCheckboxSet(initialFilters.paymentOption);
  const [conditions, conditionsActions] = useCheckboxSet(initialFilters.conditions);
  const [rating, setRating] = useState<number | null>(initialFilters.rating);
  const [minPrice, setMinPrice] = useState(initialFilters.minPrice);
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice);

  // Update URL when filters change
  const updateURL = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Remove filter params
    ["shipped_from", "shipping_option", "shop_type", "service_promotion", "category", "brand", "payment_option", "conditions", "rating", "min_price", "max_price"].forEach(key => {
      params.delete(key);
    });

    // Add active filters
    if (shippedFrom.size > 0) params.set("shipped_from", Array.from(shippedFrom).join(","));
    if (shippingOption.size > 0) params.set("shipping_option", Array.from(shippingOption).join(","));
    if (shopType.size > 0) params.set("shop_type", Array.from(shopType).join(","));
    if (servicePromotion.size > 0) params.set("service_promotion", Array.from(servicePromotion).join(","));
    if (byCategory.size > 0) params.set("category", Array.from(byCategory).join(","));
    if (brand.size > 0) params.set("brand", Array.from(brand).join(","));
    if (paymentOption.size > 0) params.set("payment_option", Array.from(paymentOption).join(","));
    if (conditions.size > 0) params.set("conditions", Array.from(conditions).join(","));
    if (rating !== null) params.set("rating", String(rating));
    if (minPrice) params.set("min_price", minPrice);
    if (maxPrice) params.set("max_price", maxPrice);

    router.push(`/search?${params.toString()}`);
  }, [shippedFrom, shippingOption, shopType, servicePromotion, byCategory, brand, paymentOption, conditions, rating, minPrice, maxPrice, searchParams, router]);

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

  const handlePriceApply = useCallback((min: string, max: string) => {
    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  const handleClearAll = useCallback(() => {
    shippedFromActions.clear();
    shippingOptionActions.clear();
    shopTypeActions.clear();
    servicePromotionActions.clear();
    byCategoryActions.clear();
    brandActions.clear();
    paymentOptionActions.clear();
    conditionsActions.clear();
    setRating(null);
    setMinPrice("");
    setMaxPrice("");
  }, [
    shippedFromActions,
    shippingOptionActions,
    shopTypeActions,
    servicePromotionActions,
    byCategoryActions,
    brandActions,
    paymentOptionActions,
    conditionsActions,
  ]);

  return (
    <aside className={wrapperStyles} aria-label="Search filters">
      <div className={headerStyles}>
        <span className="mr-2.5">
          <FilterFunnelIcon />
        </span>
        <h2 className={headerTitleStyles}>
          Search Filter
          <span className={srOnlyStyles}>No filters applied</span>
        </h2>
      </div>

      <FilterGroupWithMore
        legend="Shipped From"
        options={[...SHIPPED_FROM_OPTIONS]}
        selected={shippedFrom}
        onToggle={shippedFromActions.toggle}
      />
      <FilterGroupWithMore
        legend="Shipping Option"
        options={[...SHIPPING_OPTION_OPTIONS]}
        selected={shippingOption}
        onToggle={shippingOptionActions.toggle}
      />
      <FilterGroupWithMore
        legend="Shop Type"
        options={[...SHOP_TYPE_OPTIONS]}
        selected={shopType}
        onToggle={shopTypeActions.toggle}
      />
      <FilterGroupWithMore
        legend="Service & Promotion"
        options={[...SERVICE_PROMOTION_OPTIONS]}
        selected={servicePromotion}
        onToggle={servicePromotionActions.toggle}
      />

      <PriceRangeField onApply={handlePriceApply} initialMin={minPrice} initialMax={maxPrice} />

      <FilterGroupWithMore
        legend="By Category"
        options={[...BY_CATEGORY_OPTIONS]}
        selected={byCategory}
        onToggle={byCategoryActions.toggle}
      />
      <FilterGroupWithMore
        legend="Brand"
        options={[...BRAND_OPTIONS]}
        selected={brand}
        onToggle={brandActions.toggle}
      />
      <FilterGroupWithMore
        legend="Payment Option"
        options={[...PAYMENT_OPTION_OPTIONS]}
        selected={paymentOption}
        onToggle={paymentOptionActions.toggle}
      />

      <RatingField value={rating} onChange={setRating} />

      <FilterGroupWithMore
        legend="Conditions"
        options={[...CONDITIONS_OPTIONS]}
        selected={conditions}
        onToggle={conditionsActions.toggle}
      />

      <button
        type="button"
        aria-label="Clear all filters"
        className={clearAllButtonStyles}
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </aside>
  );
}
