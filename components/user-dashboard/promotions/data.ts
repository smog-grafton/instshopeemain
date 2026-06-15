/**
 * Mock data for Promotions (notifications/promotion page).
 * Uses local images from public/images/common/promo.
 */

export interface PromoItem {
  id: string;
  title: string;
  description: string;
  /** Small icon 80x80 - use small.png or small2.png */
  smallIconUrl: string;
  /** Optional embedded banner image (e.g. voucher graphic). */
  bannerImageUrl?: string;
  /** Display date/time */
  dateTime: string;
}

const SMALL = "/images/common/promo/small.png";
const SMALL2 = "/images/common/promo/small2.png";
const BANNER = "/images/common/promo/banner.png";
const BANNER1 = "/images/common/promo/banner1.png";
const BANNER2 = "/images/common/promo/banner2.png";
const BANNER3 = "/images/common/promo/banner3.png";
const BANNER4 = "/images/common/promo/banner4.png";

export const MOCK_PROMOS: PromoItem[] = [
  {
    id: "1",
    title: "IT'S RAINING VOUCHERS?!",
    description:
      "More vouchers are live. Claim a surprise $5 off voucher and fresh deal drops every 10 minutes starting 11PM.",
    smallIconUrl: SMALL2,
    dateTime: "01-02-2026 18:12",
  },
  {
    id: "2",
    title: "$10 vouchers everywhere",
    description:
      "WAH gila! 🤯 Crazy Voucher Drop LIVE NOW! 😎 Jangan lupa stack dengan 2.2 Top Deals bila checkout. REGISTER Shopee VIP & get EXTRA vouchers untuk double up your 2.2 savings! ✨ Cepat claim & checkout sekarang sebelum semua habis! 💥 👉",
    smallIconUrl: SMALL2,
    bannerImageUrl: BANNER,
    dateTime: "01-02-2026 15:56",
  },
  {
    id: "3",
    title: "2.2 MULA SEKARANG! 🚨",
    description:
      "2.2 Sale is live. Claim $10 offers, stack more vouchers, and unlock premium rewards before checkout.",
    smallIconUrl: SMALL,
    bannerImageUrl: BANNER1,
    dateTime: "01-02-2026 14:30",
  },
  {
    id: "4",
    title: "New to VIP? Get $5 OFF",
    description:
      "Start your VIP journey today with a $5 no-minimum-spend voucher and a free 1-month VIP trial.",
    smallIconUrl: SMALL2,
    dateTime: "01-02-2026 12:00",
  },
  {
    id: "5",
    title: "Premium vouchers up to $800",
    description:
      "Premium vouchers are ready. Redeem at 8PM and enjoy up to 40% off from featured brands.",
    smallIconUrl: SMALL,
    bannerImageUrl: BANNER2,
    dateTime: "31-01-2026 20:00",
  },
  {
    id: "6",
    title: "0% Sales Charge* 📈",
    description:
      "Kickstart your rewards journey from $10 with simple, fast, beginner-friendly offers.",
    smallIconUrl: SMALL2,
    bannerImageUrl: BANNER3,
    dateTime: "31-01-2026 09:15",
  },
];
