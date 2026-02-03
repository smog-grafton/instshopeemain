"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { ShopAllProductsSort } from "./data";

const SORT_OPTIONS: { value: ShopAllProductsSort; label: string }[] = [
  { value: "popular", label: "Popular" },
  { value: "latest", label: "Latest" },
  { value: "top_sales", label: "Top Sales" },
];

const PRICE_OPTIONS = [
  { value: "", label: "Price" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
] as const;

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 6" className={className} aria-hidden>
      <path
        fillRule="nonzero"
        d="M9.7503478 1.37413402L5.3649665 5.78112957c-.1947815.19574157-.511363.19651982-.7071046.00173827a.50153763.50153763 0 0 1-.0008702-.00086807L.2050664 1.33007451l.0007126-.00071253C.077901 1.18820749 0 1.0009341 0 .79546595 0 .35614224.3561422 0 .7954659 0c.2054682 0 .3927416.07790103.5338961.20577896l.0006632-.00066318.0226101.02261012a.80128317.80128317 0 0 1 .0105706.0105706l3.3619016 3.36190165c.1562097.15620972.4094757.15620972.5656855 0a.42598723.42598723 0 0 0 .0006944-.00069616L8.6678481.20650022l.0009529.0009482C8.8101657.07857935 8.9981733 0 9.2045341 0 9.6438578 0 10 .35614224 10 .79546595c0 .20495443-.077512.39180497-.2048207.53283641l.0003896.00038772-.0096728.00972053a.80044712.80044712 0 0 1-.0355483.03572341z"
      />
    </svg>
  );
}

function PrevArrowIcon({ disabled }: { disabled: boolean }) {
  return (
    <svg
      viewBox="0 0 7 11"
      className={`block h-[10px] w-2.5 mt-0.5 relative overflow-hidden ${disabled ? "fill-black/40" : "fill-[rgb(85,85,85)]"}`}
      aria-hidden
    >
      <path
        fillRule="nonzero"
        d="M4.694078 9.8185598L.2870824 5.4331785c-.1957415-.1947815-.1965198-.511363-.0017382-.7071046a.50867033.50867033 0 0 1 .000868-.0008702L4.7381375.2732784 4.73885.273991c.1411545-.127878.3284279-.205779.5338961-.205779.4393237 0 .7954659.3561422.7954659.7954659 0 .2054682-.077901.3927416-.205779.5338961l.0006632.0006632-.0226101.0226101a.80174653.80174653 0 0 1-.0105706.0105706L2.4680138 4.7933195c-.1562097.1562097-.1562097.4094757 0 .5656855a.45579485.45579485 0 0 0 .0006962.0006944l3.3930018 3.3763607-.0009482.0009529c.128869.1413647.2074484.3293723.2074484.5357331 0 .4393237-.3561422.7954659-.7954659.7954659-.2049545 0-.391805-.077512-.5328365-.2048207l-.0003877.0003896-.0097205-.0096728a.80042023.80042023 0 0 1-.0357234-.0355483z"
      />
    </svg>
  );
}

function NextArrowIcon({ disabled }: { disabled: boolean }) {
  return (
    <svg
      viewBox="0 0 7 11"
      className={`block h-[10px] w-2.5 mt-0.5 relative overflow-hidden ${disabled ? "fill-black/40" : "fill-[rgb(85,85,85)]"}`}
      aria-hidden
    >
      <path
        fillRule="nonzero"
        d="M2.305922 9.81856l4.4069956-4.385381c.1957415-.194782.1965198-.511364.0017382-.707105a.26384055.26384055 0 0 0-.000868-.00087L2.2618625.273278 2.26115.273991C2.1199955.146113 1.9327221.068212 1.7272539.068212c-.4393237 0-.7954659.356142-.7954659.795466 0 .205468.077901.392741.205779.533896l-.0006632.000663.0226101.02261c.0034906.003557.0070143.00708.0105706.010571L4.5319862 4.79332c.1562097.156209.1562097.409475 0 .565685-.0002318.000232-.0004639.000463-.0006962.000694L1.1382882 8.73606l.0009482.000953c-.128869.141365-.2074484.329372-.2074484.535733 0 .439324.3561422.795466.7954659.795466.2049545 0 .391805-.077512.5328365-.204821l.0003877.00039.0097205-.009673c.012278-.011471.0241922-.023327.0357234-.035548z"
      />
    </svg>
  );
}

interface ShopAllProductsSortBarProps {
  currentPage: number;
  totalPages: number;
  sortOption: ShopAllProductsSort;
  onSortChange: (option: ShopAllProductsSort) => void;
  buildPageHref: (page: number) => string;
}

