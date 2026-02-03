"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export type ShopSearchScope = "in_shop" | "in_mall";

const SCOPE_OPTIONS: { value: ShopSearchScope; label: string }[] = [
  { value: "in_shop", label: "In This Shop" },
  { value: "in_mall", label: "In Shopee Mall" },
];

interface ShopSearchBarProps {
  shopSlug: string;
}

export function ShopSearchBar({ shopSlug }: ShopSearchBarProps) {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<ShopSearchScope>("in_shop");
  const [scopeOpen, setScopeOpen] = useState(false);
  const scopeRef = useRef<HTMLDivElement>(null);

  const scopeLabel = SCOPE_OPTIONS.find((o) => o.value === scope)?.label ?? "In This Shop";

  const searchAction =
    scope === "in_shop"
      ? `/shop/${shopSlug}`
      : "/search";
  const searchParams = new URLSearchParams();
  if (query.trim()) searchParams.set("keyword", query.trim());

  const actionUrl = searchParams.toString()
    ? `${searchAction}?${searchParams.toString()}`
    : searchAction;

  return (
    <div className="flex-1 flex relative min-w-0 w-full">
      <form
        role="search"
        autoComplete="off"
        action={actionUrl}
        method="GET"
        className="flex h-10 items-stretch justify-between rounded-none border-[3px] border-white bg-white shadow-sm w-full"
      >
        <div className="flex flex-1">
          <div className="relative flex flex-1 box-border px-2.5">
            <input
              aria-label="Search in this shop"
              name="keyword"
              maxLength={128}
              placeholder="Search in this shop"
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls="shop-search-listbox"
              aria-expanded="false"
              role="combobox"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="m-0 flex flex-1 items-center border-0 p-0 text-sm text-black/80 outline-none placeholder:text-black/54"
            />
          </div>
          <div className="relative" ref={scopeRef}>
            <button
              type="button"
              role="combobox"
              aria-expanded={scopeOpen}
              aria-haspopup="listbox"
              aria-label="Search scope"
              onClick={() => setScopeOpen((o) => !o)}
              className="flex items-center h-[34px] min-h-[25.5px] w-full max-w-[150px] pl-4 pr-2.5 border-0 border-l border-black/10 bg-white cursor-pointer text-sm text-black/87 appearance-button overflow-visible capitalize rounded-none"
            >
              <span className="pointer-events-none truncate whitespace-nowrap">
                {scopeLabel}
              </span>
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                className="w-2 h-2 ml-4 block fill-black/87 shrink-0"
                aria-hidden
              >
                <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
              </svg>
            </button>
            {scopeOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  aria-hidden
                  onClick={() => setScopeOpen(false)}
                />
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-full mt-0.5 bg-white rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-black/9 py-1 z-20 min-w-[140px]"
                >
                  {SCOPE_OPTIONS.map((opt) => (
                    <li key={opt.value} role="option" aria-selected={scope === opt.value}>
                      <button
                        type="button"
                        onClick={() => {
                          setScope(opt.value);
                          setScopeOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-black/87 hover:bg-black/5 flex items-center justify-between gap-2"
                      >
                        {opt.label}
                        {scope === opt.value && (
                          <svg
                            viewBox="0 0 12 12"
                            className="w-3 h-3 fill-[#ee4d2d] shrink-0"
                            aria-hidden
                          >
                            <path d="M10.3 2.3L4.5 8.1 2.3 5.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.9 2.9c.2.2.5.3.7.3s.5-.1.7-.3l6.5-6.5c.4-.4.4-1 0-1.4s-1-.4-1.4 0z" />
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="flex min-w-[60px] max-w-[190px] h-[34px] px-4 justify-center items-center rounded-[2px] border-0 text-white text-sm capitalize cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.09)] bg-[rgb(208,1,27)] hover:opacity-90"
          aria-label="Search"
        >
          <Image
            src="/images/svgs/header/search.svg"
            alt=""
            width={19}
            height={19}
            className="w-[14px] h-[14px] fill-white block"
          />
        </button>
      </form>
    </div>
  );
}
