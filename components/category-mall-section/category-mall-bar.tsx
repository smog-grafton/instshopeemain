import Link from "next/link";

const SEE_ALL_HREF = "/mall";

/**
 * Bar for category page Shopee Mall section: "Shopee Mall" + "See All" only.
 */
export function CategoryMallBar() {
  return (
    <div
      className="flex h-16 items-center border-b border-solid border-black/5 bg-white px-5 [border-bottom-style:solid]"
      role="banner"
    >
      <div className="mr-5 flex flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium uppercase text-black/54">
        <Link
          href={SEE_ALL_HREF}
          className="block cursor-pointer self-center text-lg font-medium uppercase leading-4 text-red-700 no-underline outline-0 hover:outline-0 active:outline-0"
        >
          Shopee Mall
        </Link>
      </div>
      <Link
        href={SEE_ALL_HREF}
        className="flex items-center border-0 px-2 py-1.5 text-sm font-light capitalize leading-none text-red-500 no-underline outline-0 transition-colors duration-100 ease-in-out"
      >
        <span className="flex cursor-pointer items-baseline">
          See All
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-700">
            <svg
              enableBackground="new 0 0 11 11"
              viewBox="0 0 11 11"
              className="inline-block h-2.5 w-2.5 fill-white overflow-hidden align-baseline relative"
              aria-hidden
            >
              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
            </svg>
          </span>
        </span>
      </Link>
    </div>
  );
}
