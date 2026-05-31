"use client";

interface CategoryNavButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

export function CategoryNavButtons({
  onPrev,
  onNext,
  showPrev = false,
  showNext = true,
}: CategoryNavButtonsProps) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        className={`absolute right-12 top-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-black/5 bg-white text-xl leading-6 shadow outline-0 transition-all duration-300 ease-in-out md:left-2 md:right-auto md:top-2/4 md:h-7 md:w-7 md:-mt-3 ${
          showPrev
            ? "opacity-100 scale-100 md:group-hover/categories:scale-[1.2]"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
        role="button"
        tabIndex={showPrev ? 0 : -1}
        aria-label="Previous categories"
        aria-hidden={!showPrev}
      >
        <svg
          enableBackground="new 0 0 13 20"
          viewBox="0 0 13 20"
          x="0"
          y="0"
          className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-300 ease-in-out fill-current w-2.5 h-2.5 text-black/54"
        >
          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNext}
        className={`absolute right-3 top-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-black/5 bg-white text-xl leading-6 shadow outline-0 transition-all duration-300 ease-in-out md:right-2 md:top-2/4 md:h-7 md:w-7 md:-mt-3 ${
          showNext
            ? "opacity-100 scale-100 md:group-hover/categories:scale-[1.2]"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
        role="button"
        tabIndex={showNext ? 0 : -1}
        aria-label="Next categories"
        aria-hidden={!showNext}
      >
        <svg
          enableBackground="new 0 0 13 21"
          viewBox="0 0 13 21"
          x="0"
          y="0"
          className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-300 ease-in-out fill-current w-2.5 h-2.5 text-black/54"
        >
          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
        </svg>
      </button>
    </>
  );
}
