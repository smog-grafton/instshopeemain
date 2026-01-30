import { IconHelp } from "./icons";

interface ProductTitleRatingProps {
  title: string;
  rating: number;
  ratingsCount: number;
  sold: string;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  return (
    <div className="inline-flex relative">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="relative mr-px">
          <div
            className="z-[1] h-full absolute overflow-x-hidden overflow-y-hidden left-0 top-0"
            style={i === 4 && partial > 0 ? { width: `${partial * 100}%` } : { width: "100%" }}
          >
            <svg viewBox="0 0 14 14" width="14" height="14" className="block" fill="#ffc107">
              <path d="M7 0l2.2 4.5 4.9.7-3.5 3.4.8 4.9L7 11.2 3.6 14l.8-4.9L0 5.2l4.9-.7L7 0z" />
            </svg>
          </div>
          <svg viewBox="0 0 14 14" width="14" height="14" className="block" fill="#e0e0e0">
            <path d="M7 0l2.2 4.5 4.9.7-3.5 3.4.8 4.9L7 11.2 3.6 14l.8-4.9L0 5.2l4.9-.7L7 0z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function ProductTitleRating({ title, rating, ratingsCount, sold }: ProductTitleRatingProps) {
  return (
    <>
      <div className="text-ellipsis [-webkit-line-clamp:2] align-sub break-words max-w-2xl text-xl font-medium leading-6 [display:-webkit-box] overflow-x-hidden overflow-y-hidden">
        <h1 className="align-middle inline m-[inherit]">{title}</h1>
      </div>
      <div className="flex min-h-6 relative mt-2.5">
        <button
          type="button"
          className="[appearance:auto] flex cursor-pointer items-center pr-4 border-0 bg-transparent"
        >
          <div className="[border-bottom-style:solid] text-base mr-1.5 pb-px border-b text-neutral-800 border-b-neutral-800">
            {rating}
          </div>
          <StarRating rating={rating} />
        </button>
        <button
          type="button"
          className="[appearance:auto] flex cursor-pointer items-center px-4 border-r-0 border-y-0 [border-left-style:solid] border-l border-l-black/14 bg-transparent"
        >
          <div className="text-neutral-800 [border-bottom-style:solid] text-base mr-1.5 pb-px border-b border-b-neutral-600">
            {ratingsCount}
          </div>
          <div className="text-neutral-500 capitalize text-sm mr-1.5 py-1">ratings</div>
        </button>
        <div
          className="flex items-center px-4 [border-left-style:solid] border-l border-l-black/14"
          tabIndex={0}
        >
          <div className="text-neutral-500 capitalize text-sm mr-1.5 py-1">
            <span className="text-neutral-800 text-base mr-1.5 pb-px">{sold}</span> Sold
          </div>
          <span
            className="outline-0 flex relative focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"
            tabIndex={0}
          >
            <IconHelp />
          </span>
        </div>
        <button
          type="button"
          className="[appearance:auto] cursor-pointer text-sm ml-auto border-[unset] text-black/54 bg-transparent"
        >
          Report
        </button>
      </div>
    </>
  );
}
