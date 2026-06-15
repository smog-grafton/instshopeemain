"use client";

import { Suspense, useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth/auth-context";
import { DashboardPageSkeleton } from "./dashboard-page-skeleton";
import { SIDEBAR_NAV } from "./data";
import { UserSidebar } from "./user-sidebar";
import { getSellerPortalBaseUrl, shouldUseSellerPortal } from "@/lib/account-routing";
import { getBuyerSiteMessages, markBuyerSiteMessageSeen } from "@/lib/api-client";

interface UserDashboardLayoutProps {
  children: ReactNode;
}

interface BuyerSiteMessage {
  id: number | string;
  title?: string | null;
  body?: string | null;
  content?: string | null;
  created_at?: string | null;
  sent_at?: string | null;
  expires_at?: string | null;
  show_popup?: boolean;
  unread?: boolean;
}

function extractSiteMessages(payload: any): BuyerSiteMessage[] {
  const messages = payload?.messages;
  if (Array.isArray(messages?.data)) return messages.data;
  if (Array.isArray(messages)) return messages;
  return [];
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function getCurrentNavLabel(pathname: string): string {
  for (const item of SIDEBAR_NAV) {
    const activeChild = item.children?.find((child) => pathname === child.href);
    if (activeChild) return activeChild.label;
    if (pathname === item.href) return item.label;
  }

  return "Account";
}

const MOBILE_TOOLS = [
  { label: "Orders", href: "/user/purchase", icon: "order", color: "bg-sky-100 text-sky-600" },
  { label: "Wallet", href: "/user/wallet", icon: "wallet", color: "bg-violet-100 text-violet-600" },
  { label: "Withdraw", href: "/user/withdraw", icon: "download", color: "bg-rose-100 text-rose-600" },
  { label: "Address", href: "/user/account/address", icon: "address", color: "bg-orange-100 text-orange-600" },
  { label: "Messages", href: "/user/my-message", icon: "message", color: "bg-blue-100 text-blue-600" },
  { label: "Payment Password", href: "/user/account/payment", icon: "lock", color: "bg-amber-100 text-amber-600" },
  { label: "Login Password", href: "/user/account/password", icon: "key", color: "bg-emerald-100 text-emerald-600" },
  { label: "Merchant", href: "/user/apply-for-merchant", icon: "store", color: "bg-rose-100 text-rose-600" },
  { label: "Settings", href: "/user/setting/privacy", icon: "settings", color: "bg-zinc-100 text-zinc-600" },
];

function ToolIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  if (name === "order") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M7 4h10v16H7zM9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  if (name === "wallet") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M4 7h15a1 1 0 011 1v11H5a2 2 0 01-2-2V6a2 2 0 012-2h12M16 13h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "address") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.8" /></svg>;
  if (name === "message") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M5 6h14v10H8l-3 3zM8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "lock") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M7 10V8a5 5 0 0110 0v2M6 10h12v10H6zM12 14v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "key") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M14 7a4 4 0 106 6 4 4 0 00-6-6zM14 13l-8 8H3v-3l8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "store") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M4 10h16l-1.5-5h-13zM6 10v10h12V10M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (name === "download") return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M12 4v10M8 10l4 4 4-4M5 20h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg className={common} viewBox="0 0 24 24" fill="none"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zM4 12h2M18 12h2M12 4v2M12 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}

