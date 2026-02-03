"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface ProductSortBarProps {
  currentPage: number;
  totalPages: number;
  productsPerPage: number;
  /** Total number of products (for display). If not set, uses totalPages * productsPerPage */
  totalItems?: number;
  sortOption: string;
  onSortChange: (option: string) => void;
  onPageChange: (page: number) => void;
}

export function ProductSortBar({
  currentPage,
  totalPages,
  productsPerPage,
  totalItems: totalItemsProp,
  sortOption,
  onSortChange,
  onPageChange,
}: ProductSortBarProps) {
  const totalItems = totalItemsProp ?? totalPages * productsPerPage;
  const startItem = (currentPage - 1) * productsPerPage + 1;
  const endItem = Math.min(currentPage * productsPerPage, totalItems);

  const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "latest", label: "Latest" },
    { value: "top_sales", label: "Top Sales" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
  ];

  return (
    <div className="bg-black/[0.02] rounded-sm px-5 py-3 mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-black/80">Sort By</span>
        <div className="flex items-center gap-2">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                sortOption === option.value
                  ? "bg-[rgb(238,77,45)] text-white"
                  : "bg-white text-black/80 hover:bg-black/5"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-black/80">
          <span className="text-[rgb(238,77,45)]">
            {startItem}-{endItem}
          </span>
          <span>/</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`w-8 h-8 flex items-center justify-center rounded-sm ${
              currentPage === 1
                ? "bg-white cursor-not-allowed opacity-50"
                : "bg-white hover:bg-black/5 cursor-pointer"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 flex items-center justify-center rounded-sm ${
              currentPage === totalPages
                ? "bg-white cursor-not-allowed opacity-50"
                : "bg-white hover:bg-black/5 cursor-pointer"
            }`}
            aria-label="Next page"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
