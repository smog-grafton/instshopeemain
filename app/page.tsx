import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { HomeBanners } from "@/components/home-banners";
import { HomeCategories } from "@/components/home-categories";
import { ShockingSale } from "@/components/shocking-sale";
import { SkinnyBanner } from "@/components/skinny-banner";
import { MallHeader } from "@/components/mall-header";
import { mockMallHeaderConfig } from "@/components/mall-header/data";
import { MallBanner } from "@/components/mall-header/mall-banner";
import { MallProductsSection } from "@/components/mall-header/mall-products-section";
import { TopProducts } from "@/components/top-products";
import { DailyDiscover } from "@/components/daily-discover";
import { FloatingPromo } from "@/components/floating-promo";
import { ChatWidget } from "@/components/chat-widget";
import { FooterContent } from "@/components/footer-content";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <HomeBanners />
      <HomeCategories />
      <ShockingSale />
      <SkinnyBanner />
      <div className="w-full max-w-[1200px] mx-auto mt-5 px-3 sm:px-4 md:px-6">
        <div className="bg-white min-h-72">
          <MallHeader config={mockMallHeaderConfig} />
          <div>
            <MallBanner imageSrc="/images/home/mall/shoppe-mall-banner.png" alt="Shopee Mall Banner" />
            <MallProductsSection />
          </div>
        </div>
        <div className="bg-white mt-5 rounded-sm shadow-sm">
          <TopProducts />
        </div>
        <div className="mt-8">
          <DailyDiscover />
        </div>
      </div>
      <FloatingPromo />
      <FooterContent />
      <SiteFooter />
    </div>
  );
}
