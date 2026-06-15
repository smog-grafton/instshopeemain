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
      "2.2 Sale is live. Claim $10 offers, stack more 2.2 vouchers, and unlock premium rewards before checkout.",
    smallIcon: NOTIFICATION_SMALL_ICONS[0],
    banner: NOTIFICATION_BANNERS[0],
  },
  {
    id: "2",
    title: "New to VIP? Get $5 OFF",
    description:
      "Start your VIP journey today with a $5 no-minimum-spend voucher and a free 1-month VIP trial.",
    smallIcon: NOTIFICATION_SMALL_ICONS[1],
  },
  {
    id: "3",
    title: "Premium vouchers up to $800",
    description:
      "Premium vouchers are ready. Redeem at 8PM and enjoy up to 40% off from featured brands.",
    smallIcon: NOTIFICATION_SMALL_ICONS[0],
    banner: NOTIFICATION_BANNERS[1],
  },
  {
    id: "4",
    title: "New to VIP? Get $5 OFF",
    description:
      "Start your VIP journey today with a $5 no-minimum-spend voucher and a free 1-month VIP trial.",
    smallIcon: NOTIFICATION_SMALL_ICONS[1],
  },
  {
    id: "5",
    title: "0% Sales Charge*",
    description:
      "Kickstart your rewards journey from $10 with simple, fast, beginner-friendly offers.",
    smallIcon: NOTIFICATION_SMALL_ICONS[1],
  },
];
