export const NOTIFICATION_SMALL_ICONS = [
  "/images/common/notification/small-icon.png",
  "/images/common/notification/small2.png",
] as const;

export const NOTIFICATION_BANNERS = [
  "/images/common/notification/1.png",
  "/images/common/notification/2.png",
] as const;

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  smallIcon: (typeof NOTIFICATION_SMALL_ICONS)[number];
  banner?: (typeof NOTIFICATION_BANNERS)[number];
}

export const notificationItems: NotificationItem[] = [
  {
    id: "1",
    title: "2.2 MULA SEKARANG! 🚦",
    description:
      "🚀 2.2 Sale dah ON! Rebut RM10 Tawaran Padu seperti Modenas Motor & Ogawa Massage Chair NOW! Checkout 2.2 Deals & dapatkan lebih penjimatan dengan 2.2 Vouchers! Ada Baucar Padu RM800 + REGISTER Shopee VIP & get baucar RM1,000 OFF! CHECKOUT NOW. 💨",
    smallIcon: NOTIFICATION_SMALL_ICONS[0],
    banner: NOTIFICATION_BANNERS[0],
  },
  {
    id: "2",
    title: "🎉 New to VIP? Get RM5 OFF",
    description:
      "Start your VIP journey today! 👑 Enjoy RM5 OFF No Min. Spend voucher and FREE 1-month VIP trial when you subscribe. Unlock exclusive perks and extra savings every time you shop. Subscribe now and enjoy VIP benefits! 👉",
    smallIcon: NOTIFICATION_SMALL_ICONS[1],
  },
  {
    id: "3",
    title: "Baucar padu @ RM800!✊",
    description:
      "Baucar padu RM800 sudah sedia menanti! 🎯 Tebus & guna tepat @ 8PM malam ini! Kalau terlepas, memang rugi! Nikmati diskaun hingga 40% OFF dengan baucar jenama popular seperti DREAME, SKIN1004, Anakku & banyak lagi. Semak keluar @ 8PM malam ini! ⭐",
    smallIcon: NOTIFICATION_SMALL_ICONS[0],
    banner: NOTIFICATION_BANNERS[1],
  },
  {
    id: "4",
    title: "🎉 New to VIP? Get RM5 OFF",
    description:
      "Start your VIP journey today! 👑 Enjoy RM5 OFF No Min. Spend voucher and FREE 1-month VIP trial when you subscribe. Unlock exclusive perks and extra savings every time you shop. Subscribe now and enjoy VIP benefits! 👉",
    smallIcon: NOTIFICATION_SMALL_ICONS[1],
  },
  {
    id: "5",
    title: "0% Sales Charge*",
    description:
      "Kickstart your investment journey with just RM10! 📈 Enjoy 0% sales charge* on ShopeePay Invest — simple, fast, and beginner-friendly. *T&Cs apply. Learn more. 👉",
    smallIcon: NOTIFICATION_SMALL_ICONS[1],
  },
];
