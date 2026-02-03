import Link from "next/link";
import type { OrderUpdateItem } from "./data";

interface OrderUpdateCardProps {
  item: OrderUpdateItem;
}

function StatusBadge({ status }: { status: OrderUpdateItem["status"] }) {
  const styles: Record<OrderUpdateItem["status"], string> = {
    shipped: "bg-sky-100 text-sky-700",
    delivered: "bg-emerald-100 text-emerald-700",
    confirmed: "bg-amber-100 text-amber-700",
    out_for_delivery: "bg-orange-100 text-orange-700",
  };
  const labels: Record<OrderUpdateItem["status"], string> = {
    shipped: "Shipped",
    delivered: "Delivered",
    confirmed: "Confirmed",
    out_for_delivery: "Out for delivery",
  };
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export function OrderUpdateCard({ item }: OrderUpdateCardProps) {
  return (
    <Link
      href={item.href}
      className="block border border-zinc-100 rounded-sm p-4 hover:bg-zinc-50/80 transition-colors no-underline text-inherit"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-zinc-800 font-medium text-sm">{item.title}</h3>
            <StatusBadge status={item.status} />
          </div>
          <p className="text-zinc-600 text-sm mt-1 leading-snug">{item.message}</p>
          <p className="text-zinc-400 text-xs mt-2">{item.timeAgo}</p>
        </div>
        <span className="text-zinc-400 shrink-0" aria-hidden>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
