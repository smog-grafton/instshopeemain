"use client";

import { useRef, useState, useEffect } from "react";
import { ProductItem } from "./product-item";
import { CarouselNavButtons } from "./carousel-nav-buttons";
import type { ShockingSaleProduct } from "./data";

interface ProductCarouselProps {
  products: ShockingSaleProduct[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
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
      scrollContainerRef.current.scrollBy({ left: -Math.max(scrollContainerRef.current.clientWidth * 0.82, 208), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: Math.max(scrollContainerRef.current.clientWidth * 0.82, 208), behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full relative group/carousel">
      <div
        ref={scrollContainerRef}
        className="touch-pan-y h-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onScroll={handleScroll}
      >
        <ul className="relative flex h-full w-max">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
      <CarouselNavButtons
        onPrev={scrollLeft}
        onNext={scrollRight}
        showPrev={showPrev}
        showNext={showNext}
      />
    </div>
  );
}
