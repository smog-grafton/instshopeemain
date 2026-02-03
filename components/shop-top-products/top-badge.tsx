/**
 * TOP 1–6 badge for shop top products cards.
 * Ranks 1–3: colored shield with "TOP" + number (white text).
 * Ranks 4–6: muted shield with number only (dark grey text).
 * Shape via clip-path to match Shopee-style shield.
 */

const BADGE_COLORS: Record<
  number,
  { bg: string; showLabel: boolean; textClass: string }
> = {
  1: { bg: "#ee4d2d", showLabel: true, textClass: "text-white" },
  2: { bg: "#c4a35a", showLabel: true, textClass: "text-white" },
  3: { bg: "#e07a6b", showLabel: true, textClass: "text-white" },
  4: { bg: "#7ec8c8", showLabel: false, textClass: "text-black/54" },
  5: { bg: "#e8a0a0", showLabel: false, textClass: "text-black/54" },
  6: { bg: "#b0b0b0", showLabel: false, textClass: "text-black/54" },
};

interface TopBadgeProps {
  rank: number;
}

export function TopBadge({ rank }: TopBadgeProps) {
  const config = BADGE_COLORS[rank] ?? BADGE_COLORS[6];
  const style = {
    backgroundColor: config.bg,
    clipPath: "polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)",
  };

  return (
    <div
      aria-hidden
      className="absolute left-0 top-0 z-[30] flex w-6 h-8 flex-col items-center justify-center"
      style={style}
    >
      {config.showLabel && (
        <span
          className={`font-bold text-[8px] leading-[8px] ${config.textClass}`}
        >
          TOP
        </span>
      )}
      <span
        className={`font-bold text-sm leading-4 ${config.textClass}`}
      >
        {rank}
      </span>
    </div>
  );
}
