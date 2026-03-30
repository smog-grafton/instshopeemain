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

export function MoreDropdown({
  items,
  shopSlug,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: MoreDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute right-0 top-full z-[12] hidden overflow-visible pt-3 opacity-100 transition-opacity duration-200 lg:block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative overflow-visible rounded-[3px] border border-black/9 text-white shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
        <div className="relative box-border flex max-h-[320px] overflow-y-auto rounded-[3px] bg-white px-4 py-2">
          <div className="flex min-w-[220px] flex-1 flex-col">
            {items.map((item, idx) => (
              <Link
                key={`${shopSlug}-${idx}`}
                href={item.href}
                className="flex items-center overflow-hidden border-b border-black/[0.05] bg-transparent text-left text-[15px] text-black/87 no-underline last:border-b-0"
              >
                <span className="block flex-grow overflow-hidden px-2 py-3 text-left text-ellipsis">
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
