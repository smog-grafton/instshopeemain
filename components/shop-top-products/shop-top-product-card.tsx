"use client";

import Image from "next/image";
import Link from "next/link";
import { TopBadge } from "./top-badge";
import type { ShopTopProductItem } from "./data";

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
  if (count >= 8000) return "8k+";
  if (count >= 1000) return `${(count / 1000).toFixed(0)}k+`;
  return `${count}`;
}

interface ShopTopProductCardProps {
  item: ShopTopProductItem;
}

export function ShopTopProductCard({ item }: ShopTopProductCardProps) {
  const {
    slug,
    title,
    imageSrc,
    price,
    soldCount,
    storeName,
    rank,
    promotionLabel,
    textBadges,
  } = item;

  const hasCod = textBadges?.includes("cod") ?? false;
  const discountText = promotionLabel?.match(/\d+% off/)?.[0] ?? promotionLabel;
  const showShopeeLagiMurah = rank === 2 || rank === 4; // optional variety

  const productHref = `/product/${slug}`;

  return (
    <div className="h-full">
      <div
        className="relative rounded-md border border-black/[0.09] transition-[border-color] duration-100"
        style={{ height: "307.656px" }}
      >
        <Link
          href={productHref}
          className="contents text-black/80 no-underline cursor-pointer bg-transparent border-0"
        >
          <div className="flex h-[305.656px] cursor-pointer flex-col overflow-hidden rounded-md bg-white">
            {/* Image area with TOP badge */}
            <div className="relative w-full flex-shrink-0" style={{ paddingTop: "100%" }}>
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="absolute inset-0 block object-contain"
                sizes="(max-width: 1200px) 16.666vw, 200px"
                unoptimized
              />
              <div className="absolute right-0 bottom-0 z-[30] flex pr-1 pb-1">
                {/* Optional video badge placeholder - leave empty or add icon */}
              </div>
              <TopBadge rank={rank} />
            </div>

            {/* Content: store, title, badges, price, sold */}
            <div className="flex flex-1 flex-col justify-between p-2">
              <div className="mb-2 flex flex-col justify-between">
                <div className="text-[10px] text-black/54 overflow-hidden text-ellipsis whitespace-nowrap mb-0.5">
                  {storeName} | Official Store
                </div>
                <div className="min-h-10 overflow-hidden text-sm leading-5 line-clamp-2">
                  {title}
                </div>
                <div
                  className="mt-1 flex h-5 items-center overflow-hidden text-[10px]"
                  aria-hidden
                >
                  {showShopeeLagiMurah && (
                    <div
                      className="relative flex max-h-full max-w-full shrink-0 items-center rounded px-1 py-0.5 text-[10px] leading-4"
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
                    <div className="ml-1 flex max-h-full max-w-full shrink-0 items-stretch overflow-hidden">
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
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex max-w-full shrink-0 items-center overflow-hidden text-ellipsis whitespace-nowrap font-medium text-[#ee4d2d]">
                    <span className="flex items-baseline overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="mr-px text-xs font-medium leading-[14px]">
                        RM
                      </span>
                      <span className="text-base font-medium leading-5">
                        {price.toFixed(2)}
                      </span>
                    </span>
                  </div>
                  <div className="ml-1 shrink grow-0 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-black/87">
                    {formatSold(soldCount)} Sold/Month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
