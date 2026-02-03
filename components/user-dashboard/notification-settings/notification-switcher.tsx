"use client";

interface NotificationSwitcherProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  "aria-label"?: string;
}

/**
 * Toggle switch: track (input) + knob (span). Green when on, grey when off.
 * Matches extracted HTML: w-12 h-7 track, w-6 h-6 knob, rounded-2xl / rounded-xl.
 */
export function NotificationSwitcher({
  checked,
  onChange,
  "aria-label": ariaLabel,
}: NotificationSwitcherProps) {
  return (
    <div className="relative inline-block flex-none ml-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        aria-label={ariaLabel}
        className="[-webkit-tap-highlight-color:transparent] appearance-none outline-0 w-12 h-7 transition-all duration-200 ease-in-out block rounded-2xl bg-black/10 checked:bg-green-500 checked:border-transparent disabled:opacity-50 peer cursor-pointer"
      />
      <span
        aria-hidden
        className="pointer-events-none bg-white w-6 h-6 transition-transform duration-200 block absolute shadow-sm rounded-xl left-0.5 top-0.5 peer-checked:translate-x-5"
      />
    </div>
  );
}
