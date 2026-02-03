"use client";

/**
 * Map placeholder + "Add Location" button (disabled for now).
 */
export function LocationArea() {
  return (
    <div className="w-full flex">
      <div className="w-full h-32 relative">
        <div className="w-full h-full absolute cursor-not-allowed">
          <svg
            viewBox="0 0 440 120"
            preserveAspectRatio="xMidYMid slice"
            className="align-baseline inline fill-none w-full h-full overflow-x-hidden overflow-y-hidden"
          >
            <g clipPath="url(#new-address-clip0)">
              <path d="M0 0h440v120H0z" className="fill-gray-50" />
              <g filter="url(#new-address-filter0_d)" className="stroke-gray-50">
                <path strokeWidth="10" d="M-6.779-.48l123 61" />
                <path strokeWidth="12" d="M11.524 124.548l30-67" />
                <path strokeWidth="10" d="M-7.796 33.512l112 55" />
                <path strokeWidth="12" d="M103.473 88.664l41-97" />
                <path strokeWidth="10" d="M322.96 33.054l35-48m5.078 109.853l-51-10M442.064 94l-78 1" />
                <path strokeWidth="12" d="M410.037 130.663l-4-36" />
                <path strokeWidth="11" d="M73.36 39.047l28-44" />
                <path strokeWidth="12" d="M31.552 19.486l12-26" />
                <path strokeWidth="10" d="M116.01 60.422l41 18" />
                <path strokeWidth="12" d="M140.286 123.17l41-128" />
                <path strokeWidth="10" d="M164.244 42.682l-32-12" />
                <path strokeWidth="11" d="M256.298 124.068l-89-81" />
                <path strokeWidth="10" d="M242.102 24.626l-78-32M273.319-4.26l-80 71m26.348 26.974l-82 29m184.93-91.441l-102 62" />
                <path strokeWidth="11" d="M144.386 123.146l-39-34" />
                <path strokeWidth="12" d="M79.949 125.762l25-39" />
                <path d="M241.5-7c18 8 70.203 32.864 82 39.5 16 9 39.5 35 39.5 61 0 27-18 34.5-28.5 42.5" strokeWidth="10" />
                <path d="M240 23.5c31 25.5 74 52 72.5 62s-51.5 28.333-77 41M337.5 13s23.5-7 28-8S445 7.5 445 7.5" strokeWidth="10" />
                <path d="M413 4c-1 13-3.4 40.5-5 42.5s-39.667 9-56 12" strokeWidth="11" />
              </g>
            </g>
            <defs>
              <clipPath id="new-address-clip0">
                <path d="M0 0h440v120H0z" className="fill-white" />
              </clipPath>
              <filter
                id="new-address-filter0_d"
                x="-14"
                y="-21.892"
                width="463.232"
                height="165.869"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.964706 0 0 0 0 0.968627 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>
          <button
            type="button"
            disabled
            className="[appearance:auto] bg-white justify-center items-center flex shadow-sm px-3 py-2 rounded-[0] border border-solid border-black/9 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 cursor-not-allowed hover:bg-neutral-100 disabled:text-stone-300 disabled:cursor-not-allowed"
          >
            <svg
              viewBox="0 0 10 10"
              className="align-baseline inline fill-current w-3.5 h-3.5 mr-3 overflow-x-hidden overflow-y-hidden"
            >
              <path d="m10 4.5h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5h4.5z" className="stroke-none" />
            </svg>
            Add Location
          </button>
        </div>
      </div>
    </div>
  );
}
