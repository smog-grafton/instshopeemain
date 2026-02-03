"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { ShopNavData } from "./data";
import { MoreDropdown } from "./more-dropdown";

interface ShopNavigationBarProps {
  data: ShopNavData;
  shopSlug: string;
}

/** Down arrow icon for "More" button */
function DownArrowIcon() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      className="block h-[9px] w-[0.6em] ml-1 fill-black/87 relative overflow-hidden"
      aria-hidden
    >
      <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z" />
    </svg>
  );
}

export function ShopNavigationBar({ data, shopSlug }: ShopNavigationBarProps) {
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  return (
    <div className="min-h-[40px] w-full bg-white">
      <div className="mx-auto flex w-[1200px] max-w-[1200px] bg-white pt-0 shadow-none">
        <div className="flex w-full flex-[0_1_auto] justify-start">
          {/* Main tabs */}
          {data.mainTabs.map((tab, idx) => (
            <Link
              key={idx}
              href={tab.href}
              className={`flex flex-1 items-center justify-center overflow-hidden text-[15px] no-underline max-w-[16.67%] border-b-2 transition-colors duration-200 ${
                tab.isActive
                  ? "border-b-[rgb(208,1,27)] text-[rgb(208,1,27)] cursor-pointer"
                  : "border-b-white text-black/87 cursor-pointer hover:text-black/87"
              } bg-transparent`}
            >
              <span className="block overflow-hidden px-2.5 py-4 text-center whitespace-nowrap text-ellipsis flex-grow">
                {tab.label}
              </span>
            </Link>
          ))}

          {/* More button with dropdown */}
          <div
            className="relative flex flex-[0_0_auto] items-center justify-center overflow-visible px-5 select-none text-[15px] text-black/87 no-underline max-w-[16.67%] border-b-2 border-b-white"
            onMouseEnter={handleMoreEnter}
            onMouseLeave={handleMoreLeave}
          >
            <div className="block">More</div>
            <DownArrowIcon />
            <MoreDropdown
              items={data.moreItems}
              shopSlug={shopSlug}
              isOpen={moreOpen}
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
