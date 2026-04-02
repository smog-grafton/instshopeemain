export type SellerStatus = "pending" | "approved" | "rejected" | "suspended" | null | undefined;

export interface AccountSurfaceUser {
  role?: string | null;
  buyerPortalEnabled?: boolean;
  canAccessBuyerPortal?: boolean;
  isSeller?: boolean;
  sellerStatus?: SellerStatus;
  prefersSellerPortal?: boolean;
}

export interface AccountMenuItem {
  label: string;
  href: string;
  external?: boolean;
}

const SELLER_PORTAL_STATUSES: SellerStatus[] = ["approved", "suspended"];

function isAbsoluteUrl(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}

function getBrowserOrigin(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.location.origin;
}

function getUrlOrigin(value: string): string | null {
  try {
    const base = getBrowserOrigin() ?? "http://localhost";
    return new URL(value, base).origin;
  } catch {
    return null;
  }
}

function getUrlPathname(value: string): string | null {
  try {
    const base = getBrowserOrigin() ?? "http://localhost";
    return new URL(value, base).pathname;
  } catch {
    return null;
  }
}

function isSellerPortalPath(path: string): boolean {
  return path === "/portal" || path.startsWith("/portal/");
}

function isAuthPath(path: string): boolean {
  return path === "/login" || path.startsWith("/login?") || path === "/register" || path.startsWith("/register?") || path === "/logout" || path.startsWith("/logout?");
}

function isSellerPortalUrl(value: string): boolean {
  if (!value) {
    return false;
  }

  if (!isAbsoluteUrl(value)) {
    return isSellerPortalPath(value);
  }

  const sellerOrigin = getUrlOrigin(getSellerPortalBaseUrl());
  const valueOrigin = getUrlOrigin(value);

  return Boolean(sellerOrigin && valueOrigin && sellerOrigin === valueOrigin);
}

function isAllowedBuyerNextUrl(value: string): boolean {
  if (!value || value === "/") {
    return false;
  }

  if (isSellerPortalUrl(value)) {
    return false;
  }

  if (!isAbsoluteUrl(value)) {
    return !isAuthPath(value);
  }

  const browserOrigin = getBrowserOrigin();
  const targetOrigin = getUrlOrigin(value);
  const targetPathname = getUrlPathname(value);

  return Boolean(browserOrigin && targetOrigin && browserOrigin === targetOrigin && targetPathname && !isAuthPath(targetPathname));
}

function isBuyerRestrictedPath(path: string): boolean {
  return (
    path === "/user" ||
    path.startsWith("/user/") ||
    path === "/checkout" ||
    path.startsWith("/checkout?") ||
    path === "/login" ||
    path === "/register" ||
    path === "/logout"
  );
}

export function getSellerPortalBaseUrl(): string {
  const configured = (process.env.NEXT_PUBLIC_SELLER_CENTRE_URL || "").replace(/\/$/, "");

  if (configured) {
    return configured;
  }

  if (typeof window !== "undefined") {
    let host = window.location.hostname;

    if (host.startsWith("www.")) {
      host = host.slice(4);
    }

    const protocol = window.location.protocol || "https:";
    return `${protocol}//seller.${host}`;
  }

  return "#";
}

export function getSellerPortalHref(path = ""): string {
  const base = getSellerPortalBaseUrl().replace(/\/$/, "");

  if (!path) {
    return base;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function shouldUseSellerPortal(user?: AccountSurfaceUser | null): boolean {
  if (!user) {
    return false;
  }

  if (typeof user.prefersSellerPortal === "boolean") {
    return user.prefersSellerPortal;
  }

  if (typeof user.canAccessBuyerPortal === "boolean") {
    return !user.canAccessBuyerPortal;
  }

  return (
    user.role === "seller" ||
    user.buyerPortalEnabled === false ||
    Boolean(user.isSeller) ||
    SELLER_PORTAL_STATUSES.includes(user.sellerStatus)
  );
}

export function canAccessBuyerPortal(user?: AccountSurfaceUser | null): boolean {
  if (!user) {
    return false;
  }

  if (typeof user.canAccessBuyerPortal === "boolean") {
    return user.canAccessBuyerPortal;
  }

  if (typeof user.prefersSellerPortal === "boolean") {
    return !user.prefersSellerPortal;
  }

  return !shouldUseSellerPortal(user);
}

export function getPrimaryAccountHref(user?: AccountSurfaceUser | null): string {
  return shouldUseSellerPortal(user) ? getSellerPortalBaseUrl() : "/user/account/profile";
}

export function resolvePostAuthHref(
  user?: AccountSurfaceUser | null,
  nextUrl?: string | null
): string {
  const trimmedNext = (nextUrl ?? "").trim();

  if (!shouldUseSellerPortal(user)) {
    if (!trimmedNext || trimmedNext === "/") {
      return "/";
    }

    return isAllowedBuyerNextUrl(trimmedNext) ? trimmedNext : getPrimaryAccountHref(user);
  }

  if (!trimmedNext || trimmedNext === "/" || isBuyerRestrictedPath(trimmedNext)) {
    return getSellerPortalBaseUrl();
  }

  if (isAbsoluteUrl(trimmedNext)) {
    return trimmedNext;
  }

  return trimmedNext;
}

export function getAccountMenuItems(user?: AccountSurfaceUser | null): AccountMenuItem[] {
  if (!shouldUseSellerPortal(user)) {
    return [
      { label: "My Account", href: "/user/account/profile" },
      { label: "My Purchase", href: "/user/purchase" },
    ];
  }

  return [
    { label: "My Account", href: getSellerPortalBaseUrl(), external: true },
    { label: "My Orders", href: getSellerPortalHref("/portal/orders/my-orders"), external: true },
    { label: "My Products", href: getSellerPortalHref("/portal/products/my-products"), external: true },
  ];
}
