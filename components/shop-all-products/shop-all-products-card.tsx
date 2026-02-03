"use client";

import Image from "next/image";
import Link from "next/link";
import type { ShopAllProductItem } from "./data";

const FLAG_ICON = "/images/stores/logos/sate-icon.jpeg";
const MALL_FULFILLED_IMAGE = "/images/stores/assets/mallfulfilled.png";

const RATING_STAR_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-2.5 w-2.5 text-amber-500"
    aria-hidden
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

function formatSold(count: number): string {
  if (count >= 10000) return "10k+";
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return `${count}`;
}

function discountPercent(price: number, originalPrice?: number): number | null {
  if (originalPrice == null || originalPrice <= 0 || originalPrice <= price)
    return null;
  return Math.round((1 - price / originalPrice) * 100);
}

interface ShopAllProductsCardProps {
  item: ShopAllProductItem;
}

export function ShopAllProductsCard({ item }: ShopAllProductsCardProps) {
  const {
    slug,
    title,
    imageSrc,
    price,
    originalPrice,
    soldCount,
    storeName,
    rating,
    textBadges,
  } = item;

  const hasCod = textBadges?.includes("cod") ?? false;
  const discountPct = discountPercent(price, originalPrice);
  const showMallFulfilled = item.imageBadges?.includes("mall") ?? true;

  const productHref = `/product/${slug}`;

  return (
    <div className="min-w-0 h-full">
      <div className="relative h-full border border-black/[0.09] rounded-sm overflow-hidden bg-white transition-[border-color] duration-100">
        <Link
          href={productHref}
          className="contents text-black/80 no-underline cursor-pointer"
        >
          <div className="flex h-full cursor-pointer flex-col overflow-hidden bg-white">
            {/* Image area */}
            <div className="relative w-full flex-shrink-0" style={{ paddingTop: "100%" }}>
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="absolute inset-0 block object-contain"
                sizes="(max-width: 1200px) 20vw, 200px"
                unoptimized
              />
              {/* Store name bar overlay at top of image */}
              <div className="absolute left-0 top-0 z-10 w-full px-2 py-1.5 text-xs text-black/54 bg-white/90">
                {storeName} | Official Store
              </div>
              {/* Discount % top-right */}
              {discountPct != null && discountPct > 0 && (
                <div className="absolute right-0 top-0 z-20 bg-rose-50 px-1.5 py-1 text-sm font-medium leading-5 text-red-500 rounded-bl-md">
                  -{discountPct}%
                </div>
              )}
            </div>

            {/* Mall | Fulfilled badge below image — prominent size */}
            {showMallFulfilled && (
              <div className="flex-shrink-0 px-2 pt-1.5 min-h-[32px] flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={MALL_FULFILLED_IMAGE}
                  alt="Mall Fulfilled"
                  className="h-7 min-h-[26px] w-auto object-contain"
                />
              </div>
            )}

            {/* Content: title, price, coupon bars, rating + sold + flag */}
            <div className="flex flex-1 flex-col justify-between p-2 min-h-0">
              <div className="mb-1 flex flex-1 flex-col justify-between min-h-0">
                <div className="line-clamp-2 text-sm leading-5 text-black/87 overflow-hidden break-words [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box]">
                  {title}
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex shrink-0 max-w-full items-center overflow-hidden font-medium text-[#ee4d2d]">
                    <span className="mr-px text-xs font-medium leading-[14px]">
                      RM
                    </span>
                    <span className="text-base font-medium leading-5">
                      {price.toFixed(2)}
                    </span>
                  </div>
                  {discountPct != null && discountPct > 0 && (
                    <span className="text-xs text-[#ee4d2d]">-{discountPct}%</span>
                  )}
                </div>
              </div>

              {/* Below-image badges only: COD (promo bars are on the image above) — larger for legibility */}
              {hasCod && (
                <div
                  className="flex min-h-[32px] items-center overflow-hidden text-xs flex-wrap gap-1.5"
                  aria-hidden
                >
                  <div
                    className="relative flex items-center rounded px-2 py-1 text-xs leading-5 shrink-0 min-h-[26px]"
                    style={{
                      boxShadow: "rgb(38, 170, 153) 0px 0px 0px 0.5px",
                    }}
                  >
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[#26aa99] font-medium">
                      COD
                    </span>
                  </div>
                </div>
              )}

              {/* Rating + sold + country icon */}
              <div className="flex max-w-full items-center justify-between mt-1">
                <div className="flex min-w-0 items-center gap-1">
                  <div
                    className="flex h-[18px] shrink-0 items-center rounded px-1"
                    style={{
                      backgroundColor: "rgb(255, 248, 228)",
                      boxShadow: "rgb(255, 187, 0) 0px 0px 0px 0.5px",
                    }}
                  >
                    {RATING_STAR_SVG}
                    <span className="ml-0.5 block overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-[14px] text-black">
                      {(rating ?? 4.5).toFixed(1)}
                    </span>
                  </div>
                  <span className="shrink overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-black/87">
                    {formatSold(soldCount)} Sold/Month
                  </span>
                </div>
                <div className="ml-1 flex shrink-0 items-center" aria-hidden>
                  <Image
                    src={FLAG_ICON}
                    alt=""
                    width={21}
                    height={14}
                    className="block max-h-5 max-w-full object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
