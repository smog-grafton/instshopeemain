"use client";

import { useState } from "react";

interface DefaultAddressCheckboxProps {
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean) => void;
}

const TOOLTIP_TEXT =
  "Your first address will be set as the Default Address. Please add a second address to change this setting.";

export function DefaultAddressCheckbox({
  checked,
  disabled,
  onChange,
}: DefaultAddressCheckboxProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex-wrap flex -ml-3">
      <div>
        <div
          className="outline-0 relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm"
          tabIndex={0}
          onMouseEnter={() => disabled && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => disabled && setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
        >
          {showTooltip && disabled && (
            <div className="absolute bottom-full left-0 mb-1 px-3 py-2 bg-white border border-black/9 shadow-sm text-xs text-black/87 z-10 max-w-xs">
              {TOOLTIP_TEXT}
              <div
                className="absolute top-full left-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white -translate-y-px"
                aria-hidden
              />
            </div>
          )}
          <label
            className={`select-none items-center max-w-sm flex relative ml-3 mb-3 cursor-pointer ${
              disabled ? "text-black/54 cursor-not-allowed opacity-60" : ""
            }`}
          >
            <input
              type="checkbox"
              role="checkbox"
              aria-checked={checked}
              aria-disabled={disabled}
              checked={checked}
              disabled={disabled}
              onChange={(e) => onChange(e.target.checked)}
              className="leading-4 opacity-0 absolute left-0 top-0 w-4 h-4"
            />
            <span
              className={`box-content text-center select-none shrink-0 w-4 h-4 relative mr-2 rounded-[0] border border-solid inline-flex items-center justify-center ${
                checked ? "bg-red-500 border-red-500" : "bg-white border-black/26"
              }`}
            >
              {checked && (
                <svg
                  viewBox="0 0 10 8"
                  className="w-2.5 h-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 4l3 3 5-6" />
                </svg>
              )}
            </span>
            Set as Default Address
          </label>
        </div>
      </div>
    </div>
  );
}
