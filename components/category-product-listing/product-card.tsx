import Image from "next/image";
import Link from "next/link";
import type { Product } from "./data";

const INFO_BAR_IMAGE = "/images/home/daily-discover/bar/info-bar.png";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.5 -0.5 4 16"
        className="-mr-px h-full w-1 flex-none"
        aria-hidden
      >
        <path
          d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
          strokeWidth={1}
          className="fill-amber-500 stroke-amber-500"
        />
      </svg>
      <span className="bg-amber-500 px-px py-0.5 text-xs leading-4 text-white">
        {label}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.5 -0.5 4 16"
        className="-ml-px h-full w-1 flex-none rotate-180"
        aria-hidden
      >
        <path
          d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
          strokeWidth={1}
          className="fill-amber-500 stroke-amber-500"
        />
      </svg>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  /** Use "transparent" for search results so cards blend with page background. */
  variant?: "default" | "transparent";
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const bgClass = variant === "transparent" ? "bg-transparent" : "bg-white";
  return (
    <div className="relative h-full border border-solid border-black/[0.09] transition-[border-color] duration-100 ease-in-out">
      <Link href={product.href} className="contents">
        <div className={`flex h-full cursor-pointer flex-col overflow-hidden ${bgClass}`}>
          {/* Image block: square aspect + overlays (matches DailyDiscoverCard) */}
          <div className="relative z-0 w-full pt-[100%]">
            <Image
              src={product.imageSrc}
              alt={product.title}
              fill
              className="pointer-events-none object-contain"
              sizes="(max-width: 1200px) 20vw, 200px"
            />
            {/* Info bar overlay at bottom of image */}
            <div className="absolute bottom-0 left-0 z-10 w-full" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={INFO_BAR_IMAGE}
                alt=""
                className="w-full object-cover object-bottom"
              />
            </div>
            {/* Image badges (Mall, Preferred, Choice) at bottom of image */}
            {product.imageBadges && product.imageBadges.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center gap-1 p-1.5 bg-gradient-to-t from-black/20 to-transparent">
                {product.imageBadges.includes("mall") && (
                  <Image
                    src="/images/stores/assets/mall.png"
                    alt="Mall"
                    width={32}
                    height={14}
                    className="h-3.5 w-auto"
                  />
                )}
                {product.imageBadges.includes("preferred") && (
                  <Image
                    src="/images/stores/assets/preferred.png"
                    alt="Preferred"
                    width={32}
                    height={14}
                    className="h-3.5 w-auto"
                  />
                )}
                {product.imageBadges.includes("choice") && (
                  <Image
                    src="/images/stores/assets/choice.png"
                    alt="Choice"
                    width={32}
                    height={14}
                    className="h-3.5 w-auto"
                  />
                )}
              </div>
            )}
            {/* Top-right discount badge */}
            {product.discount != null && product.discount > 0 && (
              <div className="absolute right-0 top-0 z-30 bg-rose-50 px-1 py-0.5 text-xs font-medium leading-4 text-red-500 rounded-bl-md">
                -{product.discount}%
              </div>
            )}
          </div>

          {/* Content (matches DailyDiscoverCard structure) */}
          <div className="flex flex-1 flex-col justify-between p-2">
            <div className="mb-2 flex flex-col justify-between">
              <div className="min-h-10 break-words text-sm leading-5 text-black/[0.87] line-clamp-2 [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box] overflow-hidden">
                {product.title}
              </div>
              <div className="mt-1 flex h-5 items-center overflow-hidden text-xs">
                {Array.isArray(product.textBadges) && product.textBadges.map((badge) => (
                  <div
                    key={badge}
                    className="pointer-events-none relative mr-1 flex max-w-full shrink-0 items-center overflow-hidden rounded-sm px-1 py-0.5 text-ellipsis text-xs leading-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                  >
                    <span
                      className={`whitespace-nowrap ${BADGE_COLORS[badge] ?? "text-gray-700"}`}
                    >
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
                  <span className="text-base font-medium leading-5">
                    {product.price}
                  </span>
                </div>
                <div className="ml-auto shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-black/87">
                  {product.soldCount} sold
                </div>
              </div>
              {product.rating != null && (
                <div className="mt-0.5 flex items-center gap-1 text-xs text-black/60">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="w-2.5 h-2.5 fill-[rgb(238,77,45)]"
                    aria-hidden
                  >
                    <path d="m6.8 7.2-2.2-1.2-2.2 1.2.4-2.5L.9 2.9l2.5-.3L4.6 0l1.1 2.5 2.5.4-1.8 1.8z" />
                  </svg>
                  <span>{product.rating.toFixed(1)}</span>
                </div>
              )}
              {product.location && (
                <div className="mt-0.5 text-xs text-black/40">
                  {product.location}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
