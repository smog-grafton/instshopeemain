import Link from "next/link";

const QUICK_ITEMS = [
  {
    label: "Mall Picks",
    href: "/mall",
    accent: "bg-red-50 text-[#ee4d2d]",
    icon: (
      <path d="M5 9h14l-1.4-4.5H6.4L5 9Zm1.5 0v10h11V9M9 19v-5h6v5" />
    ),
  },
  {
    label: "Wholesale",
    href: "/#home-categories",
    accent: "bg-orange-50 text-orange-600",
    icon: (
      <path d="M4 8.5 12 4l8 4.5-8 4.5-8-4.5Zm0 4 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
    ),
  },
  {
    label: "Fast Deals",
    href: "/shocking_sale",
    accent: "bg-amber-50 text-amber-600",
    icon: (
      <path d="M13.2 3 6.5 13h4.3l-.6 8 7.3-10h-4.4l.1-8Z" />
    ),
  },
  {
    label: "Secure Wallet",
    href: "/user/wallet",
    accent: "bg-emerald-50 text-emerald-600",
    icon: (
      <path d="M4 7h15a1 1 0 0 1 1 1v10H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12M16 13h4" />
    ),
  },
];

export function MarketplaceQuickStrip() {
  return (
    <section className="mx-auto mt-3 w-full max-w-[1200px] px-3 sm:px-4 md:px-6" aria-label="Quick marketplace links">
      <div className="grid grid-cols-4 gap-2 overflow-hidden bg-white px-2 py-2 shadow-sm sm:gap-3 sm:px-4">
        {QUICK_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex min-w-0 flex-col items-center gap-1.5 rounded-md px-1 py-2 text-center no-underline transition-colors active:bg-black/[0.03] sm:flex-row sm:justify-center sm:gap-2"
          >
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.accent}`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {item.icon}
              </svg>
            </span>
            <span className="line-clamp-2 min-h-[2rem] text-[11px] font-medium leading-4 text-neutral-700 sm:min-h-0 sm:text-sm">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
