"use client";

import { CategoryItem } from "./category-item";
import { CategoryNavButtons } from "./category-nav-buttons";
import { useRef, useState, useEffect } from "react";
import {
  getCategories,
  resolveCountryIdForBrowser,
} from "@/lib/api-client";
import type { CategoryItem as CategoryItemType } from "./data";

export function HomeCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [categories, setCategories] = useState<CategoryItemType[]>([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const countryId = await resolveCountryIdForBrowser();
        const response = await getCategories({
          parent_id: null,
          country_id: countryId,
        });
        const transformedCategories: CategoryItemType[] = response.categories.map((category) => {
          const fallbackHref = `/${category.slug}-cat.${category.id}`;

          return {
            slug: category.slug,
            href: category.url || fallbackHref,
            imageSrc: category.imagePath || "/images/home/categories/home/default.webp",
            webpSrc: category.imagePath || undefined,
            label: category.name,
          };
        });

        setCategories(transformedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchCategories();
  }, []);

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
  }, [categories]);

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
    <section id="home-categories" role="region" className="mx-auto mt-5 w-full max-w-[1200px] px-3 sm:px-4">
      <div className="overflow-hidden bg-white shadow-sm">
        <div className="group">
          <div className="flex h-14 items-center border-b border-b-black/5 bg-white px-4 before:mr-1.5 before:h-6 before:w-2.5 before:bg-red-500 before:content-none sm:h-16 sm:px-5">
            <div className="mr-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium uppercase text-black/54 group-lang:leading-6 sm:text-base">
              Categories
            </div>
          </div>
          <div className="relative w-full">
            <div
              ref={scrollContainerRef}
              className="touch-pan-y overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              onScroll={handleScroll}
            >
              <ul className="grid h-[7.5rem] w-max grid-flow-col auto-cols-[6.875rem] grid-rows-1 content-start sm:h-[18rem] sm:auto-cols-[8rem] sm:grid-rows-2">
                {loading ? (
                  <li className="flex h-full w-[16rem] items-center justify-center text-sm text-gray-500">Loading categories...</li>
                ) : categories.length === 0 ? (
                  <li className="flex h-full w-[16rem] items-center justify-center text-sm text-gray-500">No categories available</li>
                ) : (
                  categories.map((category) => (
                    <CategoryItem key={category.slug} category={category} />
                  ))
                )}
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
    </section>
  );
}
