"use client";

import { BannerCarousel } from "./banner-carousel";
import { SideBanners } from "./side-banners";
import { FeatureIcons } from "./feature-icons";
import { useEffect, useState } from "react";
import { getUiBlocks, resolveCountryIdForBrowser } from "@/lib/api-client";
import type { BannerItem, FeatureIcon } from "./data";

export function HomeBanners() {
  const [mainBanners, setMainBanners] = useState<BannerItem[]>([]);
  const [sideBanners, setSideBanners] = useState<BannerItem[]>([]);
  const [featureIcons, setFeatureIcons] = useState<FeatureIcon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBanners() {
      try {
        const countryId = await resolveCountryIdForBrowser();
        const [mainBlocks, sideBlocks, iconBlocks] = await Promise.all([
          getUiBlocks({ key: "home_banner_main", country_id: countryId }),
          getUiBlocks({ key: "home_banner_side", country_id: countryId }),
          getUiBlocks({ key: "home_feature_icon", country_id: countryId }),
        ]);

        setMainBanners(
          mainBlocks.map((b) => ({
            href: b.href,
            imageSrc: b.imageSrc || "",
            alt: b.title || "Banner",
          }))
        );

        setSideBanners(
          sideBlocks.map((b) => ({
            href: b.href,
            imageSrc: b.imageSrc || "",
            alt: b.title || "Banner",
          }))
        );

        setFeatureIcons(
          iconBlocks.map((b) => ({
            href: b.href,
            iconUrl: b.imageSrc || "",
            label: (b.label || b.title || "").trim(),
          }))
        );
      } catch (error) {
        console.error("Failed to load banners:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBanners();
  }, []);

  if (loading) {
    return (
      <div className="text-sm leading-tight text-black/80 bg-[rgb(245,245,245)] pt-6 h-60 flex items-center justify-center">
        <div className="text-gray-500">Loading banners...</div>
      </div>
    );
  }

  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] bg-[rgb(245,245,245)] pt-4 text-sm leading-tight text-black/80 sm:pt-6"
      id="component"
    >
      <section
        id="HomePageCarouselBannerSection"
        className="mx-auto flex w-full max-w-[1200px] justify-center px-3 sm:px-4"
        aria-label="Banner"
      >
        <div className="w-full max-w-[1200px]">
          <div className="grid gap-1.5 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {mainBanners.length > 0 && <BannerCarousel banners={mainBanners} />}
            {sideBanners.length > 0 && <SideBanners banners={sideBanners} />}
          </div>
        </div>
      </section>
      {featureIcons.length > 0 && <FeatureIcons icons={featureIcons} />}
    </div>
  );
}
