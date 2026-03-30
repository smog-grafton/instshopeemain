"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { DailyDiscoverCard } from "@/components/daily-discover/daily-discover-card";
import type { DailyDiscoverProduct } from "@/components/daily-discover/data";
import type { ApiProduct } from "@/lib/api-client";
import { normalizeBadgeList } from "@/lib/product-badges";
import { formatPrice } from "@/lib/utils";

const CARD_WIDTH_PX = 200;

interface FromTheSameShopProps {
  shopSlug?: string;
  products?: ApiProduct[];
}

function FromSameShopHeader({ shopSlug }: { shopSlug?: string }) {
  return (
    <div
      className="flex h-16 items-center px-0"
      role="banner"
    >
      <h2 className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium uppercase tracking-normal text-black/54">
        From The Same Shop
      </h2>
      {shopSlug && (
        <Link
          href={`/shop/${shopSlug}#product_list`}
          className="flex items-center border-0 px-2 py-1.5 text-sm font-light leading-none text-red-500 no-underline outline-0 transition-colors duration-100 ease-in-out hover:outline-0 active:outline-0"
          tabIndex={0}
        >
          <span className="flex cursor-pointer items-center justify-center tracking-[0] outline-0">
            See All&nbsp;
            <svg
              enableBackground="new 0 0 11 11"
              viewBox="0 0 11 11"
              className="relative inline-block h-2.5 w-2.5 fill-current text-xs overflow-hidden"
              aria-hidden
            >
              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
}

export function FromTheSameShop({ shopSlug, products }: FromTheSameShopProps) {
  // Transform API products to DailyDiscoverProduct format
  const displayProducts: DailyDiscoverProduct[] = products && products.length > 0
    ? products.slice(0, 10).map((p, index) => {
        const discountPercent = p.originalPrice != null && p.originalPrice > 0
          ? Math.round((1 - p.price / p.originalPrice) * 100)
          : 0;
        const badgeKeys = ["shopee-lagi-murah", "cod", "mall", "new-arrival", "preferred", "sea-shipping"] as const;
        const badges = [...normalizeBadgeList(p.textBadges), ...normalizeBadgeList(p.imageBadges)]
          .map((b) => typeof b === "string" && badgeKeys.includes(b.toLowerCase() as typeof badgeKeys[number]) ? b.toLowerCase() as typeof badgeKeys[number] : null)
          .filter((b): b is (typeof badgeKeys)[number] => b != null)
          .filter((badge, badgeIndex, allBadges) => allBadges.indexOf(badge) === badgeIndex);
        return {
          id: p.slug,
          slug: p.slug,
          title: p.title,
          discountPercent,
          price: formatPrice(p.currencySymbol, p.price),
          originalPrice: p.originalPrice ? formatPrice(p.currencySymbol, p.originalPrice) : undefined,
          imageSrc: p.imageSrc,
          sold: p.soldCount >= 1000 ? `${(p.soldCount / 1000).toFixed(1)}k+` : String(p.soldCount),
          soldCount: String(p.soldCount),
          rating: p.rating,
          location: p.location,
          href: `/product/${p.slug}`,
          findSimilarHref: "#",
          imageIndex: (index % 7) + 1,
          hasVideo: false,
          badges,
          promotionLabel: p.promotionLabel ?? undefined,
        };
      })
    : [];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const checkScrollState = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowPrev(scrollLeft > 0);
        setShowNext(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScrollState();
    const timeoutId = setTimeout(checkScrollState, 100);
    window.addEventListener("resize", checkScrollState);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -CARD_WIDTH_PX * 2, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: CARD_WIDTH_PX * 2, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full pt-6"
      aria-label="From the same shop"
    >
      <FromSameShopHeader shopSlug={shopSlug} />
      {displayProducts.length === 0 ? (
        <div className="rounded-sm border border-dashed border-gray-200 px-4 py-8 text-center text-sm text-gray-500">
          This shop does not have other related products to show right now.
        </div>
      ) : (
      <div className="relative min-h-[320px] w-full overflow-visible transition-all group/carousel">
        <button
          type="button"
          onClick={scrollLeft}
          className={`absolute left-0 top-2/4 z-[5] -mt-3 -translate-x-2/4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow outline-0 transition-all duration-300 ease-in-out ${
            showPrev
              ? "opacity-100 scale-100 group-hover/carousel:scale-[1.75]"
              : "invisible scale-0 opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <svg
            enableBackground="new 0 0 13 20"
            viewBox="0 0 13 20"
            className="relative inline-block h-2.5 w-2.5 fill-current text-black/54 overflow-hidden"
            aria-hidden
          >
            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
          </svg>
        </button>
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="min-h-[300px] w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory touch-pan-y"
        >
          <ul
            className="flex list-none flex-nowrap items-start gap-0 m-0 p-0"
            style={{ width: displayProducts.length * CARD_WIDTH_PX + (displayProducts.length - 1) * 8 }}
          >
            {displayProducts.map((product) => (
              <li
                key={product.id}
                className="shrink-0 snap-start overflow-hidden px-1"
                style={{ width: CARD_WIDTH_PX }}
              >
                <DailyDiscoverCard product={product} variant="fromSameShop" />
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={scrollRight}
          className={`absolute right-0 top-2/4 z-[5] -mt-3 translate-x-2/4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-white shadow outline-0 transition-all duration-300 ease-in-out ${
            showNext
              ? "opacity-100 scale-100 group-hover/carousel:scale-[1.75]"
              : "invisible scale-0 opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <svg
            enableBackground="new 0 0 13 21"
            viewBox="0 0 13 21"
            className="relative inline-block h-2.5 w-2.5 fill-current text-black/54 overflow-hidden"
            aria-hidden
          >
            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
          </svg>
        </button>
      </div>
      )}
    </section>
  );
}
