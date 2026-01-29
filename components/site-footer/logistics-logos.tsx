import Image from "next/image";
import type { LogoItem } from "./data";

interface LogisticsLogosProps {
  logos: LogoItem[];
}

export function LogisticsLogos({ logos }: LogisticsLogosProps) {
  return (
    <>
      <div className="text-xs font-bold mb-5 text-black/87">LOGISTICS</div>
      <ul className="flex-wrap list-none flex mb-4">
        {logos.map((logo, index) => (
          <li
            key={index}
            className="bg-white justify-center items-center w-16 h-8 flex overflow-x-hidden overflow-y-hidden shadow-sm mr-2 mb-2 p-1 rounded-sm"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-center justify-center items-center w-full h-full flex active:outline-0 hover:outline-0"
              href={logo.href}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={64}
                height={32}
                className="align-baseline inline max-h-full"
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
