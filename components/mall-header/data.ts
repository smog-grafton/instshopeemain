export interface FeatureBadgeConfig {
  iconUrl: string;
  text: string;
}

export interface MallHeaderConfig {
  title: string;
  titleHref: string;
  features: FeatureBadgeConfig[];
  seeAllHref: string;
  seeAllText?: string;
}

export const mockMallHeaderConfig: MallHeaderConfig = {
  title: "Shopee Mall",
  titleHref: "/mall",
  features: [
    {
      iconUrl:
        "https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/7077c70ab0445eaaf96a.png",
      text: "100% Authentic",
    },
    {
      iconUrl:
        "https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/2b0c3538f050999fef02.png",
      text: "15 Days Return*",
    },
    {
      iconUrl:
        "https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/437f0ea51f2e59a271cd.png",
      text: "Free Shipping",
    },
  ],
  seeAllHref: "/mall",
  seeAllText: "See All",
};

export interface MallProduct {
  id: number;
  name: string;
  imageSrc: string;
  href: string;
}

export const mockMallProducts: MallProduct[] = [
  {
    id: 1,
    name: "Product 1",
    imageSrc: "/images/home/mall/products/1.webp",
    href: "/mall",
  },
  {
    id: 2,
    name: "Product 2",
    imageSrc: "/images/home/mall/products/2.webp",
    href: "/mall",
  },
  {
    id: 3,
    name: "Product 3",
    imageSrc: "/images/home/mall/products/3.webp",
    href: "/mall",
  },
  {
    id: 4,
    name: "Product 4",
    imageSrc: "/images/home/mall/products/4.webp",
    href: "/mall",
  },
  {
    id: 5,
    name: "Product 5",
    imageSrc: "/images/home/mall/products/5.webp",
    href: "/mall",
  },
  {
    id: 6,
    name: "Product 6",
    imageSrc: "/images/home/mall/products/6.webp",
    href: "/mall",
  },
  {
    id: 7,
    name: "Product 7",
    imageSrc: "/images/home/mall/products/7.webp",
    href: "/mall",
  },
  {
    id: 8,
    name: "Product 8",
    imageSrc: "/images/home/mall/products/8.webp",
    href: "/mall",
  },
  {
    id: 9,
    name: "Product 9",
    imageSrc: "/images/home/mall/products/9.webp",
    href: "/mall",
  },
  {
    id: 10,
    name: "Product 10",
    imageSrc: "/images/home/mall/products/10.webp",
    href: "/mall",
  },
  {
    id: 11,
    name: "Product 11",
    imageSrc: "/images/home/mall/products/11.webp",
    href: "/mall",
  },
  {
    id: 12,
    name: "Product 12",
    imageSrc: "/images/home/mall/products/12.webp",
    href: "/mall",
  },
  {
    id: 13,
    name: "Product 13",
    imageSrc: "/images/home/mall/products/13.webp",
    href: "/mall",
  },
  {
    id: 14,
    name: "Product 14",
    imageSrc: "/images/home/mall/products/14.webp",
    href: "/mall",
  },
  {
    id: 15,
    name: "Product 15",
    imageSrc: "/images/home/mall/products/15.webp",
    href: "/mall",
  },
];

