"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export type ShopSearchScope = "in_shop" | "in_mall";

const SCOPE_OPTIONS: { value: ShopSearchScope; label: string }[] = [
  { value: "in_shop", label: "In This Shop" },
  { value: "in_mall", label: "In Shopee Mall" },
];

interface ShopSearchBarProps {
  shopSlug: string;
}

export function ShopSearchBar({ shopSlug }: ShopSearchBarProps) {
  const router = useRouter();
  const currentParams = useSearchParams();
  const currentKeyword = currentParams.get("keyword") ?? "";
  const currentCollection = currentParams.get("shopCollection") ?? "";
  const [query, setQuery] = useState(currentKeyword);
  const [scope, setScope] = useState<ShopSearchScope>("in_shop");
  const [scopeOpen, setScopeOpen] = useState(false);
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(currentKeyword);
  }, [currentKeyword]);

  const scopeLabel = SCOPE_OPTIONS.find((o) => o.value === scope)?.label ?? "In This Shop";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      params.set("keyword", trimmedQuery);
    }

    if (scope === "in_shop" && currentCollection) {
      params.set("shopCollection", currentCollection);
    }

    const basePath = scope === "in_shop" ? `/shop/${shopSlug}` : "/search";
    const queryString = params.toString();
    const hash = scope === "in_shop" ? "#product_list" : "";

    router.push(queryString ? `${basePath}?${queryString}${hash}` : `${basePath}${hash}`);
    setScopeOpen(false);
  };

  return (
    <div className="flex-1 flex relative min-w-0 w-full">
      <form
        role="search"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex h-10 w-full items-stretch justify-between rounded-none border-2 border-white bg-white shadow-sm lg:border-[3px]"
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
              className="m-0 flex flex-1 items-center border-0 p-0 text-[13px] text-black/80 outline-none placeholder:text-black/54 sm:text-sm"
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
              className="flex h-[34px] min-h-[25.5px] w-full max-w-[112px] items-center overflow-visible rounded-none border-0 border-l border-black/10 bg-white pl-3 pr-2 text-[13px] text-black/87 appearance-button capitalize cursor-pointer sm:max-w-[132px] sm:pl-4 sm:pr-2.5 sm:text-sm lg:max-w-[150px]"
            >
              <span className="pointer-events-none truncate whitespace-nowrap">
                {scopeLabel}
              </span>
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                className="ml-2 block h-2 w-2 shrink-0 fill-black/87 sm:ml-3 lg:ml-4"
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
          className="flex h-[34px] min-w-[52px] max-w-[190px] items-center justify-center rounded-[2px] border-0 bg-[rgb(208,1,27)] px-3 text-sm capitalize text-white shadow-[0_1px_1px_rgba(0,0,0,0.09)] cursor-pointer hover:opacity-90 sm:min-w-[60px] sm:px-4"
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
