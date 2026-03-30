"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { useChat } from "@/components/chat-widget/chat-context";
import { useAuth } from "@/components/auth/auth-context";
import { followShop, getShopFollowStatus, unfollowShop } from "@/lib/api-client";
import type { ShopProfileData } from "./data";
import { shopProfileAssets } from "./data";

interface ShopProfileCardProps {
  data: ShopProfileData;
}

function FollowIcon() {
  return (
    <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" className="block h-[10px] w-[1em] shrink-0 fill-white" aria-hidden>
      <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[15px] w-4 shrink-0 fill-white" aria-hidden>
      <g clipPath="url(#chatClip)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2332 7.53335C14.2332 10.4648 11.5543 13.0334 7.99984 13.0334C7.24504 13.0334 6.52972 12.9175 5.87115 12.707L3.71012 13.7094L4.11803 11.8374C2.66761 10.8116 1.7665 9.23351 1.7665 7.53335C1.7665 4.60193 4.44538 2.03335 7.99984 2.03335C11.5543 2.03335 14.2332 4.60193 14.2332 7.53335ZM15.3332 7.53335C15.3332 11.1784 12.0499 14.1334 7.99984 14.1334C7.3188 14.1334 6.65945 14.0498 6.03374 13.8935L3.47842 15.0114C2.92448 15.2538 2.33174 14.7593 2.47082 14.1709L2.9155 12.2895C1.52913 11.0888 0.666504 9.40174 0.666504 7.53335C0.666504 3.88827 3.94975 0.93335 7.99984 0.93335C12.0499 0.93335 15.3332 3.88827 15.3332 7.53335ZM5.43317 7.71668C5.43317 8.22295 5.02277 8.63335 4.5165 8.63335C4.01024 8.63335 3.59984 8.22295 3.59984 7.71668C3.59984 7.21042 4.01024 6.80002 4.5165 6.80002C5.02277 6.80002 5.43317 7.21042 5.43317 7.71668ZM7.8165 8.63335C8.32277 8.63335 8.73317 8.22295 8.73317 7.71668C8.73317 7.21042 8.32277 6.80002 7.8165 6.80002C7.31024 6.80002 6.89984 7.21042 6.89984 7.71668C6.89984 8.22295 7.31024 8.63335 7.8165 8.63335ZM11.1165 8.63335C11.6228 8.63335 12.0332 8.22295 12.0332 7.71668C12.0332 7.21042 11.6228 6.80002 11.1165 6.80002C10.6102 6.80002 10.1998 7.21042 10.1998 7.71668C10.1998 8.22295 10.6102 8.63335 11.1165 8.63335Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="chatClip">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function isRemoteImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function ShopProfileCard({ data }: ShopProfileCardProps) {
  const { openChat } = useChat();
  const { isLoggedIn } = useAuth();
  const [followBusy, setFollowBusy] = useState(false);
  const [following, setFollowing] = useState<boolean | null>(null);

  const profileSrc = data.profileImageUrl || shopProfileAssets.defaultProfileImage;
  const coverSrc = data.coverImageUrl || shopProfileAssets.defaultProfileImage;
  const mallBadgeSrc = shopProfileAssets.defaultMallBadge;
  /** Backend URLs must bypass the optimizer (remotePatterns) or use unoptimized. */
  const profileUnoptimized = isRemoteImage(profileSrc);

  const vendorId = Number.parseInt(data.id, 10);

  useEffect(() => {
    if (!isLoggedIn) {
      setFollowing(null);
      return;
    }
    getShopFollowStatus(data.slug)
      .then((r) => setFollowing(r.following))
      .catch(() => setFollowing(false));
  }, [data.slug, isLoggedIn]);

  const handleFollow = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!isLoggedIn) {
        window.location.href = `/login?next=${encodeURIComponent(`/shop/${data.slug}`)}`;
        return;
      }
      setFollowBusy(true);
      try {
        if (following) {
          await unfollowShop(data.slug);
          setFollowing(false);
        } else {
          await followShop(data.slug);
          setFollowing(true);
        }
      } catch {
        // network / auth
      } finally {
        setFollowBusy(false);
      }
    },
    [data.slug, isLoggedIn, following]
  );

  const handleChat = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      openChat({
        shopName: data.name,
        shopSlug: data.slug,
        vendorId: Number.isFinite(vendorId) ? vendorId : undefined,
      });
    },
    [openChat, data.name, data.slug, vendorId]
  );

  return (
    <div className="relative min-h-[168px] w-full overflow-hidden rounded-sm lg:h-[135px] lg:w-[24.375rem] lg:shrink-0">
      <div
        className="absolute inset-0 -m-[4px] bg-cover bg-center bg-no-repeat blur-[2px]"
        style={{ backgroundImage: `url(${coverSrc})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-[12px] sm:inset-[12px_14px] lg:inset-[10px_14px_10px_20px]">
        <div className="flex items-start">
          <Link
            href={`/shop/${data.slug}`}
            className="relative block h-[72px] w-[72px] shrink-0 cursor-pointer text-transparent no-underline sm:h-20 sm:w-20"
            aria-label={`${data.name} profile`}
          >
            {/* Profile circle – no overflow on wrapper so badge can overlay outside */}
            <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border-4 border-white/40 bg-[rgb(245,245,245)] box-border cursor-pointer select-none sm:h-20 sm:w-20">
              <Image
                src={profileSrc}
                alt=""
                width={72}
                height={72}
                className="block h-[72px] w-[72px] rounded-full object-cover"
                unoptimized={profileUnoptimized}
              />
            </div>
            {/* Shopee Mall badge: centered at bottom of profile circle as overlay */}
            {data.isMall && (
              <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 translate-y-1.5 pointer-events-none">
                <Image
                  src={mallBadgeSrc}
                  alt="Shopee Mall"
                  width={64}
                  height={16}
                  className="h-[14px] w-14 border-0 object-contain drop-shadow-sm sm:h-4 sm:w-16"
                  unoptimized
                />
              </div>
            )}
          </Link>
          <div className="relative ml-3 min-w-0 overflow-hidden pt-1 text-white sm:ml-2.5 sm:mt-2.5">
            <h1 className="mb-1 mt-0 max-h-12 overflow-hidden text-ellipsis break-words text-lg font-medium leading-5 line-clamp-2 sm:mb-1.5 sm:text-xl sm:leading-6">
              {data.name}
            </h1>
            <div className="text-xs">
              <div className="my-1.5 align-middle text-xs text-white/70">{data.status}</div>
            </div>
            <div className="relative mt-3 flex flex-wrap gap-2 sm:mt-2.5 sm:flex-nowrap sm:gap-0">
              <div className="flex min-w-[112px] flex-1 sm:pr-2.5">
                <button
                  type="button"
                  onClick={handleFollow}
                  disabled={followBusy}
                  className="flex h-[25px] w-full flex-1 cursor-pointer items-center justify-center rounded-[2px] border border-white bg-transparent px-0 py-1.5 text-xs font-medium capitalize leading-3 text-white outline-none transition-colors duration-100 disabled:opacity-60"
                >
                  <span className="flex items-center justify-center pr-2.5 text-[15px]">
                    <FollowIcon />
                  </span>
                  {following ? "following" : "follow"}
                </button>
              </div>
              <div className="flex min-w-[112px] flex-1 sm:pr-2.5">
                <button
                  type="button"
                  onClick={handleChat}
                  className="flex h-[25px] w-full flex-1 cursor-pointer items-center justify-center rounded-[2px] border border-white bg-transparent px-0 py-1.5 text-xs font-medium capitalize leading-3 text-white outline-none transition-colors duration-100"
                >
                  <span className="flex items-center justify-center pr-2.5 text-[15px]">
                    <ChatIcon />
                  </span>
                  chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
