export interface TopProduct {
  id: string;
  name: string;
  monthlySales: string;
  imageId: number;
  href: string;
}

function imagePath(imageId: number, ext: "webp" | "jpeg"): string {
  return `/images/home/top-products/${imageId}.${ext}`;
}

export function getTopProductImageSrc(product: TopProduct): { src: string; fallback?: string } {
  if (product.imageId >= 16) {
    return { src: imagePath(product.imageId, "jpeg") };
  }
  return { src: imagePath(product.imageId, "webp"), fallback: imagePath(product.imageId, "jpeg") };
}

export const topProductsData: TopProduct[] = [
  { id: "1", name: "Tofu Cat Litter", monthlySales: "23k+", imageId: 1, href: "/top_products?catId=top_sold_1" },
  { id: "2", name: "Inner Baju Muslimah", monthlySales: "24k+", imageId: 2, href: "/top_products?catId=top_sold_2" },
  { id: "3", name: "Car Phone Holder", monthlySales: "27k+", imageId: 3, href: "/top_products?catId=top_sold_3" },
  { id: "4", name: "Solar-Powered Light", monthlySales: "27k+", imageId: 4, href: "/top_products?catId=top_sold_4" },
  { id: "5", name: "Pigeon PPSU Bottle", monthlySales: "23k+", imageId: 5, href: "/top_products?catId=top_sold_5" },
  { id: "6", name: "Assorted Sizes Courier Bag", monthlySales: "45k+", imageId: 6, href: "/top_products?catId=top_sold_6" },
  { id: "7", name: "Seamless Undergarment", monthlySales: "6k+", imageId: 7, href: "/top_products?catId=top_sold_7" },
  { id: "8", name: "Seamless Bra", monthlySales: "1k+", imageId: 8, href: "/top_products?catId=top_sold_8" },
  { id: "9", name: "Spender Panties", monthlySales: "38k+", imageId: 9, href: "/top_products?catId=top_sold_9" },
  { id: "10", name: "Jeep Men's Leather Long Wallet", monthlySales: "1k+", imageId: 10, href: "/top_products?catId=top_sold_10" },
  { id: "11", name: "Seamless Silk Panties", monthlySales: "40k+", imageId: 11, href: "/top_products?catId=top_sold_11" },
  { id: "12", name: "Tracksuit Pants", monthlySales: "4k+", imageId: 12, href: "/top_products?catId=top_sold_12" },
  { id: "13", name: "Women's Loose Jeans", monthlySales: "41k+", imageId: 13, href: "/top_products?catId=top_sold_13" },
  { id: "14", name: "Minyak Wangi Lelaki", monthlySales: "33k+", imageId: 14, href: "/top_products?catId=top_sold_14" },
  { id: "15", name: "Adidas Slimfit Tracksuit", monthlySales: "12k+", imageId: 15, href: "/top_products?catId=top_sold_15" },
  { id: "16", name: "Men's Casual Pants", monthlySales: "24k+", imageId: 16, href: "/top_products?catId=top_sold_16" },
  { id: "17", name: "Solar Light Panel", monthlySales: "29k+", imageId: 17, href: "/top_products?catId=top_sold_17" },
  { id: "18", name: "Perfume Paradise", monthlySales: "54k+", imageId: 18, href: "/top_products?catId=top_sold_18" },
];
