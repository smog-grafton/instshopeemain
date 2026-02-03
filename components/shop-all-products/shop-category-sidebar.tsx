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
      className={`h-[7px] w-[7px] left-0 mt-1 absolute block overflow-hidden shrink-0 ${
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
    <div
      className="shrink-0 overflow-hidden text-black/80"
      style={{ flex: "0 0 180px", margin: "0 22px 0 0" }}
    >
      <div
        className="flex items-center border-b border-black/[0.05] text-black/80 text-base font-bold h-[50px] leading-[50px] mb-2.5 capitalize no-underline"
        style={{ marginBottom: "10px" }}
      >
        <BurgerIcon />
        Category
      </div>
      <div>
        {categories.map((cat) => {
          const isAllProducts = cat.isAllProducts === true;
          const isActive =
            isAllProducts
              ? currentShopCollection == null
              : (currentShopCollection != null && cat.shopCollection === currentShopCollection);
          return (
            <div key={cat.href + cat.label}>
              <Link
                href={cat.href}
                className={`block py-2 pl-3 pr-2.5 relative overflow-hidden text-ellipsis select-none line-clamp-3 max-h-12 overflow-wrap-break text-sm font-medium no-underline capitalize items-start ${
                  isActive
                    ? "text-[rgb(208,1,27)]"
                    : "text-black/87"
                }`}
                style={{
                  lineHeight: "16px",
                  minHeight: "32px",
                }}
              >
                <TriangleIcon active={isActive} />
                <span className="pl-3">{cat.label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
