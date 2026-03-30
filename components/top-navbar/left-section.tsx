"use client";

import { useState, useEffect } from "react";
import { SocialLinks } from "./social-links";
import { DownloadHoverPopup } from "@/components/download-hover-popup";
import type { NavbarConfig } from "./data";

/** Seller Centre href: env if set, else https://seller.{root domain}. Strip www so www.instshopee.com.co → seller.instshopee.com.co (never seller.www.*). */
export function getSellerCentreHref(config: NavbarConfig): string {
  if (config.sellerCentreUrl && config.sellerCentreUrl !== "/portal") {
    return config.sellerCentreUrl;
  }
  if (typeof window !== "undefined") {
    let host = window.location.hostname;
    if (host.startsWith("www.")) {
      host = host.slice(4);
    }
    const protocol = window.location.protocol || "https:";
    return `${protocol}//seller.${host}`;
  }
  return process.env.NEXT_PUBLIC_SELLER_CENTRE_URL || "#";
}

interface LeftSectionProps {
  config: NavbarConfig;
}

export function LeftSection({ config }: LeftSectionProps) {
  const [sellerHref, setSellerHref] = useState(() =>
    config.sellerCentreUrl && config.sellerCentreUrl !== "/portal"
      ? config.sellerCentreUrl
      : process.env.NEXT_PUBLIC_SELLER_CENTRE_URL || "#"
  );
  useEffect(() => {
    setSellerHref(getSellerCentreHref(config));
  }, [config]);

  const firstLink = config.firstLeftLink ?? {
    label: "Seller Centre",
    href: sellerHref,
  };
  const isExternal = firstLink.href.startsWith("http") || firstLink.href.startsWith("//");
  return (
    <div className="items-center flex">
      <a
        href={firstLink.href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-white outline-0 text-sm font-light no-underline relative p-1 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-full focus-visible:before:h-full focus-visible:before:absolute focus-visible:before:p-0 focus-visible:before:rounded-sm focus-visible:before:left-0 focus-visible:before:top-0 focus-visible:before:outline-black/87 hover:cursor-pointer hover:text-white/70"
      >
        {firstLink.label}
      </a>
      <div
        className="group outline-0 flex relative ml-2.5 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+theme(width[0.5]))] focus-visible:before:h-[calc(100%+theme(height[0.5]))] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87 after:content-[''] after:[border-left-style:solid] after:[border-right-style:solid] after:w-0 after:h-4 after:absolute after:border-x after:-left-1.5 after:top-[calc(50%-theme(inset.2))] after:border-x-white/22"
        id="pc-drawer-id-0"
      >
        <a
          className="text-white outline-0 text-sm font-light no-underline relative p-1 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-full focus-visible:before:h-full focus-visible:before:absolute focus-visible:before:p-0 focus-visible:before:rounded-sm focus-visible:before:left-0 focus-visible:before:top-0 focus-visible:before:outline-black/87 hover:cursor-pointer hover:text-white/70"
          href={config.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="download-popup-trigger"
          aria-describedby="download-hover-popup"
        >
          Download
        </a>
        <DownloadHoverPopup
          id="download-hover-popup"
          className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        />
      </div>
      <div className="text-white outline-0 text-sm font-light relative pl-1 py-1 flex ml-2.5 after:content-[''] after:[border-left-style:solid] after:[border-right-style:solid] after:w-0 after:h-4 after:absolute after:border-x after:-left-1.5 after:top-[calc(50%-theme(inset.2))] after:border-x-white/22 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-full focus-visible:before:h-full focus-visible:before:absolute focus-visible:before:ml-0 focus-visible:before:pl-0 focus-visible:before:py-0 focus-visible:before:rounded-sm focus-visible:before:left-0 focus-visible:before:top-0 focus-visible:before:outline-black/87">
        Follow us on
      </div>
      <SocialLinks
        links={config.socialLinks}
        spriteImageUrl="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/821f04b210432a71.png"
      />
    </div>
  );
}
