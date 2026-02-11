"use client";

import { useState } from "react";

const fieldsetStyles =
  "border-0 border-b border-black/[0.09] mt-5 pt-0 pb-5 first:mt-0";
const legendStyles = "mb-0 font-medium border-0 p-0";
const rowStyles = "flex justify-between items-center my-5";
const inputStyles =
  "box-border bg-white border border-black/20 rounded-sm outline-none w-[4.375rem] h-[30px] pl-1.5 text-[13px] shadow-[inset_0_1px_0_0_rgba(0,0,0,0.05)] text-black/80";
const dividerStyles = "flex-1 h-px bg-[#bdbdbd] mx-2.5";
const applyButtonStyles =
  "bg-[rgb(238,77,45)] uppercase w-full h-[30px] mt-5 font-normal outline-none relative overflow-visible cursor-pointer text-white select-none border-0 rounded-sm justify-center items-center text-sm leading-[14px] flex shadow-[0_1px_1px_rgba(0,0,0,0.09)] hover:opacity-90";

interface PriceRangeFieldProps {
  onApply: (min: string, max: string) => void;
  initialMin?: string;
  initialMax?: string;
}

export function PriceRangeField({ onApply, initialMin = "", initialMax = "" }: PriceRangeFieldProps) {
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);

  return (
    <fieldset className={fieldsetStyles}>
      <legend className={legendStyles}>Price Range</legend>
      <div className={rowStyles}>
        <input
          type="text"
          inputMode="numeric"
          aria-label="Min price"
          maxLength={13}
          placeholder="RM MIN"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className={inputStyles}
        />
        <div className={dividerStyles} />
        <input
          type="text"
          inputMode="numeric"
          aria-label="Max price"
          maxLength={13}
          placeholder="RM MAX"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className={inputStyles}
        />
      </div>
      <button
        type="button"
        aria-label="Apply price range"
        className={applyButtonStyles}
        onClick={() => onApply(min, max)}
      >
        Apply
      </button>
    </fieldset>
  );
}
