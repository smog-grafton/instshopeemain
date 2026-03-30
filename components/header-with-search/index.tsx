"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { SearchSuggestions } from "./search-suggestions";
import { CartButtonWithDropdown } from "./cart-button-with-dropdown";
import { CartButton } from "./cart-button";
import { useEffect, useState } from "react";
import {
  getUiBlocksSafe,
  getTrendingSearches,
  resolveCountryIdForBrowser,
} from "@/lib/api-client";
import type { SearchSuggestion } from "./data";
import { useCart } from "@/components/cart";
import { useAuth } from "@/components/auth/auth-context";
import { isBackendImage } from "@/lib/utils";

const DEFAULT_PLACEHOLDER = "Daily 25% Off Voucher only with ShopeeVIP👑! Subscribe Now 👉";

function MobileAccountIcon({
  username,
  avatarUrl,
}: {
  username: string;
  avatarUrl?: string | null;
}) {
  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={username}
        width={28}
        height={28}
        className="h-7 w-7 rounded-full border border-white/30 object-cover"
        unoptimized={isBackendImage(avatarUrl)}
      />
    );
  }

  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/90">
      <svg viewBox="0 0 15 15" className="h-4 w-4 fill-current" aria-hidden>
        <g>
          <circle cx="7.5" cy="4.5" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path
            d="m2.2 13.4c.5-2.7 2.7-4.5 5.3-4.5s4.8 1.8 5.3 4.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.1"
          />
        </g>
      </svg>
    </span>
  );
}

export function HeaderWithSearch() {
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [placeholder, setPlaceholder] = useState(DEFAULT_PLACEHOLDER);
  const { itemCount } = useCart();
  const { isLoggedIn, user: authUser } = useAuth();

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

  const accountHref = isLoggedIn ? "/user/account/profile" : "/login";
  const accountLabel = isLoggedIn ? authUser?.username ?? "Account" : "Log In";

  return (
    <>
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] bg-[#ee4d2d] text-sm leading-tight text-black/80 shadow-sm lg:hidden"
        id="component-mobile"
      >
        <div className="mx-auto w-full px-3 pb-3 pt-3 sm:px-4">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex shrink-0 items-center no-underline">
              <Image
                src="/images/svgs/header/logo-white.svg"
                alt="Shopee Logo"
                width={112}
                height={34}
                className="block h-8 w-auto"
                priority
              />
            </Link>
            <div className="flex min-w-0 shrink-0 items-center gap-3">
              <Link
                href={accountHref}
                className="flex min-w-0 items-center gap-2 no-underline text-white"
              >
                <MobileAccountIcon
                  username={accountLabel}
                  avatarUrl={authUser?.avatarUrl ?? null}
                />
                <span className="hidden max-w-[84px] truncate text-xs font-medium leading-4 text-white min-[390px]:block">
                  {accountLabel}
                </span>
              </Link>
              <CartButton itemCount={itemCount} compact />
            </div>
          </div>
          <div className="mt-3">
            <SearchBar config={config} />
          </div>
        </div>
      </div>

      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] hidden min-w-[inherit] bg-[#ee4d2d] text-sm leading-tight text-black/80 shadow-sm lg:block"
        id="component"
      >
        <div className="mx-auto flex w-full max-w-6xl items-start gap-4 px-3 pb-3 pt-4 sm:px-4 lg:flex-nowrap lg:gap-6">
          <Logo />
          <div className="relative flex min-w-0 max-w-[840px] flex-1 flex-col justify-start">
            <SearchBar config={config} />
            <SearchSuggestions suggestions={suggestions} />
          </div>
          <CartButtonWithDropdown />
        </div>
      </div>
    </>
  );
}
