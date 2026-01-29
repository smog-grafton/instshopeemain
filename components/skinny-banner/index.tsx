interface BannerLink {
  href: string;
}

interface SkinnyBannerProps {
  imageUrl: string;
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
  imageUrl,
  imageUrl2x,
  webpUrl,
  webpUrl2x,
  alt = "Banner",
  links = defaultLinks,
}: SkinnyBannerProps) {
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
