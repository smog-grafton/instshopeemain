"use client";

import Link from "next/link";
import type { ShopNavItem } from "./data";

interface MoreDropdownProps {
  items: ShopNavItem[];
  shopSlug: string;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
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

export function MoreDropdown({ items, shopSlug, isOpen, onMouseEnter, onMouseLeave }: MoreDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute right-0 z-[2] opacity-100 transition-opacity duration-200 overflow-visible"
      style={{ top: "50px" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative mt-3.5 overflow-visible border border-black/9 rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.05)] text-white">
        <div className="bg-white rounded-[3px] box-border max-h-[300px] overflow-y-auto pb-0 flex px-[22px] relative">
          <div className="h-[884px] min-w-[170px] w-auto flex-1 flex-col">
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="flex flex-1 items-center justify-center overflow-hidden text-[15px] text-black/87 no-underline cursor-pointer max-w-none border-b-2 border-b-white text-left whitespace-nowrap bg-transparent"
              >
                <span className="block overflow-hidden px-2.5 py-4 text-left whitespace-nowrap text-ellipsis flex-grow">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
