"use client";

import { useState, useEffect } from "react";
import { VoucherWalletHeader } from "./voucher-wallet-header";
import { AddVoucherForm } from "./add-voucher-form";
import { VoucherTabs } from "./voucher-tabs";
import { VoucherListWithLoader } from "./voucher-list-with-loader";
import { VoucherWalletSkeleton } from "./voucher-wallet-skeleton";
import { getVouchers } from "@/lib/api-client";
import type { VoucherItem, VoucherTab } from "./data";

export { VoucherWalletHeader } from "./voucher-wallet-header";
export { AddVoucherForm } from "./add-voucher-form";
export { VoucherTabs } from "./voucher-tabs";
export { VoucherCard } from "./voucher-card";
export { VoucherListWithLoader } from "./voucher-list-with-loader";
export {
  VOUCHER_TABS,
  MORE_TABS,
  type VoucherItem,
  type VoucherTab,
} from "./data";

/**
 * Voucher wallet main component: header, add voucher form, tabs, and voucher list with infinite scroll.
 */
export function VoucherWallet() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [vouchers, setVouchers] = useState<VoucherItem[]>([]);
  const [tabs, setTabs] = useState<VoucherTab[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVouchers() {
      setLoading(true);
      try {
        const category = activeTab === "all" ? undefined : activeTab;
        const response = await getVouchers(category);
        
        // Transform API vouchers to VoucherItem format
        const transformedVouchers: VoucherItem[] = response.vouchers.map((v: any) => ({
          id: v.id,
          logoImage: v.logoImage,
          typeLabel: v.typeLabel,
          title: v.title,
          minSpend: v.minSpend,
          tagLabel: v.tagLabel,
          expiringText: v.expiringText,
          termsHref: v.termsHref,
          soldOut: v.soldOut || false,
          category: v.category,
        }));
        
        setVouchers(transformedVouchers);
        
        // Use tabs from API if available, otherwise use default tabs
        if (response.tabs && response.tabs.length > 0) {
          setTabs(response.tabs.map((t: any) => ({
            id: t.id,
            label: t.label,
            count: t.count,
          })));
        }
      } catch (error) {
        console.error("Failed to load vouchers:", error);
        setVouchers([]);
      } finally {
        setLoading(false);
      }
    }
    loadVouchers();
  }, [activeTab]);

  const displayTabs = tabs.length > 0 ? tabs : [
    { id: "all", label: "All", count: vouchers.length },
    { id: "shopee", label: "Shopee", count: vouchers.filter(v => v.category === "shopee").length },
    { id: "shopeevip", label: "ShopeeVIP", count: vouchers.filter(v => v.category === "shopeevip").length },
    { id: "shopee-food", label: "ShopeeFood", count: vouchers.filter(v => v.category === "shopee-food").length },
    { id: "shop", label: "Shop", count: vouchers.filter(v => v.category === "shop").length },
    { id: "digital", label: "Digital Products", count: vouchers.filter(v => v.category === "digital").length },
  ];

  return (
    <div className="text-sm leading-tight text-black/80 bg-white grow overflow-x-hidden overflow-y-hidden shadow-sm px-8 py-6 rounded-sm w-[980px] ml-7 min-h-[400px]">
      {loading ? (
        <VoucherWalletSkeleton />
      ) : (
        <>
          <VoucherWalletHeader />
          <AddVoucherForm />
          <VoucherTabs
            tabs={displayTabs}
            moreTabs={[]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <VoucherListWithLoader key={activeTab} baseVouchers={vouchers} />
        </>
      )}
    </div>
  );
}
