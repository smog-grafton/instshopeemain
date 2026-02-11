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
    <li className="touch-pan-y [overflow-x:unset] h-36 w-32">
      <Link
        href={category.href}
        className="text-center bg-white [border-bottom-style:solid] [border-right-style:solid] no-underline transition-all duration-100 ease-in-out block relative border-r border-b text-black/87 border-r-black/5 border-b-black/5 active:outline-0 hover:outline-0 before:content-[''] before:block before:pt-[126%] hover:shadow hover:border-l hover:border-t hover:border-black/12"
      >
        <div className="flex-col justify-center items-center flex absolute inset-0 py-2">
          <div className="w-8/12 h-[50%] mt-2 flex-shrink-0 mb-0">
            <Image
              width={320}
              height={320}
              loading="lazy"
              className="inline align-bottom object-contain max-h-full"
              src={category.imageSrc}
              alt={category.label}
              unoptimized={isBackendImage(category.imageSrc)}
            />
          </div>
          <div className="text-center w-11/12 flex-1 flex items-start justify-center px-1 pt-1">
            <div className="[word-break:break-word] text-ellipsis [-webkit-line-clamp:2] text-sm [display:-webkit-box] overflow-x-hidden overflow-y-hidden text-black/80 leading-5 min-h-[2.5rem]">
              {category.label}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
