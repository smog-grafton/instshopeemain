import type { CountryLink } from "./data";

interface CopyrightProps {
  copyright: string;
  countries: CountryLink[];
}

export function Copyright({ copyright, countries }: CopyrightProps) {
  return (
    <div className="[border-top-style:solid] border-t-[0.5px] border-t-black/10 flex-wrap justify-between items-start flex py-10 text-black/54">
      <div className="leading-5 shrink-0 mr-6">{copyright}</div>
      <div className="flex-wrap justify-center flex">
        <div className="leading-5 text-right grow shrink-0">
          Country &amp; Region:
        </div>
        {countries.map((country, index) => (
          <div
            key={index}
            className={`px-1.5 ${
              index < countries.length - 1
                ? "[border-right-style:solid] border-r-[0.5px] border-r-black/20"
                : ""
            }`}
          >
            <a
              href={country.href}
              className="leading-5 no-underline text-black/54 active:outline-0 hover:outline-0"
            >
              {country.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
