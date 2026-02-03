import Link from "next/link";

interface ShopsResultsHeaderProps {
  keyword: string;
  moreShopsHref: string;
}

/** Chevron-right icon for More Shops link (from original HTML). */
function ChevronRightIcon() {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      x={0}
      y={0}
      className="align-baseline fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden text-xs"
      aria-hidden
    >
      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
    </svg>
  );
}

export function ShopsResultsHeader({ keyword, moreShopsHref }: ShopsResultsHeaderProps) {
  return (
    <div className="items-center flex pb-2.5 before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 before:content-none">
      <div className="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54">
        shops related to{" "}
        <span>
          <span>&quot;</span>
          <span className="mb-5 text-red-500">{keyword}</span>
          <span>&quot;</span>
        </span>
      </div>
      <Link
        className="block active:outline-0 hover:outline-0 text-red-500 no-underline"
        tabIndex={-1}
        href={moreShopsHref}
      >
        <button
          type="button"
          className="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center text-sm font-light leading-none transition-colors duration-100 ease-in-out relative px-2 py-1.5 border-0 text-red-500 capitalize items-center flex focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"
        >
          More Shops&nbsp;
          <ChevronRightIcon />
        </button>
      </Link>
    </div>
  );
}
