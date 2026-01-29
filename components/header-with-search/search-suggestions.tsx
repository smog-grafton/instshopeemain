import type { SearchSuggestion } from "./data";

interface SearchSuggestionsProps {
  suggestions: SearchSuggestion[];
}

export function SearchSuggestions({ suggestions }: SearchSuggestionsProps) {
  return (
    <div className="flex-1 w-full flex">
      <div className="flex-wrap w-full h-6 text-xs font-light leading-6 flex relative overflow-y-clip mt-[0.1875rem]">
        {suggestions.map((suggestion, index) => (
          <a
            key={index}
            aria-hidden={suggestion.ariaHidden ? "true" : "false"}
            tabIndex={suggestion.ariaHidden ? -1 : undefined}
            className="outline-0 no-underline relative whitespace-nowrap h-3.5 leading-4 block my-1.5 text-white/90 first:ml-0 ml-3.5 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+theme(width[0.5]))] focus-visible:before:h-[calc(100%+theme(height[0.5]))] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"
            href={suggestion.href}
          >
            {suggestion.keyword}
          </a>
        ))}
      </div>
    </div>
  );
}
