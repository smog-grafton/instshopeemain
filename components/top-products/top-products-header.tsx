import Link from "next/link";

export function TopProductsHeader() {
  return (
    <div
      className="items-center flex before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 bg-white [border-bottom-style:solid] h-16 px-5 border-b border-b-black/5 before:content-none"
      role="banner"
    >
      <div className="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54">
        <span className="text-red-500">Top Products</span>
      </div>
      <Link
        href="/top_products"
        className="block active:outline-0 hover:outline-0 text-red-500 no-underline"
        tabIndex={0}
      >
        <span className="cursor-pointer tracking-[0] outline-0 justify-center text-sm font-light leading-none transition-colors duration-100 ease-in-out relative px-2 py-1.5 border-0 text-red-500 capitalize items-center flex">
          See All&nbsp;
          <svg
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            x="0"
            y="0"
            className="align-baseline fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden text-xs"
            aria-hidden
          >
            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
