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
  iconPath: string;
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
    label: "My Account",
    href: "/user/account/profile",
    iconPath: USER_ACCOUNT_ICON,
    children: [
      { label: "Profile", href: "/user/account/profile" },
      { label: "Wallet", href: "/user/wallet" },
      { label: "Banks & Cards", href: "/user/account/payment" },
      { label: "Addresses", href: "/user/account/address" },
      { label: "Change Password", href: "/user/account/password" },
      { label: "Notification Settings", href: "/user/setting/notification/" },
      { label: "Privacy Settings", href: "/user/setting/privacy" },
    ],
  },
  {
    label: "My Purchase",
    href: "/user/purchase",
    iconPath: MYPURCHASE_ICON,
  },
  {
    label: "Notifications",
    href: "/user/notifications/order",
    iconPath: NOTIFICATION_ICON,
    children: [
      { label: "Order Updates", href: "/user/notifications/order" },
      { label: "Promotions", href: "/user/notifications/promotion" },
      { label: "Wallet Updates", href: "/user/notifications/wallet" },
      { label: "Shopee Updates", href: "/user/notifications/shopee" },
    ],
  },
  {
    label: "My Vouchers",
    href: "/user/voucher-wallet",
    iconPath: MYVOUCHER_ICON,
  },
  {
    label: "My Shopee Coins",
    href: "/user/coin",
    iconPath: COIN_ICON,
  },
  {
    label: "Apply for a store",
    href: APPLY_FOR_STORE_HREF,
    iconPath: APPLY_STORE_ICON,
  },
];
