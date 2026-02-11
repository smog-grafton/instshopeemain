/**
 * Voucher wallet: tabs config and types.
 * No mock data — data comes from API only.
 */

export interface VoucherItem {
  id: string;
  /** Path to logo image (e.g. /images/common/voucher/15.png) */
  logoImage: string;
  /** Label on left strip: GOLD, APPLE, CASHBACK, etc. */
  typeLabel: string;
  /** Main title e.g. "15% off Capped at RM500" */
  title: string;
  /** Min spend text e.g. "Min. Spend RM60" */
  minSpend: string;
  /** Red tag label e.g. "Selected Products only", "Cashback Sellers" */
  tagLabel: string;
  /** Expiring text e.g. "Expiring: 22 hours left" */
  expiringText: string;
  /** T&C link href */
  termsHref: string;
  /** If true, show sold-out state (use sold.png) */
  soldOut?: boolean;
  /** Category for filtering: all, shopee, shopeevip, shopee-food, shop, digital, shopeepay, partner, financial */
  category: string;
}

export interface VoucherTab {
  id: string;
  label: string;
  count: number;
}

/** Logo image paths under /images/common/voucher/ */
export const VOUCHER_LOGO_IMAGES = [
  "/images/common/voucher/6.png",
  "/images/common/voucher/7.png",
  "/images/common/voucher/8.png",
  "/images/common/voucher/10.png",
  "/images/common/voucher/12.png",
  "/images/common/voucher/15.png",
  "/images/common/voucher/16.png",
  "/images/common/voucher/18.png",
  "/images/common/voucher/20.png",
  "/images/common/voucher/22.png",
  "/images/common/voucher/25.png",
] as const;

export const SOLD_IMAGE = "/images/common/voucher/sold.png";

export const VOUCHER_TABS: VoucherTab[] = [
  { id: "all", label: "All", count: 256 },
  { id: "shopee", label: "Shopee", count: 255 },
  { id: "shopeevip", label: "ShopeeVIP", count: 0 },
  { id: "shopee-food", label: "ShopeeFood", count: 0 },
  { id: "shop", label: "Shop", count: 1 },
  { id: "digital", label: "Digital Products", count: 0 },
];

export const MORE_TABS: VoucherTab[] = [
  { id: "shopeepay", label: "ShopeePay Vouchers", count: 0 },
  { id: "partner", label: "Partner", count: 0 },
  { id: "financial", label: "Financial Products", count: 0 },
];
