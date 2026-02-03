import type { ShopsResultCardData } from "./types";
import { ShopProfileBlock } from "./shop-profile-block";
import { ShopsResultsProductCard } from "./shops-results-product-card";
import { ShopsResultsVoucherCard } from "./shops-results-voucher-card";

interface ShopsResultsCardProps {
  card: ShopsResultCardData;
}

/**
 * Single "shops related to keyword" card: shop profile, product list, voucher, optional Ad badge.
 */
export function ShopsResultsCard({ card }: ShopsResultsCardProps) {
  const { shop, products, voucher, isAd } = card;

  return (
    <div className="cursor-pointer bg-white items-center flex relative px-6 text-black/87">
      <div aria-label="" className="flex-col items-center flex relative mr-6">
        <div aria-hidden className="z-[1] absolute inset-0" />
        <div aria-hidden className="z-[2]">
          <ShopProfileBlock shop={shop} />
        </div>
      </div>
      <ul aria-label="" className="flex-wrap h-full flex list-none flex-1">
        {products.map((product, index) => (
          <li key={index} className="w-3/12 p-3">
            <div className="[tab-size:4] contents">
              <ShopsResultsProductCard product={product} />
            </div>
          </li>
        ))}
        <li className="w-3/12 p-3">
          <div aria-label="" className="h-full">
            <ShopsResultsVoucherCard voucher={voucher} />
          </div>
        </li>
      </ul>
      {isAd && (
        <div
          aria-hidden
          className="text-white absolute px-1 py-0.5 rounded-tl right-0 bottom-0 bg-black/26"
        >
          Ad
        </div>
      )}
    </div>
  );
}
