"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { BannerItem } from "./data";
import { isBackendImage } from "@/lib/utils";

interface BannerCarouselProps {
  banners: BannerItem[];
}

export function BannerCarousel({ banners }: BannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(banners.length);

  // Duplicate banners for infinite scroll effect (start in the middle set)
  const duplicatedBanners = [...banners, ...banners, ...banners];
  const totalSlides = banners.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= duplicatedBanners.length - totalSlides) {
          return totalSlides;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, duplicatedBanners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index + totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < totalSlides) {
        return duplicatedBanners.length - totalSlides - 1;
      }
      return next;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= duplicatedBanners.length - totalSlides) {
        return totalSlides;
      }
      return next;
    });
  };

  const displayIndex = currentIndex % totalSlides;

  return (
    <div className="flex-[2] shadow-sm">
      <div className="w-full h-full relative group">
        <div className="w-full h-full relative overflow-hidden">
          <ul
            className="touch-pan-y h-full flex absolute overflow-x-hidden overflow-y-hidden inset-0 w-[900%]"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / 9)}%))`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {duplicatedBanners.map((banner, index) => (
              <li
                key={index}
                className="shrink-0 justify-center self-center items-center h-full flex overflow-x-hidden overflow-y-hidden w-[11.1111%]"
              >
                <div className="w-full h-full [display:unset]">
                  <a
                    className="w-full no-underline block active:outline-0 hover:outline-0"
                    href={banner.href}
                  >
                    <Image
                      src={banner.imageSrc}
                      alt={banner.alt}
                      width={797}
                      height={240}
                      className="inline h-60 w-full rounded-sm align-bottom object-cover"
                      priority={index >= totalSlides && index < totalSlides + 2}
                      unoptimized={isBackendImage(banner.imageSrc)}
                      onError={(e) => {
                        console.error(`Failed to load banner image: ${banner.imageSrc}`);
                        // Hide broken image
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cursor-pointer select-none text-center opacity-0 justify-center items-center text-xl leading-5 transition-opacity duration-300 inline-flex absolute -translate-y-2/4 shadow top-2/4 text-black/87 fill-black/87 w-9 h-16 bg-black/18 rounded-tr-sm rounded-br-sm left-0 group-hover:opacity-100 hover:bg-black/32 z-10"
          onClick={goToPrevious}
        >
          <svg
            enableBackground="new 0 0 13 20"
            viewBox="0 0 13 20"
            role="img"
            className="align-baseline inline stroke-current fill-current overflow-x-hidden overflow-y-hidden text-white w-5 h-5"
          >
            <path
              d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"
              className="stroke-none"
            />
          </svg>
        </div>
        <div
          className="cursor-pointer select-none text-center opacity-0 justify-center items-center text-xl leading-5 transition-opacity duration-300 inline-flex absolute -translate-y-2/4 shadow top-2/4 text-black/87 fill-black/87 w-9 h-16 bg-black/18 rounded-tl-sm rounded-bl-sm right-0 group-hover:opacity-100 hover:bg-black/32 z-10"
          onClick={goToNext}
        >
          <svg
            enableBackground="new 0 0 13 21"
            viewBox="0 0 13 21"
            role="img"
            className="align-baseline inline stroke-current fill-current overflow-x-hidden overflow-y-hidden text-white w-5 h-5"
          >
            <path
              d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"
              className="stroke-none"
            />
          </svg>
        </div>
        <div className="text-center w-full transition-opacity duration-500 absolute -translate-x-2/4 left-2/4 bottom-4 z-10">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`cursor-pointer w-2 h-2 inline-block rounded-[50%] border border-solid ${
                index === displayIndex
                  ? "bg-red-500 border-red-500"
                  : "bg-white/40 border-zinc-500/40"
              } ${index > 0 ? "ml-2" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
