import Image from "next/image";
import type { BannerItem } from "./data";

interface SideBannersProps {
  banners: BannerItem[];
}

export function SideBanners({ banners }: SideBannersProps) {
  return (
    <div className="flex-col flex-1 flex ml-1.5">
      {banners.map((banner, index) => (
        <div key={index} className={index > 0 ? "flex-1 mt-1.5" : "flex-1"}>
          <a
            className="w-full no-underline block active:outline-0 hover:outline-0"
            href={banner.href}
          >
            <Image
              src={banner.imageSrc}
              alt={banner.alt}
              width={398}
              height={112}
              className="inline h-28 w-full rounded-sm align-bottom object-cover"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
