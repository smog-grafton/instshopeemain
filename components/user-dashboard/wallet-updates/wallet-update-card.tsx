import Link from "next/link";
import type { WalletUpdateItem } from "./data";

interface WalletUpdateCardProps {
  item: WalletUpdateItem;
}

function TypeBadge({ type }: { type: WalletUpdateItem["type"] }) {
  const styles: Record<WalletUpdateItem["type"], string> = {
    top_up: "bg-emerald-100 text-emerald-700",
    refund: "bg-sky-100 text-sky-700",
    cashback: "bg-amber-100 text-amber-700",
    withdrawal: "bg-zinc-100 text-zinc-700",
    payment: "bg-violet-100 text-violet-700",
  };
  const labels: Record<WalletUpdateItem["type"], string> = {
    top_up: "Top-up",
    refund: "Refund",
    cashback: "Cashback",
    withdrawal: "Withdrawal",
    payment: "Payment",
  };
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${styles[type]}`}
    >
      {labels[type]}
    </span>
  );
}

export function WalletUpdateCard({ item }: WalletUpdateCardProps) {
  return (
    <Link
      href={item.href}
      className="block border border-zinc-100 rounded-sm p-4 hover:bg-zinc-50/80 transition-colors no-underline text-inherit"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-zinc-800 font-medium text-sm">{item.title}</h3>
            <TypeBadge type={item.type} />
          </div>
          <p className="text-zinc-600 text-sm mt-1 leading-snug">{item.message}</p>
          <p className="text-zinc-400 text-xs mt-2">{item.timeAgo}</p>
        </div>
        <span className="text-zinc-400 shrink-0" aria-hidden>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
