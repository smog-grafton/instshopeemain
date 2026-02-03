/**
 * Shop vouchers section data.
 * Replace with API response later (Laravel).
 */

export interface ShopVoucher {
  id: string;
  /** e.g. "RM6 off", "15% off", "10% off" */
  title: string;
  /** e.g. "Min. Spend RM6", "Min. Spend RM50 Capped at RM8" */
  description: string;
  /** Optional tag e.g. "Shop Welcome Voucher", "Specific Product(s)" */
  tag?: string;
  validTill: string;
  /** Claim button label */
  claimLabel?: string;
  /** Badge count shown on card e.g. "x3", "x10" */
  badgeCount?: number;
  /** Progress 0-100 for limited vouchers (shows progress bar when set) */
  usedPercent?: number;
  /** Voucher count to claim (shown as +1, +3 etc.) */
  claimCount?: number;
}

export function getMockShopVouchers(_shopSlug: string): ShopVoucher[] {
  return [
    {
      id: "1",
      title: "RM6 off",
      description: "Min. Spend RM6",
      tag: "Shop Welcome Voucher",
      validTill: "26.02.2026",
      badgeCount: undefined,
      claimCount: 1,
    },
    {
      id: "2",
      title: "15% off",
      description: "Min. Spend RM50 Capped at RM8",
      validTill: "14.02.2026",
      badgeCount: 3,
      claimCount: 3,
    },
    {
      id: "3",
      title: "10% off",
      description: "Min. Spend RM50 Capped at RM5",
      validTill: "14.02.2026",
      badgeCount: 3,
      claimCount: 3,
    },
    {
      id: "4",
      title: "7% off",
      description: "Min. Spend RM100 Capped at RM10",
      validTill: "26.02.2026",
      claimCount: 1,
    },
    {
      id: "5",
      title: "30% off",
      description: "Min. Spend RM30 Capped at RM10",
      tag: "Specific Product(s)",
      validTill: "28.02.2026",
      usedPercent: 71,
      badgeCount: 10,
      claimCount: 10,
    },
  ];
}
