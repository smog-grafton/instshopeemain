"use client";

/**
 * Reusable voucher badge: horizontal rectangle with perforated (scalloped)
 * left and right edges, like a paper coupon. Uses pseudo-elements with
 * radial-gradient circles to create the notch effect.
 */

export interface VoucherBadgeProps {
  /** Badge text, e.g. "RM1 OFF" */
  label: string;
  /** Tailwind background class, e.g. "bg-red-700/8" */
  bgColor?: string;
  /** Tailwind text color class, e.g. "text-red-500" */
  textColor?: string;
  /** Optional shadow; default subtle */
  shadow?: boolean;
  /** Optional rounded corners; default rounded-sm for modern UI */
  rounded?: boolean;
  /** Optional extra class for the root */
  className?: string;
}

const PERFORATION_STYLE = {
  backgroundImage: "radial-gradient(circle, white 2px, transparent 0)",
  backgroundSize: "6px 6px",
  backgroundPositionX: -6,
} as const;

export function VoucherBadge({
  label,
  bgColor = "bg-red-700/8",
  textColor = "text-red-500",
  shadow = true,
  rounded = true,
  className = "",
}: VoucherBadgeProps) {
  return (
    <div
      className={[
        "cursor-default z-[1] whitespace-nowrap justify-center items-center max-w-full flex px-2 py-[3px] relative shrink-0",
        bgColor,
        textColor,
        shadow && "shadow-sm",
        rounded && "rounded-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        // Perforation: left-edge strip (before) and right-edge strip (after) are
        // implemented via inline wrapper divs so we can set background gradient.
        // Tailwind arbitrary pseudo-elements for this are verbose; we use
        // two small divs overlaying the left/right edges instead.
      }}
    >
      {/* Left edge perforation: repeating circles punch through to show white */}
      <div
        className="absolute w-1.5 h-[calc(100%-6px)] top-[2.5px] pointer-events-none z-10"
        style={{
          left: -3,
          ...PERFORATION_STYLE,
        }}
        aria-hidden
      />
      {/* Right edge perforation */}
      <div
        className="absolute w-1.5 h-[calc(100%-6px)] top-[2.5px] pointer-events-none z-10"
        style={{
          right: -3,
          ...PERFORATION_STYLE,
        }}
        aria-hidden
      />
      <span>{label}</span>
    </div>
  );
}
