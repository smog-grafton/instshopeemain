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
    <div className="mt-4 mb-8">
      <div className="pl-5">
        {validationError && (
          <p className="text-red-500 text-sm mb-2" role="alert">
            {validationError}
          </p>
        )}
        <div className="flex">
          <button
            type="button"
            className="[appearance:auto] min-w-44 text-sm mr-4 text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer justify-center items-center flex rounded-sm max-w-64 h-12 px-5 outline-0 relative text-red-500 shadow-sm border border-solid border-red-500 bg-orange-600/10 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-orange-200/18 active:shadow-inner active:bg-orange-900/15 disabled:opacity-60 disabled:cursor-not-allowed"
            aria-disabled={addToCartDisabled}
            disabled={addToCartDisabled}
            onClick={onAddToCart}
          >
            <IconAddToCart />
            <span className="ml-2.5">add to cart</span>
          </button>
          <button
            type="button"
            className="[appearance:auto] min-w-44 text-sm mr-4 text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center flex shadow-sm rounded-sm border-0 h-12 px-5 text-white outline-0 relative bg-red-500 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-red-600 active:bg-red-600 active:shadow-inner disabled:opacity-60 disabled:cursor-not-allowed"
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
