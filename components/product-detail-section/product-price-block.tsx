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
  const currentPriceLabel = priceMin === priceMax ? priceMin : `${priceMin} - ${priceMax}`;
  const originalPriceLabel = originalMin === originalMax ? originalMin : `${originalMin} - ${originalMax}`;
  const showOriginalPrice =
    Boolean(originalMin && originalMax) &&
    originalPriceLabel.trim() !== "" &&
    originalPriceLabel !== currentPriceLabel;

  return (
    <div className="mt-2.5">
      <div className="relative z-[2] flex flex-col bg-neutral-50 px-4 py-4 sm:px-5">
        <section aria-live="polite">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <div className="flex-none whitespace-nowrap text-2xl font-medium text-red-500 sm:text-3xl">
              {currentPriceLabel}
            </div>
            {showOriginalPrice && (
              <div className="flex-none whitespace-nowrap text-sm text-neutral-400 line-through sm:text-base">
                {originalPriceLabel}
              </div>
            )}
            {discountPercent > 0 && (
              <div className="inline-flex h-5 flex-none items-center justify-center whitespace-nowrap rounded-sm bg-rose-50 px-1 text-xs font-bold text-red-500">
                -{discountPercent}%
              </div>
            )}
          </div>
        </section>
        {!hideTeaserLine && priceTeaserText && (
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
