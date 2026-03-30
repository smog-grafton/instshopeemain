"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import type { ShopNavData } from "./data";
import { MoreDropdown } from "./more-dropdown";

interface ShopNavigationBarProps {
  data: ShopNavData;
  shopSlug: string;
}

function DownArrowIcon() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      className="relative ml-1 block h-[9px] w-[0.6em] overflow-hidden fill-black/87"
      aria-hidden
    >
      <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z" />
    </svg>
  );
}

export function ShopNavigationBar({ data, shopSlug }: ShopNavigationBarProps) {
  const searchParams = useSearchParams();
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentShopCollection = searchParams.get("shopCollection");
  const hasProductContext =
    Boolean(currentShopCollection) ||
    Boolean(searchParams.get("keyword")) ||
    Boolean(searchParams.get("sort")) ||
    Boolean(searchParams.get("page"));

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setMoreOpen(false), 150);
  };

  const handleMoreEnter = () => {
    clearCloseTimeout();
    setMoreOpen(true);
  };

  const handleMoreLeave = () => scheduleClose();

  const getCollectionId = (href: string): string | null => {
    const queryIndex = href.indexOf("?");
    if (queryIndex === -1) return null;
    const params = new URLSearchParams(href.slice(queryIndex + 1));
    return params.get("shopCollection");
  };

  const isTabActive = (label: string, href: string) => {
    if (label === "Home") return !hasProductContext;
    if (label === "All Products") return !currentShopCollection && hasProductContext;
    return getCollectionId(href) === currentShopCollection;
  };

  return (
    <div className="min-h-[40px] w-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
      <div className="mx-auto w-full max-w-[1200px] bg-white px-3 sm:px-4 lg:px-0">
        <div className="flex w-full justify-start overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {data.mainTabs.map((tab, idx) => (
            <Link
              key={idx}
              href={tab.href}
              className={`flex min-w-[120px] flex-none items-center justify-center overflow-hidden border-b-2 text-[15px] no-underline transition-colors duration-200 sm:min-w-[140px] lg:max-w-[16.67%] lg:flex-1 ${
                isTabActive(tab.label, tab.href)
                  ? "border-b-[rgb(208,1,27)] text-[rgb(208,1,27)]"
                  : "border-b-white text-black/87 hover:text-black/87"
              }`}
            >
              <span className="block flex-grow overflow-hidden px-3 py-3.5 text-center text-sm whitespace-nowrap text-ellipsis lg:px-2.5 lg:py-4 lg:text-[15px]">
                {tab.label}
              </span>
            </Link>
          ))}

          {data.moreItems.length > 0 && (
            <div
              className="relative flex min-w-[92px] flex-none items-center justify-center overflow-visible border-b-2 border-b-white px-4 text-sm text-black/87 select-none lg:max-w-[16.67%] lg:px-5 lg:text-[15px]"
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            >
              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                className="flex items-center bg-transparent p-0 text-inherit outline-none"
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <DownArrowIcon />
              </button>
              <MoreDropdown
                items={data.moreItems}
                shopSlug={shopSlug}
                isOpen={moreOpen}
                onMouseEnter={handleMoreEnter}
                onMouseLeave={handleMoreLeave}
              />
            </div>
          )}
        </div>

        {data.moreItems.length > 0 && moreOpen && (
          <div className="border-t border-black/[0.05] py-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.moreItems.map((item, idx) => (
                <Link
                  key={`${item.href}-${idx}`}
                  href={item.href}
                  className={`flex-none rounded-sm border px-3 py-2 text-sm no-underline ${
                    isTabActive(item.label, item.href)
                      ? "border-[rgb(208,1,27)] bg-[rgb(255,244,244)] text-[rgb(208,1,27)]"
                      : "border-black/[0.09] bg-white text-black/80"
                  }`}
                  onClick={() => setMoreOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
