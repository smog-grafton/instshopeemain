import type { Category } from "./data";

interface CategoryColumnProps {
  category: Category;
}

export function CategoryColumn({ category }: CategoryColumnProps) {
  return (
    <div className="text-xs">
      <div className="uppercase font-bold mt-2.5 mb-0.5 py-0.5 text-black/54">
        <a
          href={category.titleHref}
          className="text-ellipsis no-underline block overflow-x-hidden overflow-y-hidden text-black/54 active:outline-0 hover:outline-0 hover:text-red-500"
        >
          {category.title}
        </a>
      </div>
      <div className="flex-wrap w-full leading-normal flex mb-2.5">
        {category.links.map((link, index) => (
          <div key={index}>
            <a
              href={link.href}
              className="no-underline inline-block text-black/54 active:outline-0 hover:outline-0 hover:text-red-500"
            >
              {link.text}
            </a>
            {index < category.links.length - 1 && <span>&nbsp;|&nbsp;</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
