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
}: {
  item: NavItem;
  isActive: boolean;
  isChildActive?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const expanded = isActive || isChildActive || (item.children && item.children.some((c) => pathname === c.href));

  return (
    <div className="relative">
      <div>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`cursor-pointer capitalize items-center no-underline transition-colors duration-100 ease-in-out flex mb-4 text-black/87 active:outline-0 hover:outline-0 hover:text-red-500 ${isActive ? "text-red-500" : ""}`}
        >
          <div className="text-white text-center shrink-0 justify-center items-center w-5 h-5 leading-5 flex mr-2.5 rounded-[50%] overflow-hidden">
            <Image src={item.iconPath} alt="" width={20} height={20} className="align-baseline inline w-full h-full object-contain" />
          </div>
          <div className="leading-4">
            <span className="font-medium mr-1.5">{item.label}</span>
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
}: {
  className?: string;
  onNavigate?: () => void;
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
            />
          );
        })}
      </div>
    </div>
  );
}
