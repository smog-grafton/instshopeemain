
/** Text badges shown below title (same as DailyDiscoverCard). */
export type ProductTextBadge =
  | "shopee-lagi-murah"
  | "cod"
  | "mall"
  | "new-arrival"
  | "preferred"
  | "sea-shipping";

/** Image overlay badges (Mall, Preferred, Choice icons on image). */
export type ProductImageBadge = "mall" | "preferred" | "choice" | "trending";

export interface Product {
  id: string;
  slug: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  imageSrc: string;
  soldCount: string;
  rating?: number;
  location?: string;
  /** Badges shown as pills below title (COD, Mall, Shopee Lagi Murah, etc.) */
  textBadges?: ProductTextBadge[];
  /** Badges shown as icons on image (Mall, Preferred, Choice) */
  imageBadges?: ProductImageBadge[];
  /** Amber promotion tag e.g. "15% off", "RM9 off", "Free Shipping" */
  promotionLabel?: string;
  /** Legacy: use promotionLabel for single tag; kept for compatibility */
  promotions?: string[];
  href: string;
}

/** Map ProductRecord from central store to listing Product (href = /product/slug). */
export function productRecordToProduct(r: ProductRecord): Product {
  const discount =
    r.originalPrice != null
      ? Math.round((1 - r.price / r.originalPrice) * 100)
      : undefined;
  return {
    id: r.slug,
    slug: r.slug,
    title: r.title,
    price: r.price.toFixed(2),
    originalPrice: r.originalPrice?.toFixed(2),
    discount,
    imageSrc: r.imageSrc,
    soldCount:
      r.soldCount >= 1000
        ? `${(r.soldCount / 1000).toFixed(1)}k`
        : String(r.soldCount),
    rating: r.rating,
    location: r.location,
    textBadges: r.textBadges as Product["textBadges"],
    imageBadges: r.imageBadges as Product["imageBadges"],
    promotionLabel: r.promotionLabel,
    href: `/product/${r.slug}`,
  };
}

// Product image files (24 images that we'll cycle through)
const productImages = Array.from({ length: 24 }, (_, i) => 
  `/images/stores/products/${i + 1}.webp`
);

// Product titles
const productTitles = [
  "Wireless Bluetooth Earbuds with Charging Case",
  "Premium Phone Case Shockproof Protection",
  "Fast Charging USB-C Cable 3M Length",
  "Tempered Glass Screen Protector HD Clear",
  "Portable Power Bank 20000mAh Quick Charge",
  "Car Phone Holder Dashboard Mount",
  "Smart Watch Fitness Tracker Heart Rate",
  "Gaming Keyboard RGB Mechanical Switch",
  "Wireless Mouse Rechargeable Silent Click",
  "USB Flash Drive 128GB High Speed",
  "Phone Ring Holder Stand 360 Rotation",
  "Selfie Stick Tripod Bluetooth Remote",
  "Memory Card 256GB Class 10 U3",
  "Laptop Stand Adjustable Aluminum",
  "Webcam 1080P HD Streaming Camera",
  "Desk Lamp LED Rechargeable Eye Care",
  "Keyboard Cover Skin Protector Universal",
  "Cable Organizer Management Kit",
  "Laptop Sleeve Case Waterproof 15.6 inch",
  "Phone Gimbal Stabilizer Selfie Stick",
];

// Central store integration
import type { ProductRecord } from "@/lib/products-data";
import {
  getProductsByCategory,
  getProductsForPromo,
  isCategorySlug,
  MOCK_PRODUCTS,
} from "@/lib/products-data";

/** Get products for listing: by category slug, promo slug, or all. */
export function getProductsForListing(options: {
  categorySlug?: string;
  promoSlug?: string;
  page: number;
  perPage: number;
}): { products: Product[]; total: number } {
  const { categorySlug, promoSlug, page, perPage } = options;
  if (promoSlug && !isCategorySlug(promoSlug)) {
    const { products, total } = getProductsForPromo(promoSlug, page, perPage);
    return { products: products.map(productRecordToProduct), total };
  }
  if (categorySlug) {
    const { products, total } = getProductsByCategory(
      categorySlug,
      page,
      perPage
    );
    return { products: products.map(productRecordToProduct), total };
  }
  const total = MOCK_PRODUCTS.length;
  const start = (page - 1) * perPage;
  const products = MOCK_PRODUCTS.slice(start, start + perPage).map(
    productRecordToProduct
  );
  return { products, total };
}

// Legacy: generate products without category (paginate all)
export function generateProductsData(page: number, perPage: number): Product[] {
  const { products } = getProductsForListing({ page, perPage });
  return products;
}

// Filter options
export const categoryFilters = {
  category: [
    "Mobile Accessories",
    "Phone Cases",
    "Cables & Converters",
    "Screen Protectors",
    "Power Banks",
    "Car Accessories",
    "Wearables",
  ],
  brand: [
    "Samsung",
    "Apple",
    "Xiaomi",
    "Huawei",
    "Oppo",
    "Vivo",
    "Generic",
  ],
  priceRange: [
    { label: "Under RM10", min: 0, max: 10 },
    { label: "RM10 - RM50", min: 10, max: 50 },
    { label: "RM50 - RM100", min: 50, max: 100 },
    { label: "RM100 - RM200", min: 100, max: 200 },
    { label: "Above RM200", min: 200, max: Infinity },
  ],
  rating: [5, 4, 3, 2, 1],
  shipping: [
    { label: "Free Shipping", value: "free" },
    { label: "Same Day Delivery", value: "same-day" },
  ],
  serviceAndPromotion: [
    { label: "Free Returns", value: "returns" },
    { label: "On-time Delivery", value: "on-time" },
    { label: "Cash On Delivery", value: "cod" },
  ],
};
