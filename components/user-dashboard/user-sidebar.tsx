"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SIDEBAR_NAV, type NavItem } from "./data";
import { getUserProfile } from "@/lib/api-client";
import type { ApiUserProfile } from "@/lib/api-client";
import { useAuth } from "@/components/auth/auth-context";
import { isBackendImage } from "@/lib/utils";

function NavIcon({ name }: { name: NavItem["icon"] }) {
  const common = "h-5 w-5";
  if (name === "user") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
  if (name === "balance") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M4 7h16v13H4zM4 9l8-5 8 5M8 14h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "order") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M7 4h10v16H7zM9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
  if (name === "message") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M5 6h14v10H8l-3 3zM8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "site") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M12 22a2.5 2.5 0 002.5-2.5h-5A2.5 2.5 0 0012 22zM18 16V10a6 6 0 10-12 0v6l-2 2h16z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "billing") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "wallet") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M4 7h15a1 1 0 011 1v11H5a2 2 0 01-2-2V6a2 2 0 012-2h12M16 13h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "bank") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 20h18M12 4l8 4H4z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "address") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.7" /></svg>;
  if (name === "store") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M4 10h16l-1.5-5h-13zM6 10v10h12V10M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M5 5h14v14H5zM8 9h8M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

function EditProfileIcon() {
  return (
    <svg
      width="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className="align-baseline inline h-3 overflow-x-hidden overflow-y-hidden mr-1"
      aria-hidden
    >
      <path
        d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
        fillRule="evenodd"
        className="fill-neutral-400"
      />
    </svg>
  );
}

function AvatarPlaceholder() {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      className="align-baseline fill-current w-6 h-6 inline-block stroke-stone-300 text-2xl font-normal leading-8 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 overflow-x-hidden overflow-y-hidden"
      aria-hidden
    >
      <g>
        <circle cx="7.5" cy="4.5" r="3.8" strokeMiterlimit="10" className="fill-none" />
        <path
          d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          className="fill-none"
        />
      </g>
    </svg>
  );
}

function SidebarNavLink({
  item,
  isActive,
  isChildActive,
  onNavigate,
  siteMessageUnreadCount = 0,
}: {
  item: NavItem;
  isActive: boolean;
  isChildActive?: boolean;
  onNavigate?: () => void;
  siteMessageUnreadCount?: number;
}) {
  const pathname = usePathname();
  const expanded = isActive || isChildActive || (item.children && item.children.some((c) => pathname === c.href));
  const showSiteMessageBadge = item.href === "/user/site-message" && siteMessageUnreadCount > 0;

  return (
    <div className="relative">
      <div>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`cursor-pointer capitalize items-center no-underline transition-colors duration-100 ease-in-out flex mb-4 text-black/87 active:outline-0 hover:outline-0 hover:text-red-500 ${isActive ? "text-red-500" : ""}`}
        >
          <div className="shrink-0 justify-center items-center w-5 h-5 leading-5 flex mr-2.5 text-blue-600">
            <NavIcon name={item.icon} />
          </div>
          <div className="leading-4">
            <span className="font-medium mr-1.5">{item.label}</span>
            {showSiteMessageBadge ? (
              <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-[#ee4d2d] px-1.5 text-[10px] font-semibold leading-5 text-white">
                {siteMessageUnreadCount > 99 ? "99+" : siteMessageUnreadCount}
              </span>
            ) : null}
          </div>
        </Link>
      </div>
      {item.children && item.children.length > 0 && (
        <div
          className={`transition-all duration-500 ease-in-out overflow-x-hidden overflow-y-hidden ${expanded ? "" : "h-0 opacity-0"}`}
        >
          <div className="pl-9 pb-[0.1875rem]">
            {item.children.map((child) => {
              const childActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className={`cursor-pointer no-underline block mb-4 active:outline-0 hover:outline-0 ${childActive ? "text-red-500" : "text-black/65"}`}
                >
                  <span className="capitalize text-sm transition-colors duration-100 ease-in-out block hover:text-red-500">
                    {child.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function UserSidebar({
  className = "w-44",
  onNavigate,
  siteMessageUnreadCount = 0,
}: {
  className?: string;
  onNavigate?: () => void;
  siteMessageUnreadCount?: number;
}) {
  const pathname = usePathname();
  const { user: authUser } = useAuth();
  const [userProfile, setUserProfile] = useState<ApiUserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      try {
        const profile = await getUserProfile();
        setUserProfile(profile);
      } catch (error) {
        console.error("Failed to load user profile:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, []);

  const displayUsername = loading ? "Loading…" : (userProfile?.username ?? authUser?.username ?? "User");
  const avatarUrl = authUser?.avatarUrl ?? userProfile?.avatarUrl ?? null;

  return (
    <div className={`shrink-0 ${className}`}>
      <div className="[border-bottom-style:solid] flex py-4 border-b border-b-zinc-100">
        <Link
          href="/user/account/profile"
          onClick={onNavigate}
          className="cursor-pointer no-underline active:outline-0 hover:outline-0"
        >
          <div className="w-12 h-12 inline-block relative rounded-[50%] border border-solid border-black/9 overflow-hidden">
            <div className="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]">
              <AvatarPlaceholder />
            </div>
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={displayUsername}
                width={48}
                height={48}
                className="align-baseline w-full h-full absolute rounded-[50%] left-0 top-0 object-cover focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]"
                unoptimized={isBackendImage(avatarUrl)}
              />
            ) : (
              <div className="absolute inset-0 rounded-[50%] bg-zinc-200 animate-pulse" aria-hidden />
            )}
          </div>
        </Link>
        <div className="flex-col flex-1 justify-center flex overflow-x-hidden overflow-y-hidden pl-4 min-w-0">
          <div className="text-zinc-800 text-ellipsis whitespace-nowrap min-h-4 font-semibold overflow-x-hidden overflow-y-hidden mb-1.5">
            {displayUsername}
          </div>
          <div>
            <Link
              href="/user/account/profile"
              onClick={onNavigate}
              className="cursor-pointer text-zinc-500 capitalize no-underline active:outline-0 hover:outline-0"
            >
              <EditProfileIcon />
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="cursor-pointer mt-7">
        {SIDEBAR_NAV.map((item) => {
          const isExternal = item.href.startsWith("http://") || item.href.startsWith("https://");
          const isActive = !isExternal && pathname === item.href;
          const isChildActive = item.children?.some((c) => pathname === c.href);
          return (
            <SidebarNavLink
              key={`${item.label}-${item.href}`}
              item={item}
              isActive={isActive}
              isChildActive={isChildActive}
              onNavigate={onNavigate}
              siteMessageUnreadCount={siteMessageUnreadCount}
            />
          );
        })}
      </div>
    </div>
  );
}
