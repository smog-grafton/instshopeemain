"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { CategoryTab, MoreMenuItem } from "./category-nav-bar-data";

interface CategoryNavBarProps {
  tabs: CategoryTab[];
  moreMenuItems: MoreMenuItem[];
  activeCategoryId?: number;
}

function ChevronDown() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x={0}
      y={0}
      className="align-baseline fill-current inline-block relative overflow-x-hidden overflow-y-hidden w-2.5 h-2.5 ml-1"
      aria-hidden
    >
      <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x={0}
      y={0}
      className="align-baseline fill-current inline-block relative overflow-x-hidden overflow-y-hidden w-2.5 h-2.5 ml-1"
      aria-hidden
    >
      <path d="m8.5 2.1 6 7.9s1.4 1.5-.5 1.5h-13s-1.8 0-.6-1.5l6-7.9c.1 0 .9-1.3 2.1 0z" />
    </svg>
  );
}

/**
 * Category navigation bar with tabs (Top Picks, CNY 2026, etc.) and a
 * "More" dropdown (E-Vouchers & Services, Shopee Choice, etc.).
 * Active tab gets red text and red bottom border.
 */
export function CategoryNavBar({
  tabs,
  moreMenuItems,
  activeCategoryId = 0,
}: CategoryNavBarProps) {
  const [moreOpen, setMoreOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moreOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  return (
    <div
      id="category-nav-bar"
      className="text-sm leading-tight text-black/80 min-h-12"
    >
      <div className="w-[1200px] max-w-[100%] mx-auto flex shadow-sm bg-white">
        <div className="justify-around w-full flex flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeCategoryId === tab.categoryId;
            return (
              <Link
                key={tab.categoryId}
                href={tab.href}
                className={`text-ellipsis [border-bottom-style:solid] flex-1 min-w-0 justify-center items-center text-base no-underline flex overflow-x-hidden overflow-y-hidden border-b-4 cursor-pointer transition-colors duration-200 ease-in-out active:outline-0 hover:outline-0 hover:cursor-pointer hover:text-red-500 ${
                  isActive
                    ? "text-red-500 border-red-500"
                    : "border-b-white text-black/87"
                }`}
              >
                <span className="text-center grow px-2.5 py-3.5 truncate">
                  {tab.label}
                </span>
              </Link>
            );
          })}
          <div ref={containerRef} className="relative flex-1 min-w-0 flex justify-end">
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className="text-ellipsis [border-bottom-style:solid] flex-1 justify-center items-center text-base border-b-4 border-b-white text-black/87 select-none flex relative pl-5 min-h-[3rem] w-full bg-transparent cursor-pointer hover:text-[initial] hover:border-b-transparent focus:outline-0 active:outline-0 before:content-[''] before:[border-left-style:solid] before:h-5 before:absolute before:-translate-y-2/4 before:border-l before:left-0 before:top-2/4 before:border-l-black/9"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              aria-label="More categories"
            >
              <span>More</span>
              {moreOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {moreOpen && (
              <div
                className="absolute right-0 top-full z-10 mt-0.5 w-56 bg-white rounded-md shadow-lg py-2 border border-black/6"
                role="menu"
              >
                {moreMenuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-base text-black/87 no-underline hover:bg-black/5 hover:text-red-500 focus:bg-black/5 focus:text-red-500"
                    role="menuitem"
                    onClick={() => setMoreOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
