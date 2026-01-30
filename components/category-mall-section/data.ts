/**
 * Store logos for the category page Shopee Mall section.
 * Uses external CDN URLs; after downloading to public/images/stores/logos,
 * switch to local paths like /images/stores/logos/sony.png.
 */
export interface StoreLogoEntry {
  id: string;
  href: string;
  /** Logo image URL (CDN or local path) */
  logoUrl: string;
}

export const CATEGORY_MALL_SEE_ALL_HREF = "/mall/brands/11000979";

/** Store logos carousel data (order matches 6-col × 2-row layout). */
export const categoryMallStoreLogos: StoreLogoEntry[] = [
  { id: "sony-store", href: "/sonystoreonline.os", logoUrl: "https://down-my.img.susercontent.com/file/d2030e3c727e8c498badab2c9e01de33" },
  { id: "apple", href: "/appleflagship.store", logoUrl: "https://down-my.img.susercontent.com/file/my-11134258-7r98v-lxpm2zisii5s56" },
  { id: "machines", href: "/machines_os", logoUrl: "https://down-my.img.susercontent.com/file/f8a7f8de849cc4f7f79ac89a47875d9a" },
  { id: "senq", href: "/senq_arr_os", logoUrl: "https://down-my.img.susercontent.com/file/9db52e3ebd5ff20aa60ecfc8ff80e6cd" },
  { id: "cliptec", href: "/cliptec", logoUrl: "https://down-my.img.susercontent.com/file/my-11134258-7rasb-ma0ymvpj0w1gd4" },
  { id: "vivo", href: "/vivomalaysia.os", logoUrl: "https://down-my.img.susercontent.com/file/3e68e0160a3fdb84c1c214a8361145ad" },
  { id: "iqoo", href: "/iqoo.os", logoUrl: "https://down-my.img.susercontent.com/file/b4bd583abd236d15093fc931b27955b7" },
  { id: "nillkin", href: "/nillkin.my.os", logoUrl: "https://down-my.img.susercontent.com/file/f8b9b678a879978f8eee2a4f47b2ee92" },
  { id: "kieslect", href: "/kieslect.os", logoUrl: "https://down-my.img.susercontent.com/file/my-50009109-c9859999422a0afc22fe967d574996f0" },
  { id: "huawei", href: "/huawei_os", logoUrl: "https://down-my.img.susercontent.com/file/b283d6df2b56bc5a297d410255d6aa79" },
  { id: "honor", href: "/honor.os", logoUrl: "https://down-my.img.susercontent.com/file/f85797da606ffdb63d5b07a5a79b024f" },
  { id: "ugreen", href: "/ugreen.my", logoUrl: "https://down-my.img.susercontent.com/file/90c4d078677c50316d6155c631de77ec" },
  { id: "switch", href: "/switch_os", logoUrl: "https://down-my.img.susercontent.com/file/f3c28d3248ca3995ef4cafb518c09760" },
  { id: "garmin", href: "/garmin.os", logoUrl: "https://down-my.img.susercontent.com/file/5dded50ec6d7eaaeb6ab5074be729b29" },
  { id: "jbl", href: "/jbl.os", logoUrl: "https://down-my.img.susercontent.com/file/4fc2123a6595a482f2b10848b94a1a76" },
  { id: "pico", href: "/picoxr", logoUrl: "https://down-my.img.susercontent.com/file/840ed582dd9c136bd2811ca131953394" },
  { id: "sony", href: "/sony.os", logoUrl: "https://down-my.img.susercontent.com/file/d991a93fd8b1e88824d8acd473e11e1f" },
  { id: "baseus", href: "/baseusofficial.os", logoUrl: "https://down-my.img.susercontent.com/file/my-50009109-81ccb620dbdf8c07f574098280db21fb" },
  { id: "edifier", href: "/edifiermalaysia.os", logoUrl: "https://down-my.img.susercontent.com/file/a7ef69fadee62e36fb68fb45546853dc" },
  { id: "maimo", href: "/maimo.os", logoUrl: "https://down-my.img.susercontent.com/file/9e96ba217677f556717ecb1f63f433da" },
  { id: "realme", href: "/realme_os", logoUrl: "https://down-my.img.susercontent.com/file/7b633b67941857292addd2c7e61a34f0" },
  { id: "amazfit", href: "/amazfit.os", logoUrl: "https://down-my.img.susercontent.com/file/my-11134258-7ras8-m8lfc4ur3mt035" },
  { id: "aukey", href: "/aukey.official", logoUrl: "https://down-my.img.susercontent.com/file/my-50009109-873a9f8a66678be05acc73ccdadc9f59" },
];
