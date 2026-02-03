import Image from "next/image";
import type { PromoItem } from "./data";

interface PromoCardProps {
  item: PromoItem;
}

export function PromoCard({ item }: PromoCardProps) {
  return (
    <div
      className="p-5 bg-[rgb(248,248,248)] cursor-pointer select-none flex"
      role="button"
      tabIndex={0}
      onClick={() => {}}
      onKeyDown={(e) => e.key === "Enter" && (e.currentTarget as HTMLDivElement).click()}
    >
      <div className="mr-5 h-20 w-20 shrink-0 overflow-hidden flex justify-center items-center bg-[rgb(245,245,245)]">
        <div className="relative h-20 w-full">
          <Image
            src={item.smallIconUrl}
            alt=""
            width={80}
            height={80}
            className="object-contain h-20 w-full opacity-100 transition-opacity duration-200"
          />
        </div>
      </div>
      <div className="mr-5 text-black/54 break-words flex-1 min-w-0">
        <h2 className="text-base m-0 mb-2.5 text-black/80 font-normal">
          {item.title}
        </h2>
        <div className="text-sm mb-1 leading-snug">{item.description}</div>
        {item.bannerImageUrl && (
          <div className="flex mt-1">
            <div className="relative my-1.5">
              <Image
                src={item.bannerImageUrl}
                alt=""
                width={400}
                height={200}
                className="object-contain object-center bg-white opacity-100 transition-opacity duration-200 w-full max-w-[25rem] h-[200px]"
              />
            </div>
          </div>
        )}
        <div className="flex items-center">
          <p className="text-black/54 leading-[14px] m-0 text-sm">
            {item.dateTime}
          </p>
        </div>
      </div>
      <div className="shrink-0 ml-auto">
        <button
          type="button"
          className="appearance-none cursor-pointer capitalize overflow-visible text-black/80 m-0 border border-black/[0.09] bg-white rounded-sm shrink-0 text-xs font-light h-8 min-w-20 outline-none py-0 px-1.5 ml-auto hover:bg-black/[0.02]"
        >
          view details
        </button>
      </div>
    </div>
  );
}