function MobileAccountOverview({ name }: { name?: string | null }) {
  return (
    <div className="mb-4 space-y-3 lg:hidden">
      <div className="overflow-hidden rounded-lg bg-[#ee4d2d] px-4 py-4 text-white shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-white/75">Account Centre</div>
        <div className="mt-1 text-xl font-bold">Welcome{name ? `, ${name}` : ""}</div>
        <div className="mt-1 max-w-[18rem] text-sm leading-5 text-white/85">Manage orders, funds, addresses, and merchant tools in one place.</div>
      </div>
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <div className="mb-2 flex items-center justify-between px-1">
          <div className="text-sm font-semibold text-zinc-800">Essential Tools</div>
          <Link href="/user/account/profile" className="text-xs font-medium text-[#ee4d2d]">Profile</Link>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {MOBILE_TOOLS.map((tool) => (
            <Link key={tool.href} href={tool.href} className="flex min-w-0 flex-col items-center gap-1.5 rounded-md px-1 py-2 text-center no-underline active:bg-zinc-50">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tool.color}`}>
                <ToolIcon name={tool.icon} />
              </span>
              <span className="line-clamp-2 min-h-[2rem] text-[11px] leading-4 text-zinc-700">{tool.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Two-column layout: left sidebar (user info + nav) and main content slot.
 * Use for /user/purchase, /user/account/profile, etc.
 */
function UserDashboardLayoutContent({ children }: UserDashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isLoggedIn, authResolved, verifySession, user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [guardLoading, setGuardLoading] = useState(true);
  const [siteMessageUnreadCount, setSiteMessageUnreadCount] = useState(0);
  const [popupMessage, setPopupMessage] = useState<BuyerSiteMessage | null>(null);
  const searchQuery = searchParams.toString();
  const sellerPortalHref = useMemo(() => getSellerPortalBaseUrl(), []);
  const shouldRedirectToSellerPortal = shouldUseSellerPortal(user);

  const nextPath = useMemo(() => {
    return `${pathname}${searchQuery ? `?${searchQuery}` : ""}`;
  }, [pathname, searchQuery]);

  const loginHref = useMemo(() => `/login?next=${encodeURIComponent(nextPath)}`, [nextPath]);
  const currentLabel = useMemo(() => getCurrentNavLabel(pathname), [pathname]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname, searchQuery]);

  useEffect(() => {
    if (!authResolved) {
      setGuardLoading(true);
      return;
    }

    if (!isLoggedIn) {
      setGuardLoading(false);
      router.replace(loginHref);
      return;
    }

    if (shouldRedirectToSellerPortal) {
      setGuardLoading(false);
      window.location.href = sellerPortalHref;
      return;
    }

    let active = true;
    setGuardLoading(true);

    void verifySession().then((valid) => {
      if (!active) return;
      if (!valid) {
        router.replace(loginHref);
        return;
      }
      setGuardLoading(false);
    });

    return () => {
      active = false;
    };
  }, [authResolved, isLoggedIn, loginHref, router, sellerPortalHref, shouldRedirectToSellerPortal, verifySession]);

  useEffect(() => {
    if (!authResolved || !isLoggedIn || shouldRedirectToSellerPortal) return undefined;

    const revalidateSession = () => {
      void verifySession().then((valid) => {
        if (!valid) {
          router.replace(loginHref);
        }
      });
    };

    const intervalId = window.setInterval(revalidateSession, 60000);
    const handleFocus = () => revalidateSession();
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        revalidateSession();
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [authResolved, isLoggedIn, loginHref, router, shouldRedirectToSellerPortal, verifySession]);

  useEffect(() => {
    if (!authResolved || !isLoggedIn || shouldRedirectToSellerPortal) return undefined;

    let active = true;

    async function loadSiteMessages() {
      try {
        const response = await getBuyerSiteMessages();
        if (!active) return;

        const messages = extractSiteMessages(response);
        setSiteMessageUnreadCount(messages.filter((message) => message.unread).length);
        setPopupMessage(messages.find((message) => message.show_popup) ?? null);
      } catch (error) {
        console.error("Failed to load site messages:", error);
      }
    }

    void loadSiteMessages();

    return () => {
      active = false;
    };
  }, [authResolved, isLoggedIn, shouldRedirectToSellerPortal]);

  const closePopupMessage = () => {
    const message = popupMessage;
    setPopupMessage(null);
    if (!message) return;

    setSiteMessageUnreadCount((count) => Math.max(0, count - (message.unread ? 1 : 0)));
    void markBuyerSiteMessageSeen(message.id).catch((error) => {
      console.error("Failed to mark site message as seen:", error);
    });
  };

  useEffect(() => {
    if (!sidebarOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = previousOverflow;
    };
  }, [sidebarOpen]);

  if (!authResolved || guardLoading || !isLoggedIn || shouldRedirectToSellerPortal) {
    return <DashboardPageSkeleton />;
  }

  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 transition-all duration-300 ease-in-out"
      id="user-dashboard"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-8 pt-4 sm:px-6 lg:px-0 lg:pb-12 lg:pt-5">
        <div className="sticky top-0 z-20 mb-4 flex items-center justify-between rounded-sm bg-white px-4 py-3 shadow-sm lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/70"
            aria-label="Open account menu"
          >
            <MenuIcon />
          </button>
          <div className="min-w-0 flex-1 px-3 text-center">
            <div className="text-[11px] uppercase tracking-[0.14em] text-black/40">Buyer Account</div>
            <div className="truncate text-sm font-medium text-black/80">{currentLabel}</div>
          </div>
          <div className="w-10" aria-hidden />
        </div>

        {pathname !== "/user" ? <MobileAccountOverview name={user?.name || user?.username} /> : null}

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <div
            className={`fixed inset-0 z-[1040] bg-black/40 transition-opacity duration-200 lg:hidden ${
              sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={() => setSidebarOpen(false)}
            aria-hidden={!sidebarOpen}
          />

          <aside
            className={`fixed left-0 top-0 z-[1050] flex h-full w-[85vw] max-w-[320px] flex-col bg-[#fafafa] px-4 shadow-xl transition-transform duration-200 lg:static lg:h-auto lg:w-auto lg:max-w-none lg:bg-transparent lg:px-0 lg:shadow-none ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
            aria-label="Account navigation"
          >
            <div className="flex items-center justify-between border-b border-black/8 py-4 lg:hidden">
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-black/40">Navigation</div>
                <div className="text-sm font-medium text-black/80">{currentLabel}</div>
              </div>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/70"
                aria-label="Close account menu"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 lg:overflow-visible lg:py-0">
              <UserSidebar
                className="w-full lg:w-44"
                onNavigate={() => setSidebarOpen(false)}
                siteMessageUnreadCount={siteMessageUnreadCount}
              />
            </div>
          </aside>

          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
      {popupMessage ? (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/45 px-4 py-6">
          <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-[#ee4d2d] px-4 py-3 text-white">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">Unread message</div>
                <div className="text-sm font-semibold">{popupMessage.title || "System information"}</div>
              </div>
              <button
                type="button"
                onClick={closePopupMessage}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                aria-label="Close message"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="space-y-3 px-5 py-4 text-sm leading-6 text-zinc-700">
              <p className="whitespace-pre-line">{popupMessage.body || popupMessage.content || "A new account update is available."}</p>
              <div className="text-xs font-medium text-zinc-400">InstShopee Team</div>
            </div>
            <div className="flex justify-end border-t border-zinc-100 px-5 py-3">
              <button
                type="button"
                onClick={closePopupMessage}
                className="rounded-sm bg-[#ee4d2d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d73211]"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
  return (
    <Suspense fallback={<DashboardPageSkeleton />}>
      <UserDashboardLayoutContent>{children}</UserDashboardLayoutContent>
    </Suspense>
  );
}
