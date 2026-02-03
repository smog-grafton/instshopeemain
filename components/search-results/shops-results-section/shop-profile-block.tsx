import Image from "next/image";
import Link from "next/link";
import type { ShopsResultShop } from "./types";
import { MALL_BADGE_SRC } from "./data";

/** Yellow star icon for rating (single 5-point star). */
function StarRatingIcon() {
  return (
    <svg
      viewBox="0 0 9.5 8"
      className="w-3.5 h-3.5 fill-yellow-500 inline-block align-middle shrink-0"
      aria-hidden
    >
      <path d="m6.8 7.2-2.2-1.2-2.2 1.2.4-2.5L.9 2.9l2.5-.3L4.6 0l1.1 2.5 2.5.4-1.8 1.8z" />
    </svg>
  );
}

interface ShopProfileBlockProps {
  shop: ShopsResultShop;
}

export function ShopProfileBlock({ shop }: ShopProfileBlockProps) {
  return (
    <div className="flex-col items-center flex relative mr-6">
      <div aria-hidden className="z-[1] absolute inset-0" />
      <div aria-hidden className="z-[2]">
        <div className="flex-none relative w-16 h-16">
          <Image
            alt={shop.avatarAlt}
            className="align-baseline inline w-16 h-16 rounded-[50%] border border-solid border-black/9"
            src={shop.avatarSrc}
            width={64}
            height={64}
            unoptimized={
              shop.avatarSrc.startsWith("https://") &&
              !shop.avatarSrc.includes(process.env.NEXT_PUBLIC_VERCEL_URL ?? "")
            }
          />
        </div>
      </div>
      <div className="text-ellipsis text-center z-[2] [-webkit-line-clamp:3] [word-wrap:break-word] w-64 text-base font-medium leading-5 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-2">
        {shop.name}
      </div>
      <div className="z-[2] flex items-center gap-1 flex-wrap mt-2 text-black/9">
        {shop.isMall && (
          <Image
            src={MALL_BADGE_SRC}
            alt="Mall"
            width={30}
            height={14}
            className="align-baseline inline h-4 w-auto overflow-x-hidden overflow-y-hidden"
          />
        )}
        <span
          className={`text-red-500 text-xs font-medium leading-4 inline-flex items-center gap-0.5 ${shop.isMall ? "pl-3 border-l border-solid border-black/9" : ""}`}
        >
          <StarRatingIcon />
          <span aria-hidden>{shop.rating}</span>
        </span>
        <span className="pl-3 text-ellipsis whitespace-nowrap max-w-32 text-xs leading-4 overflow-x-hidden text-black/54 border-l border-solid border-black/9">
          {shop.followers}
        </span>
      </div>
      <div className="z-[2] relative mt-3" aria-label="Visit shop">
        <Link href={shop.visitShopHref}>
          <button
            type="button"
            className="[appearance:auto] cursor-pointer outline-0 flex-none justify-center items-center inline-flex relative overflow-x-hidden overflow-y-hidden rounded-sm h-7 px-3 text-sm leading-4 font-normal bg-red-50 min-w-36 text-red-700 border border-solid border-red-700 disabled:text-black/26 active:before:content-[''] active:before:absolute active:before:inset-0 active:before:bg-black/5 focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-solid disabled:border-black/9"
          >
            <span className="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden leading-7">
              Visit Shop
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
