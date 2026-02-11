"use client";

import { useEffect, useState } from "react";

interface BannerLink {
  href: string;
}

interface SkinnyBannerProps {
  imageUrl?: string;
  imageUrl2x?: string;
  webpUrl?: string;
  webpUrl2x?: string;
  alt?: string;
  links?: BannerLink[];
}

const defaultLinks: BannerLink[] = [
  { href: "/m/welcome-series#1650601368285" },
  { href: "/m/welcome-series" },
  { href: "/collections/8843138" },
];

export function SkinnyBanner({
  imageUrl: propImageUrl,
  imageUrl2x: propImageUrl2x,
  webpUrl: propWebpUrl,
  webpUrl2x: propWebpUrl2x,
  alt: propAlt,
  links: propLinks,
}: SkinnyBannerProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(propImageUrl || null);
  const [imageUrl2x, setImageUrl2x] = useState<string | undefined>(propImageUrl2x);
  const [webpUrl, setWebpUrl] = useState<string | undefined>(propWebpUrl);
  const [webpUrl2x, setWebpUrl2x] = useState<string | undefined>(propWebpUrl2x);
  const [alt, setAlt] = useState<string>(propAlt || "Banner");
  const [links, setLinks] = useState<BannerLink[]>(propLinks || defaultLinks);

  useEffect(() => {
    // If props are provided, use them (for backward compatibility)
    if (propImageUrl) {
      return;
    }

    // Otherwise fetch from API
    async function fetchBanner() {
      try {
        const { getSkinnyBanner } = await import("@/lib/api-client");
        const data = await getSkinnyBanner();
        if (data.imageUrl) {
          setImageUrl(data.imageUrl);
          setImageUrl2x(data.imageUrl2x || undefined);
          setWebpUrl(data.webpUrl || undefined);
          setWebpUrl2x(data.webpUrl2x || undefined);
          setAlt(data.alt || "Banner");
          setLinks(data.links || defaultLinks);
        }
      } catch (error) {
        console.error("Failed to load skinny banner:", error);
      }
    }
    fetchBanner();
  }, [propImageUrl, propImageUrl2x, propWebpUrl, propWebpUrl2x, propAlt, propLinks]);

  if (!imageUrl) {
    return null;
  }
  return (
    <section
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 pt-5 w-[1200px] mx-auto"
      aria-label="Banner"
    >
      <div className="w-full relative">
        <picture className="contents">
          {webpUrl && (
            <source
              srcSet={
                webpUrl2x
                  ? `${webpUrl}, ${webpUrl2x} 2x`
                  : webpUrl
              }
              type="image/webp"
              className="contents"
            />
          )}
          <img
            width={1200}
            loading="lazy"
            className="inline h-28 align-bottom"
            srcSet={imageUrl2x ? `${imageUrl}, ${imageUrl2x} 2x` : imageUrl}
            src={imageUrl}
            alt={alt}
          />
        </picture>
        <div className="w-full h-full flex absolute left-0 top-0">
          {links.map((link, index) => (
            <a
              key={index}
              className="cursor-pointer w-full no-underline block active:outline-0 hover:outline-0 flex-[33.3333]"
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
