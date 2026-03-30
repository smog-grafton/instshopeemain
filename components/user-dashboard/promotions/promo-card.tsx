import Image from "next/image";
import type { PromoItem } from "./data";

interface PromoCardProps {
  item: PromoItem;
}

export function PromoCard({ item }: PromoCardProps) {
  return (
    <div
      className="group cursor-pointer select-none bg-white p-4 transition-colors hover:bg-zinc-50 sm:p-5"
      role="button"
      tabIndex={0}
      onClick={() => {}}
      onKeyDown={(e) => e.key === "Enter" && (e.currentTarget as HTMLDivElement).click()}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 sm:mx-0">
          <div className="relative h-20 w-full">
            <Image
              src={item.smallIconUrl}
              alt=""
              width={80}
              height={80}
              className="h-20 w-full object-contain opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 break-words">
          <h2 className="text-base font-semibold text-zinc-800 sm:text-lg">
            {item.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
          {item.bannerImageUrl && (
            <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50">
              <div className="relative">
                <Image
                  src={item.bannerImageUrl}
                  alt=""
                  width={400}
                  height={200}
                  className="h-auto w-full object-cover object-center opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>
          )}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-zinc-400 sm:text-sm">
              {item.dateTime}
            </p>
            <button
              type="button"
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-white sm:w-auto"
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
