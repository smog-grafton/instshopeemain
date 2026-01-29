import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { SearchSuggestions } from "./search-suggestions";
import { CartButton } from "./cart-button";
import { mockHeaderConfig } from "./data";

export function HeaderWithSearch() {
  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 z-[300] shadow-sm min-w-[inherit] bg-[#ee4d2d]"
      id="component"
    >
      <div className="mx-auto justify-between flex pt-4 pb-3 max-w-6xl w-[inherit]">
        <Logo />
        <div className="flex-col justify-start w-[840px] flex relative pb-2">
          <SearchBar config={mockHeaderConfig} />
          <SearchSuggestions suggestions={mockHeaderConfig.searchSuggestions} />
        </div>
        <CartButton itemCount={mockHeaderConfig.cartItemCount} />
      </div>
    </div>
  );
}
