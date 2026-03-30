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
        className={`absolute left-0 top-2/4 z-10 hidden h-6 w-6 -mt-3 -translate-x-2/4 cursor-pointer items-center justify-center rounded-[50%] bg-white text-xl leading-6 shadow outline-0 transition-all duration-300 ease-in-out md:flex ${
          showPrev
            ? "opacity-100 scale-100 group-hover/categories:scale-[1.75]"
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
        className={`absolute right-0 top-2/4 z-10 hidden h-6 w-6 -mt-3 translate-x-2/4 cursor-pointer items-center justify-center rounded-[50%] bg-white text-xl leading-6 shadow outline-0 transition-all duration-300 ease-in-out md:flex ${
          showNext
            ? "opacity-100 scale-100 group-hover/categories:scale-[1.75]"
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
