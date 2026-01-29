/**
 * Mock data for Home Banners component
 */

export interface BannerItem {
  href: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageSrcSet2x?: string;
  webpSrc?: string;
  webpSrcSet2x?: string;
  alt: string;
}

export interface FeatureIcon {
  href: string;
  iconUrl: string;
  label: string;
}

export interface HomeBannersConfig {
  mainBanners: BannerItem[];
  sideBanners: BannerItem[];
  featureIcons: FeatureIcon[];
}

export const mockHomeBannersConfig: HomeBannersConfig = {
  mainBanners: [
    {
      href: "/shop/44437739",
      imageSrc: "/images/home/home-banner-wrapper/banners/my-1.webp",
      alt: "Banner",
    },
    {
      href: "/m/welcome-series",
      imageSrc: "/images/home/home-banner-wrapper/banners/my-112.webp",
      alt: "Banner",
    },
    {
      href: "/m/chinese-new-year-sale#CS1",
      imageSrc: "/images/home/home-banner-wrapper/banners/my-1.webp",
      alt: "Banner",
    },
    {
      href: "/m/cny-huat-huat-deals#LTD1",
      imageSrc: "/images/home/home-banner-wrapper/banners/my-112.webp",
      alt: "Banner",
    },
    {
      href: "/m/cny-huat-huat-vouchers#LTV1",
      imageSrc: "/images/home/home-banner-wrapper/banners/my-1.webp",
      alt: "Banner",
    },
    {
      href: "/shop/13377506",
      imageSrc: "/images/home/home-banner-wrapper/banners/my-112.webp",
      alt: "Banner",
    },
    {
      href: "/shop/1363205208",
      imageSrc: "/images/home/home-banner-wrapper/banners/my-1.webp",
      alt: "Banner",
    },
  ],
  sideBanners: [
    {
      href: "/shop/410162346",
      imageSrc: "/images/home/home-banner-wrapper/banners/small/my-11w796.webp",
      alt: "Banner",
    },
    {
      href: "/shop/14682573",
      imageSrc: "/images/home/home-banner-wrapper/banners/small/my-11w796d.webp",
      alt: "Banner",
    },
  ],
  featureIcons: [
    {
      href: "/m/free-shipping-deals",
      iconUrl: "/images/home/feature-icons/free-shipping-deals.png",
      label: "Free Shipping &\nVouchers",
    },
    {
      href: "/m/shopeelagimurah",
      iconUrl: "/images/home/feature-icons/shopeelagimurah.png",
      label: "Lagi Murah\nDaily 50% Off",
    },
    {
      href: "/m/choice-homepage",
      iconUrl: "/images/home/feature-icons/choice-homepage.png",
      label: "Shopee Choice",
    },
    {
      href: "/m/get-ready-with-shopee",
      iconUrl: "/images/home/feature-icons/get-ready-with-shopee.png",
      label: "#GetReady\nWithShopee",
    },
    {
      href: "/supermarket",
      iconUrl: "/images/home/feature-icons/supermarket.png",
      label: "Shopee Supermarket",
    },
    {
      href: "/m/shop-global-outlet",
      iconUrl: "/images/home/feature-icons/shop-global-outlet.png",
      label: "Global Outlet",
    },
    {
      href: "/m/cash-on-delivery",
      iconUrl: "/images/home/feature-icons/cash-on-delivery.png",
      label: "Cash On Delivery",
    },
    {
      href: "/m/Shopee-Buyer-Self-Collect-Programme",
      iconUrl: "/images/home/feature-icons/self-collect-programme.png",
      label: "Be a Shopee\nCollection Point",
    },
    {
      href: "/shopee-coins/",
      iconUrl: "/images/home/feature-icons/shopee-coins.png",
      label: "Daily Coins & Vouchers",
    },
    {
      href: "/m/welcome-series",
      iconUrl: "/images/home/feature-icons/welcome-serie.png",
      label: "New User Zone",
    },
  ],
};
