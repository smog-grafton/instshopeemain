import { FeatureBadge } from "./feature-badge";
import { SeeAllButton } from "./see-all-button";
import { MallHeaderConfig } from "./data";

interface MallHeaderProps {
  config: MallHeaderConfig;
}

export function MallHeader({ config }: MallHeaderProps) {
  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] flex flex-col gap-3 border-b border-b-black/5 bg-white px-4 py-3 text-sm leading-tight text-black/80 before:mr-1.5 before:h-6 before:w-2.5 before:bg-red-500 before:content-none sm:px-5 sm:py-4 lg:h-16 lg:flex-row lg:items-center lg:gap-0"
      id="component"
    >
      <div className="mr-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium uppercase text-black/54 lg:mr-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <a
            className="active:outline-0 hover:outline-0 no-underline text-red-700 uppercase self-center text-lg font-medium leading-4 block cursor-pointer"
            href={config.titleHref}
          >
            {config.title}
          </a>
          <div className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-2 border-l-0 pl-0 font-normal capitalize lg:ml-4 lg:border-l lg:border-l-zinc-300 lg:pl-4">
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
      <div className="self-end lg:self-auto">
        <SeeAllButton href={config.seeAllHref} text={config.seeAllText} />
      </div>
    </div>
  );
}