export function ShopAllProductsSortBar({
  currentPage,
  totalPages,
  sortOption,
  onSortChange,
  buildPageHref,
}: ShopAllProductsSortBarProps) {
  const [priceOpen, setPriceOpen] = useState(false);
  const [priceLabel, setPriceLabel] = useState("Price");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = PRICE_OPTIONS.find(
      (o) =>
        o.value &&
        (sortOption === "price_asc" || sortOption === "price_desc") &&
        o.value === sortOption
    );
    setPriceLabel(found?.label ?? "Price");
  }, [sortOption]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPriceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseSort =
    sortOption === "price_asc" || sortOption === "price_desc"
      ? "popular"
      : sortOption;

  return (
    <fieldset
      className="border-0 bg-black/[0.03] rounded-sm justify-between items-center py-[13px] px-5 flex font-normal m-0"
      style={{ marginLeft: 0, marginRight: 0 }}
    >
      <legend className="sr-only">Sort and pagination</legend>
      <div className="text-[rgb(85,85,85)] mr-1">Sort by</div>
      <div className="flex-1 flex justify-start items-stretch gap-2.5 min-w-0">
        <section className="flex gap-2.5 ml-2.5">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              aria-pressed={baseSort === opt.value}
              onClick={() => onSortChange(opt.value)}
              className={`h-[34px] leading-[34px] rounded-sm shadow-[0_1px_1px_rgba(0,0,0,0.02)] cursor-pointer select-none capitalize whitespace-nowrap box-border justify-center items-center min-w-[90px] px-4 flex relative outline-0 overflow-visible appearance-none text-sm font-normal ${
                baseSort === opt.value
                  ? "bg-[rgb(208,1,27)] text-white border-0"
                  : "bg-white text-black/80 border-0 hover:bg-black/5"
              }`}
            >
              <span aria-hidden>{opt.label.toLowerCase()}</span>
            </button>
          ))}
        </section>
        <section className="block" ref={dropdownRef}>
          <div className="relative">
            <button
              type="button"
              role="combobox"
              aria-expanded={priceOpen}
              aria-haspopup="listbox"
              onClick={() => setPriceOpen((o) => !o)}
              className="text-left cursor-pointer box-border bg-white border-0 rounded-sm justify-between items-center min-w-[200px] h-[34px] pl-3 leading-[34px] transition-[border-color] duration-100 flex relative shadow-[0_1px_1px_rgba(0,0,0,0.02)] appearance-none overflow-visible text-black/80 text-sm font-normal"
            >
              <span>{priceLabel}</span>
              <ChevronDownIcon className="fill-[rgb(85,85,85)] w-3 h-3.5 mr-3 block relative overflow-hidden shrink-0" />
            </button>
            {priceOpen && (
              <div
                role="listbox"
                className="absolute left-0 top-full mt-1 z-[999] bg-white rounded-sm shadow-[0_5px_10px_rgba(0,0,0,0.05)] min-w-[200px] py-2.5"
              >
                {PRICE_OPTIONS.filter((o) => o.value).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={sortOption === opt.value}
                    onClick={() => {
                      onSortChange(opt.value as ShopAllProductsSort);
                      setPriceOpen(false);
                    }}
                    className="w-full text-left px-3 py-0 leading-[34px] h-[34px] box-border flex items-center justify-between text-[rgb(34,34,34)] text-sm cursor-pointer hover:bg-black/5"
                  >
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <div className="flex items-center">
        <div className="text-sm font-light">
          <span className="text-[rgb(208,1,27)]">{currentPage}</span>/
          <span>{totalPages}</span>
        </div>
        {currentPage <= 1 ? (
          <span
            aria-disabled
            className="ml-5 rounded-l-sm rounded-r-none w-9 h-[34px] shadow-[0_1px_1px_rgba(0,0,0,0.05)] pointer-events-none flex justify-center items-center text-sm font-light text-black/26 bg-[rgb(249,249,249)] border border-r border-[rgb(242,242,242)]"
          >
            <PrevArrowIcon disabled />
          </span>
        ) : (
          <Link
            href={buildPageHref(currentPage - 1)}
            aria-label="Previous page"
            className="ml-5 rounded-l-sm rounded-r-none w-9 h-[34px] shadow-[0_1px_1px_rgba(0,0,0,0.05)] flex justify-center items-center text-sm font-light text-black/80 bg-[rgb(249,249,249)] border border-r border-[rgb(242,242,242)] no-underline hover:bg-black/5 transition-colors"
          >
            <PrevArrowIcon disabled={false} />
          </Link>
        )}
        {currentPage >= totalPages ? (
          <span
            aria-disabled
            className="rounded-r-sm rounded-l-none w-9 h-[34px] shadow-[0_1px_1px_rgba(0,0,0,0.05)] pointer-events-none flex justify-center items-center text-sm font-light text-black/26 bg-white border border-black/[0.09]"
          >
            <NextArrowIcon disabled />
          </span>
        ) : (
          <Link
            href={buildPageHref(currentPage + 1)}
            aria-label="Next page"
            className="rounded-r-sm rounded-l-none w-9 h-[34px] shadow-[0_1px_1px_rgba(0,0,0,0.05)] flex justify-center items-center text-sm font-light text-black/80 bg-white no-underline hover:bg-black/5 transition-colors"
          >
            <NextArrowIcon disabled={false} />
          </Link>
        )}
      </div>
    </fieldset>
  );
}
