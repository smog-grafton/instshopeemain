import { LeftSection } from "./left-section";
import { RightSection } from "./right-section";
import { mockNavbarConfig, mockShopNavbarConfig } from "./data";
import type { NavbarConfig } from "./data";

export type TopNavbarVariant = "default" | "shop";

export interface TopNavbarProps {
  /** "shop" uses Shopee Home link and darker red background for shop/mall pages. */
  variant?: TopNavbarVariant;
  /** Optional config override; when variant is "shop", defaults to mockShopNavbarConfig. */
  config?: NavbarConfig;
}

const SHOP_TOP_BAR_BG = "rgb(208,1,27)";

export function TopNavbar({ variant = "default", config }: TopNavbarProps) {
  const resolvedConfig = config ?? (variant === "shop" ? mockShopNavbarConfig : mockNavbarConfig);
  const isShop = variant === "shop";
  return (
    <div
      className={`[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 z-[400] h-9 relative ${isShop ? "min-w-[1200px]" : "min-w-[inherit]"} ${!isShop ? "bg-[#ee4d2d]" : ""}`}
      id="component"
      style={isShop ? { backgroundColor: SHOP_TOP_BAR_BG } : undefined}
    >
      <nav
        className={`mx-auto items-center flex text-white ${isShop ? "w-[1200px]" : "max-w-6xl w-[inherit]"}`}
      >
        <LeftSection config={resolvedConfig} />
        <div className="flex-1"></div>
        <RightSection config={resolvedConfig} />
      </nav>
    </div>
  );
}
