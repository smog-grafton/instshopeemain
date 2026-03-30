"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { BannerItem } from "./data";
import { isBackendImage } from "@/lib/utils";

interface BannerCarouselProps {
  banners: BannerItem[];
}

export function BannerCarousel({ banners }: BannerCarouselProps) {
  const totalSlides = banners.length;
  const [currentIndex, setCurrentIndex] = useState(totalSlides);

  // Duplicate banners for infinite scroll effect (start in the middle set)
  const duplicatedBanners = totalSlides > 0 ? [...banners, ...banners, ...banners] : [];

  useEffect(() => {
    if (totalSlides > 0) {
      setCurrentIndex(totalSlides);
    }
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides === 0) {
      return undefined;
    }

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

  if (totalSlides === 0) {
    return null;
  }

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

  const displayIndex = ((currentIndex % totalSlides) + totalSlides) % totalSlides;

  return (
    <div className="relative overflow-hidden rounded-sm shadow-sm md:h-[235px]">
      <div className="group relative h-full w-full">
        <div className="relative aspect-[16/9] h-full overflow-hidden sm:aspect-[16/7.2] md:aspect-auto">
          <ul
            className="absolute inset-0 flex h-full touch-pan-y overflow-hidden"
            style={{
              width: `${duplicatedBanners.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / duplicatedBanners.length)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {duplicatedBanners.map((banner, index) => (
              <li
                key={index}
                className="flex h-full shrink-0 items-center justify-center overflow-hidden"
                style={{ width: `${100 / duplicatedBanners.length}%` }}
              >
                <div className="h-full w-full [display:unset]">
                  <a
                    className="w-full no-underline block active:outline-0 hover:outline-0"
                    href={banner.href}
                  >
                    <Image
                      src={banner.imageSrc}
                      alt={banner.alt}
                      width={797}
                      height={240}
                      className="inline h-full w-full align-bottom object-cover"
                      priority={index >= totalSlides && index < totalSlides + 2}
                      unoptimized={isBackendImage(banner.imageSrc)}
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="absolute left-0 top-2/4 z-10 hidden h-16 w-9 -translate-y-2/4 cursor-pointer items-center justify-center rounded-br-sm rounded-tr-sm bg-black/18 text-center text-xl leading-5 text-black/87 opacity-0 shadow transition-opacity duration-300 hover:bg-black/32 group-hover:opacity-100 md:inline-flex"
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
          className="absolute right-0 top-2/4 z-10 hidden h-16 w-9 -translate-y-2/4 cursor-pointer items-center justify-center rounded-bl-sm rounded-tl-sm bg-black/18 text-center text-xl leading-5 text-black/87 opacity-0 shadow transition-opacity duration-300 hover:bg-black/32 group-hover:opacity-100 md:inline-flex"
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
        <div className="absolute bottom-3 left-2/4 z-10 w-full -translate-x-2/4 text-center transition-opacity duration-500 sm:bottom-4">
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
