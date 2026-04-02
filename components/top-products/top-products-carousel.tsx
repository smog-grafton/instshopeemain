"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ProductCardImage,
  ProductCardLoadFrame,
} from "@/components/common/product-card-media";
import type { TopProduct } from "./data";
import { getTopProductImageSrc } from "./data";
import { isBackendImage } from "@/lib/utils";

const CARD_WIDTH_PX = 208;

interface TopProductsCarouselProps {
  products: TopProduct[];
}

function TopProductCard({ product }: { product: TopProduct }) {
  const { src } = getTopProductImageSrc(product);

  return (
    <li
      className="touch-pan-y w-[10.75rem] flex-shrink-0 snap-start overflow-hidden sm:w-[13rem]"
    >
      <Link
        href={product.href}
        className="block w-full px-2.5 py-4 no-underline active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-black/87 focus-visible:outline-offset-[-2px] sm:py-5"
      >
        <ProductCardLoadFrame className="block">
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
              <ProductCardImage
                src={src}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 172px, 208px"
                unoptimized={isBackendImage(src)}
              />
            </div>
            <div className="text-white text-center w-full h-6 font-medium leading-6 absolute left-0 bottom-0 bg-black/26 flex items-center justify-center text-sm">
              Monthly Sales {product.monthlySales}
            </div>
          </div>
          <div className="mt-4 min-h-[2.7rem] line-clamp-2 text-left text-[0.92rem] font-medium capitalize leading-5 text-neutral-600 sm:mt-5 sm:min-h-[3rem] sm:text-base sm:leading-6">
            {product.name}
          </div>
        </ProductCardLoadFrame>
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
      scrollContainerRef.current.scrollBy({ left: -Math.max(scrollContainerRef.current.clientWidth * 0.8, CARD_WIDTH_PX), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: Math.max(scrollContainerRef.current.clientWidth * 0.8, CARD_WIDTH_PX), behavior: "smooth" });
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
          <ul className="m-0 flex w-max list-none flex-nowrap items-start gap-0 p-0">
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
