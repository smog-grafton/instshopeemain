export function FilterFunnelIcon() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      className="block h-3 w-3 shrink-0 fill-black/80 stroke-black/80"
      aria-hidden
    >
      <g>
        <polyline
          fill="none"
          points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          stroke="currentColor"
        />
      </g>
    </svg>
  );
}

/** Chevron down for "More" / "Less" button */
export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      className={className ?? "ml-2.5 block h-[7px] w-4 fill-black/80"}
      aria-hidden
    >
      <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
    </svg>
  );
}
