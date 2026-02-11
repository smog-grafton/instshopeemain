"use client";

import Image from "next/image";
import Link from "next/link";
import { useChat } from "@/components/chat-widget/chat-context";
import type { ShopProfileData } from "./data";

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

  const linkFocusRing =
    "focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-[50%] focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87";

  const buttonFocusRing =
    "focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87";

  return (
    <section
      className="text-sm leading-tight text-black/80 bg-white overflow-x-hidden overflow-y-hidden shadow-sm mt-4 p-2.5 rounded-sm"
      aria-label="Shop profile"
    >
      <div className="justify-between items-center flex pt-5 pb-6 px-6">
        <div className="max-w-md flex pr-6 border-r border-r-black/5 border-r-solid">
          <Link
            className={`no-underline cursor-pointer outline-0 shrink-0 relative mr-5 ${linkFocusRing}`}
            href={shopHref}
          >
            <div className="inline-block relative rounded-[50%] border border-solid border-black/9 w-20 h-20">
              <div className="w-full h-full relative overflow-x-hidden overflow-y-hidden rounded-[50%]">
                <Image
                  src={profileImagePath}
                  width={80}
                  height={80}
                  alt="Click here to visit shop"
                  className="w-full h-full absolute rounded-[50%] left-0 top-0 object-cover align-bottom focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <div className="flex-col grow justify-between flex overflow-x-hidden overflow-y-hidden">
            <div className="text-ellipsis whitespace-nowrap text-base font-medium leading-6 overflow-x-hidden overflow-y-hidden text-black/87">
              {shopName}
            </div>
            <div className="text-neutral-500 items-center text-sm flex">
              <div className="capitalize text-sm text-black/54">{activeText}</div>
            </div>
            <div className="flex mt-2">
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
                className={`[appearance:auto] text-ellipsis [-webkit-line-clamp:1] cursor-pointer justify-center items-center text-sm rounded-sm inline-flex min-w-16 max-w-48 h-9 px-4 outline-0 relative text-red-500 shadow-sm border border-solid border-red-500 bg-orange-600/10 capitalize mr-2.5 hover:bg-orange-200/18 active:shadow-inner active:bg-orange-900/15 ${buttonFocusRing}`}
              >
                <img
                  src={CHAT_ICON_SRC}
                  alt=""
                  className="shrink-0 w-3.5 h-3.5 inline-block mr-1.5 align-baseline"
                  width={14}
                  height={14}
                />
                <span>chat now</span>
              </button>
              <Link
                href={shopHref}
                className={`no-underline text-ellipsis [-webkit-line-clamp:1] cursor-pointer justify-center items-center text-sm rounded-sm inline-flex min-w-16 max-w-48 h-9 px-4 outline-0 bg-white relative shadow-sm border border-solid border-black/9 text-neutral-600 capitalize hover:bg-black/2 active:shadow-inner active:bg-black/2 ${buttonFocusRing}`}
              >
                <img
                  src={SHOP_ICON_SRC}
                  alt="icon shop"
                  className="shrink-0 w-3.5 h-3.5 inline-block mr-1.5 align-baseline"
                  width={14}
                  height={14}
                />
                <span>view shop</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grow grid grid-cols-[repeat(3,auto)] gap-y-5 gap-x-12 pl-6 text-black/40">
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
