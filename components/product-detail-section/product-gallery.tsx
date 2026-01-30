"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { getProductImagePath } from "./data";
import { ProductImageModal } from "./product-image-modal";

const THUMB_COUNT = 5;
const IMAGE_INDICES = [1, 2, 3, 4, 5];

/** 9 images for modal: 5 from mall/products + 4 from top-products (per second screenshot). */
const MODAL_IMAGE_SOURCES = [
  getProductImagePath(1),
  getProductImagePath(2),
  getProductImagePath(3),
  getProductImagePath(4),
  getProductImagePath(5),
  "/images/home/top-products/14.jpeg",
  "/images/home/top-products/15.jpeg",
  "/images/home/top-products/16.jpeg",
  "/images/home/top-products/17.jpeg",
];

const SLIDER_LEFT = "/images/sliders/left.svg";
const SLIDER_RIGHT = "/images/sliders/right.svg";

interface ProductGalleryProps {
  productTitle: string;
}

export function ProductGallery({ productTitle }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  /** Hover preview: main image shows this index while hovering a thumbnail; null = show selectedIndex */
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  /** Image index to show in modal (set when opening so modal shows the clicked/hovered image) */
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const displayIndex = hoverIndex ?? selectedIndex;
  const mainSrc = getProductImagePath(IMAGE_INDICES[displayIndex] ?? 1);
  const mainSrcWebp = getProductImagePath(IMAGE_INDICES[displayIndex] ?? 1, "webp");

  const goPrev = useCallback(() => {
    setSelectedIndex((i) => (i - 1 + THUMB_COUNT) % THUMB_COUNT);
    setHoverIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((i) => (i + 1) % THUMB_COUNT);
    setHoverIndex(null);
  }, []);

  const openModal = useCallback((index: number) => {
    setModalImageIndex(index);
    setModalOpen(true);
  }, []);

  const handleMainImageClick = () => {
    openModal(displayIndex);
  };

  const handleThumbnailClick = (i: number) => {
    setSelectedIndex(i);
    setHoverIndex(null);
    openModal(i);
  };

  return (
    <div className="flex flex-col">
      {/* Big image + overlay arrows (local SVGs); click opens modal */}
      <div className="relative w-full">
        <button
          type="button"
          className="relative block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
          onClick={handleMainImageClick}
          aria-label="View full size image"
        >
          <div className="relative w-full pb-[100%]">
            <picture className="contents">
              <source srcSet={mainSrcWebp} type="image/webp" />
              <Image
                src={mainSrc}
                alt={`${productTitle} image ${displayIndex + 1}`}
                width={450}
                height={450}
                className="absolute inset-0 h-full w-full object-contain object-center align-bottom"
                sizes="(max-width: 384px) 100vw, 384px"
                priority
              />
            </picture>
          </div>
        </button>
        {/* Left arrow overlay */}
        <button
          type="button"
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-0 bg-black/20 text-white hover:bg-black/30 focus-visible:outline-2 focus-visible:outline-black/80"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
        >
          <img src={SLIDER_LEFT} alt="" width={20} height={20} className="block" />
        </button>
        {/* Right arrow overlay */}
        <button
          type="button"
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-0 bg-black/20 text-white hover:bg-black/30 focus-visible:outline-2 focus-visible:outline-black/80"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
        >
          <img src={SLIDER_RIGHT} alt="" width={20} height={20} className="block" />
        </button>
      </div>

      {/* Thumbnail strip: hover = preview in main image, click = select + open modal */}
      <div className="relative -mx-1.5 my-1.5">
        {IMAGE_INDICES.map((imgIndex, i) => (
          <div key={imgIndex} className="inline-block w-1/5 p-1.5">
            <button
              type="button"
              onClick={() => handleThumbnailClick(i)}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative block w-full cursor-pointer"
              aria-label={`View image ${i + 1}`}
            >
              <div className="relative w-full pb-[100%]">
                <Image
                  src={getProductImagePath(imgIndex)}
                  alt=""
                  width={82}
                  height={82}
                  className="absolute inset-x-0 h-full w-full object-contain object-center align-bottom"
                  sizes="82px"
                />
              </div>
              {selectedIndex === i && (
                <div
                  className="absolute inset-0 rounded-[2px] border-2 border-solid border-red-500"
                  aria-hidden
                />
              )}
            </button>
          </div>
        ))}
      </div>

      <ProductImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={productTitle}
        imageSources={MODAL_IMAGE_SOURCES}
        initialIndex={Math.min(modalImageIndex, MODAL_IMAGE_SOURCES.length - 1)}
      />
    </div>
  );
}
