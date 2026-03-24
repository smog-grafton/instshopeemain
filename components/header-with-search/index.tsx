"use client";

import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { SearchSuggestions } from "./search-suggestions";
import { CartButtonWithDropdown } from "./cart-button-with-dropdown";
import { useEffect, useState } from "react";
import {
  getUiBlocksSafe,
  getTrendingSearches,
  resolveCountryIdForBrowser,
} from "@/lib/api-client";
import type { SearchSuggestion } from "./data";

const DEFAULT_PLACEHOLDER = "Daily 25% Off Voucher only with ShopeeVIP👑! Subscribe Now 👉";

export function HeaderWithSearch() {
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [placeholder, setPlaceholder] = useState(DEFAULT_PLACEHOLDER);

  useEffect(() => {
    async function fetchSuggestions() {
      try {
        // Fetch trending searches from actual search frequency (internal products/shops only)
        const trendingSearches = await getTrendingSearches({ limit: 10 });
        const trendingSuggestions: SearchSuggestion[] = trendingSearches
          .filter((page) => {
            // Only include internal URLs (no external shopee.com.my links)
            return page.href && !page.href.startsWith('http') && !page.href.includes('shopee.com');
          })
          .map((page) => ({
            keyword: page.text,
            href: page.href,
            ariaHidden: false,
          }));

        // Fetch search suggestions from UI blocks (also filter external URLs)
        const countryId = await resolveCountryIdForBrowser();
        const blocks = await getUiBlocksSafe({
          key: "search_suggestion",
          country_id: countryId,
        });
        const blockSuggestions: SearchSuggestion[] = blocks
          .filter((b) => {
            // Only include internal URLs
            return b.href && !b.href.startsWith('http') && !b.href.includes('shopee.com');
          })
          .map((b) => ({
            keyword: b.title || b.label || "",
            href: b.href,
            ariaHidden: b.meta?.ariaHidden || false,
          }));

        // Combine trending searches first, then UI block suggestions
        setSuggestions([...trendingSuggestions, ...blockSuggestions]);
        
        // Fetch search placeholder from a dedicated UI block
        const placeholderBlocks = await getUiBlocksSafe({
          key: "search_placeholder",
          country_id: countryId,
        });
        if (placeholderBlocks.length > 0) {
          const placeholderBlock = placeholderBlocks[0];
          if (placeholderBlock.title || placeholderBlock.subtitle) {
            setPlaceholder(placeholderBlock.title || placeholderBlock.subtitle || DEFAULT_PLACEHOLDER);
          }
        }
      } catch (error) {
        console.error("Failed to load search suggestions:", error);
      }
    }
    fetchSuggestions();
  }, []);

  const config = {
    searchPlaceholder: placeholder,
    searchSuggestions: suggestions,
    cartItemCount: 0,
  };

  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 z-[300] shadow-sm min-w-[inherit] bg-[#ee4d2d]"
      id="component"
    >
      <div className="mx-auto justify-between flex flex-wrap gap-3 pt-4 pb-3 max-w-6xl w-full px-3 sm:px-4">
        <Logo />
        <div className="flex-col justify-start w-full min-w-0 max-w-[840px] flex-1 flex relative pb-2">
          <SearchBar config={config} />
          <SearchSuggestions suggestions={suggestions} />
        </div>
        <CartButtonWithDropdown />
      </div>
    </div>
  );
}
