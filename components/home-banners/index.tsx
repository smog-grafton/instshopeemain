import { BannerCarousel } from "./banner-carousel";
import { SideBanners } from "./side-banners";
import { FeatureIcons } from "./feature-icons";
import { mockHomeBannersConfig } from "./data";

export function HomeBanners() {
  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 bg-[rgb(245,245,245)] pt-6"
      id="component"
    >
      <section
        id="HomePageCarouselBannerSection"
        className="justify-center min-w-[1200px] flex"
        aria-label="Banner"
      >
        <div className="w-[1200px] h-60 flex">
          <BannerCarousel banners={mockHomeBannersConfig.mainBanners} />
          <SideBanners banners={mockHomeBannersConfig.sideBanners} />
        </div>
      </section>
      <FeatureIcons icons={mockHomeBannersConfig.featureIcons} />
    </div>
  );
}
