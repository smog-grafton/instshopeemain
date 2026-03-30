"use client";

import Image from "next/image";
import Link from "next/link";
import type { CategoryItem as CategoryItemType } from "./data";
import { isBackendImage } from "@/lib/utils";

interface CategoryItemProps {
  category: CategoryItemType;
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <li className="touch-pan-y h-[7.5rem] w-full [overflow-x:unset] sm:h-36">
      <Link
        href={category.href}
        className="relative block bg-white text-center text-black/87 no-underline transition-all duration-100 ease-in-out active:outline-0 hover:border-black/12 hover:shadow hover:outline-0 before:block before:pt-[109%] before:content-[''] [border-bottom-style:solid] [border-right-style:solid] border-b border-r border-b-black/5 border-r-black/5 sm:before:pt-[126%]"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center py-2">
          <div className="mb-0 mt-1 h-[46%] w-8/12 flex-shrink-0 sm:mt-2 sm:h-[50%]">
            <Image
              width={320}
              height={320}
              loading="lazy"
              className="inline max-h-full align-bottom object-contain"
              src={category.imageSrc}
              alt={category.label}
              unoptimized={isBackendImage(category.imageSrc)}
            />
          </div>
          <div className="flex flex-1 items-start justify-center px-1 pt-1 text-center w-11/12">
            <div className="min-h-[2.2rem] overflow-hidden text-ellipsis text-[0.74rem] leading-4 text-black/80 [display:-webkit-box] [-webkit-line-clamp:2] [word-break:break-word] sm:min-h-[2.5rem] sm:text-sm sm:leading-5">
              {category.label}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
