"use client";

function ChatTextIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 22"
      className={className}
      aria-hidden
    >
      <path d="M9.286 6.001c1.161 0 2.276.365 3.164 1.033.092.064.137.107.252.194.09.085.158.064.203 0 .046-.043.182-.194.251-.26.182-.17.433-.43.752-.752a.445.445 0 00.159-.323c0-.172-.092-.3-.227-.365A7.517 7.517 0 009.286 4C5.278 4 2 7.077 2 10.885s3.256 6.885 7.286 6.885a7.49 7.49 0 004.508-1.484l.022-.043a.411.411 0 00.046-.71v-.022a25.083 25.083 0 00-.957-.946.156.156 0 00-.227 0c-.933.796-2.117 1.205-3.392 1.205-2.846 0-5.169-2.196-5.169-4.885C4.117 8.195 6.417 6 9.286 6zm32.27 9.998h-.736c-.69 0-1.247-.54-1.247-1.209v-3.715h1.96a.44.44 0 00.445-.433V9.347h-2.45V7.035c-.021-.043-.066-.065-.111-.043l-1.603.583a.423.423 0 00-.29.41v1.362h-1.781v1.295c0 .238.2.433.445.433h1.337v4.19c0 1.382 1.158 2.505 2.583 2.505H42v-1.339a.44.44 0 00-.445-.432zm-21.901-6.62c-.739 0-1.41.172-2.013.496V4.43a.44.44 0 00-.446-.43h-1.788v13.77h2.234v-4.303c0-1.076.895-1.936 2.013-1.936 1.117 0 2.01.86 2.01 1.936v4.239h2.234v-4.561l-.021-.043c-.202-2.088-2.012-3.723-4.223-3.723zm10.054 6.785c-1.475 0-2.681-1.12-2.681-2.525 0-1.383 1.206-2.524 2.681-2.524 1.476 0 2.682 1.12 2.682 2.524 0 1.405-1.206 2.525-2.682 2.525zm2.884-6.224v.603a4.786 4.786 0 00-2.985-1.035c-2.533 0-4.591 1.897-4.591 4.246 0 2.35 2.058 4.246 4.59 4.246 1.131 0 2.194-.388 2.986-1.035v.604c0 .237.203.431.453.431h1.356V9.508h-1.356c-.25 0-.453.173-.453.432z" />
    </svg>
  );
}

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
    <div className="flex h-10 w-full items-center justify-between rounded-t shadow-sm">
      <div className="flex items-center justify-start px-3">
        <i className="inline-block h-6 w-11 shrink-0 fill-current leading-[0] text-red-500">
          <ChatTextIcon className="inline align-baseline overflow-x-hidden overflow-y-hidden" />
        </i>
      </div>
      <div className="mr-3 flex items-center justify-end">
        <button
          type="button"
          className="relative ml-4 inline-block h-4 w-4 shrink-0 cursor-pointer leading-[0] text-zinc-800 hover:text-zinc-600"
          onClick={onShowListOnly}
          title="Show chat list only"
          aria-label="Show chat list only"
        >
          <i className="inline-block h-4 w-4 fill-current leading-[0]">
            <ShowListOnlyIcon className="inline align-baseline overflow-x-hidden overflow-y-hidden" />
          </i>
        </button>
        <button
          type="button"
          className="relative ml-4 inline-block h-4 w-4 shrink-0 cursor-pointer leading-[0] text-zinc-800 hover:text-zinc-600"
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
