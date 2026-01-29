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
      scrollContainerRef.current.scrollBy({ left: -208, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 208, behavior: "smooth" });
    }
  };

  // Calculate width based on number of products (each product is w-52 = 208px)
  // We need enough width to show all products
  const containerWidth = `${products.length * 208}px`;

  return (
    <div className="w-full h-full relative group/carousel">
      <div
        ref={scrollContainerRef}
        className="touch-pan-y h-full overflow-x-hidden overflow-y-hidden"
        onScroll={handleScroll}
      >
        <ul className="h-full flex relative" style={{ width: containerWidth }}>
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
