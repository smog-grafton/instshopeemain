import Link from "next/link";

const MENU_ITEMS = [
  { label: "My Account", href: "/user/account/profile" },
  { label: "My Purchase", href: "/user/purchase" },
  { label: "Logout", href: "/logout" },
] as const;

export function UserDropdown() {
  return (
    <div
      className="relative z-[500] overflow-visible"
      role="menu"
      aria-label="User menu"
    >
      {/* Arrow pointing up at the user trigger (top center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[10px] border-b-black/[0.09]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[10px] border-b-white" />

      <div
        className="bg-white border border-black/[0.09] rounded-sm cursor-default flex flex-col max-w-[260px] min-w-[160px] overflow-hidden py-2.5 px-4 pb-3.5"
        style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 9px 0px" }}
      >
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            role="menuitem"
            className="text-black/87 text-sm leading-5 py-1.5 px-0 m-0 border-0 bg-transparent overflow-visible -m-1 rounded-sm p-1 text-left no-underline appearance-none cursor-pointer hover:bg-black/[0.04]"
          >
            <span className="rounded-sm">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
