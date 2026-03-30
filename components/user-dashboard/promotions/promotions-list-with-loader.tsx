"use client";

import { PromoCard } from "./promo-card";
import type { PromoItem } from "./data";

interface PromotionsListWithLoaderProps {
  basePromos: PromoItem[];
}

export function PromotionsListWithLoader({ basePromos }: PromotionsListWithLoaderProps) {
  if (basePromos.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 px-6 py-14 text-center">
        <h2 className="text-base font-semibold text-zinc-800">
          No promotion updates yet
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          New buyer deals and voucher alerts will appear here once they are
          published for your account.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-100 bg-white">
      <div className="flex flex-col divide-y divide-zinc-100">
        {basePromos.map((item) => (
          <PromoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
