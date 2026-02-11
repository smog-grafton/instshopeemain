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
    <div className="w-1/2 h-28 mb-5 pr-2.5 [&:nth-child(2n)]:pr-0 [&:nth-child(2n)]:pl-2.5">
      <div className="h-full relative">
        <div className="w-full max-w-[24rem] leading-[initial]">
          <div className="w-full h-28 relative max-w-[24rem]">
            {/* Left strip: red with dashed right edge */}
            <div
              className="bg-[linear-gradient(180deg,#ee4d2d_0.25rem,transparent_0,transparent_calc(100%_-_0.25rem),#EE4D2D_calc(100%_-_0.25rem)),linear-gradient(180deg,#ee4d2d_0.25rem,transparent_0,transparent_calc(100%_-_0.25rem),#EE4D2D_calc(100%_-_0.25rem))] bg-[length:0.0625rem_100%,100%_100%] bg-no-repeat bg-no-repeat border-t border-b border-red-500 w-28 h-full absolute overflow-hidden rounded-tl-sm rounded-bl-sm left-0 top-0"
              style={{
                backgroundRepeat: "no-repeat, no-repeat",
              }}
            >
              <div
                className="bg-[linear-gradient(180deg,transparent_calc(.25rem*2),#ee4d2d_0),radial-gradient(circle_at_0_0.25rem,transparent_0,transparent_calc(.25rem_-_0.0625rem),#ee4d2d_0,#ee4d2d_0.25rem,#ee4d2d_0)] bg-[length:0.0625rem,100%] bg-repeat-y bg-repeat-y w-full absolute inset-y-[0.1875rem]"
                style={{ backgroundRepeat: "repeat-y, repeat-y" }}
              />
            </div>
            {/* White right panel */}
            <div className="bg-white w-[calc(100%-theme(width.28))] h-full absolute rounded-tr-sm rounded-br-sm border-r border-y border-solid border-gray-200 right-0 top-0" />
            {/* Content overlay */}
            <div className="h-full transition-all duration-1000 flex relative shadow border-r border-y border-solid border-transparent rounded-sm" role="presentation">
              {/* Left: logo + type label */}
              <div
                className="border-r border-r-dashed flex-col justify-center items-center w-28 flex relative border-r-transparent shrink-0"
                role="presentation"
              >
                <div className="justify-center items-center flex">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.logoImage}
                      alt="Logo"
                      width={56}
                      height={56}
                      className="object-cover w-14 h-14 rounded-full"
                      unoptimized={isBackendImage(item.logoImage)}
                    />
                  </div>
                </div>
                <div className="text-center break-words max-w-[90%] max-h-7 text-xs leading-4 mt-1 px-1 text-ellipsis line-clamp-2 overflow-hidden text-white">
                  {item.typeLabel}
                </div>
              </div>
              {/* Center: title, min spend, tag, expiring, T&C */}
              <div className="flex-col flex-1 justify-center flex relative overflow-hidden pl-3 min-w-0" role="presentation">
                <span className="sr-only" aria-label="voucher" />
                <div className="flex">
                  <div className="text-base font-medium leading-5 text-black/80 break-words whitespace-normal text-ellipsis line-clamp-2 overflow-hidden">
                    {item.title}
                  </div>
                </div>
                <div className="text-sm leading-4 text-black/80 text-ellipsis line-clamp-1 overflow-hidden">
                  {item.minSpend}
                </div>
                <div className="flex flex-wrap gap-1 mt-1.5 mb-1">
                  <div className="text-red-500 text-ellipsis whitespace-nowrap overflow-hidden my-px px-1 py-px rounded-sm border border-solid border-red-500">
                    <span className="text-ellipsis items-center text-xs leading-4 overflow-hidden text-red-600" aria-label={`labels${item.tagLabel}`}>
                      {item.tagLabel}
                    </span>
                  </div>
                </div>
                <div className="items-center flex flex-wrap gap-1.5">
                  <span className="text-ellipsis whitespace-nowrap text-xs leading-4 overflow-hidden text-black/54">
                    {item.expiringText}
                  </span>
                  <Link
                    href={item.termsHref}
                    className="capitalize cursor-pointer text-xs font-medium ml-1.5 text-blue-500 no-underline hover:underline outline-none"
                    role="navigation"
                  >
                    T&C
                  </Link>
                </div>
              </div>
              {/* Right: Use button */}
              <div className="flex-col justify-center items-end flex relative p-3 shrink-0" role="presentation">
                <div className="flex-col items-center flex">
                  <div className="z-[1] justify-center items-center flex relative">
                    <button
                      type="button"
                      disabled={item.soldOut}
                      className="capitalize cursor-pointer outline-none justify-center items-center relative shadow-sm rounded-sm text-center break-words whitespace-normal text-ellipsis line-clamp-2 min-w-14 max-w-14 h-auto px-2 py-1 text-sm text-red-500 border border-solid border-red-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-50"
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
    </div>
  );
}
