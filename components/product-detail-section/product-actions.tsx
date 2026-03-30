"use client";

import { IconAddToCart } from "./icons";

interface ProductActionsProps {
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  addToCartDisabled?: boolean;
  validationError?: string | null;
}

export function ProductActions({
  onAddToCart,
  onBuyNow,
  addToCartDisabled = false,
  validationError,
}: ProductActionsProps) {
  return (
    <div className="mb-2 mt-6 sm:mb-4 sm:mt-8">
      <div className="pl-0 sm:pl-1">
        {validationError && (
          <p className="text-red-500 text-sm mb-2" role="alert">
            {validationError}
          </p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="[appearance:auto] flex h-12 w-full items-center justify-center rounded-sm border border-solid border-red-500 bg-orange-600/10 px-5 text-sm capitalize text-red-500 shadow-sm outline-0 focus-visible:before:absolute focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:-m-1 focus-visible:before:h-[calc(100%+8px)] focus-visible:before:w-[calc(100%+8px)] focus-visible:before:rounded-sm focus-visible:before:p-1 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:outline-black/87 hover:bg-orange-200/18 active:bg-orange-900/15 active:shadow-inner disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-44 sm:max-w-64"
            aria-disabled={addToCartDisabled}
            disabled={addToCartDisabled}
            onClick={onAddToCart}
          >
            <IconAddToCart />
            <span className="ml-2.5">add to cart</span>
          </button>
          <button
            type="button"
            className="[appearance:auto] flex h-12 w-full flex-col items-center justify-center rounded-sm border-0 bg-red-500 px-5 text-sm capitalize text-white shadow-sm outline-0 focus-visible:before:absolute focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:-m-1 focus-visible:before:h-[calc(100%+8px)] focus-visible:before:w-[calc(100%+8px)] focus-visible:before:rounded-sm focus-visible:before:p-1 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:outline-black/87 hover:bg-red-600 active:bg-red-600 active:shadow-inner disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-44"
            aria-disabled={addToCartDisabled}
            disabled={addToCartDisabled}
            onClick={onBuyNow}
          >
            buy now
          </button>
        </div>
      </div>
    </div>
  );
}
