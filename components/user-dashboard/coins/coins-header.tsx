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
    <div className="flex items-center gap-4 bg-white rounded-[2px] shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] mb-3 px-5 py-4 overflow-visible text-[rgb(246,167,0)]">
      {/* Coin icon */}
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src={COIN_IMAGE}
          alt="Shopee Coins"
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Balance number */}
      <div className="text-[2rem] leading-none shrink-0">{balance.available}</div>

      {/* Info section: min-w-0 so it can shrink and "Earn more coins" stays on same row */}
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center">
          <div className="text-base -mr-2.5 text-[rgb(246,167,0)]">Coins available</div>
          <button
            type="button"
            className="outline-none flex relative overflow-visible ml-2.5 cursor-pointer text-black/54"
            aria-label="Coins info"
          >
            <InfoIcon />
          </button>
        </div>
        <div className="flex items-center">
          {balance.expiring > 0 && balance.expiringDate ? (
            <Link
              href="/user/coin/expiration/"
              className="flex items-center text-sm font-light text-[rgb(146,146,146)] no-underline hover:underline"
            >
              {balance.expiring} coins expiring on {balance.expiringDate}
              <ChevronRightIcon className="w-[11px] h-[11px] ml-1.5 fill-black/54 inline-block relative overflow-hidden" />
            </Link>
          ) : (
            <Link
              href="/user/coin/expiration/"
              className="flex items-center text-sm font-light text-[rgb(146,146,146)] no-underline hover:underline"
            >
              0 coins expiring on
              <ChevronRightIcon className="w-[11px] h-[11px] ml-1.5 fill-black/54 inline-block" />
            </Link>
          )}
        </div>
      </div>

      {/* Earn more link: shrink-0 so it never wraps to next line */}
      <Link
        href="/shopee-coins"
        className="flex justify-end items-center gap-2 shrink-0 text-base no-underline text-[rgb(246,167,0)] hover:underline"
      >
        Earn more coins
        <ChevronRightIcon className="w-2.5 h-2.5 fill-[rgb(246,167,0)] block" />
      </Link>
    </div>
  );
}
