import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { HomeBanners } from "@/components/home-banners";
import { HomeCategories } from "@/components/home-categories";
import { ShockingSale } from "@/components/shocking-sale";
import { SkinnyBanner } from "@/components/skinny-banner";
import { MallHeader } from "@/components/mall-header";
import { mockMallHeaderConfig, mockMallProducts } from "@/components/mall-header/data";
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
      <SkinnyBanner
        imageUrl="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w1200_nl"
        imageUrl2x="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w2400_nl"
        webpUrl="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w1200_nl.webp"
        webpUrl2x="https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w2400_nl.webp"
        alt="Banner"
        links={[
          { href: "/m/welcome-series#1650601368285" },
          { href: "/m/welcome-series" },
          { href: "/collections/8843138" },
        ]}
      />
      <div className="w-[1200px] mx-auto mt-5">
        <div className="bg-white min-h-72">
          <MallHeader config={mockMallHeaderConfig} />
          <div>
            <MallBanner imageSrc="/images/home/mall/shoppe-mall-banner.png" alt="Shopee Mall Banner" />
            <MallProductsSection products={mockMallProducts} />
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
      <ChatWidget />
      <FooterContent />
      <SiteFooter />
    </div>
  );
}
