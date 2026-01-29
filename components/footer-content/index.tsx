import { InfoSection } from "./info-section";
import { TrendingPages } from "./trending-pages";
import { Categories } from "./categories";
import { mockFooterContentConfig } from "./data";

export function FooterContent() {
  return (
    <footer
      role="contentinfo"
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight bg-white [border-top-style:solid] min-w-[75rem] border-t-4 text-black/54 border-t-red-500 mt-10"
      id="component"
    >
      <div className="[border-bottom-style:solid] w-[75rem] mt-16 mx-auto pb-8 border-b border-b-black/9">
        <div>
          <div>
            <div>
              <InfoSection />
            </div>
          </div>
        </div>
        <div>
          <TrendingPages pages={mockFooterContentConfig.trendingPages} />
        </div>
      </div>
      <Categories categories={mockFooterContentConfig.categories} />
    </footer>
  );
}
