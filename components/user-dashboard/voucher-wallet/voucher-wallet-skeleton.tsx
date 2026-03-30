"use client";

/**
 * Skeleton for voucher wallet: header + add form + tabs + card grid.
 * No mock data — used while API is loading.
 */
export function VoucherWalletSkeleton() {
  return (
    <div className="animate-pulse text-sm leading-tight text-black/80">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="h-7 w-44 rounded bg-zinc-200" />
          <div className="mt-3 h-4 w-72 max-w-full rounded bg-zinc-100" />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="h-10 w-36 rounded-full bg-zinc-200" />
          <div className="h-10 w-32 rounded-full bg-zinc-100" />
          <div className="h-10 w-28 rounded-full bg-zinc-100" />
        </div>
      </div>
      <div className="rounded-3xl bg-zinc-50 p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="h-14 flex-1 rounded-2xl bg-zinc-100" />
          <div className="h-11 w-full rounded-full bg-zinc-200 sm:w-28" />
        </div>
      </div>
      <div className="mt-6 flex gap-2 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-10 w-28 shrink-0 rounded-full bg-zinc-100" />
        ))}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-52 rounded-3xl bg-zinc-100" />
        ))}
      </div>
    </div>
  );
}
