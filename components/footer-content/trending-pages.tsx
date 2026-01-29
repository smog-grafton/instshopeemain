import type { TrendingPage } from "./data";

interface TrendingPagesProps {
  pages: TrendingPage[];
}

export function TrendingPages({ pages }: TrendingPagesProps) {
  return (
    <div className="mb-8">
      <div className="font-bold">Trending Pages</div>
      <ul className="text-xs mt-4">
        {pages.map((page, index) => (
          <li
            key={index}
            className={`leading-6 inline-block ${
              index < pages.length - 1
                ? "after:content-['|'] after:mx-1.5"
                : "last-of-type:after:content-['']"
            }`}
          >
            <a
              href={page.href}
              className="active:outline-0 hover:outline-0 text-ellipsis no-underline overflow-x-hidden overflow-y-hidden text-black/54 hover:text-red-500"
            >
              {page.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
