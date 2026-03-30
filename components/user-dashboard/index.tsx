"use client";

import { Suspense, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth/auth-context";
import { DashboardPageSkeleton } from "./dashboard-page-skeleton";
import { SIDEBAR_NAV } from "./data";
import { UserSidebar } from "./user-sidebar";

interface UserDashboardLayoutProps {
  children: ReactNode;
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

/**
 * Two-column layout: left sidebar (user info + nav) and main content slot.
 * Use for /user/purchase, /user/account/profile, etc.
 */
function UserDashboardLayoutContent({ children }: UserDashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isLoggedIn, authResolved, verifySession } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [guardLoading, setGuardLoading] = useState(true);
  const searchQuery = searchParams.toString();

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
  }, [authResolved, isLoggedIn, loginHref, router, verifySession]);

  useEffect(() => {
    if (!authResolved || !isLoggedIn) return undefined;

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
  }, [authResolved, isLoggedIn, loginHref, router, verifySession]);

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

  if (!authResolved || guardLoading || !isLoggedIn) {
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
              <UserSidebar className="w-full lg:w-44" onNavigate={() => setSidebarOpen(false)} />
            </div>
          </aside>

          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
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
