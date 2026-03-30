import Link from "next/link";

export function VoucherWalletHeader({ totalCount }: { totalCount?: number }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h1 className="text-xl font-semibold text-black/80">Vouchers / Discounts</h1>
        <p className="mt-1 text-sm leading-6 text-neutral-500">
          Keep active buyer vouchers organized and redeem new codes before you
          checkout.
          {typeof totalCount === "number" ? ` ${totalCount} voucher(s) loaded.` : ""}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href="/user/get-more-vouchers"
          className="inline-flex h-10 items-center justify-center rounded-full bg-red-500 px-4 text-sm font-medium text-white no-underline transition hover:bg-red-600"
        >
          Get more vouchers
        </Link>
        <Link
          href="/user/voucher-wallet?page=history"
          className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-700 no-underline transition hover:border-zinc-300 hover:bg-zinc-50"
        >
          View history
        </Link>
        <Link
          href="https://help.shopee.com.my/portal/article/78690"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-500 no-underline transition hover:border-zinc-300 hover:bg-zinc-50"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
