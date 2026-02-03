"use client";

import { useState } from "react";
import { categoryFilters } from "./data";
import { FilterIcon } from "./icons";

export function CategoryFilterSidebar() {
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handlePriceApply = () => {
    // Handle price filter application
    console.log("Applying price filter:", { priceMin, priceMax });
  };

  return (
    <aside className="w-[190px] flex-shrink-0">
      {/* Filter Header */}
      <div className="flex items-center gap-2 pb-4">
        <FilterIcon />
        <span className="font-bold text-base">Filter</span>
      </div>

      {/* Category Filter */}
      <div className="border-t border-black/10 pt-4 pb-5">
        <h3 className="font-bold text-sm capitalize mb-3">By Category</h3>
        <div className="space-y-2">
          {categoryFilters.category.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-[rgb(238,77,45)]"
                checked={selectedCategories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, category]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== category)
                    );
                  }
                }}
              />
              <span className="text-sm text-black/80">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="border-t border-black/10 pt-4 pb-5">
        <h3 className="font-bold text-sm capitalize mb-3">Brand</h3>
        <div className="space-y-2">
          {categoryFilters.brand.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[rgb(238,77,45)]"
                checked={selectedBrands.includes(brand)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedBrands([...selectedBrands, brand]);
                  } else {
                    setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                  }
                }}
              />
              <span className="text-sm text-black/80">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="border-t border-black/10 pt-4 pb-5">
        <h3 className="font-bold text-sm capitalize mb-3">Price Range</h3>
        <div className="space-y-2">
          {categoryFilters.priceRange.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-[rgb(238,77,45)]"
              />
              <span className="text-sm text-black/80">{range.label}</span>
            </label>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="w-full px-2 py-1 border border-black/10 rounded text-sm focus:border-[rgb(238,77,45)] focus:outline-none"
            />
            <span className="text-black/40">-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="w-full px-2 py-1 border border-black/10 rounded text-sm focus:border-[rgb(238,77,45)] focus:outline-none"
            />
          </div>
          <button
            onClick={handlePriceApply}
            className="w-full mt-2 py-1 bg-[rgb(238,77,45)] text-white text-sm rounded hover:bg-[rgb(238,77,45)]/90"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="border-t border-black/10 pt-4 pb-5">
        <h3 className="font-bold text-sm capitalize mb-3">Rating</h3>
        <div className="space-y-2">
          {categoryFilters.rating.map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-[rgb(238,77,45)]"
                checked={selectedRating === rating}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedRating(rating);
                  } else {
                    setSelectedRating(null);
                  }
                }}
              />
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 9.5 8"
                    className={`w-2.5 h-2.5 ${
                      i < rating ? "fill-[rgb(238,77,45)]" : "fill-black/10"
                    }`}
                  >
                    <defs>
                      <linearGradient
                        id={`star-${rating}-${i}`}
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                      >
                        <stop offset="100%" stopColor="rgb(238,77,45)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="m6.8 7.2-2.2-1.2-2.2 1.2.4-2.5L.9 2.9l2.5-.3L4.6 0l1.1 2.5 2.5.4-1.8 1.8z"
                      fill={i < rating ? "rgb(238,77,45)" : "rgba(0,0,0,0.1)"}
                    />
                  </svg>
                ))}
                <span className="text-sm text-black/80 ml-1">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Shipping Options */}
      <div className="border-t border-black/10 pt-4 pb-5">
        <h3 className="font-bold text-sm capitalize mb-3">Shipping Options</h3>
        <div className="space-y-2">
          {categoryFilters.shipping.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-[rgb(238,77,45)]"
              />
              <span className="text-sm text-black/80">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Service & Promotion */}
      <div className="border-t border-black/10 pt-4 pb-5">
        <h3 className="font-bold text-sm capitalize mb-3">
          Service & Promotion
        </h3>
        <div className="space-y-2">
          {categoryFilters.serviceAndPromotion.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-[rgb(238,77,45)]"
              />
              <span className="text-sm text-black/80">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear All Button */}
      <button className="w-full py-2 text-sm text-black/80 bg-white border border-black/10 rounded hover:bg-black/5">
        Clear All
      </button>
    </aside>
  );
}
