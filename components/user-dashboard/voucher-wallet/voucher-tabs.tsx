"use client";

import { useState, useRef, useEffect } from "react";
import type { VoucherTab } from "./data";

interface VoucherTabsProps {
  tabs: VoucherTab[];
  moreTabs: VoucherTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

function ChevronDownIcon() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      className="align-baseline fill-current w-2 h-2 inline-block relative text-[0.5rem] ml-1.5 overflow-hidden"
      aria-hidden
    >
      <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z" />
    </svg>
  );
}

export function VoucherTabs({ tabs, moreTabs = [], activeTab, onTabChange }: VoucherTabsProps) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreButtonRef = useRef<HTMLLIElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allMoreTabIds = moreTabs.map((t) => t.id);
  const isMoreTabActive = allMoreTabIds.includes(activeTab);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !moreButtonRef.current?.contains(e.target as Node) &&
        !dropdownRef.current?.contains(e.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-[1]">
      <div className="mb-1 mt-4">
        <nav className="-mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <ul className="flex min-w-max items-center gap-2 border-b border-zinc-100 pb-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    onClick={() => onTabChange(tab.id)}
                    className={`inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition ${
                      isActive
                        ? "bg-red-500 text-white shadow-sm"
                        : "border border-zinc-200 bg-white text-neutral-600 hover:border-zinc-300 hover:bg-zinc-50"
                    }`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {tab.label} ({tab.count})
                  </button>
                </li>
              );
            })}
            {moreTabs.length > 0 && (
              <li ref={moreButtonRef}>
                <button
                  type="button"
                  onClick={() => setIsMoreOpen((current) => !current)}
                  className={`inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition ${
                    isMoreTabActive
                      ? "bg-red-500 text-white shadow-sm"
                      : "border border-zinc-200 bg-white text-neutral-600 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                  role="tab"
                  aria-selected={isMoreTabActive}
                >
                  More
                  <ChevronDownIcon />
                </button>
              </li>
            )}
          </ul>
        </nav>
        {isMoreOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 z-[1000] mt-2 min-w-[220px] rounded-2xl border border-gray-200 bg-white p-2 shadow-lg"
          >
            {moreTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  type="button"
                  key={tab.id}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-neutral-600 transition hover:bg-gray-50 hover:text-black/80"
                  onClick={() => {
                    onTabChange(tab.id);
                    setIsMoreOpen(false);
                  }}
                  role="menuitem"
                >
                  <span className={isActive ? "text-red-500 font-medium" : ""}>
                    {tab.label} ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
