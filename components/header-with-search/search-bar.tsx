import Image from "next/image";
import type { HeaderConfig } from "./data";

interface SearchBarProps {
  config: HeaderConfig;
}

export function SearchBar({ config }: SearchBarProps) {
  return (
    <form
      role="search"
      autoComplete="off"
      className="bg-white justify-between items-stretch h-10 flex p-[0.1875rem] rounded-sm w-full shadow-sm"
    >
      <div className="flex-1 flex relative">
        <div className="flex-1 flex relative px-2.5 bg-white border-white">
          <input
            aria-label={config.searchPlaceholder}
            className="leading-4 outline-0 flex-1 items-center flex border-0"
            maxLength={128}
            placeholder={config.searchPlaceholder}
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls="shopee-searchbar-listbox"
            aria-expanded="false"
            role="combobox"
            defaultValue=""
          />
        </div>
      </div>
      <button
        type="button"
        className="[appearance:auto] text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm shadow-sm rounded-sm border-0 inline-flex min-w-16 max-w-48 h-9 px-4 text-white outline-0 relative bg-red-500 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+theme(width[1.5]))] focus-visible:before:h-[calc(100%+theme(height[1.5]))] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87 hover:bg-red-500 active:bg-red-500 active:shadow-inner"
      >
        <Image
          src="/images/svgs/header/search.svg"
          alt="Search"
          width={19}
          height={19}
          className="align-baseline fill-current w-3.5 h-3.5 inline-block relative overflow-x-hidden overflow-y-hidden mx-auto"
        />
      </button>
    </form>
  );
}
