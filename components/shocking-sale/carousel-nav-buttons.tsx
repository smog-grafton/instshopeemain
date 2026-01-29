"use client";

interface CarouselNavButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

export function CarouselNavButtons({
  onPrev,
  onNext,
  showPrev = false,
  showNext = true,
}: CarouselNavButtonsProps) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        className={`cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 left-0 bg-white w-6 h-6 leading-6 -mt-3 -translate-x-2/4 transition-all duration-300 ease-in-out z-10 ${
          showPrev
            ? "opacity-100 scale-100 group-hover/carousel:scale-[1.75]"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
        role="button"
        tabIndex={showPrev ? 0 : -1}
        aria-label="click, scroll left to see more"
        aria-hidden={!showPrev}
      >
        <svg
          enableBackground="new 0 0 13 20"
          viewBox="0 0 13 20"
          x="0"
          y="0"
          className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54"
        >
          <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        className={`cursor-pointer outline-0 justify-center items-center text-xl duration-100 ease-in-out flex absolute shadow rounded-[50%] top-2/4 right-0 bg-white w-6 h-6 leading-6 -mt-3 translate-x-2/4 transition-all duration-300 ease-in-out z-10 ${
          showNext
            ? "opacity-100 scale-100 group-hover/carousel:scale-[1.75]"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
        role="button"
        tabIndex={showNext ? 0 : -1}
        aria-label="click, scroll right to see more"
        aria-hidden={!showNext}
      >
        <svg
          enableBackground="new 0 0 13 21"
          viewBox="0 0 13 21"
          x="0"
          y="0"
          className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-current w-2.5 h-2.5 text-black/54"
        >
          <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
        </svg>
      </button>
    </>
  );
}
