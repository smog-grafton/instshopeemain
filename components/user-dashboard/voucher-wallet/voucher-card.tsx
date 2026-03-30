"use client";

import Image from "next/image";
import Link from "next/link";
import type { VoucherItem } from "./data";
import { isBackendImage } from "@/lib/utils";

interface VoucherCardProps {
  item: VoucherItem;
}

export function VoucherCard({ item }: VoucherCardProps) {
  return (
    <div className="h-full min-w-0">
      <div className="md:hidden">
        <div className="relative min-h-[7.5rem] w-full leading-[initial]">
          <div
            className="absolute left-0 top-0 h-full w-20 overflow-hidden rounded-bl-sm rounded-tl-sm border-b border-t border-red-500 bg-[linear-gradient(180deg,#ee4d2d_0.25rem,transparent_0,transparent_calc(100%_-_0.25rem),#EE4D2D_calc(100%_-_0.25rem)),linear-gradient(180deg,#ee4d2d_0.25rem,transparent_0,transparent_calc(100%_-_0.25rem),#EE4D2D_calc(100%_-_0.25rem))] bg-[length:0.0625rem_100%,100%_100%] bg-no-repeat"
            style={{ backgroundRepeat: "no-repeat, no-repeat" }}
          >
            <div
              className="absolute inset-y-[0.1875rem] w-full bg-[linear-gradient(180deg,transparent_calc(.25rem*2),#ee4d2d_0),radial-gradient(circle_at_0_0.25rem,transparent_0,transparent_calc(.25rem_-_0.0625rem),#ee4d2d_0,#ee4d2d_0.25rem,#ee4d2d_0)] bg-[length:0.0625rem,100%] bg-repeat-y"
              style={{ backgroundRepeat: "repeat-y, repeat-y" }}
            />
          </div>
          <div className="absolute right-0 top-0 h-full w-[calc(100%-theme(width.20))] rounded-br-sm rounded-tr-sm border-y border-r border-solid border-gray-200 bg-white" />
          <div className="relative flex min-h-[7.5rem] rounded-sm border-r border-y border-solid border-transparent shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
            <div className="relative flex w-20 shrink-0 flex-col items-center justify-center border-r border-r-dashed border-r-transparent px-1">
              <div className="flex items-center justify-center">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={item.logoImage}
                    alt="Voucher logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                    unoptimized={isBackendImage(item.logoImage)}
                  />
                </div>
              </div>
              <div className="mt-1 max-h-8 max-w-[90%] overflow-hidden break-words px-1 text-center text-[11px] font-medium uppercase leading-4 text-ellipsis line-clamp-2 text-white">
                {item.typeLabel}
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between py-3 pl-3 pr-2.5">
              <div className="min-w-0">
                <div className="overflow-hidden break-words text-sm font-medium leading-5 text-black/80 text-ellipsis line-clamp-2">
                  {item.title}
                </div>
                <div className="mt-0.5 overflow-hidden text-xs leading-4 text-black/80 text-ellipsis line-clamp-1">
                  {item.minSpend}
                </div>
                {item.tagLabel ? (
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    <div className="my-px overflow-hidden whitespace-nowrap rounded-sm border border-solid border-red-500 px-1 py-px text-red-500 text-ellipsis">
                      <span
                        className="items-center overflow-hidden text-[11px] leading-4 text-red-600 text-ellipsis"
                        aria-label={`labels${item.tagLabel}`}
                      >
                        {item.tagLabel}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-2 flex items-end justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="overflow-hidden whitespace-nowrap text-[11px] leading-4 text-black/54 text-ellipsis">
                    {item.expiringText}
                  </div>
                  <Link
                    href={item.termsHref}
                    className="mt-0.5 inline-block text-[11px] font-medium text-blue-500 no-underline hover:underline"
                    role="navigation"
                  >
                    T&amp;C
                  </Link>
                </div>
                <button
                  type="button"
                  disabled={item.soldOut}
                  className="relative inline-flex h-8 min-w-14 max-w-16 shrink-0 items-center justify-center rounded-sm border border-solid border-red-500 px-2 py-1 text-center text-xs text-red-500 shadow-sm outline-none hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={item.soldOut ? "Sold out voucher" : "Use voucher"}
                >
                  {item.soldOut ? "Sold out" : "Use"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative h-28 w-full leading-[initial]">
          <div
            className="absolute left-0 top-0 h-full w-28 overflow-hidden rounded-bl-sm rounded-tl-sm border-b border-t border-red-500 bg-[linear-gradient(180deg,#ee4d2d_0.25rem,transparent_0,transparent_calc(100%_-_0.25rem),#EE4D2D_calc(100%_-_0.25rem)),linear-gradient(180deg,#ee4d2d_0.25rem,transparent_0,transparent_calc(100%_-_0.25rem),#EE4D2D_calc(100%_-_0.25rem))] bg-[length:0.0625rem_100%,100%_100%] bg-no-repeat"
            style={{ backgroundRepeat: "no-repeat, no-repeat" }}
          >
            <div
              className="absolute inset-y-[0.1875rem] w-full bg-[linear-gradient(180deg,transparent_calc(.25rem*2),#ee4d2d_0),radial-gradient(circle_at_0_0.25rem,transparent_0,transparent_calc(.25rem_-_0.0625rem),#ee4d2d_0,#ee4d2d_0.25rem,#ee4d2d_0)] bg-[length:0.0625rem,100%] bg-repeat-y"
              style={{ backgroundRepeat: "repeat-y, repeat-y" }}
            />
          </div>
          <div className="absolute right-0 top-0 h-full w-[calc(100%-theme(width.28))] rounded-br-sm rounded-tr-sm border-y border-r border-solid border-gray-200 bg-white" />
          <div
            className="relative flex h-full rounded-sm border-r border-y border-solid border-transparent shadow transition-all duration-1000"
            role="presentation"
          >
            <div
              className="relative flex w-28 shrink-0 flex-col items-center justify-center border-r border-r-dashed border-r-transparent"
              role="presentation"
            >
              <div className="flex items-center justify-center">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={item.logoImage}
                    alt="Logo"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                    unoptimized={isBackendImage(item.logoImage)}
                  />
                </div>
              </div>
              <div className="mt-1 max-h-7 max-w-[90%] overflow-hidden break-words px-1 text-center text-xs leading-4 text-ellipsis line-clamp-2 text-white">
                {item.typeLabel}
              </div>
            </div>

            <div
              className="relative flex min-w-0 flex-1 flex-col justify-center overflow-hidden pl-3"
              role="presentation"
            >
              <span className="sr-only" aria-label="voucher" />
              <div className="flex">
                <div className="overflow-hidden break-words text-base font-medium leading-5 text-black/80 text-ellipsis line-clamp-2">
                  {item.title}
                </div>
              </div>
              <div className="overflow-hidden text-sm leading-4 text-black/80 text-ellipsis line-clamp-1">
                {item.minSpend}
              </div>
              <div className="mb-1 mt-1.5 flex flex-wrap gap-1">
                {item.tagLabel ? (
                  <div className="my-px overflow-hidden whitespace-nowrap rounded-sm border border-solid border-red-500 px-1 py-px text-red-500 text-ellipsis">
                    <span
                      className="items-center overflow-hidden text-xs leading-4 text-red-600 text-ellipsis"
                      aria-label={`labels${item.tagLabel}`}
                    >
                      {item.tagLabel}
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="overflow-hidden whitespace-nowrap text-xs leading-4 text-black/54 text-ellipsis">
                  {item.expiringText}
                </span>
                <Link
                  href={item.termsHref}
                  className="ml-1.5 cursor-pointer capitalize text-xs font-medium text-blue-500 no-underline outline-none hover:underline"
                  role="navigation"
                >
                  T&amp;C
                </Link>
              </div>
            </div>

            <div
              className="relative flex shrink-0 flex-col items-end justify-center p-3"
              role="presentation"
            >
              <div className="flex flex-col items-center">
                <div className="relative z-[1] flex items-center justify-center">
                  <button
                    type="button"
                    disabled={item.soldOut}
                    className="relative inline-flex h-auto min-w-14 max-w-14 items-center justify-center rounded-sm border border-solid border-red-500 px-2 py-1 text-center text-sm text-red-500 shadow-sm outline-none hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                    role="button"
                    aria-label="buttonUse"
                    tabIndex={0}
                  >
                    Use
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
