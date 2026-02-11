"use client";

import Image from "next/image";
import Link from "next/link";
import type { FlashSaleGridProduct } from "./data";
import { isBackendImage } from "@/lib/utils";

const BADGE_IMAGES: Record<NonNullable<FlashSaleGridProduct["badge"]>, string> = {
  choice: "/images/common/choice.png",
  preferred: "/images/common/preferred.png",
  mall: "/images/common/mall.png",
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <div className="text-amber-400 flex-wrap justify-end items-center h-3.5 flex overflow-x-hidden overflow-y-hidden">
      <div className="items-center flex">
        {Array.from({ length: full }).map((_, i) => (
          <svg
            key={`f-${i}`}
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            role="img"
            className="align-baseline inline relative w-2 h-2 mr-0.5 stroke-current fill-current overflow-x-hidden overflow-y-hidden"
          >
            <path
              d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
          </svg>
        ))}
        {half ? (
          <div className="relative w-2 h-2 mr-0.5">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              role="img"
              className="align-baseline inline absolute w-2 h-2 left-0 top-0 stroke-current fill-current overflow-x-hidden overflow-y-hidden"
            >
              <path
                d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
            </svg>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              role="img"
              className="align-baseline inline absolute w-2 h-2 left-0 top-0 stroke-current overflow-x-hidden overflow-y-hidden fill-none"
            >
              <path
                d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
        ) : null}
        {Array.from({ length: empty }).map((_, i) => (
          <svg
            key={`e-${i}`}
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            role="img"
            className="align-baseline inline relative w-2 h-2 mr-0.5 stroke-current overflow-x-hidden overflow-y-hidden fill-none"
          >
            <path
              d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

function getStatusText(product: FlashSaleGridProduct): string {
  switch (product.status) {
    case "selling-fast":
      return "Selling Fast";
    case "only-left":
      return `Only ${product.statusValue ?? 0} Left`;
    case "sold":
      return `${product.statusValue ?? 0} sold`;
    default:
      return "";
  }
}

function getProgressWidth(product: FlashSaleGridProduct): string {
  if (product.status === "selling-fast") return "w-[5%]";
  if (product.status === "only-left" && product.statusValue != null) {
    const pct = Math.min((product.statusValue / 10) * 100, 100);
    return pct >= 80 ? "w-10/12" : `w-[${pct}%]`;
  }
  if (product.status === "sold" && product.statusValue != null) {
    const pct = Math.min(product.statusValue, 100);
    if (pct <= 14) return "w-[14%]";
    if (pct <= 23) return "w-[23%]";
    if (pct <= 29) return "w-[29%]";
    if (pct <= 54) return "w-[54%]";
    return `w-[${pct}%]`;
  }
  return "w-[5%]";
}

interface FlashSaleProductCardProps {
  product: FlashSaleGridProduct;
  className?: string;
}

export function FlashSaleProductCard({ product, className = "" }: FlashSaleProductCardProps) {
  const statusText = getStatusText(product);
  const progressWidth = getProgressWidth(product);

  return (
    <div
      className={`bg-white flex-col flex relative w-full min-w-0 h-full hover:z-[1] hover:translate-y-[-0.0625rem] hover:shadow ${className}`}
    >
      <Link
        href={product.href}
        className="no-underline active:outline-0 hover:outline-0 block"
        aria-label={`${product.name} promotion off ${product.discount}% current price RM${product.price} ${statusText} click, enter flash sale`}
      >
        <div className="relative w-72 h-72 m-1.5">
          <div className="bg-white w-full h-full relative">
            {product.badge && (
              <div className="z-[3] absolute left-0 -top-2" aria-hidden>
                <div className="flex flex-col items-start ml-[-3px] mt-1.5 mb-1 pt-1">
                  <Image
                    src={BADGE_IMAGES[product.badge]}
                    alt=""
                    width={80}
                    height={20}
                    className="object-contain object-left h-5 w-auto max-w-[80px]"
                    unoptimized
                  />
                </div>
              </div>
            )}
            <div className="z-[2] w-full h-full absolute left-0 top-0">
              {product.imageSrc && isBackendImage(product.imageSrc) ? (
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={product.imageSrc || "/images/stores/products/1.webp"}
                  alt={product.name}
                  width={288}
                  height={288}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              )}
            </div>
            <div className="z-[1] absolute left-0 bottom-0 w-full h-8 flex items-end">
              <Image
                src="/images/stores/assets/infobar.png"
                alt=""
                width={288}
                height={32}
                className="object-contain w-full"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex-col flex relative pt-3 pb-4 px-4">
            <div className="[word-wrap:break-word] text-ellipsis [-webkit-line-clamp:2] h-12 text-base leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden text-black/87">
              {product.name}
            </div>
            <div className="items-center h-4 flex my-1">
              <div className="justify-between w-full flex">
                <StarRating rating={product.rating} />
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="flex-col flex-1 justify-end items-start flex">
                <div className="flex">
                  <div className="justify-center items-center w-full flex line-through h-4 text-sm text-black/26">
                    <span className="text-sm">RM</span>
                    <strong>{product.originalPrice}</strong>
                  </div>
                  <div className="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative rounded-br-sm rounded-t-sm h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem]">
                    <div className="absolute -left-1">
                      <svg
                        width="10"
                        viewBox="0 0 10 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden"
                      >
                        <path
                          d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z"
                          style={{ fill: `url(#paint0_linear_card_${product.id})` }}
                        />
                        <defs>
                          <linearGradient
                            id={`paint0_linear_card_${product.id}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="16"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EE4D2D" />
                            <stop offset="1" stopColor="#FF7337" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    -{product.discount}%
                  </div>
                </div>
                <div>
                  <div className="justify-center items-center w-full flex text-red-500 h-8 text-3xl">
                    <span className="text-lg mr-0.5">RM</span>
                    <strong>{product.price}</strong>
                  </div>
                </div>
                <div className="w-36 mt-[0.1875rem]">
                  <div className="w-full relative h-4">
                    <div className="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">
                      {statusText}
                    </div>
                    <div
                      className={`z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 ${progressWidth} rounded-tl-lg rounded-bl-lg`}
                    />
                    <div className="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="[align-self:end] w-24 h-10">
                <div className="capitalize text-center justify-center items-center w-full h-full flex rounded text-white text-lg font-extralight bg-red-500">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
