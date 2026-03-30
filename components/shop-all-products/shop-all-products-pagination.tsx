"use client";

import Link from "next/link";

function PrevArrowIcon() {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      x={0}
      y={0}
      className="align-middle block h-3.5 w-4 fill-black/40 relative overflow-hidden"
      aria-hidden
    >
      <g>
        <path
          fillRule="nonzero"
          d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z"
        />
      </g>
    </svg>
  );
}

function NextArrowIcon() {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      x={0}
      y={0}
      className="align-middle block h-3.5 w-4 fill-black/40 relative overflow-hidden"
      aria-hidden
    >
      <path
        fillRule="nonzero"
        d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
      />
    </svg>
  );
}

interface ShopAllProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  buildPageHref: (page: number) => string;
}

export function ShopAllProductsPagination({
  currentPage,
  totalPages,
  buildPageHref,
}: ShopAllProductsPaginationProps) {
  const windowSize = 5;
  const startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
  const endPage = Math.min(totalPages, startPage + windowSize - 1);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <nav
      role="navigation"
      aria-label="Shop products pagination"
      className="my-5 mb-10 flex justify-center sm:mb-[60px]"
    >
      {currentPage <= 1 ? (
        <span
          aria-disabled
          className="pointer-events-none text-right mr-4 text-black/40 border-0 min-w-[40px] h-[30px] outline-black/40 flex justify-center items-center text-sm font-light bg-transparent padding-0 cursor-default no-underline"
        >
          <PrevArrowIcon />
        </span>
      ) : (
        <Link
          href={buildPageHref(currentPage - 1)}
          aria-label="Previous page"
          className="text-right mr-4 text-black/40 border-0 min-w-[40px] h-[30px] outline-black/40 flex justify-center items-center text-sm font-light bg-transparent padding-0 cursor-pointer no-underline hover:text-black/60"
        >
          <PrevArrowIcon />
        </Link>
      )}

      {startPage > 1 && (
        <span className="mx-1 flex min-w-[32px] items-center justify-center text-sm text-black/40 sm:min-w-[40px]">
          ...
        </span>
      )}

      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <Link
            key={page}
            href={buildPageHref(page)}
            aria-label={`Page ${page}`}
            aria-current={isActive ? "page" : undefined}
            className={`mx-1 flex h-[30px] min-w-[32px] items-center justify-center rounded-sm text-base font-light no-underline transition-opacity sm:mx-2 sm:min-w-[40px] sm:text-xl ${
              isActive
                ? "bg-[rgb(208,1,27)] text-white border-0 rounded-sm shadow-[0_1px_1px_rgba(0,0,0,0.09)] cursor-pointer"
                : "bg-transparent text-black/40 border-0 cursor-pointer hover:bg-black/5"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {endPage < totalPages && (
        <span className="mx-1 flex min-w-[32px] items-center justify-center text-sm text-black/40 sm:min-w-[40px]">
          ...
        </span>
      )}

      {currentPage >= totalPages ? (
        <span
          aria-disabled
          className="pointer-events-none text-left ml-4 text-black/40 border-0 min-w-[40px] h-[30px] outline-black/40 flex justify-center items-center text-sm font-light bg-transparent padding-0 cursor-default no-underline"
        >
          <NextArrowIcon />
        </span>
      ) : (
        <Link
          href={buildPageHref(currentPage + 1)}
          aria-label="Next page"
          className="text-left ml-4 text-black/40 border-0 min-w-[40px] h-[30px] outline-black/40 flex justify-center items-center text-sm font-light bg-transparent padding-0 cursor-pointer no-underline hover:text-black/60"
        >
          <NextArrowIcon />
        </Link>
      )}
    </nav>
  );
}
