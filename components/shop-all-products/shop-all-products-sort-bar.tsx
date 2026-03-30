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
      className={`relative mt-0.5 block h-[10px] w-2.5 overflow-hidden ${disabled ? "fill-black/40" : "fill-[rgb(85,85,85)]"}`}
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
      className={`relative mt-0.5 block h-[10px] w-2.5 overflow-hidden ${disabled ? "fill-black/40" : "fill-[rgb(85,85,85)]"}`}
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
    <fieldset className="m-0 rounded-sm border-0 bg-black/[0.03] p-3 sm:p-4">
      <legend className="sr-only">Sort and pagination</legend>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center">
          <div className="text-sm text-[rgb(85,85,85)]">Sort by</div>
          <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:pb-0">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                aria-pressed={baseSort === opt.value}
                onClick={() => onSortChange(opt.value)}
                className={`flex h-[34px] min-w-[90px] items-center justify-center whitespace-nowrap rounded-sm px-4 text-sm font-normal shadow-[0_1px_1px_rgba(0,0,0,0.02)] ${
                  baseSort === opt.value
                    ? "border-0 bg-[rgb(208,1,27)] text-white"
                    : "border-0 bg-white text-black/80 hover:bg-black/5"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <section className="block w-full sm:w-auto" ref={dropdownRef}>
            <div className="relative">
              <button
                type="button"
                role="combobox"
                aria-expanded={priceOpen}
                aria-haspopup="listbox"
                onClick={() => setPriceOpen((o) => !o)}
                className="flex h-[34px] w-full min-w-[180px] items-center justify-between rounded-sm border-0 bg-white pl-3 text-left text-sm font-normal text-black/80 shadow-[0_1px_1px_rgba(0,0,0,0.02)] sm:min-w-[200px]"
              >
                <span>{priceLabel}</span>
                <ChevronDownIcon className="mr-3 block h-3.5 w-3 fill-[rgb(85,85,85)]" />
              </button>
              {priceOpen && (
                <div
                  role="listbox"
                  className="absolute left-0 top-full z-[999] mt-1 min-w-full rounded-sm bg-white py-2.5 shadow-[0_5px_10px_rgba(0,0,0,0.05)]"
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
                      className="flex h-[34px] w-full items-center justify-between px-3 text-left text-sm text-[rgb(34,34,34)] hover:bg-black/5"
                    >
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between gap-3 lg:justify-end">
          <div className="text-sm font-light">
            <span className="text-[rgb(208,1,27)]">{currentPage}</span>/
            <span>{totalPages}</span>
          </div>
          <div className="flex items-center">
            {currentPage <= 1 ? (
              <span
                aria-disabled
                className="flex h-[34px] w-9 items-center justify-center rounded-l-sm border border-[rgb(242,242,242)] bg-[rgb(249,249,249)] text-black/26"
              >
                <PrevArrowIcon disabled />
              </span>
            ) : (
              <Link
                href={buildPageHref(currentPage - 1)}
                aria-label="Previous page"
                className="flex h-[34px] w-9 items-center justify-center rounded-l-sm border border-[rgb(242,242,242)] bg-[rgb(249,249,249)] text-black/80 no-underline hover:bg-black/5"
              >
                <PrevArrowIcon disabled={false} />
              </Link>
            )}
            {currentPage >= totalPages ? (
              <span
                aria-disabled
                className="flex h-[34px] w-9 items-center justify-center rounded-r-sm border border-black/[0.09] bg-white text-black/26"
              >
                <NextArrowIcon disabled />
              </span>
            ) : (
              <Link
                href={buildPageHref(currentPage + 1)}
                aria-label="Next page"
                className="flex h-[34px] w-9 items-center justify-center rounded-r-sm border border-black/[0.09] bg-white text-black/80 no-underline hover:bg-black/5"
              >
                <NextArrowIcon disabled={false} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </fieldset>
  );
}
