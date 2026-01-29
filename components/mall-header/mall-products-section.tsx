"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CarouselNavButtons } from "@/components/shocking-sale/carousel-nav-buttons";
import type { MallProduct } from "./data";

interface MallProductsSectionProps {
  products: MallProduct[];
}

interface MallProductItemProps {
  product: MallProduct;
}

function MallProductItem({ product }: MallProductItemProps) {
  return (
    <li className="touch-pan-y overflow-x-hidden h-60 w-52 flex-shrink-0">
      <div className="h-full">
        <div className="relative overflow-x-hidden overflow-y-hidden p-2.5 h-full">
          <Link
            href={product.href}
            className="active:outline-0 hover:outline-0 bg-[50%] bg-no-repeat bg-contain no-underline duration-200 ease-in-out block text-black/87"
          >
            <div className="w-full relative pt-[120%]">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                className="inline align-bottom object-contain object-center w-full h-full duration-200 ease-in-out absolute left-0 top-0"
                sizes="201px"
                unoptimized
              />
            </div>
          </Link>
          <div className="text-center text-ellipsis [-webkit-line-clamp:1] [word-wrap:break-word] text-red-700 w-44 h-7 text-lg leading-7 [display:-webkit-box] absolute overflow-x-hidden overflow-y-hidden left-3.5 bottom-5">
            Shop Now
          </div>
        </div>
      </div>
    </li>
  );
}

function MallSeeAllItem() {
  return (
    <li className="touch-pan-y overflow-x-hidden h-60 w-52 flex-shrink-0">
      <Link
        href="/mall"
        className="active:outline-0 hover:outline-0 text-red-700 whitespace-nowrap cursor-pointer no-underline block relative overflow-x-hidden overflow-y-hidden p-2.5 h-full"
      >
        <div className="w-full relative pt-[120%]" />
        <div className="justify-center items-center text-base flex absolute inset-0">
          See All
          <div className="bg-red-700 justify-center items-center w-6 h-6 flex ml-2 rounded-[50%]">
            <svg
              enableBackground="new 0 0 11 11"
              viewBox="0 0 11 11"
              x="0"
              y="0"
              className="align-baseline fill-current h-4 inline-block relative overflow-x-hidden overflow-y-hidden stroke-white w-2"
            >
              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
}

export function MallProductsSection({ products }: MallProductsSectionProps) {
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
      scrollContainerRef.current.scrollBy({ left: -208 * 2, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 208 * 2, behavior: "smooth" });
    }
  };

  const columnCount = Math.ceil((products.length + 1) / 2);
  const containerWidth = `${columnCount * 208}px`;

  return (
    <div className="[overflow:unset] bg-white w-[50rem] inline-block align-top">
      <div className="w-full h-full relative group/carousel">
        <div
          ref={scrollContainerRef}
          className="touch-pan-y h-full overflow-x-hidden overflow-y-hidden"
          onScroll={handleScroll}
        >
          <ul
            className="relative grid grid-rows-2 auto-cols-[13rem] grid-flow-col gap-x-0 h-[472px] w-full"
            style={{ width: containerWidth }}
          >
            {products.map((product) => (
              <MallProductItem key={product.id} product={product} />
            ))}
            <MallSeeAllItem />
          </ul>
        </div>
        <CarouselNavButtons
          onPrev={scrollLeft}
          onNext={scrollRight}
          showPrev={showPrev}
          showNext={showNext}
        />
      </div>
    </div>
  );
}

