"use client";

import { forwardRef, useState } from "react";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, error, icon, className = "", onFocus, onBlur, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && String(props.value).length > 0;
  const isFloating = isFocused || hasValue;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className="flex-1 mb-6">
      <div
        className={`h-11 text-sm duration-200 relative px-3 rounded border border-solid ${
          error ? "border-rose-500" : "border-black/9"
        }`}
      >
        <div className="items-center w-full h-full [font-family:Roboto] flex">
          <div className="flex-1 h-full [font-family:Roboto]">
            <input
              ref={ref}
              {...props}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`outline-0 w-full h-full [font-family:Roboto] text-sm shadow-[inset_0_0_0_1000px_#fff] border-0 text-black/87 placeholder:text-transparent placeholder:[font-family:Roboto] disabled:cursor-not-allowed disabled:text-black/26 ${className}`}
            />
          </div>
          {icon && (
            <div className="cursor-pointer justify-center items-center flex ml-2">
              {icon}
            </div>
          )}
        </div>
        <label
          className={`pointer-events-none text-ellipsis whitespace-nowrap bg-white [font-family:Roboto] leading-5 duration-300 absolute overflow-x-hidden overflow-y-hidden text-black/54 transition-all ${
            isFloating
              ? "text-xs -top-2 left-2 px-1"
              : "-translate-y-2/4 top-2/4 left-0 max-w-4xl"
          }`}
        >
          {label}
        </label>
      </div>
      {error && (
        <div className="text-rose-500 text-xs mt-1 px-1">{error}</div>
      )}
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";
