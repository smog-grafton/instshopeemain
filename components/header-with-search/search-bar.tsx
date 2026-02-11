"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HeaderConfig } from "./data";
import { searchAutocomplete, type AutocompleteSuggestion } from "@/lib/api-client";

interface SearchBarProps {
  config: HeaderConfig;
}

// Reuse same shop icon asset as shop-profile.
const SHOP_ICON_SRC = "/images/profile/shop/shop.svg";

export function SearchBar({ config }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [liveSuggestions, setLiveSuggestions] = useState<AutocompleteSuggestion[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch live suggestions from backend when user types
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!query.trim()) {
      setLiveSuggestions([]);
      return;
    }

    debounceTimerRef.current = setTimeout(async () => {
      setLoadingSuggestions(true);
      try {
        const response = await searchAutocomplete({ keyword: query.trim(), limit: 8 });
        setLiveSuggestions(response.suggestions);
      } catch (error) {
        console.error("Failed to fetch live suggestions:", error);
        setLiveSuggestions([]);
      } finally {
        setLoadingSuggestions(false);
      }
    }, 300); // 300ms debounce

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query]);

  // Combine trending suggestions (when empty) with live suggestions (when typing)
  const filteredSuggestions = useMemo(() => {
    if (!query.trim()) {
      // Show top few trending searches when there is no input.
      return config.searchSuggestions.slice(0, 8);
    }
    // When typing, use live suggestions from backend
    return liveSuggestions.map((s) => ({
      keyword: s.keyword,
      href: s.href,
    }));
  }, [config.searchSuggestions, query, liveSuggestions]);

  const showDropdown =
    isFocused && (query.trim().length > 0 || filteredSuggestions.length > 0);

  // Close suggestions when clicking outside the search area.
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <form
        role="search"
        autoComplete="off"
        action="/search"
        method="GET"
        className="bg-white justify-between items-stretch h-10 flex p-[0.1875rem] rounded-sm w-full shadow-sm"
      >
        <div className="flex-1 flex relative">
          <div className="flex-1 flex relative px-2.5 bg-white border-white">
            <input
              aria-label={config.searchPlaceholder}
              className="leading-4 outline-0 flex-1 items-center flex border-0"
              maxLength={128}
              placeholder={config.searchPlaceholder}
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls="shopee-searchbar-listbox"
              aria-expanded={showDropdown ? "true" : "false"}
              role="combobox"
              name="keyword"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="[appearance:auto] text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm shadow-sm rounded-sm border-0 inline-flex min-w-16 max-w-48 h-9 px-4 text-white outline-0 relative bg-red-500 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+theme(width[1.5]))] focus-visible:before:h-[calc(100%+theme(height[1.5]))] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87 hover:bg-red-500 active:bg-red-500 active:shadow-inner"
        >
          <Image
            src="/images/svgs/header/search.svg"
            alt="Search"
            width={19}
            height={19}
            className="align-baseline fill-current w-3.5 h-3.5 inline-block relative overflow-x-hidden overflow-y-hidden mx-auto"
          />
        </button>
      </form>

      {showDropdown && (
        <div
          id="shopee-searchbar-listbox"
          role="listbox"
          className="absolute left-0 right-0 mt-1 bg-white rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.12)] text-sm text-black/80 z-[310]"
        >
          {/* When empty: placeholder as first suggestion (trending) */}
          {!query.trim() && (
            <Link
              href={`/search?keyword=${encodeURIComponent(config.searchPlaceholder)}`}
              className="block px-3 py-2 hover:bg-neutral-50 no-underline text-sm text-black/80"
            >
              {config.searchPlaceholder}
            </Link>
          )}

          {/* When typing: Show live search results */}
          {query.trim() && (
            <>
              {/* Search "query" Products */}
              <Link
                href={`/search?keyword=${encodeURIComponent(query.trim())}`}
                className="flex items-center px-3 py-2 hover:bg-neutral-50 no-underline text-sm text-black"
              >
                <span className="text-xs uppercase text-black/50 mr-2">
                  Search &quot;{query.trim()}&quot; Products
                </span>
              </Link>
              {/* Search "query" Shops */}
              <Link
                href={{
                  pathname: "/search",
                  query: { keyword: query.trim(), type: "shop" },
                }}
                className="flex items-center px-3 py-2 hover:bg-neutral-50 no-underline text-sm text-black"
              >
                <Image
                  src={SHOP_ICON_SRC}
                  alt="Search shops"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 mr-2"
                />
                <span className="text-xs uppercase text-black/50 mr-2">
                  Search &quot;{query.trim()}&quot; Shops
                </span>
              </Link>
            </>
          )}

          {/* Loading indicator */}
          {loadingSuggestions && query.trim() && (
            <div className="px-3 py-2 text-xs text-black/40">
              Searching...
            </div>
          )}

          {/* Keyword suggestions */}
          {!loadingSuggestions && filteredSuggestions.map((item, index) => {
            const liveSuggestion = liveSuggestions.find(s => s.keyword === item.keyword);
            return (
              <Link
                key={`${item.keyword}-${index}`}
                href={
                  item.href || `/search?keyword=${encodeURIComponent(item.keyword)}`
                }
                className="flex items-center px-3 py-2 hover:bg-neutral-50 no-underline text-sm text-black/80"
              >
                {liveSuggestion?.type === 'shop' && (
                  <Image
                    src={SHOP_ICON_SRC}
                    alt="Shop"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 mr-2"
                  />
                )}
                {item.keyword}
              </Link>
            );
          })}

          {!filteredSuggestions.length && !query.trim() && (
            <div className="px-3 py-2 text-xs text-black/40">
              Start typing to search…
            </div>
          )}
        </div>
      )}
    </div>
  );
}

