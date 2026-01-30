interface ProductPriceBlockProps {
  priceMin: string;
  priceMax: string;
  originalMin: string;
  originalMax: string;
  discountPercent: number;
  priceTeaserText: string;
  /** When true (e.g. when LowerPricesBanner is shown), the red teaser line is hidden. */
  hideTeaserLine?: boolean;
}

export function ProductPriceBlock({
  priceMin,
  priceMax,
  originalMin,
  originalMax,
  discountPercent,
  priceTeaserText,
  hideTeaserLine = false,
}: ProductPriceBlockProps) {
  return (
    <div className="mt-2.5">
      <div className="flex flex-col z-[2] bg-neutral-50 relative px-5 py-4">
        <section aria-live="polite">
          <div className="items-center flex">
            <div className="text-red-500 text-3xl font-medium whitespace-nowrap flex-none">
              {priceMin} - {priceMax}
            </div>
            <div className="text-neutral-400 text-base line-through whitespace-nowrap flex-none ml-2.5">
              {originalMin} - {originalMax}
            </div>
            <div className="whitespace-nowrap flex-none text-red-500 bg-rose-50 justify-center items-center h-5 text-xs font-bold inline-flex ml-2.5 px-1 rounded-sm">
              -{discountPercent}%
            </div>
          </div>
        </section>
        {!hideTeaserLine && (
          <div className="text-red-500 items-center h-5 flex my-2.5">
            <div className="shrink-0 h-5 mr-2.5 w-5 bg-red-500/20 rounded" aria-hidden />
            <div className="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden">
              <span>{priceTeaserText}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
