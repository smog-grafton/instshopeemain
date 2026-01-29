export interface SkinnyBannerConfig {
  imageUrl: string;
  imageUrl2x?: string;
  webpUrl?: string;
  webpUrl2x?: string;
  alt?: string;
  links?: Array<{ href: string }>;
}

export const mockSkinnyBannerConfig: SkinnyBannerConfig = {
  imageUrl:
    "https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w1200_nl",
  imageUrl2x:
    "https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w2400_nl",
  webpUrl:
    "https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w1200_nl.webp",
  webpUrl2x:
    "https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/sg-11134252-82613-mjjshd6czxfo05@resize_w2400_nl.webp",
  alt: "Banner",
  links: [
    { href: "/m/welcome-series#1650601368285" },
    { href: "/m/welcome-series" },
    { href: "/collections/8843138" },
  ],
};
