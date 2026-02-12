"use client";

import { useEffect, useState } from "react";
import { InfoSection } from "./info-section";
import { TrendingPages } from "./trending-pages";
import { Categories } from "./categories";
import { getFooterContentSafe, type ApiFooterTrendingPage, type ApiFooterCategory } from "@/lib/api-client";
import type { TrendingPage, Category } from "./data";
import { WobbleLoader } from "@/components/common/wobble-loader";

function transformTrendingPage(page: ApiFooterTrendingPage): TrendingPage {
  return {
    text: page.text,
    href: page.href,
  };
}

function transformCategory(category: ApiFooterCategory): Category {
  return {
    title: category.title,
    titleHref: category.titleHref,
    links: category.links.map((link) => ({
      text: link.text,
      href: link.href,
    })),
  };
}

export function FooterContent() {
  const [trendingPages, setTrendingPages] = useState<TrendingPage[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFooterContent() {
      try {
        const data = await getFooterContentSafe();
        setTrendingPages(data.trendingPages.map(transformTrendingPage));
        setCategories(data.categories.map(transformCategory));
      } catch (error) {
        console.error("Failed to fetch footer content:", error);
        setTrendingPages([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchFooterContent();
  }, []);

  if (loading) {
    return (
      <footer
        role="contentinfo"
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight bg-white [border-top-style:solid] w-full border-t-4 text-black/54 border-t-red-500 mt-10"
        id="component"
      >
        <div className="w-full max-w-[75rem] mt-16 mx-auto pb-8 px-3 sm:px-4 md:px-6">
          <WobbleLoader />
        </div>
      </footer>
    );
  }

  return (
    <footer
      role="contentinfo"
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight bg-white [border-top-style:solid] w-full border-t-4 text-black/54 border-t-red-500 mt-10"
      id="component"
    >
      <div className="[border-bottom-style:solid] w-full max-w-[75rem] mt-16 mx-auto pb-8 border-b border-b-black/9 px-3 sm:px-4 md:px-6">
        <div>
          <div>
            <div>
              <InfoSection />
            </div>
          </div>
        </div>
        <div>
          <TrendingPages pages={trendingPages} />
        </div>
      </div>
      <Categories categories={categories} />
    </footer>
  );
}
