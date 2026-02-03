"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";
import { INITIAL_VISIBLE_COUNT } from "./data";

type OptionItem = string | { value: string; label: string };

function getOptionValue(opt: OptionItem): string {
  return typeof opt === "string" ? opt : opt.value;
}

function getOptionLabel(opt: OptionItem): string {
  return typeof opt === "string" ? opt : opt.label;
}

const fieldsetStyles =
  "border-0 border-b border-black/[0.09] mt-5 pt-0 pb-5 first:mt-0";
const legendStyles = "mb-2.5 font-medium border-0 p-0";
const optionWrapperStyles =
  "flex flex-wrap justify-start items-start py-1 flex gap-0";
const labelStyles =
  "overflow-hidden cursor-pointer select-none text-black/80 items-start py-1 text-sm flex";
const checkboxWrapperStyles = "mt-px mr-2.5 relative";
const checkboxStyles =
  "cursor-pointer select-none appearance-none box-border text-center bg-white border border-black/20 rounded-sm flex-shrink-0 justify-center items-center w-[0.8125rem] h-[13px] m-0 leading-[11px] flex shadow-[inset_0_1px_0_0_rgba(0,0,0,0.05)] p-0 text-black/80 text-[11px] checked:bg-[rgb(238,77,45)] checked:border-[rgb(238,77,45)]";
const spanStyles =
  "line-clamp-3 break-words max-h-12 leading-4 overflow-hidden text-ellipsis";
const moreButtonStyles =
  "bg-transparent cursor-pointer border-0 items-center py-2 pl-5 pr-2.5 font-medium flex appearance-button text-transform-none overflow-visible text-black/80 m-0 hover:underline";

interface FilterGroupWithMoreProps {
  legend: string;
  options: readonly OptionItem[] | OptionItem[];
  selected: Set<string>;
  onToggle: (value: string) => void;
  /** Optional: show "More" only when options length > this (default INITIAL_VISIBLE_COUNT) */
  initialVisible?: number;
}

export function FilterGroupWithMore({
  legend,
  options,
  selected,
  onToggle,
  initialVisible = INITIAL_VISIBLE_COUNT,
}: FilterGroupWithMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const list = Array.from(options);
  const hasMore = list.length > initialVisible;
  const visibleOptions = expanded ? list : list.slice(0, initialVisible);

  return (
    <fieldset className={fieldsetStyles}>
      <legend className={legendStyles}>{legend}</legend>
      {visibleOptions.map((opt) => {
        const value = getOptionValue(opt);
        const label = getOptionLabel(opt);
        return (
          <div key={value} className={optionWrapperStyles}>
            <label className={labelStyles}>
              <div className={checkboxWrapperStyles}>
                <input
                  type="checkbox"
                  name={legend}
                  value={value}
                  checked={selected.has(value)}
                  onChange={() => onToggle(value)}
                  className={checkboxStyles}
                />
              </div>
              <span className={spanStyles}>{label}</span>
            </label>
          </div>
        );
      })}
      {hasMore && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={`See ${expanded ? "less" : "more"}, in ${legend}`}
          className={moreButtonStyles}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Less" : "More"}
          <span
            className={`inline-block ml-2.5 ${expanded ? "rotate-180" : ""}`}
          >
            <ChevronDownIcon />
          </span>
        </button>
      )}
    </fieldset>
  );
}
