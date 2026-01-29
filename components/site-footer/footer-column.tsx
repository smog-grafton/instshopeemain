import type { FooterColumn } from "./data";

interface FooterColumnProps {
  column: FooterColumn;
}

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div className="w-64 p-1.5">
      <div className="text-xs font-bold mt-10 mb-5 text-black/87">{column.title}</div>
      <ul className="list-none mb-4 text-black/65">
        {column.links.map((link, index) => (
          <li key={index} className="text-xs mb-3">
            <a
              href={link.href}
              className="content-center no-underline flex overflow-x-hidden overflow-y-hidden text-black/65 active:outline-0 hover:outline-0 hover:text-red-500"
              title={link.title || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-ellipsis whitespace-nowrap max-w-full overflow-x-hidden overflow-y-hidden">
                {link.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
