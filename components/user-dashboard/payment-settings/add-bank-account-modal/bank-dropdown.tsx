"use client";

import { useState, useEffect, useRef } from "react";
import { BANK_NAMES } from "./bank-list";

interface BankDropdownProps {
  value: string;
  onChange: (bankName: string) => void;
  hasError: boolean;
  placeholder?: string;
}

export function BankDropdown({
  value,
  onChange,
  hasError,
  placeholder = "Bank name",
}: BankDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const borderClass = hasError
    ? "border-rose-500 bg-rose-500/5"
    : "border-black/9 bg-[linear-gradient(#fff,#f7f7f7)]";

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`cursor-pointer flex items-center h-10 transition-colors duration-100 w-full rounded-sm border border-solid ${borderClass} px-2.5 py-2.5 text-left`}
      >
        <span
          className={`block w-full h-full text-sm capitalize cursor-pointer ${
            value ? "text-neutral-800" : "text-zinc-400"
          }`}
        >
          {value || placeholder}
        </span>
      </button>

      {open && (
        <div
          className="z-[10000] bg-white w-full max-h-64 absolute overflow-y-auto shadow-sm py-1.5 rounded-sm border border-solid left-0 top-[calc(100%+1px)] border-black/9"
          role="listbox"
          aria-label="Bank name"
        >
          {BANK_NAMES.map((name) => {
            const isSelected = value === name;
            return (
              <div
                key={name}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(name);
                  setOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onChange(name);
                    setOpen(false);
                  }
                }}
                tabIndex={0}
                className={`w-full p-1.5 cursor-default transition-colors first-letter:capitalize ${
                  isSelected
                    ? "text-white bg-red-500"
                    : "text-neutral-800 hover:text-white hover:bg-red-500"
                }`}
              >
                {name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
