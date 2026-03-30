"use client";

import type { ShopProfileData } from "./data";

const iconClass = "block h-[15px] w-[1em] shrink-0 fill-black/80 stroke-black relative overflow-hidden";

/** Products (bag) icon */
function ProductsIcon() {
  return (
    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className={iconClass} strokeWidth={0} aria-hidden>
      <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z" />
    </svg>
  );
}

/** Followers (people) icon */
function FollowersIcon() {
  return (
    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className={iconClass} aria-hidden>
      <g>
        <circle cx="5.5" cy="5" fill="none" r="4" strokeMiterlimit={10} />
        <path d="m8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6" fill="none" strokeLinejoin="round" strokeMiterlimit={10} />
        <path d="m12.6 6.9c.7 0 .9.6.9 1.2v5.7h-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
        <path d="m9.5 1.2c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.9 2.7-2.1 3.2" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
      </g>
    </svg>
  );
}

/** Following (person +) icon */
function FollowingIcon() {
  return (
    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className={iconClass} aria-hidden>
      <g>
        <circle cx="7" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
        <line x1="12" x2="12" y1="11.2" y2="14.2" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
        <line x1="10.5" x2="13.5" y1="12.8" y2="12.8" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
        <path d="m1.5 13.8c0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 3.9 1.6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
      </g>
    </svg>
  );
}

/** Star rating icon */
function RatingIcon() {
  return (
    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className={iconClass} aria-hidden>
      <polygon
        fill="none"
        points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </svg>
  );
}

/** Chat performance icon */
function ChatPerformanceIcon() {
  return (
    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className={iconClass} aria-hidden>
      <g>
        <polygon fill="none" points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2" strokeLinejoin="round" strokeMiterlimit={10} />
        <circle cx="4" cy="5.8" r="1" stroke="none" />
        <circle cx="7.5" cy="5.8" r="1" stroke="none" />
        <circle cx="11" cy="5.8" r="1" stroke="none" />
      </g>
    </svg>
  );
}

/** Joined (person check) icon */
function JoinedIcon() {
  return (
    <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" className={iconClass} aria-hidden>
      <g>
        <circle cx="6.8" cy="4.2" fill="none" r="3.8" strokeMiterlimit={10} />
        <polyline fill="none" points="9.2 12.5 11.2 14.5 14.2 11" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} />
        <path d="m .8 14c0-3.3 2.7-6 6-6 2.1 0 3.9 1 5 2.6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
      </g>
    </svg>
  );
}

/** Info (i) icon for Chat Performance tooltip */
function InfoIcon() {
  return (
    <svg width="10" height="10" className="inline-block overflow-hidden stroke-black" aria-hidden>
      <g fill="currentColor" fillRule="nonzero" color="currentColor" strokeWidth={0}>
        <path d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zM5 .675a4.325 4.325 0 1 0 0 8.65 4.325 4.325 0 0 0 0-8.65z" />
        <path d="M6.235 5.073c.334-.335.519-.79.514-1.264a1.715 1.715 0 0 0-.14-.684 1.814 1.814 0 0 0-.933-.951A1.623 1.623 0 0 0 5 2.03a1.66 1.66 0 0 0-.676.14 1.772 1.772 0 0 0-.934.948c-.093.219-.14.454-.138.691a.381.381 0 0 0 .106.276c.07.073.168.113.27.11a.37.37 0 0 0 .348-.235c.02-.047.031-.099.03-.15a1.006 1.006 0 0 1 .607-.933.954.954 0 0 1 .772.002 1.032 1.032 0 0 1 .61.93c.003.267-.1.525-.288.716l-.567.537c-.343.35-.514.746-.514 1.187a.37.37 0 0 0 .379.382c.1.002.195-.037.265-.108a.375.375 0 0 0 .106-.274c0-.232.097-.446.29-.642l.568-.534zM5 6.927a.491.491 0 0 0-.363.152.53.53 0 0 0 0 .74.508.508 0 0 0 .726 0 .53.53 0 0 0 0-.74A.491.491 0 0 0 5 6.927z" />
      </g>
    </svg>
  );
}

const valueClass = "inline-block text-[rgb(208,1,27)]";
const rowClass = "flex w-full items-start overflow-hidden border-b border-black/[0.05] px-0 py-3 last:border-b-0 sm:w-1/2 sm:pr-4 lg:flex-[0_0_50%] lg:border-b-0 lg:py-2.5 lg:pr-0";
const cellClass = "relative top-px mx-2.5 flex items-center box-border text-[15px] lg:mx-2.5";
const labelClass = "block min-w-0 text-sm capitalize leading-5 text-black/80";

export function ShopStatsGrid({ data }: { data: ShopProfileData }) {
  const s = data.stats;

  return (
    <div className="flex w-full flex-wrap items-start bg-white px-1 sm:px-0 lg:flex-1 lg:pl-[30px]">
      <div className={`${rowClass} cursor-pointer select-none`}>
        <div className={cellClass}><ProductsIcon /></div>
        <div className={labelClass}>
          <span className="inline-block">products:&nbsp;</span>
          <span className={valueClass}>{s.products}</span>
        </div>
      </div>
      <div className={rowClass}>
        <div className={cellClass}><FollowersIcon /></div>
        <div className={labelClass}>
          <span className="inline-block">followers:&nbsp;</span>
          <span className={valueClass}>{s.followers}</span>
        </div>
      </div>
      <div className={rowClass}>
        <div className={cellClass}><FollowingIcon /></div>
        <div className={labelClass}>
          <span className="inline-block">following:&nbsp;</span>
          <span className={valueClass}>{s.following}</span>
        </div>
      </div>
      <div className={`${rowClass} cursor-pointer select-none`}>
        <div className={cellClass}><RatingIcon /></div>
        <div className={labelClass}>
          <span className="inline-block">rating:&nbsp;</span>
          <span className={valueClass}>{s.rating} ({s.ratingCount})</span>
        </div>
      </div>
      <div className={rowClass}>
        <div className={cellClass}><ChatPerformanceIcon /></div>
        <div className={labelClass}>
          <span className="inline-block">Chat Performance:&nbsp;</span>
          <span className={valueClass}>
            {s.chatPerformance} ({s.chatPerformanceNote})
            <span className="ml-0.5 inline-block cursor-pointer select-none align-top text-black/54" title="Within hours">
              <InfoIcon />
            </span>
          </span>
        </div>
      </div>
      <div className={rowClass}>
        <div className={cellClass}><JoinedIcon /></div>
        <div className={labelClass}>
          <span className="inline-block">joined:&nbsp;</span>
          <span className={valueClass}>{s.joined}</span>
        </div>
      </div>
    </div>
  );
}
