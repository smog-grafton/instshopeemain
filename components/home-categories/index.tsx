"use client";

import { CategoryItem } from "./category-item";
import { CategoryNavButtons } from "./category-nav-buttons";
import { mockHomeCategoriesConfig } from "./data";
import { useRef, useState, useEffect } from "react";

export function HomeCategories() {
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
    // Check initial scroll state after component mounts
    const checkScrollState = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowPrev(scrollLeft > 0);
        setShowNext(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    // Check immediately
    checkScrollState();

    // Also check after a short delay to ensure layout is complete
    const timeoutId = setTimeout(checkScrollState, 100);

    // Check on window resize
    window.addEventListener("resize", checkScrollState);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div
      role="main"
      className="w-[1200px] mx-auto"
    >
      <div className="min-h-[50rem]">
        <div className="bg-white min-h-72 mt-5">
          <div className="group">
            <div className="items-center flex before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 bg-white [border-bottom-style:solid] h-16 px-5 border-b border-b-black/5 before:content-none">
              <div className="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54 group-lang:leading-6">
                Categories
              </div>
            </div>
            <div>
              <div className="w-full h-full relative group/categories">
                <div
                  ref={scrollContainerRef}
                  className="touch-pan-y h-full overflow-x-hidden overflow-y-hidden"
                  onScroll={handleScroll}
                >
                  <ul className="flex relative flex-col flex-wrap content-start h-[19rem] w-[120%]">
                    {mockHomeCategoriesConfig.categories.map((category, index) => (
                      <CategoryItem key={index} category={category} />
                    ))}
                  </ul>
                </div>
                <CategoryNavButtons
                  onPrev={scrollLeft}
                  onNext={scrollRight}
                  showPrev={showPrev}
                  showNext={showNext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
