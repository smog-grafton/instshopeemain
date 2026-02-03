"use client";

import { RATING_OPTIONS } from "./data";

const fieldsetStyles =
  "border-0 border-b border-black/[0.09] mt-5 pt-0 pb-5 first:mt-0";
const legendStyles = "mb-2.5 font-medium border-0 p-0";
const optionRowStyles =
  "cursor-pointer whitespace-nowrap items-center h-[25px] py-0 px-3 flex first:mt-0 mt-1.5";
const starWrapperStyles = "mb-px flex";
const starColor = "text-[rgb(255,206,61)]";

function StarFilledIcon({ id }: { id: string }) {
  return (
    <svg
      viewBox="0 0 9.5 8"
      className={`${starColor} mr-1 block h-3.5 w-4 fill-current`}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={id}
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0" stopColor="#ffca11" />
          <stop offset="1" stopColor="#ffad27" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        fillRule="evenodd"
        d="m6.8 7.2-2.2-1.2-2.2 1.2.4-2.5L.9 2.9l2.5-.3L4.6 0l1.1 2.5 2.5.4-1.8 1.8z"
      />
    </svg>
  );
}

function StarOutlineIcon() {
  return (
    <svg
      viewBox="0 0 9.5 8"
      className={`${starColor} mr-1 block h-3.5 w-4 fill-none stroke-[#ffad27] stroke-[1.5]`}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="m6.8 7.2-2.2-1.2-2.2 1.2.4-2.5L.9 2.9l2.5-.3L4.6 0l1.1 2.5 2.5.4-1.8 1.8z"
      />
    </svg>
  );
}

interface RatingFieldProps {
  value: number | null;
  onChange: (rating: number | null) => void;
}

export function RatingField({ value, onChange }: RatingFieldProps) {
  return (
    <fieldset className={fieldsetStyles}>
      <legend className={legendStyles}>Rating</legend>
      {RATING_OPTIONS.map((stars) => (
        <label key={stars} className={optionRowStyles}>
          <input
            type="radio"
            name="rating"
            aria-label={stars === 5 ? "5 stars" : `${stars} stars and up`}
            value={stars}
            checked={value === stars}
            onChange={() => onChange(value === stars ? null : stars)}
            className="sr-only"
          />
          <span className={starWrapperStyles}>
            {Array.from({ length: 5 }).map((_, i) =>
              i < stars ? (
                <StarFilledIcon key={i} id={`rating-star-${stars}-${i}`} />
              ) : (
                <StarOutlineIcon key={i} />
              )
            )}
          </span>
          <span className="text-sm text-black/80 ml-1">
            {stars === 5 ? "" : "& Up"}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
