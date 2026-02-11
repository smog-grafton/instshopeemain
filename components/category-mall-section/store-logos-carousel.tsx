"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { getMallStores, type ApiMallStore } from "@/lib/api-client";
import { CATEGORY_MALL_SEE_ALL_HREF } from "./data";

const COLUMN_WIDTH_PX = 200;
const COLS_VISIBLE = 6;
const ROWS = 2;
const CELLS_PER_COLUMN = ROWS;
/** Height of one logo cell (56.25% of column width); two rows = this × 2 */
const ROW_HEIGHT_PX = Math.round(COLUMN_WIDTH_PX * 0.5625);
const CAROUSEL_HEIGHT_PX = ROW_HEIGHT_PX * ROWS;

/** Pairs stores into columns: [col0: [s0,s1], col1: [s2,s3], ...] then See All as last column. */
function buildColumns(stores: ApiMallStore[]) {
  const columns: ApiMallStore[][] = [];
  for (let i = 0; i < stores.length; i += CELLS_PER_COLUMN) {
    columns.push(stores.slice(i, i + CELLS_PER_COLUMN));
  }
  return columns;
}

function StoreLogoCell({ href, logoUrl, alt }: { href: string; logoUrl: string; alt: string }) {
  return (
    <div className="relative overflow-hidden border-b border-l border-solid border-black/5 transition-shadow hover:shadow-sm [border-bottom-style:solid] [border-left-style:solid]">
      <Link
        href={href}
        className="block cursor-pointer bg-contain bg-no-repeat no-underline outline-0 hover:outline-0 active:outline-0 text-black/87 bg-[50%] duration-200 ease-in-out"
      >
        <div className="relative w-full bg-contain bg-no-repeat pt-[56.25%] duration-200 ease-in-out bg-[50%]">
          <Image
            src={logoUrl}
            alt={alt}
            fill
            className="object-contain"
            sizes={`${COLUMN_WIDTH_PX}px`}
            unoptimized={logoUrl.startsWith("http")}
          />
        </div>
      </Link>
    </div>
  );
}

function SeeAllCell() {
  return (
    <Link
      href={CATEGORY_MALL_SEE_ALL_HREF}
      className="relative flex cursor-pointer items-center justify-center overflow-hidden border-b border-l border-solid border-black/5 no-underline outline-0 hover:shadow-sm active:outline-0 hover:outline-0 [border-bottom-style:solid] [border-left-style:solid] text-red-700 whitespace-nowrap"
    >
      <div className="w-full bg-contain bg-no-repeat pt-[56.25%] duration-200 ease-in-out bg-[50%]" />
      <div className="absolute inset-0 flex items-center justify-center text-base">
        See All
        <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-700">
          <svg
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            className="inline-block h-4 w-2 fill-current text-white overflow-hidden align-baseline relative"
            aria-hidden
          >
            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function StoreLogosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [stores, setStores] = useState<ApiMallStore[]>([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    async function fetchStores() {
      try {
        const mallStores = await getMallStores();
        setStores(mallStores);
      } catch (error) {
        console.error("Failed to fetch mall stores:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStores();
  }, []);

  useEffect(() => {
    const check = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowPrev(scrollLeft > 0);
        setShowNext(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };
    check();
    const t = setTimeout(check, 100);
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", check);
    };
  }, [stores]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -COLUMN_WIDTH_PX * COLS_VISIBLE, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: COLUMN_WIDTH_PX * COLS_VISIBLE, behavior: "smooth" });
  };

  const columns = buildColumns(stores);
  const totalWidth = (columns.length + 1) * COLUMN_WIDTH_PX; // +1 for See All

  if (loading) {
    return (
      <div className="py-8 text-center text-gray-500">Loading mall stores...</div>
    );
  }

  return (
    <div className="relative w-full overflow-visible [font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,sans-serif] text-sm leading-tight text-black/80">
      <div className="w-full relative transition-all group/carousel overflow-visible">
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
            aria-hidden
          >
            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
          </svg>
        </button>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="touch-pan-y overflow-x-auto overflow-y-hidden w-full snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ height: CAROUSEL_HEIGHT_PX }}
        >
          <ul
            className="flex h-full list-none flex-nowrap gap-0 p-0"
            style={{ width: totalWidth }}
          >
            {columns.map((cells: ApiMallStore[], colIndex: number) => (
              <li
                key={colIndex}
                className="float-left h-full shrink-0 overflow-x-hidden touch-pan-y snap-start"
                style={{ width: COLUMN_WIDTH_PX }}
              >
                <div className="h-full overflow-x-hidden overflow-y-hidden">
                  {cells.map((store: ApiMallStore) => (
                    <StoreLogoCell
                      key={store.id}
                      href={store.href}
                      logoUrl={store.logoUrl}
                      alt={store.name}
                    />
                  ))}
                </div>
              </li>
            ))}
            <li
              className="float-left h-full shrink-0 overflow-x-hidden touch-pan-y snap-start"
              style={{ width: COLUMN_WIDTH_PX }}
            >
              <div className="h-full overflow-x-hidden overflow-y-hidden">
                <SeeAllCell />
              </div>
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={scrollRight}
          className={`[appearance:auto] z-10 cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] border-[none] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4 transition-all duration-300 ${
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
            aria-hidden
          >
            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
          </svg>
        </button>
      </div>
    </div>
  );
}
