"use client";

import { CategoryItem } from "./category-item";
import { CategoryNavButtons } from "./category-nav-buttons";
import { useRef, useState, useEffect } from "react";
import { getUiBlocks, type ApiUiBlock } from "@/lib/api-client";
import type { CategoryItem as CategoryItemType } from "./data";
import { WobbleLoader } from "@/components/common/wobble-loader";

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
    // Fetch categories from backend
    async function fetchCategories() {
      try {
        setLoading(true);
        const blocks = await getUiBlocks({ key: 'home_categories' });
        
        // Transform API blocks to CategoryItem format
        const transformedCategories: CategoryItemType[] = blocks.map((block) => {
          // Use categorySlug from API, or extract from href, or generate from label
          const slug = block.categorySlug || 
            (block.href.match(/\/m\/([^/]+)/)?.[1]) || 
            (block.label?.toLowerCase().replace(/\s+/g, '-') || '');
          
          return {
            slug,
            href: block.href || `/m/${slug}`,
            imageSrc: block.imageSrc || '/images/home/categories/home/default.webp',
            webpSrc: block.imageSrc || undefined,
            label: block.label || block.title || '',
          };
        });
        setCategories(transformedCategories);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        // Fallback to empty array or mock data if needed
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
                    {loading ? (
                      <li className="w-full text-center py-8 text-gray-500">Loading categories...</li>
                    ) : categories.length === 0 ? (
                      <li className="w-full text-center py-8 text-gray-500">No categories available</li>
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
        </div>
      </div>
    </div>
  );
}
