"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReviewMediaItem } from "./data";

const SLIDER_LEFT = "/images/sliders/left.svg";
const SLIDER_RIGHT = "/images/sliders/right.svg";

interface ReviewMediaLightboxProps {
  open: boolean;
  onClose: () => void;
  media: ReviewMediaItem[];
  initialIndex: number;
}

/**
 * Lightbox for review media: images and videos. When opened on a video, it plays.
 * Prev/next navigate through the list; Escape or backdrop closes.
 */
export function ReviewMediaLightbox({
  open,
  onClose,
  media,
  initialIndex,
}: ReviewMediaLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const count = media.length;
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // When current item is a video, play it; when switching away, pause
  useEffect(() => {
    if (!open || count === 0) return;
    const item = media[currentIndex];
    if (item?.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [open, currentIndex, media, count]);

  const goPrev = () => setCurrentIndex((i) => (i - 1 + count) % count);
  const goNext = () => setCurrentIndex((i) => (i + 1) % count);

  if (!open || count === 0) return null;

  const item = media[currentIndex];
  const isVideo = item?.type === "video";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Review media"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[31.25rem] w-full max-w-lg flex-col overflow-hidden rounded-sm bg-black shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex min-h-0 flex-1 items-center justify-center p-2.5">
          {isVideo && item ? (
            <video
              ref={videoRef}
              key={`${item.src}-${currentIndex}`}
              src={item.src}
              controls
              controlsList="nodownload"
              className="max-h-[31.25rem] w-full max-w-lg cursor-pointer select-none outline-none"
              poster={item.poster}
              playsInline
            />
          ) : item ? (
            <div className="relative h-full w-full">
              {item.src.startsWith("/") ? (
                <Image
                  src={item.src}
                  alt="Review"
                  width={512}
                  height={512}
                  className="max-h-[31.25rem] w-auto max-w-full object-contain"
                  sizes="(max-width: 512px) 100vw, 512px"
                />
              ) : (
                <img
                  src={item.src}
                  alt="Review"
                  className="max-h-[31.25rem] w-auto max-w-full object-contain"
                />
              )}
            </div>
          ) : null}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="absolute left-0 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white shadow focus-visible:outline-2 focus-visible:outline-black/80"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous"
            >
              <img src={SLIDER_LEFT} alt="" width={10} height={10} className="block" />
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white shadow focus-visible:outline-2 focus-visible:outline-black/80"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next"
            >
              <img src={SLIDER_RIGHT} alt="" width={10} height={10} className="block" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
