import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { HomeBanners } from "@/components/home-banners";
import { HomeCategories } from "@/components/home-categories";
import { ShockingSale } from "@/components/shocking-sale";
import { SkinnyBanner } from "@/components/skinny-banner";
import { HomeMallSection } from "@/components/home-mall-section";
import { TopProducts } from "@/components/top-products";
import { DailyDiscover } from "@/components/daily-discover";
import { FloatingPromo } from "@/components/floating-promo";
import { FooterContent } from "@/components/footer-content";
import { SiteFooter } from "@/components/site-footer";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      <HomeBanners />
      <HomeCategories />
      <ShockingSale />
      <SkinnyBanner />
      <HomeMallSection />
      <div className="mx-auto mt-5 w-full max-w-[1200px] px-3 sm:px-4 md:px-6">
        <div id="home-top-products" className="overflow-hidden bg-white shadow-sm">
          <TopProducts />
        </div>
        <div className="mt-8">
          <DailyDiscover />
        </div>
      </div>
      <FloatingPromo />
      <FooterContent />
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}
