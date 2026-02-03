"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { NotificationDropdown } from "./notification-dropdown";

interface NotificationTriggerProps {
  notificationsUrl: string;
}

export function NotificationTrigger({ notificationsUrl }: NotificationTriggerProps) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const handleLinkEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleLinkLeave = () => scheduleClose();

  const handleDropdownEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleDropdownLeave = () => scheduleClose();

  return (
    <div className="relative">
      <div
        onMouseEnter={handleLinkEnter}
        onMouseLeave={handleLinkLeave}
        className="relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm"
        tabIndex={0}
        id="stardust-popover0"
      >
        <div role="button">
          <Link
            href={notificationsUrl}
            className="no-underline text-current items-center flex py-1.5 active:outline-0 hover:outline-0"
            tabIndex={-1}
          >
            <svg
              viewBox="3 2.5 14 14"
              x="0"
              y="0"
              className="align-baseline fill-current inline-block relative w-3.5 h-5 overflow-x-hidden overflow-y-hidden"
            >
              <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
              <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
            </svg>
            <span className="capitalize text-sm font-light ml-1.5">notifications</span>
          </Link>
        </div>
      </div>
      {open && (
        <div
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          className="absolute top-full right-0"
        >
          <NotificationDropdown viewAllHref={notificationsUrl} />
        </div>
      )}
    </div>
  );
}
