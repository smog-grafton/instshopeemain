"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useMemo } from "react";
import { ProductImageModal } from "./product-image-modal";
import { isBackendImage } from "@/lib/utils";

const SLIDER_LEFT = "/images/sliders/left.svg";
const SLIDER_RIGHT = "/images/sliders/right.svg";

interface ProductGalleryProps {
  productTitle: string;
  images?: Array<{ imagePath: string | null; imagePathWebp: string | null; isThumbnail: boolean }>;
}

export function ProductGallery({ productTitle, images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  /** Hover preview: main image shows this index while hovering a thumbnail; null = show selectedIndex */
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  /** Image index to show in modal (set when opening so modal shows the clicked/hovered image) */
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Filter and use ONLY backend images - NO fallbacks
  const galleryImages = useMemo(() => {
    if (!images || images.length === 0) {
      return [];
    }
    return images
      .filter(img => img.imagePath && img.imagePath.trim() !== '')
      .map((img) => ({
        imagePath: img.imagePath!,
        imagePathWebp: img.imagePathWebp || null,
      }));
  }, [images]);

  // Reset selectedIndex when images change
  useEffect(() => {
    if (galleryImages.length > 0 && selectedIndex >= galleryImages.length) {
      setSelectedIndex(0);
    }
  }, [galleryImages.length, selectedIndex]);

  // Ensure selectedIndex and hoverIndex are within bounds
  const safeSelectedIndex = galleryImages.length > 0 
    ? Math.max(0, Math.min(selectedIndex, galleryImages.length - 1))
    : 0;
  const safeHoverIndex = hoverIndex !== null && galleryImages.length > 0
    ? Math.max(0, Math.min(hoverIndex, galleryImages.length - 1))
    : null;
  
  const displayIndex = safeHoverIndex ?? safeSelectedIndex;
  const currentImage = galleryImages[displayIndex];
  
  // NO fallbacks - if no image, show nothing
  const mainSrc = currentImage?.imagePath || '';
  const mainSrcWebp = currentImage?.imagePathWebp || null;
  
  // Check if image is from external backend
  const isExternalImage = (src: string) => isBackendImage(src);
  
  const THUMB_COUNT = Math.min(galleryImages.length, 5);

  const goPrev = useCallback(() => {
    if (galleryImages.length === 0) return;
    setSelectedIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
    setHoverIndex(null);
  }, [galleryImages.length]);

  const goNext = useCallback(() => {
    if (galleryImages.length === 0) return;
    setSelectedIndex((i) => (i + 1) % galleryImages.length);
    setHoverIndex(null);
  }, [galleryImages.length]);

  const openModal = useCallback((index: number) => {
    if (galleryImages.length === 0) return;
    const safeIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
    setModalImageIndex(safeIndex);
    setModalOpen(true);
  }, [galleryImages.length]);

  const handleMainImageClick = () => {
    if (galleryImages.length === 0) return;
    openModal(displayIndex);
  };

  const handleThumbnailClick = (i: number) => {
    if (galleryImages.length === 0) return;
    const safeIndex = Math.max(0, Math.min(i, galleryImages.length - 1));
    setSelectedIndex(safeIndex);
    setHoverIndex(null);
    openModal(safeIndex);
  };

  // If no images, show placeholder
  if (galleryImages.length === 0) {
    return (
      <div className="flex flex-col">
        <div className="relative w-full">
          <div className="relative w-full pb-[100%] bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No images available</span>
          </div>
        </div>
      </div>
    );
  }

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
            {mainSrc ? (
              isExternalImage(mainSrc) ? (
                // Use regular img tag for external images to avoid Next.js caching issues
                <img
                  key={`main-img-${displayIndex}-${mainSrc}`}
                  src={mainSrc}
                  alt={`${productTitle} image ${displayIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-contain object-center align-bottom"
                />
              ) : (
                <picture className="contents">
                  {mainSrcWebp && <source srcSet={mainSrcWebp} type="image/webp" />}
                  <Image
                    key={`main-img-${displayIndex}-${mainSrc}`}
                    src={mainSrc}
                    alt={`${productTitle} image ${displayIndex + 1}`}
                    width={450}
                    height={450}
                    className="absolute inset-0 h-full w-full object-contain object-center align-bottom"
                    sizes="(max-width: 384px) 100vw, 384px"
                    priority={displayIndex === 0}
                  />
                </picture>
              )
            ) : (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
          </div>
        </button>
        {/* Left arrow overlay */}
        {galleryImages.length > 1 && (
          <>
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
          </>
        )}
      </div>

      {/* Thumbnail strip: hover = preview in main image, click = select + open modal */}
      {galleryImages.length > 1 && (
        <div className="relative -mx-1.5 my-1.5">
          {galleryImages.slice(0, THUMB_COUNT).map((img, i) => (
            <div key={`thumb-${i}-${img.imagePath}`} className="inline-block w-1/5 p-1.5">
              <button
                type="button"
                onClick={() => handleThumbnailClick(i)}
                onMouseEnter={() => {
                  setHoverIndex(i);
                }}
                onMouseLeave={() => setHoverIndex(null)}
                className="relative block w-full cursor-pointer"
                aria-label={`View image ${i + 1}`}
              >
                <div className="relative w-full pb-[100%]">
                  {isExternalImage(img.imagePath) ? (
                    <img
                      key={`thumb-${i}-${img.imagePath}`}
                      src={img.imagePath}
                      alt=""
                      className="absolute inset-x-0 h-full w-full object-contain object-center align-bottom"
                    />
                  ) : (
                    <picture className="contents">
                      {img.imagePathWebp && (
                        <source srcSet={img.imagePathWebp} type="image/webp" />
                      )}
                      <Image
                        key={`thumb-${i}-${img.imagePath}`}
                        src={img.imagePath}
                        alt=""
                        width={82}
                        height={82}
                        className="absolute inset-x-0 h-full w-full object-contain object-center align-bottom"
                        sizes="82px"
                      />
                    </picture>
                  )}
                </div>
                {(safeSelectedIndex === i || (safeHoverIndex === i && safeHoverIndex !== null)) && (
                  <div
                    className="absolute inset-0 rounded-[2px] border-2 border-solid border-red-500"
                    aria-hidden
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      <ProductImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={productTitle}
        imageSources={galleryImages.map(img => img.imagePath)}
        initialIndex={Math.min(modalImageIndex, galleryImages.length - 1)}
      />
    </div>
  );
}
