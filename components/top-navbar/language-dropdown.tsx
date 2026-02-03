"use client";

const LANGUAGES = [
  { id: "en", label: "English" },
  { id: "zh", label: "简体中文" },
  { id: "ms", label: "Bahasa Malaysia" },
] as const;

interface LanguageDropdownProps {
  currentLanguage: string;
  onSelect?: (language: string) => void;
}

export function LanguageDropdown({ currentLanguage, onSelect }: LanguageDropdownProps) {
  return (
    <div
      className="relative z-[500] overflow-visible"
      role="menu"
      aria-label="Language options"
    >
      {/* Arrow pointing up at the language trigger (top center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[10px] border-b-black/[0.09]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[10px] border-b-white" />

      <div
        className="bg-white border border-black/[0.09] rounded-sm cursor-default flex flex-col max-w-[260px] min-w-[160px] overflow-hidden py-2.5 px-4 pb-3.5"
        style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 9px 0px" }}
      >
        {LANGUAGES.map((lang) => {
          const isSelected = currentLanguage === lang.label;
          return (
            <button
              key={lang.id}
              type="button"
              role="menuitem"
              className="text-left appearance-none cursor-pointer text-sm leading-5 max-w-[223px] py-1.5 px-0 m-0 border-0 bg-transparent overflow-visible -m-1 rounded-sm p-1"
              style={{
                color: isSelected ? "#ee4d2d" : "rgba(0, 0, 0, 0.87)",
              }}
              onClick={() => onSelect?.(lang.label)}
            >
              <span className="rounded-sm">{lang.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
