import Image from "next/image";

interface MallBannerProps {
  imageSrc: string;
  alt?: string;
}

export function MallBanner({ imageSrc, alt = "Banner" }: MallBannerProps) {
  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 align-top bg-white w-96 inline-block pl-2.5 py-2.5 h-[472px]"
      id="component"
    >
      <div className="w-full h-full relative">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-contain object-top"
            sizes="384px"
          />
        </div>
      </div>
    </div>
  );
}
