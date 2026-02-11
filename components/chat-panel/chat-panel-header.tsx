"use client";

function ShowListOnlyIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={className} aria-hidden>
      <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm5.854 1.319l2.828 2.828a.5.5 0 010 .708l-2.828 2.828a.5.5 0 11-.708-.707L9.121 9H4.5a.5.5 0 010-1h4.621L7.146 6.025a.5.5 0 11.708-.707zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z" />
    </svg>
  );
}

function MinimizeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zm0 1H2v12h12V2zm-2.904 5.268l-2.828 2.828a.5.5 0 01-.707 0L4.732 7.268a.5.5 0 11.707-.707l2.475 2.475L10.39 6.56a.5.5 0 11.707.707z" />
    </svg>
  );
}

interface ChatPanelHeaderProps {
  onShowListOnly?: () => void;
  onMinimize?: () => void;
}

export function ChatPanelHeader({ onShowListOnly, onMinimize }: ChatPanelHeaderProps) {
  return (
    <div className="flex h-10 w-full items-center justify-between rounded-t border-b border-neutral-200 bg-white px-3">
      <div className="flex items-center gap-2 text-red-500">
        <span className="text-base font-semibold">Chat</span>
      </div>
      <div className="flex items-center gap-3 text-zinc-600">
        <button
          type="button"
          className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-neutral-100"
          onClick={onShowListOnly}
          title="Collapse chat thread"
          aria-label="Collapse chat thread"
        >
          <i className="inline-block h-4 w-4 fill-current leading-[0]">
            <ShowListOnlyIcon className="inline align-baseline overflow-x-hidden overflow-y-hidden" />
          </i>
        </button>
        <button
          type="button"
          className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-neutral-100"
          onClick={onMinimize}
          title="Minimize"
          aria-label="Minimize"
        >
          <i className="inline-block h-4 w-4 fill-current leading-[0]">
            <MinimizeIcon className="inline align-baseline overflow-x-hidden overflow-y-hidden" />
          </i>
        </button>
      </div>
    </div>
  );
}
