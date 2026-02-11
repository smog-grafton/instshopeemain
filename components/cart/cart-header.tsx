"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { searchAutocomplete, type AutocompleteSuggestion } from "@/lib/api-client";
import { getUiBlocksSafe } from "@/lib/api-client";

const SHOP_ICON_SRC = "/images/profile/shop/shop.svg";

/** Cart-specific header: orange logo + \"Shopping Cart\" + simple search bar. */
export function CartHeader() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [liveSuggestions, setLiveSuggestions] = useState<AutocompleteSuggestion[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [placeholder, setPlaceholder] = useState("Shop Up to 50% Off 2.2 Deals Now!😍");
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch placeholder from backend
  useEffect(() => {
    async function fetchPlaceholder() {
      try {
        const placeholderBlocks = await getUiBlocksSafe({ key: "search_placeholder" });
        if (placeholderBlocks.length > 0 && placeholderBlocks[0].title) {
          setPlaceholder(placeholderBlocks[0].title);
        }
      } catch (error) {
        console.error("Failed to load search placeholder:", error);
      }
    }
    fetchPlaceholder();
  }, []);

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
    }, 300);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query]);

  // Close suggestions when clicking outside
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

  const showDropdown = isFocused && (query.trim().length > 0 || liveSuggestions.length > 0);

  return (
    <section className="bg-white border-b border-black/10 flex items-center h-[100px] min-w-[1200px]">
      <div className="w-[1200px] mx-auto">
        <div className="flex items-center">
          {/* Logo + \"Shopping Cart\" label */}
          <div className="flex flex-1 pl-[18px]">
            <Link
              href="/"
              className="flex items-end text-black/87 no-underline bg-transparent"
            >
              <div>
                <Image
                  src="/images/svgs/header/logo-orange.svg"
                  alt="InstShopee Logo"
                  width={160}
                  height={48}
                  className="block w-[8.125rem] h-[46px] overflow-hidden"
                  priority
                />
              </div>
              <div className="text-[20px] leading-[30px] h-[30px] mb-[1px] ml-[15px] pl-[15px] border-l border-[#ee4d2d] capitalize text-[#ee4d2d]">
                shopping cart
              </div>
            </Link>
          </div>

          {/* Cart search bar */}
          <div className="w-[38.8125rem] relative" ref={wrapperRef}>
            <form
              role="search"
              autoComplete="off"
              action="/search"
              method="GET"
              className="flex h-10 items-stretch justify-between rounded-[2px] border-2 border-[#ee4d2d] bg-white"
            >
              <div className="flex flex-1">
                <div className="relative flex flex-1 box-border px-[10px]">
                  <input
                    aria-label={placeholder}
                    maxLength={128}
                    placeholder={placeholder}
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="cart-searchbar-listbox"
                    aria-expanded={showDropdown ? "true" : "false"}
                    role="combobox"
                    name="keyword"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    className="m-0 flex flex-1 items-center border-0 p-0 text-sm text-black/60 outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex h-9 w-20 cursor-pointer items-center justify-center border-0 bg-[#ee4d2d] text-sm text-white shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px] outline-none"
              >
                <Image
                  src="/images/svgs/header/search.svg"
                  alt="Search"
                  width={19}
                  height={19}
                  className="block h-[14px] w-4 fill-white"
                />
              </button>
            </form>

            {showDropdown && (
              <div
                id="cart-searchbar-listbox"
                role="listbox"
                className="absolute left-0 right-0 mt-1 bg-white rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.12)] text-sm text-black/80 z-[310]"
              >
                {query.trim() && (
                  <>
                    <Link
                      href={`/search?keyword=${encodeURIComponent(query.trim())}`}
                      className="flex items-center px-3 py-2 hover:bg-neutral-50 no-underline text-sm text-black"
                    >
                      <span className="text-xs uppercase text-black/50 mr-2">
                        Search &quot;{query.trim()}&quot; Products
                      </span>
                    </Link>
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

                {loadingSuggestions && query.trim() && (
                  <div className="px-3 py-2 text-xs text-black/40">Searching...</div>
                )}

                {!loadingSuggestions &&
                  liveSuggestions.map((suggestion, index) => (
                    <Link
                      key={`${suggestion.keyword}-${index}`}
                      href={suggestion.href || `/search?keyword=${encodeURIComponent(suggestion.keyword)}`}
                      className="flex items-center px-3 py-2 hover:bg-neutral-50 no-underline text-sm text-black/80"
                    >
                      {suggestion.type === "shop" && (
                        <Image
                          src={SHOP_ICON_SRC}
                          alt="Shop"
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 mr-2"
                        />
                      )}
                      {suggestion.keyword}
                    </Link>
                  ))}

                {!loadingSuggestions && !query.trim() && liveSuggestions.length === 0 && (
                  <div className="px-3 py-2 text-xs text-black/40">
                    Start typing to search…
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

