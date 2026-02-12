import Image from "next/image";
import type { SocialLink } from "./data";

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="w-full sm:w-48 md:w-64 p-1.5 min-w-0">
      <div className="text-xs font-bold mt-10 mb-5 text-black/87">FOLLOW US</div>
      <ul className="list-none mb-4 text-black/65">
        {links.map((link, index) => (
          <li key={index} className="text-xs mb-3">
            <a
              href={link.href}
              className="content-center no-underline flex overflow-x-hidden overflow-y-hidden text-black/65 active:outline-0 hover:outline-0 hover:text-red-500"
              title={link.title || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.iconSrc}
                alt={link.text}
                width={16}
                height={16}
                className="align-baseline inline w-4 h-4 mr-2"
              />
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
