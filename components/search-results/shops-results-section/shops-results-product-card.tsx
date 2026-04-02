import Link from "next/link";
import {
  ProductCardImage,
  ProductCardLoadFrame,
} from "@/components/common/product-card-media";
import type { ShopsResultProduct } from "./types";

interface ShopsResultsProductCardProps {
  product: ShopsResultProduct;
}

/**
 * Compact product card for the "Shops related to keyword" section.
 * Matches the original HTML: image, discount badge, title, price, sold. No info bar.
 */
export function ShopsResultsProductCard({ product }: ShopsResultsProductCardProps) {
  return (
    <div className="contents">
      <Link
        className="border-solid border-gray-200 active:outline-0 hover:outline-0 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default contents"
        href={product.href}
      >
        <ProductCardLoadFrame className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 flex h-full cursor-pointer flex-col overflow-hidden bg-white">
          <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default relative z-0 w-full pt-[100%]">
            <ProductCardImage
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="disabled:cursor-default pointer-events-none absolute inset-y-0 h-full w-full object-contain rounded-sm border border-solid border-black/9"
              loading="lazy"
              sizes="(max-width: 1200px) 25vw, 200px"
              unoptimized={product.imageSrc.startsWith("https://")}
            />
            <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default absolute right-0 top-0 z-30 rounded-bl-md bg-rose-50 px-1 py-0.5 text-xs leading-4 font-medium text-red-500">
              <span aria-label={`-${product.discountPercent}%`} className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default" />
              -{product.discountPercent}%
            </div>
          </div>
          <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex flex-1 flex-col justify-between p-2">
            <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden min-h-10 break-words text-sm leading-5">
              {product.title}
            </div>
            <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-center justify-between">
              <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex max-w-full shrink-0 items-center whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden font-medium text-red-500">
                <span aria-label="promotion price" className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default" />
                <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default flex items-baseline whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden">
                  <span className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium">
                    RM
                  </span>
                  <span className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-base leading-5 font-medium">
                    {product.price}
                  </span>
                  <span className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default mr-px text-xs leading-4 font-medium" />
                </div>
              </div>
              <div className="border-solid border-gray-200 after:border-solid after:border-gray-200 before:border-solid before:border-gray-200 disabled:cursor-default whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-xs leading-4 text-black/87 ml-1">
                {product.sold}
              </div>
            </div>
          </div>
        </ProductCardLoadFrame>
      </Link>
    </div>
  );
}
