"use client";

import Image from "next/image";
import { useState } from "react";
import { IconArrowRight } from "./icons";
import type { ProductDetailSectionData } from "./data";

const VARIANT_BTN =
  "[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 pr-2 py-2 rounded-sm border border-solid text-black/80 border-black/9 pl-10 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87";

const SIZE_BTN =
  "[appearance:auto] cursor-pointer text-left [word-break:break-word] bg-white outline-0 justify-center items-center min-w-20 min-h-10 inline-flex relative mr-2 mt-2 p-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+4px)] focus-visible:before:h-[calc(100%+4px)] focus-visible:before:absolute focus-visible:before:-m-0.5 focus-visible:before:p-0.5 focus-visible:before:rounded-sm focus-visible:before:-left-0.5 focus-visible:before:-top-0.5 focus-visible:before:outline-black/87";

interface ProductVariantsProps {
  colors: ProductDetailSectionData["colors"];
  sizes: string[];
  /** Controlled: selected color index */
  selectedColorIndex?: number;
  /** Controlled: selected size index (null = none) */
  selectedSizeIndex?: number | null;
  onColorSelect?: (index: number) => void;
  onSizeSelect?: (index: number | null) => void;
}

export function ProductVariants({
  colors,
  sizes,
  selectedColorIndex: controlledColor,
  selectedSizeIndex: controlledSize,
  onColorSelect,
  onSizeSelect,
}: ProductVariantsProps) {
  const [internalColor, setInternalColor] = useState(0);
  const [internalSize, setInternalSize] = useState<number | null>(null);

  const selectedColorIndex = onColorSelect != null ? (controlledColor ?? 0) : internalColor;
  const selectedSizeIndex = onSizeSelect != null ? (controlledSize ?? null) : internalSize;

  const handleColor = (i: number) => {
    if (onColorSelect) onColorSelect(i);
    else setInternalColor(i);
  };
  const handleSize = (i: number | null) => {
    if (onSizeSelect) onSizeSelect(i);
    else setInternalSize(i);
  };

  if (colors.length === 0 && sizes.length === 0) {
    return null;
  }

  return (
    <div className="px-1 pb-4 pt-1 text-neutral-800">
      <div className="flex flex-col gap-5">
        {colors.length > 0 && (
        <section className="flex flex-col gap-2 sm:flex-row sm:items-baseline">
          <h2 className="mr-2.5 w-20 shrink-0 text-sm font-normal capitalize text-neutral-500 sm:w-24">
            Color
          </h2>
          <div>
            <div className="-mt-2 flex max-h-56 max-w-2xl flex-wrap items-center overflow-y-auto">
              {colors.map((color, i) => (
                <button
                  key={color.label}
                  type="button"
                  className={`${VARIANT_BTN} ${selectedColorIndex === i ? "text-red-500 border-red-500" : ""}`}
                  aria-label={color.label}
                  aria-pressed={selectedColorIndex === i}
                  onClick={() => handleColor(i)}
                >
                  <Image
                    src={color.imagePath}
                    alt=""
                    width={24}
                    height={24}
                    className="inline align-bottom w-6 h-6 absolute -translate-y-2/4 left-2 top-2/4 object-contain"
                  />
                  <span className="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden line-clamp-2">
                    {color.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
        )}
        {sizes.length > 0 && (
        <section className="flex flex-col gap-2 sm:flex-row sm:items-baseline">
          <h2 className="mr-2.5 w-20 shrink-0 text-sm font-normal capitalize text-neutral-500 sm:w-24">
            Size
          </h2>
          <div>
            <div className="-mt-2 flex max-h-56 max-w-2xl flex-wrap items-center overflow-y-auto">
              {sizes.map((size, i) => (
                <button
                  key={size}
                  type="button"
                  className={`${SIZE_BTN} ${selectedSizeIndex === i ? "text-red-500 border-red-500" : ""}`}
                  aria-label={size}
                  aria-pressed={selectedSizeIndex === i}
                  onClick={() => handleSize(selectedSizeIndex === i ? null : i)}
                >
                  <span className="[-webkit-line-clamp:2] text-ellipsis [word-break:break-word] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">
                    {size}
                  </span>
                </button>
              ))}
            </div>
            <div className="text-sm leading-4 mt-3 text-black/65">
              <div className="items-center flex">
                <a
                  href="#size-guide"
                  className="text-blue-800 cursor-pointer align-middle text-sm leading-5 inline-flex items-center gap-0.5"
                >
                  <span className="align-middle">Size Guide</span>
                  <IconArrowRight className="inline h-5 w-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </section>
        )}
      </div>
    </div>
  );
}
