"use client";

import Link from "next/link";
import type { ShopSidebarCategory } from "./data";

function BurgerIcon() {
  return (
    <svg
      viewBox="0 0 12 10"
      className="mr-2.5 w-3 h-4 block overflow-hidden fill-black/80 relative shrink-0"
      aria-hidden
    >
      <g fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-373 -208)">
          <g transform="translate(155 191)">
            <g transform="translate(218 17)">
              <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
              <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
              <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function TriangleIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 4 7"
      className={`absolute left-0 mt-1 hidden h-[7px] w-[7px] shrink-0 overflow-hidden lg:block ${
        active ? "opacity-100 fill-[rgb(208,1,27)]" : "opacity-0 fill-black/87"
      }`}
      aria-hidden
    >
      <polygon points="4 3.5 0 0 0 7" />
    </svg>
  );
}

interface ShopCategorySidebarProps {
  categories: ShopSidebarCategory[];
  currentShopCollection: string | null;
}

export function ShopCategorySidebar({
  categories,
  currentShopCollection,
}: ShopCategorySidebarProps) {
  return (
    <div className="w-full shrink-0 overflow-hidden text-black/80 lg:mr-[22px] lg:w-[180px]">
      <div
        className="mb-3 flex items-center border-b border-black/[0.05] pb-3 text-base font-bold capitalize leading-6 text-black/80 no-underline lg:mb-2.5 lg:h-[50px] lg:pb-0 lg:leading-[50px]"
      >
        <BurgerIcon />
        Category
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:block lg:overflow-visible lg:pb-0">
        {categories.map((cat) => {
          const isAllProducts = cat.isAllProducts === true;
          const isActive =
            isAllProducts
              ? currentShopCollection == null
              : (currentShopCollection != null && cat.shopCollection === currentShopCollection);
          return (
            <div key={cat.href + cat.label} className="lg:block">
              <Link
                href={cat.href}
                className={`relative flex-none overflow-hidden text-ellipsis text-sm font-medium capitalize no-underline ${
                  isActive
                    ? "border-[rgb(208,1,27)] bg-[rgb(255,244,244)] text-[rgb(208,1,27)] lg:border-0 lg:bg-transparent"
                    : "border-black/[0.09] bg-white text-black/87 lg:border-0"
                }`}
                style={{
                  lineHeight: "16px",
                }}
              >
                <div className="rounded-sm border px-3 py-2 lg:rounded-none lg:border-0 lg:px-0 lg:py-2">
                  <TriangleIcon active={isActive} />
                  <span className="block whitespace-nowrap lg:pl-3 lg:whitespace-normal">
                    {cat.label}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
