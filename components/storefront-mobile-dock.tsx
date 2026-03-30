"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/auth-context";
import { useChat } from "@/components/chat-widget/chat-context";
import { getSellerCentreHref } from "@/components/top-navbar/left-section";
import { mockNavbarConfig } from "@/components/top-navbar/data";

type DockItem = {
  key: string;
  label: string;
  href: string;
  isActive: (pathname: string, hash: string) => boolean;
  icon: (active: boolean) => ReactElement;
};

function AccountIcon(active: boolean) {
  return (
    <svg viewBox="0 0 24 24" className={`h-[1.15rem] w-[1.15rem] ${active ? "text-[#ee4d2d]" : "text-neutral-500"}`} aria-hidden>
      <path
        d="M12 12.2a4.2 4.2 0 1 0-4.2-4.2 4.2 4.2 0 0 0 4.2 4.2Zm0 1.8c-4.47 0-8.1 2.33-8.1 5.2 0 .44.36.8.8.8h14.6a.8.8 0 0 0 .8-.8c0-2.87-3.63-5.2-8.1-5.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CategoriesIcon(active: boolean) {
  return (
    <svg viewBox="0 0 24 24" className={`h-[1.15rem] w-[1.15rem] ${active ? "text-[#ee4d2d]" : "text-neutral-500"}`} aria-hidden>
      <path d="M4 4h7v7H4Zm9 0h7v7h-7ZM4 13h7v7H4Zm9 0h7v7h-7Z" fill="currentColor" />
    </svg>
  );
}

function FlashIcon(active: boolean) {
  return (
    <svg viewBox="0 0 24 24" className={`h-[1.15rem] w-[1.15rem] ${active ? "text-[#ee4d2d]" : "text-neutral-500"}`} aria-hidden>
      <path d="M13.4 2 5.8 13h4.6L9.7 22l8.5-11.8H13.5L13.4 2Z" fill="currentColor" />
    </svg>
  );
}

function MallIcon(active: boolean) {
  return (
    <svg viewBox="0 0 24 24" className={`h-[1.15rem] w-[1.15rem] ${active ? "text-[#ee4d2d]" : "text-neutral-500"}`} aria-hidden>
      <path
        d="M5 6.4a2.4 2.4 0 0 1 2.4-2.4h9.2A2.4 2.4 0 0 1 19 6.4v1.2a2.2 2.2 0 0 1-1.2 2v8.4H6.2V9.6A2.2 2.2 0 0 1 5 7.6V6.4Zm3 11.6h3v-4H8Zm5 0h3v-4h-3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProductsIcon(active: boolean) {
  return (
    <svg viewBox="0 0 24 24" className={`h-[1.15rem] w-[1.15rem] ${active ? "text-[#ee4d2d]" : "text-neutral-500"}`} aria-hidden>
      <path
        d="M12 2.8 4.5 6.2v11.6L12 21.2l7.5-3.4V6.2L12 2.8Zm0 2.1 4.8 2.2L12 9.3 7.2 7.1 12 4.9Zm-5.7 3.5 4.6 2.1v8.1L6.3 16.5V8.4Zm11.4 0v8.1l-4.6 2.1v-8.1l4.6-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DockLink({
  item,
  pathname,
  hash,
}: {
  item: DockItem;
  pathname: string;
  hash: string;
}) {
  const active = item.isActive(pathname, hash);

  return (
    <Link
      href={item.href}
      className="flex min-w-0 flex-col items-center justify-center gap-1 px-1 py-2 text-[0.68rem] font-medium tracking-[0.01em] text-neutral-500 transition-colors"
    >
      {item.icon(active)}
      <span className={`truncate ${active ? "text-[#ee4d2d]" : "text-neutral-500"}`}>{item.label}</span>
    </Link>
  );
}

export function StorefrontMobileDock() {
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();
  const { isOpen: isChatOpen } = useChat();
  const [hash, setHash] = useState("");
  const sellerHref = useMemo(() => getSellerCentreHref(mockNavbarConfig), []);

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash || "");
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  const accountHref = isLoggedIn
    ? "/user/account/profile"
    : `/login?next=${encodeURIComponent("/user/account/profile")}`;

  const leftItems: DockItem[] = [
    {
      key: "account",
      label: "Account",
      href: accountHref,
      isActive: (currentPath) => currentPath.startsWith("/user"),
      icon: AccountIcon,
    },
    {
      key: "categories",
      label: "Categories",
      href: "/#home-categories",
      isActive: (currentPath, currentHash) => currentPath === "/" && currentHash === "#home-categories",
      icon: CategoriesIcon,
    },
  ];

  const rightItems: DockItem[] = [
    {
      key: "shocking",
      label: "Shocking",
      href: "/shocking_sale",
      isActive: (currentPath) => currentPath.startsWith("/shocking_sale"),
      icon: FlashIcon,
    },
    {
      key: "mall",
      label: "Mall",
      href: "/mall",
      isActive: (currentPath) => currentPath === "/mall" || currentPath.startsWith("/shop/"),
      icon: MallIcon,
    },
    {
      key: "products",
      label: "Products",
      href: "/products",
      isActive: (currentPath) =>
        currentPath === "/products" ||
        currentPath.startsWith("/product/") ||
        currentPath.startsWith("/search"),
      icon: ProductsIcon,
    },
  ];

  if (isChatOpen) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[930] lg:hidden" aria-hidden={false}>
      <div className="mx-auto max-w-screen-sm px-3 pb-[calc(env(safe-area-inset-bottom)+0.65rem)]">
        <div className="pointer-events-auto relative">
          <a
            href={sellerHref}
            className="absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[rgb(245,245,245)] bg-[#ee4d2d] text-white shadow-[0_10px_20px_rgba(238,77,45,0.24)]"
            aria-label="Add your own products in Seller Centre"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </a>

          <nav
            aria-label="Storefront mobile navigation"
            className="grid h-[4.45rem] grid-cols-[1fr_1fr_4.75rem_1fr_1fr_1fr] items-center rounded-[0.9rem] border border-black/[0.08] bg-white/95 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur"
          >
            {leftItems.map((item) => (
              <DockLink key={item.key} item={item} pathname={pathname} hash={hash} />
            ))}
            <div aria-hidden className="h-full" />
            {rightItems.map((item) => (
              <DockLink key={item.key} item={item} pathname={pathname} hash={hash} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
