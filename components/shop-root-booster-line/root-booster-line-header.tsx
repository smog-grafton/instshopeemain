import Link from "next/link";

interface RootBoosterLineHeaderProps {
  shopSlug: string;
}

/**
 * "Root Booster Line" section header: title + "See All" link.
 * Same style as Top Products: grey uppercase title, red See All with chevron.
 * See All links to shop collection (e.g. BEST SELLERS : ROOT BOOSTER LINE).
 */
export function RootBoosterLineHeader({ shopSlug }: RootBoosterLineHeaderProps) {
  const seeAllHref = `/shop/${shopSlug}?shopCollection=246436636#product_list`;

  return (
    <div
      className="flex items-center pb-2.5"
      style={{ paddingTop: "20px" }}
    >
      <div
        className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap mr-5 text-base font-medium uppercase"
        style={{ color: "rgba(0, 0, 0, 0.54)" }}
      >
        Root Booster Line
      </div>
      <Link href={seeAllHref} className="block text-black/87 no-underline">
        <span
          className="inline-flex items-center justify-center capitalize cursor-pointer text-sm font-light leading-none transition-colors duration-100 py-1.5 px-2 border-0 bg-transparent outline-none"
          style={{ color: "rgb(208, 1, 27)" }}
        >
          See All&nbsp;
          <svg
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            x="0"
            y="0"
            className="block w-[10px] h-[10px] fill-current relative overflow-hidden text-[10px]"
            aria-hidden
          >
            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
