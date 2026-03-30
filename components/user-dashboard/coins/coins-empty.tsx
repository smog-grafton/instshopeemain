import Link from "next/link";

export function CoinsEmpty() {
  return (
    <div className="flex min-h-[320px] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-200 bg-white px-6 py-12 text-center shadow-sm sm:min-h-[420px] sm:px-10">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-lg font-semibold text-amber-700">
        SC
      </div>
      <h2 className="mt-5 text-lg font-semibold text-zinc-800">You do not have coins yet</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
        Coins are usually earned from eligible purchases, campaigns, and buyer
        rewards. Once you start collecting them, your balance and activity will
        appear here.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
      >
        Explore offers
      </Link>
    </div>
  );
}
