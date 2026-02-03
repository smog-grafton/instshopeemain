"use client";

import Image from "next/image";
import Link from "next/link";
import type { CollectionProductItem } from "./data";

const FLAG_ICON = "/images/stores/logos/sate-icon.jpeg";
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

/** Jagged-edge SVGs for discount badge (orange) */
const JagLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-0.5 -0.5 4 16"
    className="h-4 w-1 flex-shrink-0 block align-middle overflow-hidden -mr-px"
  >
    <path
      d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
      stroke="#F69113"
      fill="#F69113"
      strokeWidth="1"
    />
  </svg>
);
const JagRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-0.5 -0.5 4 16"
    className="h-4 w-1 flex-shrink-0 block align-middle overflow-hidden -ml-px"
    style={{ transform: "matrix(-1, 0, 0, -1, 0, 0)" }}
  >
    <path
      d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
      stroke="#F69113"
      fill="#F69113"
      strokeWidth="1"
    />
  </svg>
);

function formatSold(count: number): string {
  if (count >= 10000) return "10k+";
  if (count >= 1000) return "1k+";
  return `${count}`;
}

function discountPercent(price: number, originalPrice?: number): number | null {
  if (originalPrice == null || originalPrice <= 0 || originalPrice <= price)
    return null;
  return Math.round((1 - price / originalPrice) * 100);
}

interface CollectionProductCardProps {
  item: CollectionProductItem;
}

export function CollectionProductCard({ item }: CollectionProductCardProps) {
  const {
    slug,
    title,
    imageSrc,
    price,
    originalPrice,
    soldCount,
    storeName,
    rating,
    promotionLabel,
    textBadges,
  } = item;

  const hasCod = textBadges?.includes("cod") ?? false;
  const discountText = promotionLabel?.match(/\d+% off/)?.[0] ?? promotionLabel;
  const rmOffText = promotionLabel?.match(/RM\d+ off/)?.[0];
  const showShopeeLagiMurah =
    promotionLabel === "Shopee Lagi Murah" || slug.length % 3 === 1;
  const discountPct = discountPercent(price, originalPrice);

  const productHref = `/product/${slug}`;

  return (
    <div className="h-full">
      <div
        className="relative rounded-md border border-black/[0.09] transition-[border-color] duration-100"
        style={{ height: "331.656px" }}
      >
        <Link
          href={productHref}
          className="contents text-black/80 no-underline cursor-pointer bg-transparent border-0"
        >
          <div className="flex h-[329.656px] cursor-pointer flex-col overflow-hidden rounded-md bg-white">
            {/* Image area (no TOP badge) */}
            <div
              className="relative w-full flex-shrink-0"
              style={{ paddingTop: "100%" }}
            >
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="absolute inset-0 block object-contain"
                sizes="(max-width: 1200px) 16.666vw, 200px"
                unoptimized
              />
              <div className="absolute left-0 top-0 z-10 px-1.5 py-1 text-[10px] text-black/54 bg-white/90 rounded-br">
                {storeName} | Official Store
              </div>
              <div className="absolute right-0 bottom-0 z-[30] flex pr-1 pb-1" />
            </div>

            {/* Content: flag + title, price + discount %, promo badges, rating + sold + country icon */}
            <div className="flex flex-1 flex-col justify-between p-2">
              <div className="mb-1 flex flex-1 flex-col justify-between">
                <div className="flex min-h-10 items-start gap-0.5 overflow-hidden text-sm leading-5">
                  <Image
                    src={FLAG_ICON}
                    alt=""
                    width={14}
                    height={14}
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 align-middle"
                    unoptimized
                  />
                  <span className="line-clamp-2 overflow-hidden">{title}</span>
                </div>
                {/* Price + discount % pill */}
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
                    <div
                      className="flex h-4 shrink-0 items-center rounded px-1 py-0.5 text-[10px] font-medium leading-3 text-[#ee4d2d]"
                      style={{
                        backgroundColor: "rgb(254, 238, 234)",
                        borderRadius: "2px 2px 2px 6px",
                      }}
                    >
                      -{discountPct}%
                    </div>
                  )}
                </div>
              </div>

              {/* Promo badges row */}
              <div
                className="flex h-5 items-center overflow-hidden text-[10px] mb-2"
                aria-hidden
              >
                {showShopeeLagiMurah && (
                  <div
                    className="relative flex shrink-0 items-center rounded px-1 py-0.5 text-[10px] leading-4"
                    style={{
                      boxShadow: "rgb(238, 77, 45) 0px 0px 0px 0.5px",
                    }}
                  >
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[#ee4d2d]">
                      Shopee Lagi Murah
                    </span>
                  </div>
                )}
                {discountText && (
                  <div className="ml-1 flex shrink-0 items-stretch overflow-hidden">
                    <JagLeft />
                    <div
                      className="overflow-hidden text-ellipsis whitespace-nowrap px-0.5 py-0.5 text-[10px] leading-4 text-white"
                      style={{ backgroundColor: "rgb(246, 145, 19)" }}
                    >
                      {discountText}
                    </div>
                    <JagRight />
                  </div>
                )}
                {rmOffText && (
                  <div className="ml-1 flex shrink-0 items-stretch overflow-hidden">
                    <JagLeft />
                    <div
                      className="overflow-hidden text-ellipsis whitespace-nowrap px-0.5 py-0.5 text-[10px] leading-4 text-white"
                      style={{ backgroundColor: "rgb(246, 145, 19)" }}
                    >
                      {rmOffText}
                    </div>
                    <JagRight />
                  </div>
                )}
                {hasCod && (
                  <div
                    className="relative ml-1 flex max-h-full max-w-full items-center rounded px-1 py-0.5 text-[10px] leading-4"
                    style={{
                      boxShadow: "rgb(38, 170, 153) 0px 0px 0px 0.5px",
                    }}
                  >
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[#26aa99]">
                      COD
                    </span>
                  </div>
                )}
              </div>

              {/* Rating + sold + country icon */}
              <div className="flex max-w-full items-center justify-between mb-2">
                <div className="flex min-w-0 items-center">
                  <div
                    className="flex h-[18px] shrink-0 items-center rounded px-1"
                    style={{
                      backgroundColor: "rgb(255, 248, 228)",
                      boxShadow: "rgb(255, 187, 0) 0px 0px 0px 0.5px",
                    }}
                  >
                    {RATING_STAR_SVG}
                    <span className="ml-0.5 block overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-[14px] text-black">
                      {rating.toFixed(1)}
                    </span>
                  </div>
                  <div
                    className="ml-1 h-2.5 w-px shrink-0 border-l border-black/[0.09]"
                    style={{ transform: "scaleX(0.5)" }}
                  />
                  <span className="ml-1 shrink overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-black/87">
                    {formatSold(soldCount)} sold
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
