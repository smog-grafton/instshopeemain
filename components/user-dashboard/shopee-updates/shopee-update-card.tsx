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
      className="group block cursor-pointer select-none p-4 no-underline text-inherit transition-colors hover:bg-zinc-50 sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 sm:mx-0">
          <div className="relative h-full w-full">
            <Image
              src={item.imageUrl}
              alt=""
              width={80}
              height={80}
              className="h-full w-full object-contain transition-opacity duration-200"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 break-words">
          <h2 className="text-base font-semibold text-zinc-800 sm:text-lg">
            {item.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-zinc-400 sm:text-sm">
              {item.dateTime}
            </p>
            <span className="inline-flex h-10 w-full items-center justify-center rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition group-hover:border-zinc-300 group-hover:bg-white sm:w-auto">
              View details
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
