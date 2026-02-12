"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ReviewCard } from "./review-card";
import { ReviewMediaLightbox } from "./review-media-lightbox";
import type {
  ProductReviewsSectionData,
  ReviewMediaItem,
} from "./data";

const LeaveReviewModal = dynamic(
  () => import("./leave-review-modal").then((m) => ({ default: m.LeaveReviewModal })),
  { ssr: false }
);

/** Full or partial star for summary (red fill). partial 0–1 for last star. */
function SummaryStar({ filled, partial }: { filled: boolean; partial?: number }) {
  const fillWidth = filled ? (partial != null ? partial : 1) : 0;
  return (
    <div className="relative mr-px w-5 shrink-0">
      <svg
        enableBackground="new 0 0 15 15"
        viewBox="0 0 15 15"
        className="absolute left-0 top-0 h-5 w-5 overflow-hidden text-red-500 stroke-red-500"
        aria-hidden
      >
        <polygon
          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          className="fill-none"
        />
      </svg>
      <div
        className="absolute left-0 top-0 h-full overflow-hidden text-red-500"
        style={{ width: `${fillWidth * 100}%` }}
      >
        <svg
          enableBackground="new 0 0 15 15"
          viewBox="0 0 15 15"
          className="h-5 w-5 fill-red-500 stroke-red-500"
          aria-hidden
        >
          <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
          />
        </svg>
      </div>
    </div>
  );
}

const REVIEWS_PER_PAGE = 5;

interface ProductReviewsSectionProps {
  data: ProductReviewsSectionData;
  /** Product slug for "Leave review" (POST /products/:slug/reviews). When set, the Leave review button is shown. */
  productSlug?: string;
}

export function ProductReviewsSection({ data, productSlug }: ProductReviewsSectionProps) {
  const { overallScore, filterChips, reviews } = data;
  const router = useRouter();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [leaveReviewOpen, setLeaveReviewOpen] = useState(false);
  const [lightboxMedia, setLightboxMedia] = useState<ReviewMediaItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(reviews.length / REVIEWS_PER_PAGE));
  const start = (currentPage - 1) * REVIEWS_PER_PAGE;
  const paginatedReviews = reviews.slice(start, start + REVIEWS_PER_PAGE);

  const openLightbox = useCallback((media: ReviewMediaItem[], index: number) => {
    setLightboxMedia(media);
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const fullStars = Math.floor(overallScore);
  const remainder = overallScore - fullStars;
  const hasPartial = remainder >= 0.2;

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="mt-4 rounded-sm bg-white pt-6 px-6 shadow-sm text-sm leading-tight text-black/80">
      <div className="mb-3.5 flex items-center justify-between">
        <div className="relative z-[999] inline-flex">
          <h2 className="capitalize text-lg font-medium text-black/87">Product Ratings</h2>
        </div>
        {productSlug && (
          <button
            type="button"
            onClick={() => setLeaveReviewOpen(true)}
            className="rounded border border-red-500 bg-white px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Leave review
          </button>
        )}
      </div>

      <div className="bg-white -mt-6">
        <section className="w-full min-h-0">
          <div className="rounded-sm border border-solid border-rose-100 bg-stone-50 mb-4 flex min-h-20 items-center p-8">
            <div className="mr-8 text-center">
              <div className="text-lg text-red-500">
                <span className="text-3xl">{overallScore}</span>
                <span> out of 5 </span>
              </div>
              <div className="relative mt-2.5 inline-block text-xl">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <SummaryStar
                      key={i}
                      filled={i < fullStars}
                      partial={i === fullStars && hasPartial ? remainder : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="ml-4 flex-1 flex flex-wrap gap-x-2 gap-y-1.5">
              {filterChips.map((chip, i) => (
                <button
                  key={chip.label}
                  type="button"
                  className={`inline-block min-w-24 cursor-pointer select-none rounded-sm border border-solid px-2.5 py-0 text-center font-semibold capitalize leading-8 ${
                    i === activeFilter
                      ? "border-red-500 fill-red-500 bg-white text-red-500"
                      : "border-black/9 bg-white text-black/87"
                  }`}
                  onClick={() => setActiveFilter(i)}
                >
                  <span className="relative top-1/2 inline-block -translate-y-2/4">
                    {chip.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            {paginatedReviews.map((review, idx) => (
              <ReviewCard
                key={`${review.username}-${review.date}-${start + idx}`}
                review={review}
                onMediaClick={openLightbox}
              />
            ))}
          </div>

          <nav
            aria-label="Reviews pagination"
            role="navigation"
            className="mt-5 flex justify-center pb-10 text-right"
          >
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous page"
              className="relative ml-3 mr-4 flex h-8 min-w-10 items-center justify-center border-0 border-solid border-black/9 text-right text-xs text-black/40 outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-black/87 focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:h-[calc(100%+2px)] focus-visible:before:w-[calc(100%+2px)] focus-visible:before:rounded-sm focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                className="relative inline-block h-2.5 w-2.5 fill-current overflow-hidden"
                aria-hidden
              >
                <g>
                  <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                </g>
              </svg>
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setCurrentPage(n)}
                aria-label={`Page ${n}`}
                aria-current={n === currentPage ? "page" : undefined}
                className={`relative mx-4 flex h-8 min-w-10 cursor-pointer select-none items-center justify-center rounded-sm border-0 text-center text-xl outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-black/87 ${
                  n === currentPage
                    ? "bg-red-500 text-white shadow-sm"
                    : "text-black/40 hover:text-red-500"
                }`}
              >
                {n}
              </button>
            ))}
            {totalPages > 5 && (
              <span className="relative mx-4 flex h-8 min-w-10 cursor-default items-center justify-center text-xl text-black/40">
                ...
              </span>
            )}
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next page"
              className="relative ml-4 mr-3 flex h-8 min-w-10 items-center justify-center border-0 border-solid border-black/9 text-left text-xs text-black/40 outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-black/87 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                className="relative inline-block h-2.5 w-2.5 fill-current overflow-hidden"
                aria-hidden
              >
                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
              </svg>
            </button>
          </nav>
        </section>
      </div>

      <ReviewMediaLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        media={lightboxMedia}
        initialIndex={lightboxIndex}
      />
      {productSlug && (
        <LeaveReviewModal
          open={leaveReviewOpen}
          onClose={() => setLeaveReviewOpen(false)}
          productSlug={productSlug}
          onSuccess={() => router.refresh()}
        />
      )}
    </div>
  );
}
