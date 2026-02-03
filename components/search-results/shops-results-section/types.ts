/**
 * Types for the "Shops related to keyword" section on the search results page.
 */

export interface ShopsResultProduct {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  discountPercent: number;
  price: string;
  sold: string;
}

export interface ShopsResultVoucher {
  discountPercent: number;
  minSpend: string;
  claimHref?: string;
}

export interface ShopsResultShop {
  name: string;
  visitShopHref: string;
  avatarSrc: string;
  avatarAlt: string;
  isMall?: boolean;
  rating: number;
  followers: string;
}

export interface ShopsResultCardData {
  shop: ShopsResultShop;
  products: ShopsResultProduct[];
  voucher: ShopsResultVoucher;
  isAd?: boolean;
}

export interface ShopsResultsSectionProps {
  keyword: string;
  moreShopsHref: string;
  cards: ShopsResultCardData[];
}
