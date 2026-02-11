"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { isBackendImage } from "@/lib/utils";

const SLIDER_LEFT = "/images/sliders/left.svg";
const SLIDER_RIGHT = "/images/sliders/right.svg";

interface ProductImageModalProps {
  open: boolean;
  onClose: () => void;
  productTitle: string;
  imageSources: string[];
  initialIndex: number;
}

/**
 * Product image modal (second screenshot): smaller modal, left = main image + arrows, right = title (2 lines) + 3×3 touching thumbnails.
 * Arrows: darker bg, inverted rectangle (taller than wide). Close by backdrop click or Escape.
 */
export function ProductImageModal({
  open,
  onClose,
  productTitle,
  imageSources,
  initialIndex,
}: ProductImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const count = imageSources.length;

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + count) % count);
  const goNext = () => setCurrentIndex((i) => (i + 1) % count);

  // Check if image is from external backend
  const isExternalImage = (src: string) => isBackendImage(src);

  if (!open || count === 0) return null;

  const mainSrc = imageSources[currentIndex] ?? imageSources[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Product image gallery"
      onClick={onClose}
    >
      <div
        className="flex max-h-[62vh] max-w-[72vw] overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: main image (not too big) + arrows */}
        <div className="relative flex min-w-0 flex-[7] items-center justify-center bg-white">
          <div className="relative flex h-full w-full items-center justify-center p-3">
            <Image
              src={mainSrc}
              alt={`${productTitle} image ${currentIndex + 1}`}
              width={480}
              height={480}
              className="max-h-[52vh] w-auto max-w-full object-contain"
              sizes="50vw"
              unoptimized={isExternalImage(mainSrc)}
            />
          </div>
          {/* Inverted-rectangle arrows: taller than wide, darker bg */}
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 flex h-14 w-8 -translate-y-1/2 items-center justify-center rounded border-0 bg-black/40 hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-black/80"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <img src={SLIDER_LEFT} alt="" width={16} height={16} className="block" />
          </button>
          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 flex h-14 w-8 -translate-y-1/2 items-center justify-center rounded border-0 bg-black/40 hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-black/80"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <img src={SLIDER_RIGHT} alt="" width={16} height={16} className="block" />
          </button>
        </div>

        {/* Right: product title (2 lines, truncated) + 3×3 touching thumbnails */}
        <div className="flex min-w-0 flex-[3] flex-col border-l border-neutral-200 bg-white p-3">
          <h3
            className="mb-2 line-clamp-2 text-sm font-normal leading-snug text-neutral-800"
            title={productTitle}
          >
            {productTitle}
          </h3>
          <div className="grid grid-cols-3 gap-0 overflow-y-auto">
            {imageSources.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className="relative block w-full cursor-pointer"
                aria-label={`Image ${i + 1}`}
              >
                <div className="relative w-full pb-[100%]">
                  <Image
                    src={src}
                    alt=""
                    width={72}
                    height={72}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    sizes="72px"
                    unoptimized={isExternalImage(src)}
                  />
                </div>
                {currentIndex === i && (
                  <div
                    className="absolute inset-0 rounded-[1px] border-2 border-solid border-red-500"
                    aria-hidden
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
