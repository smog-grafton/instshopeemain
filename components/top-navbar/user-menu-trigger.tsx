"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { UserData } from "./data";
import { UserDropdown } from "./user-dropdown";

interface UserMenuTriggerProps {
  user: UserData;
}

export function UserMenuTrigger({ user }: UserMenuTriggerProps) {
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

  const handleTriggerEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleTriggerLeave = () => scheduleClose();

  const handleDropdownEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleDropdownLeave = () => scheduleClose();

  return (
    <div className="relative">
      <div
        onMouseEnter={handleTriggerEnter}
        onMouseLeave={handleTriggerLeave}
        className="relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm"
        tabIndex={0}
        id="stardust-popover2"
      >
        <div role="button">
          <div className="items-center flex py-1.5">
            <div className="inline-block relative rounded-[50%] border border-solid border-black/9 w-6 h-6">
              <div className="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]">
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x="0"
                  y="0"
                  className="align-baseline fill-current w-4 h-4 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 font-normal absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-base leading-4"
                >
                  <g>
                    <circle
                      cx="7.5"
                      cy="4.5"
                      r="3.8"
                      strokeMiterlimit="10"
                      className="fill-none"
                    />
                    <path
                      d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      className="fill-none"
                    />
                  </g>
                </svg>
              </div>
              <Image
                src={user.avatarUrl}
                alt={user.username}
                width={24}
                height={24}
                className="align-baseline w-full h-full absolute rounded-[50%] left-0 top-0 focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]"
              />
            </div>
            <div className="text-ellipsis max-w-36 overflow-x-hidden overflow-y-hidden pl-1.5">
              {user.username}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-0"
        >
          <UserDropdown />
        </div>
      )}
    </div>
  );
}
