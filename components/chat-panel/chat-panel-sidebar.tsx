"use client";

import { useState, useMemo } from "react";
import type { ChatFilter, ChatConversation } from "./data";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path d="M14.456 14.456c-.301.3-.789.3-1.09 0L10.012 11.1a4.74 4.74 0 01-2.956 1.011c-1.412 0-2.608-.49-3.587-1.468C2.49 9.664 2 8.47 2 7.056c0-1.413.49-2.61 1.468-3.588C4.447 2.489 5.643 2 7.056 2c1.413 0 2.608.49 3.587 1.468.979.979 1.468 2.175 1.468 3.588A4.74 4.74 0 0111.1 10.01l3.356 3.356c.3.3.3.788 0 1.089zm-7.4-3.9c.972 0 1.798-.34 2.48-1.02.68-.682 1.02-1.508 1.02-2.48 0-.973-.34-1.8-1.02-2.48-.682-.68-1.508-1.02-2.48-1.02-.973 0-1.8.34-2.48 1.02-.68.68-1.02 1.507-1.02 2.48 0 .972.34 1.798 1.02 2.48.68.68 1.507 1.02 2.48 1.02z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 9.19L4.28 5.22a.75.75 0 00-1.06 1.06l4.5 4.5a.75.75 0 001.06 0l4.5-4.5a.75.75 0 00-1.06-1.06L8.25 9.19z"
      />
    </svg>
  );
}

interface ChatPanelSidebarProps {
  conversations: ChatConversation[];
  filter: ChatFilter;
  onFilterChange: (filter: ChatFilter) => void;
  selectedId: string | null;
  onSelectConversation: (id: string) => void;
}

export function ChatPanelSidebar({
  conversations,
  filter,
  onFilterChange,
  selectedId,
  onSelectConversation,
}: ChatPanelSidebarProps) {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = conversations;
    if (filter === "unread") list = list.filter((c) => c.unread);
    if (filter === "pinned") list = list.filter((c) => c.pinned);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    return list;
  }, [conversations, filter, search]);

  return (
    <div className="flex w-56 flex-col overflow-x-hidden overflow-y-hidden">
      <div className="flex w-full items-center px-4 pb-2 pt-3">
        <div className="relative z-10 h-full w-full text-sm">
          <div className="relative inline-table h-8 w-full border-spacing-0 rounded border border-solid border-neutral-200 bg-white px-3 align-middle outline-none transition-all duration-200 ease-in-out hover:border-zinc-400 [border-collapse:initial]">
            <div className="relative table-cell w-px shrink-0 align-middle pr-2 text-neutral-400 leading-[0] whitespace-nowrap">
              <span>
                <i className="-mr-1 inline-block h-4 w-4 shrink-0 fill-current leading-[0] text-neutral-400">
                  <SearchIcon className="inline align-baseline overflow-x-hidden overflow-y-hidden" />
                </i>
              </span>
            </div>
            <input
              type="text"
              className="h-8 w-full table-cell border-0 bg-inherit align-middle text-zinc-800 outline-none placeholder:text-zinc-400"
              placeholder="Search name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="relative ml-2 shrink-0">
          <button
            type="button"
            className="flex select-none cursor-pointer items-center justify-center break-keep text-sm text-zinc-800 transition-colors duration-300"
            onClick={() => setDropdownOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
            <i className="ml-1 inline-block h-4 w-4 shrink-0 fill-current leading-[0] text-neutral-400 duration-300">
              <ChevronDownIcon className="inline align-baseline overflow-x-hidden overflow-y-hidden" />
            </i>
          </button>
          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                aria-hidden
                onClick={() => setDropdownOpen(false)}
              />
              <ul
                className="absolute right-0 top-full z-20 mt-1 min-w-[120px] rounded border border-neutral-200 bg-white py-1 shadow-lg"
                role="listbox"
              >
                {(["all", "unread", "pinned"] as const).map((f) => (
                  <li key={f} role="option" aria-selected={filter === f}>
                    <button
                      type="button"
                      className={`w-full px-3 py-2 text-left text-sm capitalize hover:bg-neutral-100 ${
                        filter === f ? "bg-neutral-50 font-medium" : ""
                      }`}
                      onClick={() => {
                        onFilterChange(f);
                        setDropdownOpen(false);
                      }}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-hidden">
        <div className="relative h-0 flex-1 overflow-x-hidden overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center pb-10">
              <div className="px-10 text-center text-xs capitalize leading-tight tracking-[0] text-stone-500 [word-break:break-word]">
                No conversation found
              </div>
            </div>
          ) : (
            <ul className="py-1">
              {filtered.map((conv) => (
                <li key={conv.id}>
                  <button
                    type="button"
                    className={`w-full px-3 py-3 text-left text-sm transition-colors ${
                      selectedId === conv.id
                        ? "bg-red-50 text-red-600"
                        : "hover:bg-neutral-50 text-zinc-800"
                    }`}
                    onClick={() => onSelectConversation(conv.id)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
                        <img
                          src={conv.avatarUrl || "/images/profile/shop/default.webp"}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate font-medium">{conv.name}</span>
                          <span className="text-[11px] text-neutral-400">{conv.lastMessageAt}</span>
                        </div>
                        <div className="truncate text-xs text-neutral-500">{conv.lastMessage}</div>
                      </div>
                      {conv.unread && selectedId !== conv.id && (
                        <span className="shrink-0 rounded-full bg-red-500 px-2 py-0.5 text-[10px] text-white">
                          New
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
