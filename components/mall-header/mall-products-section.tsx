"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CarouselNavButtons } from "@/components/shocking-sale/carousel-nav-buttons";
import { getRecommendedProducts } from "@/lib/api-client";
import type { MallProduct } from "./data";
import { normalizeBadgeList } from "@/lib/product-badges";
import { isBackendImage } from "@/lib/utils";

interface MallProductsSectionProps {
  products?: MallProduct[];
}

interface MallProductItemProps {
  product: MallProduct;
}

function MallProductItem({ product }: MallProductItemProps) {
  return (
    <li className="touch-pan-y h-[11rem] flex-shrink-0 overflow-x-hidden sm:h-60">
      <div className="h-full">
        <div className="relative h-full overflow-x-hidden overflow-y-hidden p-2.5">
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
                sizes="(max-width: 640px) 168px, 201px"
                unoptimized={isBackendImage(product.imageSrc)}
              />
            </div>
          </Link>
          <div className="absolute bottom-4 left-3.5 h-7 w-[8.25rem] overflow-hidden text-ellipsis text-center text-base leading-7 text-red-700 [display:-webkit-box] [-webkit-line-clamp:1] [word-wrap:break-word] sm:bottom-5 sm:w-44 sm:text-lg">
            Shop Now
          </div>
        </div>
      </div>
    </li>
  );
}

function MallSeeAllItem() {
  return (
    <li className="touch-pan-y h-[11rem] flex-shrink-0 overflow-x-hidden sm:h-60">
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

export function MallProductsSection({ products: productsProp }: MallProductsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [products, setProducts] = useState<MallProduct[]>(productsProp || []);
  const [loading, setLoading] = useState(!productsProp);

  useEffect(() => {
    if (productsProp) {
      setProducts(productsProp);
      return;
    }

    async function fetchProducts() {
      try {
        const apiProducts = await getRecommendedProducts(30);
        const mallProducts = apiProducts.filter((product) => {
          const badges = [
            ...normalizeBadgeList(product.textBadges),
            ...normalizeBadgeList(product.imageBadges),
          ];

          return badges.includes("mall");
        });

        const source = mallProducts.length > 0 ? mallProducts.slice(0, 15) : apiProducts.slice(0, 15);
        const transformed: MallProduct[] = source.map((p, i) => ({
          id: i + 1,
          name: p.title,
          imageSrc: p.imageSrc,
          href: `/product/${p.slug}`,
        }));
        setProducts(transformed);
      } catch (error) {
        console.error("Failed to fetch mall products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [productsProp]);

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
      scrollContainerRef.current.scrollBy({ left: -Math.max(scrollContainerRef.current.clientWidth * 0.8, 240), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: Math.max(scrollContainerRef.current.clientWidth * 0.8, 240), behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="py-12 text-center text-gray-500">Loading mall products...</div>
    );
  }

  return (
    <div className="inline-block w-full min-w-0 align-top bg-white [overflow:unset]">
      <div className="group/carousel relative min-h-[22rem] w-full overflow-visible transition-all sm:min-h-[320px]">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="touch-pan-y min-h-[22rem] w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:min-h-[300px]"
        >
          <ul
            className="relative grid h-[22rem] w-max grid-flow-col auto-cols-[10.75rem] grid-rows-2 gap-x-0 sm:h-[472px] sm:auto-cols-[13rem]"
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
