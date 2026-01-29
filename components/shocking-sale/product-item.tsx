"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductBadge } from "./product-badge";
import type { ShockingSaleProduct } from "./data";

interface ProductItemProps {
  product: ShockingSaleProduct;
}

const DEFAULT_IMAGE = "/images/home/shocking/default.jpeg";

export function ProductItem({ product }: ProductItemProps) {
  const imageSrc = product.imageSrc || DEFAULT_IMAGE;

  const getStatusText = () => {
    switch (product.status) {
      case "selling-fast":
        return "Selling Fast";
      case "only-left":
        return `Only ${product.statusValue} Left`;
      case "sold":
        return `${product.statusValue} sold`;
      default:
        return "";
    }
  };

  const getStatusWidth = () => {
    if (product.status === "selling-fast") return "w-[5%]";
    if (product.status === "only-left" && product.statusValue) {
      // Calculate percentage based on statusValue (example: 8 left = 80%)
      const percentage = Math.min((product.statusValue / 10) * 100, 100);
      return percentage === 80 ? "w-10/12" : `w-[${percentage}%]`;
    }
    if (product.status === "sold" && product.statusValue) {
      // Calculate percentage based on statusValue (example: 25 sold = 25%, 19 sold = 19%)
      const percentage = Math.min((product.statusValue / 100) * 100, 100);
      if (percentage === 11) return "w-[11%]";
      if (percentage === 19) return "w-[19%]";
      if (percentage === 25) return "w-[25%]";
      return `w-[${percentage}%]`;
    }
    return "w-[5%]";
  };

  return (
    <li className="touch-pan-y [overflow-x:unset] flex-shrink-0">
      <div className="h-full">
        <div className="bg-white flex-col flex relative w-52 h-64 px-4">
          <Link
            href={product.href}
            className="no-underline active:outline-0 hover:outline-0"
            aria-label={`${product.name} promotion off ${product.discount}% current price RM${product.price} ${getStatusText()} click, enter flash sale`}
          >
            <div className="relative h-44">
              {/* Product Image Container */}
              <div className="bg-white w-full h-full relative">
                {/* Badges on Product Image - All on the left side */}
                {product.badge && (
                  <div className="z-[5] absolute left-0 top-0">
                    <ProductBadge badge={product.badge} />
                  </div>
                )}

                {/* Discount Badge - Top Right, positioned to not overlap with TOP PICKS */}
                <div className="z-[4] absolute right-0 top-0">
                  <div className="text-red-600 whitespace-nowrap bg-amber-200 font-medium relative h-4 text-sm leading-4 ml-2 pl-2 pr-[0.15625rem] rounded-tl-sm">
                    <div className="absolute -left-1">
                      <svg
                        width="10"
                        viewBox="0 0 10 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden"
                      >
                        <path
                          d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z"
                          className="fill-[url(#paint0_linear_discount)]"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_discount"
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

                {/* Overlay at bottom left - larger and properly positioned */}
                <div className="z-[3] absolute left-0 bottom-0">
                  <Image
                    src="/images/home/shocking/overlay.png"
                    alt=""
                    width={140}
                    height={35}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* Product Image */}
                <div className="z-[2] w-full h-full absolute left-0 top-0">
                  <div className="transition-opacity duration-200 z-[2] w-full h-full absolute left-0 top-0">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      width={208}
                      height={176}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Status */}
            <div className="flex-1">
              <div className="h-[inherit] flex-col items-stretch flex py-4">
                <div className="flex-col items-center flex mb-1.5">
                  <div className="justify-center items-center w-full flex text-red-500 h-7 text-lg font-medium">
                    <div className="text-ellipsis items-baseline flex overflow-x-hidden overflow-y-hidden">
                      <span className="text-lg font-medium mr-0.5">RM</span>
                      <strong>{product.price}</strong>
                    </div>
                  </div>
                </div>
                <div className="px-2.5">
                  <div className="w-full relative h-4">
                    <div className="z-[3] w-[inherit] h-[inherit] text-white [text-shadow:0_0_8px_#0000001f] uppercase justify-center items-center font-bold flex absolute left-0 top-0 text-xs">
                      {getStatusText()}
                    </div>
                    <div
                      className={`z-[2] h-[inherit] bg-[linear-gradient(270deg,#ffb000_0%,#eb1717_100%)] absolute left-0 top-0 ${getStatusWidth()} rounded-tl-lg rounded-bl-lg`}
                    />
                    <div className="z-[1] w-[inherit] h-[inherit] bg-red-300 absolute left-0 top-0 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
}
