"use client";

import { useState, useMemo } from "react";
import { VoucherWalletHeader } from "./voucher-wallet-header";
import { AddVoucherForm } from "./add-voucher-form";
import { VoucherTabs } from "./voucher-tabs";
import { VoucherListWithLoader } from "./voucher-list-with-loader";
import { VOUCHER_TABS, MORE_TABS, MOCK_VOUCHERS } from "./data";

export { VoucherWalletHeader } from "./voucher-wallet-header";
export { AddVoucherForm } from "./add-voucher-form";
export { VoucherTabs } from "./voucher-tabs";
export { VoucherCard } from "./voucher-card";
export { VoucherListWithLoader } from "./voucher-list-with-loader";
export {
  VOUCHER_TABS,
  MORE_TABS,
  MOCK_VOUCHERS,
  type VoucherItem,
  type VoucherTab,
} from "./data";

/**
 * Voucher wallet main component: header, add voucher form, tabs, and voucher list with infinite scroll.
 */
export function VoucherWallet() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredVouchers = useMemo(() => {
    if (activeTab === "all") {
      return MOCK_VOUCHERS;
    }
    return MOCK_VOUCHERS.filter((v) => v.category === activeTab);
  }, [activeTab]);

  return (
    <div className="text-sm leading-tight text-black/80 bg-white grow overflow-x-hidden overflow-y-hidden shadow-sm px-8 py-6 rounded-sm w-[980px] ml-7 min-h-[400px]">
      <VoucherWalletHeader />
      <AddVoucherForm />
      <VoucherTabs
        tabs={VOUCHER_TABS}
        moreTabs={MORE_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <VoucherListWithLoader key={activeTab} baseVouchers={filteredVouchers} />
    </div>
  );
}
