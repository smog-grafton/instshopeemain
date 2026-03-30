"use client";

import { ShopeeUpdateCard } from "./shopee-update-card";
import type { ShopeeUpdateItem } from "./data";

interface ShopeeUpdatesListWithLoaderProps {
  baseUpdates: ShopeeUpdateItem[];
}

export function ShopeeUpdatesListWithLoader({
  baseUpdates,
}: ShopeeUpdatesListWithLoaderProps) {
  if (baseUpdates.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 px-6 py-14 text-center">
        <h2 className="text-base font-semibold text-zinc-800">
          No platform updates right now
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Buyer tips, service changes, and storewide announcements will show up
          here when available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-100 bg-white">
      <div className="flex flex-col divide-y divide-zinc-100">
        {baseUpdates.map((item) => (
          <ShopeeUpdateCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
