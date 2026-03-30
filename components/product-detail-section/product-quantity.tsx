"use client";

import { useState } from "react";
import { IconMinus, IconPlus } from "./icons";

interface ProductQuantityProps {
  initialQuantity?: number;
  inStock: boolean;
  /** Controlled: current quantity */
  quantity?: number;
  onQuantityChange?: (q: number) => void;
}

export function ProductQuantity({
  initialQuantity = 1,
  inStock,
  quantity: controlledQty,
  onQuantityChange,
}: ProductQuantityProps) {
  const [internalQty, setInternalQty] = useState(initialQuantity);
  const min = 1;
  const quantity =
    onQuantityChange != null ? (controlledQty ?? initialQuantity) : internalQty;
  const setQuantity = (q: number | ((prev: number) => number)) => {
    const next = typeof q === "function" ? q(quantity) : q;
    if (onQuantityChange) onQuantityChange(next);
    else setInternalQty(next);
  };

  return (
    <section className="mt-4 flex flex-col gap-2 text-neutral-500 sm:flex-row sm:items-center">
      <h2 className="mr-2.5 w-20 shrink-0 text-sm font-normal capitalize text-neutral-500 sm:w-24">
        Quantity
      </h2>
      <div className="flex flex-wrap items-center gap-3">
        <div className="mr-0">
          <div className="items-center flex bg-white">
            <button
              type="button"
              aria-label="Decrease"
              className="[appearance:auto] tracking-[0] outline-0 justify-center items-center w-8 h-8 text-sm font-light leading-none transition-colors duration-100 ease-in-out flex rounded-sm border border-solid border-black/9 focus-visible:shadow-sm first:rounded-tr-none first:rounded-br-none disabled:opacity-50 disabled:cursor-not-allowed text-black/80 hover:bg-black/5 disabled:hover:bg-transparent"
              disabled={quantity <= min}
              onClick={() => setQuantity((q) => Math.max(min, q - 1))}
            >
              <IconMinus />
            </button>
            <input
              type="text"
              role="spinbutton"
              aria-live="assertive"
              aria-valuenow={quantity}
              aria-valuemin={min}
              value={quantity}
              readOnly
              className="py-px tracking-[0] outline-0 justify-center items-center transition-colors duration-100 ease-in-out flex border-y border-solid text-center w-12 h-8 text-base font-normal border-x-0 cursor-default text-black/80 border-black/9 focus-visible:shadow-sm"
            />
            <button
              type="button"
              aria-label="Increase"
              className="[appearance:auto] tracking-[0] outline-0 justify-center items-center w-8 h-8 text-sm font-light leading-none transition-colors duration-100 ease-in-out flex rounded-sm border border-solid border-black/9 focus-visible:shadow-sm last:rounded-tl-none last:rounded-bl-none disabled:opacity-50 disabled:cursor-not-allowed text-black/80 hover:bg-black/5 disabled:hover:bg-transparent [&_svg]:fill-current"
              disabled={!inStock}
              onClick={() => setQuantity((q) => q + 1)}
            >
              <IconPlus />
            </button>
          </div>
        </div>
        <div className="text-sm text-black/65">{inStock ? "IN STOCK" : "OUT OF STOCK"}</div>
      </div>
    </section>
  );
}
