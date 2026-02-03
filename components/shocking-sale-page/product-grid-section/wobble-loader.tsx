"use client";

export function WobbleLoader() {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="content-center justify-center items-center flex left-0 top-0" role="img" aria-label="Loading">
        <svg
          width="34"
          viewBox="-1 0 33 12"
          className="align-baseline inline h-3 overflow-x-hidden overflow-y-hidden text-red-500"
        >
          <circle
            className="fill-red-500 animate-[0.4s_linear_infinite_movement]"
            cx="4"
            cy="6"
            r="4"
          />
          <circle
            className="fill-red-500 animate-[0.4s_linear_infinite_movement] [animation-delay:0.1s]"
            cx="16"
            cy="6"
            r="4"
          />
          <circle
            className="fill-red-500 animate-[0.4s_linear_infinite_movement] [animation-delay:0.2s]"
            cx="28"
            cy="6"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}
