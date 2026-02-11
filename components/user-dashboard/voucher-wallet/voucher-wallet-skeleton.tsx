"use client";

/**
 * Skeleton for voucher wallet: header + add form + tabs + card grid.
 * No mock data — used while API is loading.
 */
export function VoucherWalletSkeleton() {
  return (
    <div className="text-sm leading-tight text-black/80 bg-white grow overflow-x-hidden overflow-y-hidden shadow-sm px-8 py-6 rounded-sm w-[980px] ml-7 min-h-[400px] animate-pulse">
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 w-40 bg-zinc-200 rounded" />
        <div className="flex gap-4">
          <div className="h-4 w-28 bg-zinc-100 rounded" />
          <div className="h-4 w-32 bg-zinc-100 rounded" />
          <div className="h-4 w-20 bg-zinc-100 rounded" />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-5 px-11 py-7 bg-black/5 rounded">
        <div className="h-4 w-24 bg-zinc-200 rounded" />
        <div className="h-11 flex-1 max-w-md bg-zinc-100 rounded" />
        <div className="h-11 w-24 bg-zinc-200 rounded" />
      </div>
      <div className="flex gap-2 mt-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 w-14 bg-zinc-100 rounded" />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 mt-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-1/2 pr-2.5">
            <div className="h-28 bg-zinc-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
