"use client";

import Image from "next/image";
import {
  ProductCardImage,
  ProductCardLoadFrame,
} from "@/components/common/product-card-media";
import type { DailyDiscoverProduct } from "./data";
import { getDailyDiscoverImageSrc, INFO_BAR_IMAGE } from "./data";
import { isBackendImage } from "@/lib/utils";

const BADGE_LABELS: Record<string, string> = {
  "shopee-lagi-murah": "Shopee Lagi Murah",
  cod: "COD",
  mall: "Mall",
  "new-arrival": "New Arrival",
  preferred: "Preferred",
  "sea-shipping": "Sea Shipping",
};

const BADGE_COLORS: Record<string, string> = {
  "shopee-lagi-murah": "text-red-500",
  cod: "text-teal-500",
  mall: "text-red-500",
  "new-arrival": "text-red-500",
  preferred: "text-red-500",
  "sea-shipping": "text-green-600",
};

function PromotionTag({ label }: { label: string }) {
  return (
    <div className="pointer-events-none flex h-4 max-w-full items-stretch justify-start overflow-hidden text-ellipsis">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" className="-mr-px h-full w-1 flex-none" aria-hidden>
        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} className="fill-amber-500 stroke-amber-500" />
      </svg>
      <span className="bg-amber-500 px-px py-0.5 text-xs leading-4 text-white">{label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" className="-ml-px h-full w-1 flex-none rotate-180" aria-hidden>
        <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth={1} className="fill-amber-500 stroke-amber-500" />
      </svg>
    </div>
  );
}

function VideoPlayIcon() {
  return (
    <div className="absolute bottom-0 right-0 z-30 flex pb-1 pr-1" aria-hidden>
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black/50">
        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

export interface DailyDiscoverCardProps {
  product: DailyDiscoverProduct;
  /** Use "fromSameShop" for From The Same Shop section: no hover border, no Find Similar, no border radius */
  variant?: "default" | "fromSameShop";
}

export function DailyDiscoverCard({ product, variant = "default" }: DailyDiscoverCardProps) {
  const imageSrc = product.imageSrc || getDailyDiscoverImageSrc(product.imageIndex);
  const isFromSameShop = variant === "fromSameShop";

  return (
    <ProductCardLoadFrame
      className={`relative h-full border border-solid border-black/[0.09] transition-[border-color] duration-100 ease-in-out ${
        isFromSameShop
          ? "rounded-none"
          : "group rounded-md hover:z-10 hover:-translate-y-px hover:border-red-500 hover:shadow-sm"
      } overflow-hidden`}
    >
      <a className="contents" href={product.href}>
        <div
          className={`flex h-full cursor-pointer flex-col overflow-hidden bg-white ${
            isFromSameShop ? "rounded-none" : "rounded-md"
          }`}
        >
          {/* Image block: square aspect + overlays */}
          <div className={`relative z-0 w-full pt-[100%] ${isFromSameShop ? "rounded-none" : ""}`}>
            <ProductCardImage
              src={imageSrc}
              alt={product.title}
              fill
              className="pointer-events-none object-contain"
              sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, (max-width: 1279px) 20vw, 200px"
              unoptimized={isBackendImage(imageSrc) || imageSrc.endsWith(".jpeg") || imageSrc.endsWith(".webp")}
            />
            {/* Info bar overlay at bottom of image */}
            <div className="absolute bottom-0 left-0 z-10 w-full" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={INFO_BAR_IMAGE} alt="" className="w-full object-cover object-bottom" />
            </div>
            {product.hasVideo && <VideoPlayIcon />}
            {/* Top-right discount badge */}
            <div
              className={`absolute right-0 top-0 z-30 bg-rose-50 px-1 py-0.5 text-xs font-medium leading-4 text-red-500 ${
                isFromSameShop ? "rounded-none" : "rounded-bl-md"
              }`}
            >
              -{product.discountPercent}%
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between p-2">
            <div className="mb-2 flex flex-col justify-between">
              <div className="min-h-10 break-words text-sm leading-5 text-black/[0.87] line-clamp-2 [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box] overflow-hidden">
                {product.title}
              </div>
              <div className="mt-1 flex h-5 items-center overflow-hidden text-xs">
                {(product.badges ?? []).map((badge, badgeIndex) => (
                  <div
                    key={`${badge}-${badgeIndex}`}
                    className="pointer-events-none relative mr-1 flex max-w-full shrink-0 items-center overflow-hidden rounded-sm px-1 py-0.5 text-ellipsis text-xs leading-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                  >
                    <span className={`whitespace-nowrap ${BADGE_COLORS[badge] ?? "text-gray-700"}`}>
                      {BADGE_LABELS[badge] ?? badge}
                    </span>
                  </div>
                ))}
                {product.promotionLabel && (
                  <div className="ml-1 flex items-center">
                    <PromotionTag label={product.promotionLabel} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <div className="mr-1 flex max-w-full shrink-0 items-center overflow-hidden font-medium text-red-500">
                  <span className="text-base font-medium leading-5">{product.price}</span>
                </div>
                <div className="ml-auto shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-black/87">
                  {product.sold} sold
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* Find Similar: visible on hover (hidden for fromSameShop variant) */}
      {!isFromSameShop && (
        <a
          href={product.findSimilarHref}
          className="absolute -left-px top-[calc(100%-6px)] z-10 box-border flex h-8 w-full items-center justify-center rounded-bl-sm rounded-br-sm border border-solid border-red-500 bg-red-500 text-center text-sm leading-8 text-white opacity-0 transition-opacity duration-100 hover:opacity-100 group-hover:opacity-100"
        >
          Find Similar
        </a>
      )}
    </ProductCardLoadFrame>
  );
}
