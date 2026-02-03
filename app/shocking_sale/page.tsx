import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import {
  FlashSaleHeaderBar,
  ShockingSaleHero,
  SessionSlotBar,
  CategoryNavBar,
  ProductGridWithLoader,
  defaultSessionSlots,
  defaultCategoryTabs,
  defaultMoreMenuItems,
} from "@/components/shocking-sale-page";
import { mockShockingSaleConfig } from "@/components/shocking-sale/data";
import { SiteFooter } from "@/components/site-footer";

export default function ShockingSalePage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto py-2">
          <FlashSaleHeaderBar config={mockShockingSaleConfig} />
        </div>
      </section>
      <ShockingSaleHero />
      <SessionSlotBar slots={defaultSessionSlots} />
      <CategoryNavBar
        tabs={defaultCategoryTabs}
        moreMenuItems={defaultMoreMenuItems}
        activeCategoryId={0}
      />
      <section className="bg-[rgb(245,245,245)]">
        <ProductGridWithLoader />
      </section>
      <SiteFooter />
    </div>
  );
}
