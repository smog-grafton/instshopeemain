"use client";

import Image from "next/image";
import type { ProductReviewEntry, ReviewMediaItem } from "./data";

/** Small red star for review rating (filled or outline). */
function StarIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      className={className ?? "align-baseline inline-block h-3.5 w-3.5 text-red-500 stroke-current"}
      aria-hidden
    >
      <polygon
        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className={filled ? "fill-current" : "fill-none"}
      />
    </svg>
  );
}

/** User avatar placeholder (neutral circle with person icon). */
function AvatarPlaceholder() {
  return (
    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-solid border-black/9 bg-neutral-100">
      <svg
        enableBackground="new 0 0 15 15"
        viewBox="0 0 15 15"
        className="h-6 w-6 stroke-stone-300 fill-none"
        aria-hidden
      >
        <g>
          <circle cx="7.5" cy="4.5" r="3.8" strokeMiterlimit={10} />
          <path
            d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
            strokeLinecap="round"
            strokeMiterlimit={10}
          />
        </g>
      </svg>
    </div>
  );
}

/** Video thumbnail overlay: play icon + duration. */
function VideoOverlay({ duration }: { duration: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-[1] flex h-5 items-center justify-between bg-black/54 px-1 text-xs leading-5 text-white">
      <svg
        width={23}
        viewBox="0 0 23 18"
        className="inline-block h-5 fill-white"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z"
        />
      </svg>
      <span>{duration}</span>
    </div>
  );
}

interface ReviewCardProps {
  review: ProductReviewEntry;
  onMediaClick: (media: ReviewMediaItem[], index: number) => void;
}

export function ReviewCard({ review, onMediaClick }: ReviewCardProps) {
  const { username, rating, date, variation, attributes, comment, media, helpfulCount } = review;

  return (
    <div className="flex border-b border-solid border-black/9 py-4 [border-bottom-style:solid]">
      <div className="pl-5 pr-2.5">
        <AvatarPlaceholder />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-black/87">{username}</div>
        <div className="flex items-center py-1.5">
          <div className="inline-flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < rating} />
            ))}
          </div>
          <div className="ml-[3px] mt-1.5 flex items-center text-xs text-black/54">
            Similar Product Review
          </div>
        </div>
        <div className="mt-1 text-xs text-black/54">
          {date} | Variation: {variation}
        </div>

        <div className="mt-4 [word-break:break-word] whitespace-pre-wrap leading-5">
          {attributes && attributes.length > 0 && (
            <div className="space-y-1.5">
              {attributes.map((attr) => (
                <div key={attr.label}>
                  <span className="text-black/40">{attr.label} </span>
                  <span>{attr.value}</span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-3 leading-6 text-black/87">{comment}</div>
        </div>

        {media.length > 0 && (
          <div className="mt-4">
            <div className="flex w-full flex-wrap">
              {media.map((item, index) => (
                <button
                  key={`${item.type}-${item.src}-${index}`}
                  type="button"
                  className="relative mr-2.5 h-20 w-20 shrink-0 cursor-zoom-in overflow-hidden rounded-sm bg-neutral-50"
                  onClick={() => onMediaClick(media, index)}
                  aria-label={item.type === "video" ? "Play video" : "View image"}
                >
                  <div className="relative h-full w-full">
                    {item.type === "video" ? (
                      <>
                        <div className="absolute inset-0 bg-neutral-50">
                          {item.poster?.startsWith("/") ? (
                            <Image
                              src={item.poster}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          ) : (
                            <div
                              className="h-full w-full bg-cover bg-center bg-no-repeat"
                              style={item.poster ? { backgroundImage: `url(${item.poster})` } : undefined}
                            />
                          )}
                        </div>
                        {item.duration && <VideoOverlay duration={item.duration} />}
                      </>
                    ) : (
                      <>
                        {item.src.startsWith("/") ? (
                          <Image
                            src={item.src}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex justify-between text-black/40">
          <div className="flex items-center">
            <span className="mr-1 cursor-pointer text-black/20" role="button" tabIndex={0}>
              Helpful
            </span>
            {helpfulCount != null && <span className="capitalize">{helpfulCount}</span>}
            {(helpfulCount == null || helpfulCount === 0) && <span className="capitalize">helpful?</span>}
          </div>
          <div className="relative">
            <button
              type="button"
              className="cursor-pointer text-black/54 focus-visible:outline-2 focus-visible:outline-black/87"
              aria-label="More options"
            >
              <svg
                width={4}
                viewBox="0 0 4 16"
                className="inline-block h-4 overflow-x-hidden overflow-y-hidden fill-stone-300"
                aria-hidden
              >
                <path d="M2 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5.6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5.6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
              </svg>
            </button>
            <div className="absolute right-0 z-[1] hidden rounded-sm border border-solid border-black/9 bg-white px-7 py-3 text-black/80 shadow-sm capitalize whitespace-nowrap">
              Report Abuse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
