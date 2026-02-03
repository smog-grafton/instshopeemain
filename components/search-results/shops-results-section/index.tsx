import type { ShopsResultsSectionProps } from "./types";
import { ShopsResultsHeader } from "./shops-results-header";
import { ShopsResultsCard } from "./shops-results-card";

/**
 * "Shops related to keyword" section for the search results page.
 * Renders a section title, "More Shops" link, and one or more shop cards
 * (shop profile, product list, voucher, optional Ad badge).
 */
export function ShopsResultsSection({
  keyword,
  moreShopsHref,
  cards,
}: ShopsResultsSectionProps) {
  return (
    <div
      className="text-sm leading-tight text-black/80 pt-5"
      id="shops-results-section"
    >
      <ShopsResultsHeader keyword={keyword} moreShopsHref={moreShopsHref} />
      <div>
        {cards.map((card, index) => (
          <ShopsResultsCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export { getShopsResultsSectionData, MALL_BADGE_SRC } from "./data";
export type {
  ShopsResultCardData,
  ShopsResultProduct,
  ShopsResultShop,
  ShopsResultVoucher,
  ShopsResultsSectionProps,
} from "./types";
