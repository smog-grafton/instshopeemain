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
    <div className="z-[1] relative">
      <div className="mt-3.5 mb-3">
        <nav className="z-[999] w-full sticky bg-white h-12 top-0">
          <ul className="flex border-b border-solid h-12 border-b-zinc-100">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li
                  key={tab.id}
                  className="select-none cursor-pointer justify-center items-center flex grow shrink-0 text-base relative"
                  onClick={() => onTabChange(tab.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onTabChange(tab.id);
                    }
                  }}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                >
                  <div className="grow flex relative h-full">
                    <div className="grow justify-center items-center flex px-2.5 py-2">
                      <span className={isActive ? "text-red-500" : "text-neutral-600"}>
                        {tab.label} ({tab.count})
                      </span>
                    </div>
                    <hr className="box-content h-3 m-0.5 border border-solid border-black/10 w-0 shrink-0" />
                    {isActive && (
                      <i
                        className="bg-red-500 h-0.5 absolute bottom-0 left-1/2 -translate-x-1/2 w-20 block pointer-events-none"
                        aria-hidden
                      />
                    )}
                  </div>
                </li>
              );
            })}
            {/* More button */}
            <li
              ref={moreButtonRef}
              className="select-none cursor-pointer justify-center items-center flex grow shrink-0 text-base relative"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsMoreOpen(!isMoreOpen);
                }
              }}
              role="tab"
              aria-selected={isMoreTabActive}
              tabIndex={0}
            >
              <div className="grow flex relative h-full">
                <div className="grow justify-center items-center flex px-2.5 py-2">
                  <span className={isMoreTabActive ? "text-red-500" : "text-neutral-600"}>
                    More
                    <ChevronDownIcon />
                  </span>
                </div>
                {isMoreTabActive && (
                  <i
                    className="bg-red-500 h-0.5 absolute bottom-0 left-1/2 -translate-x-1/2 w-20 block pointer-events-none"
                    aria-hidden
                  />
                )}
              </div>
            </li>
          </ul>
        </nav>
        {/* Dropdown */}
        {isMoreOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-sm shadow-lg z-[1000] min-w-[200px]"
          >
            {moreTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-50 text-sm text-neutral-600 hover:text-black/80"
                  onClick={() => {
                    onTabChange(tab.id);
                    setIsMoreOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onTabChange(tab.id);
                      setIsMoreOpen(false);
                    }
                  }}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span className={isActive ? "text-red-500 font-medium" : ""}>
                    {tab.label} ({tab.count})
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
