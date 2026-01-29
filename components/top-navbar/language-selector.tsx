interface LanguageSelectorProps {
  currentLanguage: string;
}

export function LanguageSelector({ currentLanguage }: LanguageSelectorProps) {
  return (
    <li className="justify-center items-center flex relative select-none text-white cursor-pointer before:content-[''] before:w-px before:h-4 before:absolute before:left-0 before:top-5 before:bg-black/26 after:hidden before:hidden hover:text-white/70">
      <div
        className="relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm"
        tabIndex={0}
        id="stardust-popover3"
      >
        <div role="button">
          <div className="text-white items-center flex px-2.5 py-2 hover:text-white/70">
            <div className="items-center flex">
              <svg
                width="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden"
              >
                <path
                  d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current"
                />
                <path
                  d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current"
                />
                <path
                  d="M1.33398 8H14.6673"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current"
                />
              </svg>
            </div>
            <span className="text-sm font-light mx-1.5">{currentLanguage}</span>
            <svg
              viewBox="0 0 12 12"
              width="12"
              color="currentColor"
              className="align-baseline inline h-3 fill-none overflow-x-hidden overflow-y-hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z"
                className="fill-current"
              />
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
}
