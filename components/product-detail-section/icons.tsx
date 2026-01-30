/** Inline SVGs matching the product detail section design (arrows, stars, truck, heart, etc.) */

export function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="10"
      height="10"
      className={className ?? "align-baseline inline w-2.5 h-2.5"}
      aria-hidden
      fill="currentColor"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M14.94 12L9.47 6.53l1.06-1.06 5.647 5.646a1.25 1.25 0 010 1.768L10.53 18.53l-1.06-1.06L14.94 12z" />
    </svg>
  );
}

export function IconArrowLeftBold() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="align-baseline inline" aria-hidden fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

export function IconArrowRightBold() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="align-baseline inline" aria-hidden fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  );
}

export function IconStarFilled({ className }: { className?: string }) {
  return (
    <span className={className} style={{ width: 14, height: 14 }}>
      <svg viewBox="0 0 14 14" width="14" height="14" className="block" fill="#ffc107">
        <path d="M7 0l2.2 4.5 4.9.7-3.5 3.4.8 4.9L7 11.2 3.6 14l.8-4.9L0 5.2l4.9-.7L7 0z" />
      </svg>
    </span>
  );
}

export function IconStarEmpty({ className }: { className?: string }) {
  return (
    <span className={className} style={{ width: 14, height: 14 }}>
      <svg viewBox="0 0 14 14" width="14" height="14" className="block" fill="#e0e0e0">
        <path d="M7 0l2.2 4.5 4.9.7-3.5 3.4.8 4.9L7 11.2 3.6 14l.8-4.9L0 5.2l4.9-.7L7 0z" />
      </svg>
    </span>
  );
}

export function IconHelp() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" className="align-baseline inline w-3.5 h-3.5 text-black/54" aria-hidden fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
  );
}

export function IconTruck() {
  return (
    <svg width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="align-baseline inline fill-none overflow-x-hidden overflow-y-hidden w-5 h-5 fill-teal-500">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.45831 4.16669C1.11314 4.16669 0.833313 4.44651 0.833313 4.79169V14.375C0.833313 14.7202 1.11314 15 1.45831 15H3.49158C3.57186 16.1052 4.49366 16.978 5.6207 16.978C6.74775 16.978 7.66955 16.1052 7.74983 15H12.0833L12.0867 15H13.219C13.2993 16.1054 14.2222 16.978 15.3481 16.978C16.4751 16.978 17.3969 16.1052 17.4772 15H18.9134C19.1184 15 19.3103 14.8995 19.4271 14.731C19.5438 14.5626 19.5706 14.3476 19.4986 14.1556L16.8172 7.00285C16.7257 6.75887 16.4925 6.59723 16.232 6.59723H12.7083V4.79169C12.7083 4.44651 12.4285 4.16669 12.0833 4.16669H1.45831ZM17.1822 13.75H18.0116L15.7988 7.84723H12.7083V13.75H13.5142C13.887 13.1262 14.5689 12.7084 15.3481 12.7084C16.128 12.7084 16.8097 13.1263 17.1822 13.75ZM5.6207 12.7084C4.84077 12.7084 4.15912 13.1263 3.78662 13.75H2.08331V5.41669H11.4583V13.75H7.45479C7.08229 13.1263 6.40064 12.7084 5.6207 12.7084ZM5.6207 13.9584C5.13174 13.9584 4.7359 14.3547 4.7359 14.8432C4.7359 15.3317 5.13174 15.728 5.6207 15.728C6.10967 15.728 6.50551 15.3317 6.50551 14.8432C6.50551 14.3547 6.10967 13.9584 5.6207 13.9584ZM14.4633 14.8432C14.4633 14.3549 14.8598 13.9584 15.3481 13.9584C15.837 13.9584 16.2329 14.3547 16.2329 14.8432C16.2329 15.3317 15.837 15.728 15.3481 15.728C14.8598 15.728 14.4633 15.3314 14.4633 14.8432Z"
      />
    </svg>
  );
}

export function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="24" className="align-baseline inline fill-none w-5 h-5 text-black/54 overflow-x-hidden overflow-y-hidden">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.94 12L9.47 6.53l1.06-1.06 5.647 5.646a1.25 1.25 0 010 1.768L10.53 18.53l-1.06-1.06L14.94 12z" fill="currentColor" />
    </svg>
  );
}

export function IconChevronDown() {
  return (
    <svg viewBox="0 0 12 12" width="12" className="align-baseline inline fill-none w-3 h-3 text-black/54 overflow-x-hidden overflow-y-hidden">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z" fill="currentColor" />
    </svg>
  );
}

export function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="align-baseline inline" aria-hidden fill="none" stroke="#ee4d2d" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

export function IconAddToCart() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="align-baseline inline w-5 h-5" aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

export function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      className={`align-baseline inline overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <path fillRule="evenodd" d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" />
    </svg>
  );
}

export function IconMinus() {
  return (
    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden shrink-0 w-2.5 h-2.5 text-xs fill-stone-300">
      <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
    </svg>
  );
}

export function IconPlus() {
  return (
    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="align-baseline inline-block relative overflow-x-hidden overflow-y-hidden shrink-0 w-2.5 h-2.5 text-xs fill-stone-300">
      <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
    </svg>
  );
}

/** Chat bubble icon for "Chat Now" button (14x14). */
export function IconChat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      className={`shrink-0 w-3.5 h-3.5 inline-block ${className ?? ""}`}
      aria-hidden
      fill="currentColor"
    >
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
    </svg>
  );
}

/** Shop/storefront icon for "View Shop" link (14x14). */
export function IconShop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      className={`shrink-0 w-3.5 h-3.5 inline-block ${className ?? ""}`}
      aria-hidden
      fill="currentColor"
    >
      <path d="M16 6l2-4h-4l-2 4h-4L6 2H2l2 4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2l2-4h-4l-2 4h-4zM4 8v11h16V8H4z" />
    </svg>
  );
}
