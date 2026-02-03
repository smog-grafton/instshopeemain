/**
 * Mock data for the "Shops related to keyword" section.
 * Uses project assets where available; external image URLs from original design.
 */

import type { ShopsResultCardData } from "./types";

const MALL_BADGE_SRC = "/images/stores/assets/mall.png";

// Shopee CDN product images (allowed via next.config remotePatterns)
const PRODUCT_IMAGES = {
  seaSalt145:
    "https://down-my.img.susercontent.com/file/my-11134207-7r98r-lrzizdaygdno64_tn.webp",
  seaSalt200:
    "https://down-my.img.susercontent.com/file/my-11134207-820l9-medqd66bj4e8c2_tn.webp",
  spray45g:
    "https://down-my.img.susercontent.com/file/f51de3f368321ffa9bd4d5b4355bbc8a_tn.webp",
} as const;

const SHOP_AVATAR =
  "https://down-my.img.susercontent.com/file/e84ffcf3bc3b37260aff9e92900ee479_tn";

export function getShopsResultsSectionData(keyword: string): {
  keyword: string;
  moreShopsHref: string;
  cards: ShopsResultCardData[];
} {
  const encodedKeyword = encodeURIComponent(keyword);
  return {
    keyword,
    moreShopsHref: `/search?keyword=${encodedKeyword}&type=shop`,
    cards: [
      {
        isAd: true,
        shop: {
          name: "Mandom Official Store",
          visitShopHref: "/shop/mandom-official-store",
          avatarSrc: SHOP_AVATAR,
          avatarAlt: "",
          isMall: true,
          rating: 4.9,
          followers: "269.8k Followers",
        },
        products: [
          {
            title: "GATSBY Sea Salt Spray Volume Mat 145ml",
            href: "/product/gatsby-sea-salt-spray-volume-mat-145ml",
            imageSrc: PRODUCT_IMAGES.seaSalt145,
            imageAlt: "GATSBY Sea Salt Spray Volume Mat 145ml",
            discountPercent: 25,
            price: "14.93",
            sold: "10k+ sold",
          },
          {
            title: "GATSBY Sea Salt Spray Anti-Gravity Mat 200ml",
            href: "/product/gatsby-sea-salt-spray-anti-gravity-mat-200ml",
            imageSrc: PRODUCT_IMAGES.seaSalt200,
            imageAlt: "GATSBY Sea Salt Spray Anti-Gravity Mat 200ml",
            discountPercent: 25,
            price: "18.67",
            sold: "498 sold",
          },
          {
            title:
              "GATSBY Set & Keep Spray Super Hard 45g (mens hair spray, spray hair, spray hair setting)",
            href: "/product/gatsby-set-keep-spray-super-hard-45g",
            imageSrc: PRODUCT_IMAGES.spray45g,
            imageAlt:
              "GATSBY Set & Keep Spray Super Hard 45g (mens hair spray, spray hair, spray hair setting)",
            discountPercent: 19,
            price: "8.00",
            sold: "8k+ sold",
          },
        ],
        voucher: {
          discountPercent: 20,
          minSpend: "Min. Spend RM100",
          claimHref: "/shop/mandom-official-store?voucher=20off",
        },
      },
    ],
  };
}

export { MALL_BADGE_SRC };
