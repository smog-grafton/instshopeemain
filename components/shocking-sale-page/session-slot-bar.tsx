import Link from "next/link";
import type { SessionSlot } from "./session-slot-bar-data";

interface SessionSlotBarProps {
  slots: SessionSlot[];
}

function SlotNavPrev() {
  return (
    <div
      className="cursor-pointer justify-center items-center text-xl duration-100 ease-in-out top-2/4 left-0 text-stone-300 z-[1] bg-neutral-700 outline-0 h-16 leading-[4rem] relative hidden invisible"
      role="button"
      tabIndex={0}
      aria-label="Previous sessions"
    >
      <svg
        viewBox="0 0 13 20"
        width={13}
        className="align-baseline w-5 h-5 inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-black/54 stroke-current text-current"
        aria-hidden
      >
        <path
          d="M11 2l-9.2832 9L11 20"
          strokeWidth={3}
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-none"
        />
      </svg>
    </div>
  );
}

function SlotNavNext() {
  return (
    <div
      className="cursor-pointer justify-center items-center text-xl duration-100 ease-in-out top-2/4 right-0 text-stone-300 z-[1] bg-neutral-700 outline-0 h-16 leading-[4rem] relative hidden order-2 invisible"
      role="button"
      tabIndex={0}
      aria-label="Next sessions"
    >
      <svg
        viewBox="0 0 13 20"
        width={13}
        className="align-baseline w-5 h-5 inline-block relative overflow-x-hidden overflow-y-hidden transition-all duration-100 ease-in-out fill-black/54 stroke-current text-current"
        aria-hidden
      >
        <path
          d="M2 2l9.2832 9L2 20"
          strokeWidth={3}
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-none"
        />
      </svg>
    </div>
  );
}

/**
 * Time slot / session bar for the shocking sale page.
 * Renders a row of session slots (e.g. 19:00 Ongoing, 04:00 Tomorrow).
 * Active slot is highlighted (red); others use neutral-700 and text-stone-300.
 * Links are functional for when the full page is implemented.
 */
export function SessionSlotBar({ slots }: SessionSlotBarProps) {
  return (
    <div id="session-slot-bar" className="text-sm leading-tight text-black/80">
      <div className="w-[1200px] max-w-[100%] mx-auto bg-neutral-700 overflow-x-hidden overflow-y-hidden mb-3">
        <div className="w-full h-full relative flex">
          <div className="touch-pan-y h-full cursor-pointer grow order-1">
            <ul className="flex relative h-full w-full list-none p-0 m-0">
              {slots.map((slot) => (
                <li
                  key={slot.href}
                  className="float-left touch-pan-y h-full w-1/5"
                >
                  <div className="h-full">
                    <Link
                      href={slot.href}
                      className={`text-center flex-col justify-center h-16 no-underline flex relative active:outline-0 hover:outline-0 focus:outline-0 ${
                        slot.isActive
                          ? "text-white bg-red-500"
                          : "text-stone-300 bg-neutral-700"
                      }`}
                    >
                      <div className="text-2xl">{slot.time}</div>
                      <div className="capitalize">{slot.label}</div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <SlotNavPrev />
          <SlotNavNext />
        </div>
      </div>
    </div>
  );
}
