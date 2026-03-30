"use client";

import { useEffect, useRef, useState } from "react";
import type { ShopVoucher } from "./data";
import { VoucherCard } from "./voucher-card";

interface VoucherCarouselProps {
  vouchers: ShopVoucher[];
}

function LeftArrowIcon() {
  return (
    <svg
      enableBackground="new 0 0 13 20"
      viewBox="0 0 13 20"
      x="0"
      y="0"
      className="block h-5 w-[1em] fill-black/54 relative overflow-hidden transition-[width] duration-100"
      aria-hidden
    >
      <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
    </svg>
  );
}

function RightArrowIcon() {
  return (
    <svg
      enableBackground="new 0 0 13 21"
      viewBox="0 0 13 21"
      x="0"
      y="0"
      className="block h-5 w-[1em] fill-black/54 relative overflow-hidden transition-[width] duration-100"
      aria-hidden
    >
      <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
    </svg>
  );
}

export function VoucherCarousel({ vouchers }: VoucherCarouselProps) {
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
  }, [vouchers.length]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -Math.max(scrollContainerRef.current.clientWidth * 0.85, 280),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: Math.max(scrollContainerRef.current.clientWidth * 0.85, 280),
        behavior: "smooth",
      });
    }
  };

  if (vouchers.length === 0) return null;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden touch-pan-y">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto overflow-y-hidden touch-pan-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="relative m-0 flex list-none items-stretch gap-3 p-0">
            {vouchers.map((v) => (
              <li
                key={v.id}
                className="touch-pan-y box-border w-[280px] flex-shrink-0 overflow-x-hidden list-none sm:w-[320px] lg:w-[340px]"
              >
                <VoucherCard voucher={v} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Left arrow - same pattern as top-products-carousel */}
      <button
        type="button"
        onClick={scrollLeft}
        role="button"
        tabIndex={0}
        aria-label="Scroll vouchers left"
        className={`absolute left-0 top-1/2 z-[2] hidden h-[50px] w-[50px] -translate-x-1/2 items-center justify-center rounded-full bg-white text-xl leading-[50px] shadow-[0_1px_12px_rgba(0,0,0,0.12)] outline-0 transition-all duration-100 ease-[cubic-bezier(0.4,0,0.6,1)] lg:flex ${
          showPrev ? "opacity-100 visible -translate-x-1/2" : "opacity-0 invisible pointer-events-none -translate-x-1/2"
        }`}
      >
        <LeftArrowIcon />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={scrollRight}
        role="button"
        tabIndex={0}
        aria-label="Scroll vouchers right"
        className={`absolute right-0 top-1/2 z-[2] hidden h-[50px] w-[50px] translate-x-1/2 items-center justify-center rounded-full bg-white text-xl leading-[50px] shadow-[0_1px_12px_rgba(0,0,0,0.12)] outline-0 transition-all duration-100 ease-[cubic-bezier(0.4,0,0.6,1)] lg:flex ${
          showNext ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <RightArrowIcon />
      </button>
    </div>
  );
}
