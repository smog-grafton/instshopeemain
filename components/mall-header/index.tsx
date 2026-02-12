import { FeatureBadge } from "./feature-badge";
import { SeeAllButton } from "./see-all-button";
import { MallHeaderConfig } from "./data";

interface MallHeaderProps {
  config: MallHeaderConfig;
}

export function MallHeader({ config }: MallHeaderProps) {
  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 items-center flex before:bg-red-500 before:w-2.5 before:h-6 before:mr-1.5 bg-white [border-bottom-style:solid] h-16 px-5 border-b border-b-black/5 before:content-none"
      id="component"
    >
      <div className="uppercase text-ellipsis whitespace-nowrap flex-1 overflow-x-hidden overflow-y-hidden mr-5 text-base font-medium text-black/54">
        <div className="flex">
          <a
            className="active:outline-0 hover:outline-0 no-underline text-red-700 uppercase self-center text-lg font-medium leading-4 block cursor-pointer"
            href={config.titleHref}
          >
            {config.title}
          </a>
          <div className="capitalize [border-left-style:solid] flex-1 items-center font-normal flex flex-wrap gap-2 ml-4 pl-4 border-l border-l-zinc-300">
            {config.features.map((feature, index) => (
              <FeatureBadge
                key={index}
                iconUrl={feature.iconUrl}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
      <SeeAllButton href={config.seeAllHref} text={config.seeAllText} />
    </div>
  );
}
