"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { TopProduct } from "./data";
import { getTopProductImageSrc } from "./data";

const CARD_WIDTH_PX = 208;

interface TopProductsCarouselProps {
  products: TopProduct[];
}

function TopProductCard({ product }: { product: TopProduct }) {
  const { src } = getTopProductImageSrc(product);

  return (
    <li
      className="touch-pan-y flex-shrink-0 snap-start overflow-hidden"
      style={{ width: CARD_WIDTH_PX }}
    >
      <Link
        href={product.href}
        className="no-underline px-2.5 py-5 block active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-black/87 focus-visible:outline-offset-[-2px] w-full"
      >
        {/* Image block: full width, square aspect, with TOP badge and sales bar */}
        <div className="relative w-full block">
          {/* TOP badge: ribbon/banner shape with pointed bottom */}
          <div
            className="bg-[#ee4d2d] z-[1] w-8 h-10 absolute left-0 top-0 flex items-center justify-center pt-0.5"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)",
            }}
          >
            <span className="text-white text-[10px] font-semibold leading-tight uppercase">TOP</span>
          </div>
          <div className="w-full pt-[100%] relative overflow-hidden">
            <Image
              src={src}
              alt={product.name}
              fill
              className="object-contain transition-opacity duration-200"
              sizes="208px"
              unoptimized
            />
          </div>
          <div className="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26 flex items-center justify-center text-sm">
            Monthly Sales {product.monthlySales}
          </div>
        </div>
        <div className="text-ellipsis text-neutral-600 text-left capitalize text-base font-medium leading-6 mt-5 line-clamp-2 min-h-[3rem]">
          {product.name}
        </div>
      </Link>
    </li>
  );
}

export function TopProductsCarousel({ products }: TopProductsCarouselProps) {
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
    <div className="bg-white flex w-full [overflow:unset]">
      <div className="w-full relative transition-all group/carousel min-h-[320px] overflow-visible">
        <button
          type="button"
          onClick={scrollLeft}
          className={`[appearance:auto] z-[5] cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] border-[none] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 -translate-x-2/4 transition-all duration-300 ${
            showPrev
              ? "opacity-100 scale-100 group-hover/carousel:scale-[1.75]"
              : "opacity-0 scale-0 pointer-events-none invisible"
          }`}
          aria-label="Scroll left"
        >
          <svg
            enableBackground="new 0 0 13 20"
            viewBox="0 0 13 20"
            x="0"
            y="0"
            className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54"
          >
            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
          </svg>
        </button>
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="touch-pan-y overflow-x-auto overflow-y-hidden min-h-[300px] w-full snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul
            className="flex flex-nowrap items-start list-none m-0 p-0 gap-0"
            style={{ width: products.length * CARD_WIDTH_PX }}
          >
            {products.map((product) => (
              <TopProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={scrollRight}
          className={`[appearance:auto] z-[5] cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] border-[none] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4 transition-all duration-300 ${
            showNext
              ? "opacity-100 scale-100 group-hover/carousel:scale-[1.75]"
              : "opacity-0 scale-0 pointer-events-none invisible"
          }`}
          aria-label="Scroll right"
        >
          <svg
            enableBackground="new 0 0 13 21"
            viewBox="0 0 13 21"
            x="0"
            y="0"
            className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54"
          >
            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
          </svg>
        </button>
      </div>
    </div>
  );
}
