import Image from "next/image";
import Link from "next/link";
import type { CoinBalance } from "./data";
import { COIN_IMAGE } from "./data";

interface CoinsHeaderProps {
  balance: CoinBalance;
}

function InfoIcon() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      className="w-3 h-3 fill-black/54 stroke-black/54 overflow-hidden relative inline-block"
      aria-hidden
    >
      <g>
        <circle
          cx="7.5"
          cy="7.5"
          fill="none"
          r="6.5"
          strokeMiterlimit="10"
        />
        <path
          d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
          stroke="none"
        />
      </g>
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      x="0"
      y="0"
      className={className}
      aria-hidden
    >
      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
    </svg>
  );
}

export function CoinsHeader({ balance }: CoinsHeaderProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#fff7e5_0%,#fff1c6_45%,#ffe3ad_100%)] p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-white/70 p-2 shadow-sm">
            <Image
              src={COIN_IMAGE}
              alt="Shopee Coins"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-amber-700">
                Coins available
              </div>
              <button
                type="button"
                className="cursor-pointer text-black/54"
                aria-label="Coins info"
              >
                <InfoIcon />
              </button>
            </div>
            <div className="mt-2 text-4xl font-semibold leading-none text-zinc-900">
              {balance.available}
            </div>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
              Use coins on eligible orders to reduce checkout totals and keep an
              eye on expiry dates before they roll off.
            </p>
          </div>
        </div>

        <Link
          href="/shopee-coins"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
        >
          Earn more coins
          <ChevronRightIcon className="block h-2.5 w-2.5 fill-white" />
        </Link>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
            Expiring soon
          </p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900">
            {balance.expiring}
          </p>
        </div>
        <Link
          href="/user/coin/expiration/"
          className="flex items-center justify-between gap-3 rounded-2xl bg-white/80 p-4 no-underline shadow-sm transition hover:bg-white"
        >
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
              Next expiry
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-zinc-800">
              {balance.expiring > 0 && balance.expiringDate
                ? `${balance.expiring} coins expiring on ${balance.expiringDate}`
                : "No coins expiring yet"}
            </p>
          </div>
          <ChevronRightIcon className="h-[11px] w-[11px] shrink-0 fill-black/54" />
        </Link>
      </div>
    </div>
  );
}
