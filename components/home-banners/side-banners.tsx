import Image from "next/image";
import type { BannerItem } from "./data";
import { isBackendImage } from "@/lib/utils";

interface SideBannersProps {
  banners: BannerItem[];
}

export function SideBanners({ banners }: SideBannersProps) {
  return (
    <div className="grid grid-cols-2 gap-1.5 md:ml-1.5 md:grid-cols-1">
      {banners.map((banner, index) => (
        <div key={index} className="relative overflow-hidden rounded-sm shadow-sm md:h-[111.75px]">
          <a
            className="block h-full w-full no-underline active:outline-0 hover:outline-0"
            href={banner.href}
          >
            <Image
              src={banner.imageSrc}
              alt={banner.alt}
              width={398}
              height={112}
              className="inline aspect-[16/9] h-full w-full align-bottom object-cover"
              unoptimized={isBackendImage(banner.imageSrc)}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
