/**
 * Mock data and config for User Dashboard (sidebar, profile, etc.)
 */

export interface UserProfile {
  username: string;
  name: string;
  email: string;
  emailMasked: string;
  phoneNumber: string | null;
  avatarUrl: string;
  gender: "male" | "female" | "other" | null;
  dateOfBirth: { date: number | null; month: number | null; year: number | null };
}

export interface NavItemChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: "user" | "balance" | "order" | "message" | "site" | "billing" | "wallet" | "bank" | "address" | "store" | "history";
  children?: NavItemChild[];
}

export const USER_ACCOUNT_ICON = "/images/common/user/account/avatar.png";
export const MYPURCHASE_ICON = "/images/common/user/account/mypurchase.png";
export const NOTIFICATION_ICON = "/images/common/user/account/notification.png";
export const MYVOUCHER_ICON = "/images/common/user/account/myvoucher.png";
export const COIN_ICON = "/images/common/user/account/coin.png";
/** Storefront icon for “Apply for a store” (seller centre). */
export const APPLY_STORE_ICON = "/images/common/user/account/store.svg";

/**
 * Seller centre root — same as top navbar “Seller Centre” (`NEXT_PUBLIC_SELLER_CENTRE_URL`).
 * The store app decides onboarding vs dashboard after login.
 */
export const APPLY_FOR_STORE_HREF = (() => {
  const base = (process.env.NEXT_PUBLIC_SELLER_CENTRE_URL || "").replace(/\/$/, "");
  return base || "#";
})();

export const SIDEBAR_NAV: NavItem[] = [
  {
    label: "My account",
    href: "/user",
    icon: "user",
  },
  {
    label: "Current balance",
    href: "/user/current-balance",
    icon: "balance",
  },
  {
    label: "My Order",
    href: "/user/my-order",
    icon: "order",
  },
  {
    label: "My message",
    href: "/user/my-message",
    icon: "message",
  },
  {
    label: "Site message",
    href: "/user/site-message",
    icon: "site",
  },
  {
    label: "Billing Details",
    href: "/user/billing-details",
    icon: "billing",
  },
  {
    label: "Recharge record",
    href: "/user/recharge-record",
    icon: "wallet",
  },
  {
    label: "Withdrawals record",
    href: "/user/withdrawals-record",
    icon: "wallet",
  },
  {
    label: "Withdraw funds",
    href: "/user/withdraw",
    icon: "wallet",
  },
  {
    label: "Wallet management",
    href: "/user/wallet-management",
    icon: "wallet",
  },
  {
    label: "Bank card management",
    href: "/user/bank-card-management",
    icon: "bank",
  },
  {
    label: "Shipping address management",
    href: "/user/shipping-address-management",
    icon: "address",
  },
  {
    label: "Apply for merchant",
    href: "/user/apply-for-merchant",
    icon: "store",
  },
  {
    label: "Stores you follow",
    href: "/user/stores-you-follow",
    icon: "store",
  },
  {
    label: "Browsing history",
    href: "/user/browsing-history",
    icon: "history",
  },
];
