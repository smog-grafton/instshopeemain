import { LeftSection } from "./left-section";
import { RightSection } from "./right-section";
import { mockNavbarConfig } from "./data";

export function TopNavbar() {
  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 z-[400] h-9 relative min-w-[inherit] bg-[#ee4d2d]"
      id="component"
    >
      <nav className="mx-auto items-center flex text-white max-w-6xl w-[inherit]">
        <LeftSection config={mockNavbarConfig} />
        <div className="flex-1"></div>
        <RightSection config={mockNavbarConfig} />
      </nav>
    </div>
  );
}
