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
      "More vouchers again? How CRAZY is that?! 😍 Dapatkan Surprise RM5 OFF Voucher & tebus Baucar Runtuh Gempak on every 10 mins starting 11PM! 🤫 Shhh… nak lagi eksklusif? Rebut Tawaran Hebat 2.2, ada Dyson Airstrait @ RM1,875! Checkout sebelum habis! 🛒 💨",
    smallIconUrl: SMALL2,
    dateTime: "01-02-2026 18:12",
  },
  {
    id: "2",
    title: "Baucar RM10 EVERWHERE?!",
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
      "🚀 2.2 Sale dah ON! Rebut RM10 Tawaran Padu seperti Modenas Motor & Ogawa Massage Chair NOW! Checkout 2.2 Deals & dapatkan lebih penjimatan dengan 2.2 Vouchers! Ada Baucar Padu RM800 + REGISTER Shopee VIP & get baucar RM1,000 OFF! CHECKOUT NOW. 💨",
    smallIconUrl: SMALL,
    bannerImageUrl: BANNER1,
    dateTime: "01-02-2026 14:30",
  },
  {
    id: "4",
    title: "🎉 New to VIP? Get RM5 OFF",
    description:
      "Start your VIP journey today! 👑 Enjoy RM5 OFF No Min. Spend voucher and FREE 1-month VIP trial when you subscribe. Unlock exclusive perks and extra savings every time you shop. Subscribe now and enjoy VIP benefits! 👉",
    smallIconUrl: SMALL2,
    dateTime: "01-02-2026 12:00",
  },
  {
    id: "5",
    title: "Baucar padu @ RM800! ✊",
    description:
      "Baucar padu RM800 sudah sedia menanti! 🎯 Tebus & guna tepat @ 8PM malam ini! Kalau terlepas, memang rugi! Nikmati diskaun hingga 40% OFF dengan baucar jenama popular seperti DREAME, SKIN1004, Anakku & banyak lagi. Semak keluar @ 8PM malam ini! ⭐",
    smallIconUrl: SMALL,
    bannerImageUrl: BANNER2,
    dateTime: "31-01-2026 20:00",
  },
  {
    id: "6",
    title: "0% Sales Charge* 📈",
    description:
      "Kickstart your investment journey with just RM10! 📈 Enjoy 0% sales charge* on ShopeePay Invest — simple, fast, and beginner-friendly. *T&Cs apply. Learn more. 👉",
    smallIconUrl: SMALL2,
    bannerImageUrl: BANNER3,
    dateTime: "31-01-2026 09:15",
  },
];
