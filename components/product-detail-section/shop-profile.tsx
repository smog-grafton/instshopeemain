"use client";

import Image from "next/image";
import Link from "next/link";
import { useChat } from "@/components/chat-widget/chat-context";
import type { ShopProfileData } from "./data";
import { isBackendImage } from "@/lib/utils";

const CHAT_ICON_SRC = "/images/profile/shop/chat.svg";
const SHOP_ICON_SRC = "/images/profile/shop/shop.svg";

interface ShopProfileProps {
  data: ShopProfileData;
  vendorId?: number;
  productContext?: {
    id?: number;
    title: string;
    image: string;
    price: string;
    originalPrice?: string;
    href?: string;
    badges?: string[];
    soldLabel?: string;
  };
}

/** Single stat cell: label + value; value can be a link when href is set. */
function ShopProfileStatItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const valueClassName = `text-red-500 whitespace-nowrap text-right ${href ? "cursor-pointer" : ""}`;
  const content = (
    <>
      <label className="capitalize mr-3 text-black/40">{label}</label>
      <span className={valueClassName}>{value}</span>
    </>
  );

  const focusRing =
    "focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+6px)] focus-visible:before:h-[calc(100%+6px)] focus-visible:before:absolute focus-visible:before:m-[-3px] focus-visible:before:p-[3px] focus-visible:before:rounded-sm focus-visible:before:left-[-3px] focus-visible:before:top-[-3px] focus-visible:before:outline-black/87";

  if (href) {
    return (
      <Link
        href={href}
        className={`no-underline cursor-pointer outline-0 justify-between flex relative ${focusRing}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`cursor-default outline-0 justify-between flex relative ${focusRing}`}
    >
      {content}
    </div>
  );
}

export function ShopProfile({ data, vendorId, productContext }: ShopProfileProps) {
  const { shopName, activeText, shopHref, profileImagePath, stats } = data;
  const { openChat } = useChat();
  const useBackendImage = isBackendImage(profileImagePath);

  const linkFocusRing =
    "focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-[50%] focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87";

  const buttonFocusRing =
    "focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87";

  return (
    <section
      className="mt-4 overflow-x-hidden overflow-y-hidden rounded-sm bg-white p-2.5 text-sm leading-tight text-black/80 shadow-sm"
      aria-label="Shop profile"
    >
      <div className="flex flex-col gap-6 px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-2xl flex-1 flex-col gap-4 lg:flex-row lg:pr-6 lg:border-r lg:border-r-black/5">
          <Link
            className={`no-underline cursor-pointer outline-0 shrink-0 relative ${linkFocusRing}`}
            href={shopHref}
          >
            <div className="inline-block relative rounded-[50%] border border-solid border-black/9 w-20 h-20">
              <div className="w-full h-full relative overflow-x-hidden overflow-y-hidden rounded-[50%]">
                {useBackendImage ? (
                  <img
                    src={profileImagePath}
                    alt="Click here to visit shop"
                    className="absolute left-0 top-0 h-full w-full rounded-[50%] object-cover align-bottom"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={profileImagePath}
                    width={80}
                    height={80}
                    alt="Click here to visit shop"
                    className="w-full h-full absolute rounded-[50%] left-0 top-0 object-cover align-bottom focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]"
                    loading="lazy"
                    unoptimized={useBackendImage}
                  />
                )}
              </div>
            </div>
          </Link>
          <div className="flex grow flex-col justify-between overflow-x-hidden overflow-y-hidden">
            <div className="overflow-x-hidden overflow-y-hidden text-base font-medium leading-6 text-black/87">
              {shopName}
            </div>
            <div className="text-neutral-500 items-center text-sm flex">
              <div className="capitalize text-sm text-black/54">{activeText}</div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  openChat({
                    shopName,
                    shopSlug: shopHref?.replace("/shop/", ""),
                    vendorId,
                    product: productContext,
                  })
                }
                className={`[appearance:auto] inline-flex h-9 min-w-[7.25rem] items-center justify-center rounded-sm border border-solid border-red-500 bg-orange-600/10 px-4 text-sm text-red-500 shadow-sm outline-0 whitespace-nowrap hover:bg-orange-200/18 active:bg-orange-900/15 active:shadow-inner ${buttonFocusRing}`}
              >
                <img
                  src={CHAT_ICON_SRC}
                  alt=""
                  className="shrink-0 w-3.5 h-3.5 inline-block mr-1.5 align-baseline"
                  width={14}
                  height={14}
                />
                <span className="whitespace-nowrap">Chat Now</span>
              </button>
              <Link
                href={shopHref}
                className={`no-underline relative inline-flex h-9 min-w-[7.25rem] items-center justify-center rounded-sm border border-solid border-black/9 bg-white px-4 text-sm text-neutral-600 shadow-sm outline-0 whitespace-nowrap hover:bg-black/2 active:bg-black/2 active:shadow-inner ${buttonFocusRing}`}
              >
                <img
                  src={SHOP_ICON_SRC}
                  alt="icon shop"
                  className="shrink-0 w-3.5 h-3.5 inline-block mr-1.5 align-baseline"
                  width={14}
                  height={14}
                />
                <span className="whitespace-nowrap">View Shop</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grow grid-cols-1 gap-x-8 gap-y-4 text-black/40 sm:grid-cols-2 lg:pl-6 xl:grid-cols-3 xl:gap-x-12 xl:gap-y-5">
          {stats.map((stat) => (
            <ShopProfileStatItem
              key={stat.label}
              label={stat.label}
              value={stat.value}
              href={stat.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
