"use client";

import { useState, useCallback } from "react";
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
  const [shippedFrom, shippedFromActions] = useCheckboxSet([]);
  const [shippingOption, shippingOptionActions] = useCheckboxSet([]);
  const [shopType, shopTypeActions] = useCheckboxSet([]);
  const [servicePromotion, servicePromotionActions] = useCheckboxSet([]);
  const [byCategory, byCategoryActions] = useCheckboxSet([]);
  const [brand, brandActions] = useCheckboxSet([]);
  const [paymentOption, paymentOptionActions] = useCheckboxSet([]);
  const [conditions, conditionsActions] = useCheckboxSet([]);
  const [rating, setRating] = useState<number | null>(null);

  const handlePriceApply = useCallback((min: string, max: string) => {
    // TODO: wire to URL or filter state when backend is ready
    console.log("Apply price range:", { min, max });
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

      <PriceRangeField onApply={handlePriceApply} />

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
