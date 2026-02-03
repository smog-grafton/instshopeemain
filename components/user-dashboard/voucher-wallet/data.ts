/**
 * Voucher wallet: tabs config and mock voucher data.
 * Images from public/images/common/voucher/
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

const BASE_VOUCHERS: Omit<VoucherItem, "id">[] = [
  {
    logoImage: VOUCHER_LOGO_IMAGES[5],
    typeLabel: "GOLD",
    title: "15% off Capped at RM500",
    minSpend: "Min. Spend RM60",
    tagLabel: "Selected Products only",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[3],
    typeLabel: "APPLE",
    title: "9% off Capped at RM530",
    minSpend: "Min. Spend RM100",
    tagLabel: "iPhone 17 Pro",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[4],
    typeLabel: "CASHBACK",
    title: "18% off Capped at RM250",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[6],
    typeLabel: "CASHBACK",
    title: "10% off Capped at RM350",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[7],
    typeLabel: "CASHBACK",
    title: "8% off Capped at RM350",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[8],
    typeLabel: "CASHBACK",
    title: "12% off Capped at RM350",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[0],
    typeLabel: "CASHBACK",
    title: "10% off Capped at RM300",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[1],
    typeLabel: "CASHBACK",
    title: "8% off Capped at RM300",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[2],
    typeLabel: "CASHBACK",
    title: "12% off Capped at RM300",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[9],
    typeLabel: "CASHBACK",
    title: "15% off Capped at RM300",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[10],
    typeLabel: "CASHBACK",
    title: "25% off Capped at RM100",
    minSpend: "Min. Spend RM60",
    tagLabel: "Cashback Sellers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shopee",
  },
  {
    logoImage: VOUCHER_LOGO_IMAGES[5],
    typeLabel: "SHOP",
    title: "20% off Capped at RM150",
    minSpend: "Min. Spend RM50",
    tagLabel: "Shop Vouchers",
    expiringText: "Expiring: 22 hours left",
    termsHref: "/voucher/details?from_source=voucher-wallet",
    category: "shop",
  },
];

/** Base list for infinite scroll (ids assigned when extending). */
export const MOCK_VOUCHERS: VoucherItem[] = BASE_VOUCHERS.map((v, i) => ({
  ...v,
  id: `voucher-${i}`,
}));
