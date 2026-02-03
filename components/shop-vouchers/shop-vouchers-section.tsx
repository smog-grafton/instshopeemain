"use client";

import { VoucherCarousel } from "./voucher-carousel";
import type { ShopVoucher } from "./data";

interface ShopVouchersSectionProps {
  vouchers: ShopVoucher[];
}

/**
 * Shop vouchers section: horizontal carousel of voucher cards with left/right
 * slider arrows. Isolated section with its own white background; grey gap above
 * separates it from the shop profile/nav bar (no shared white bg).
 */
export function ShopVouchersSection({ vouchers }: ShopVouchersSectionProps) {
  return (
    <div className="mt-4 rounded-sm bg-white py-5 px-[30px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <VoucherCarousel vouchers={vouchers} />
    </div>
  );
}
