import Image from "next/image";
import type { ShopeeUpdateItem } from "./data";

interface ShopeeUpdateCardProps {
  item: ShopeeUpdateItem;
}

export function ShopeeUpdateCard({ item }: ShopeeUpdateCardProps) {
  const href = item.href ?? "#";

  return (
    <a
      href={href}
      className="cursor-pointer select-none flex p-5 hover:bg-stone-50 no-underline text-inherit"
    >
      <div className="bg-neutral-100 shrink-0 justify-center items-center flex overflow-x-hidden overflow-y-hidden w-20 h-20 mr-5">
        <div className="w-full h-full relative">
          <Image
            src={item.imageUrl}
            alt=""
            width={80}
            height={80}
            className="w-full h-full object-contain transition-opacity duration-200"
          />
        </div>
      </div>
      <div className="break-words text-black/54 mr-5 flex-1 min-w-0">
        <h2 className="text-base font-normal mb-2.5 text-black/80">
          {item.title}
        </h2>
        <div className="text-sm mb-1.5 leading-snug">{item.description}</div>
        <div className="items-center flex">
          <p className="text-sm leading-none text-black/54">{item.dateTime}</p>
        </div>
      </div>
      <div className="shrink-0 ml-auto">
        <button
          type="button"
          className="[appearance:auto] cursor-pointer capitalize bg-white outline-0 shrink-0 min-w-20 h-8 text-xs font-light ml-auto px-2 rounded-sm border border-solid text-black/80 border-black/9 hover:text-red-500 hover:border-red-500"
          onClick={(e) => {
            e.preventDefault();
            if (href !== "#") window.location.href = href;
          }}
        >
          view details
        </button>
      </div>
    </a>
  );
}
