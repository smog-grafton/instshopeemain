"use client";

export function DailyDiscoverHeader() {
  return (
    <nav className="sticky top-14 z-[999] mt-6 w-full border-b border-solid border-black/[0.09] bg-white shadow-sm [border-bottom-style:solid]">
      <ul className="flex border-b border-black/[0.09]">
        <li className="relative flex h-16 w-full flex-none cursor-pointer select-none items-center justify-center px-12 py-4 text-base font-medium text-red-500">
          <div
            className="absolute left-0 bottom-0 h-1 w-full bg-red-500 transition-opacity duration-300"
            aria-hidden
          />
          <span className="relative max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-red-500 uppercase leading-8">
            DAILY DISCOVER
          </span>
        </li>
      </ul>
    </nav>
  );
}
