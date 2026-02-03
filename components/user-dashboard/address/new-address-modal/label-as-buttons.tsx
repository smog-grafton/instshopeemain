"use client";

import type { AddressLabel } from "./types";

interface LabelAsButtonsProps {
  value: AddressLabel;
  onChange: (label: AddressLabel) => void;
}

const LABELS: { value: AddressLabel; label: string }[] = [
  { value: "home", label: "Home" },
  { value: "work", label: "Work" },
];

export function LabelAsButtons({ value, onChange }: LabelAsButtonsProps) {
  return (
    <div className="flex-col flex mt-2.5 mb-5">
      <div className="text-neutral-600 shrink-0 mr-2.5 mb-2">Label As:</div>
      <div
        className="items-center flex"
        role="radiogroup"
        aria-label="Label As:"
      >
        {LABELS.map((item) => {
          const isSelected = value === item.value;
          return (
            <div
              key={item.value}
              role="radio"
              aria-checked={isSelected}
              aria-disabled={false}
              tabIndex={0}
              onClick={() => onChange(item.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onChange(item.value);
                }
              }}
              className={`items-center max-w-36 h-10 flex shadow-sm mr-2.5 px-3 rounded-[0] border border-solid border-black/9 cursor-pointer ${
                isSelected
                  ? "bg-red-500 border-red-500 text-white"
                  : "bg-white hover:bg-neutral-50"
              }`}
            >
              <span className="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
