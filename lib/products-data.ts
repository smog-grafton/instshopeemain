/**
 * Central product and shop mock data for listing and product detail.
 * Products belong to shops; routes use product slug (from name), not id.
 * Ready for Laravel seeding later.
 */

export interface Shop {
  id: string;
  name: string;
  slug: string;
}

export interface ProductRecord {
  slug: string;
  title: string;
  shopId: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  imageSrc: string;
  soldCount: number;
  rating: number;
  location: string;
  /** e.g. "Free Shipping", "15% off" */
  promotionLabel?: string;
  /** e.g. "mall", "cod" */
  textBadges?: string[];
  /** e.g. "mall", "preferred" */
  imageBadges?: string[];
}

/** Slugify title for URL: lowercase, replace spaces/special with hyphen */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Category slug -> display label (for breadcrumbs and page title) */
export const CATEGORY_SLUG_TO_LABEL: Record<string, string> = {
  "mobile-accessories": "Mobile & Accessories",
  "women-clothes": "Women Clothes",
  watches: "Watches",
  "men-clothes": "Men Clothes",
  "health-beauty": "Health & Beauty",
  "home-living": "Home & Living",
  "baby-toys": "Baby & Toys",
  "home-appliances": "Home Appliances",
  "groceries-pets": "Groceries & Pets",
  "women-shoes": "Women Shoes",
  automotive: "Automotive",
  "fashion-accessories": "Fashion Accessories",
  "womens-bags": "Women's Bags",
  "computer-accessories": "Computer & Accessories",
  "mens-bags-wallets": "Men's Bags & Wallets",
  "sports-outdoor": "Sports & Outdoor",
  "muslim-fashion": "Muslim Fashion",
  "men-shoes": "Men Shoes",
  "games-books-hobbies": "Games, Books & Hobbies",
  "gaming-consoles": "Gaming & Consoles",
  "travel-luggage": "Travel & Luggage",
  "cameras-drones": "Cameras & Drones",
  others: "Others",
  "tickets-vouchers": "Tickets & Vouchers",
};

/** Promo/special pages under /m/ that are not categories */
export const PROMO_SLUGS = new Set([
  "free-shipping-deals",
  "shopeelagimurah",
  "choice-homepage",
  "get-ready-with-shopee",
  "welcome-series",
  "chinese-new-year-sale",
  "cny-huat-huat-deals",
  "cny-huat-huat-vouchers",
]);

export const MOCK_SHOPS: Shop[] = [
  { id: "shop-1", name: "TechHub MY", slug: "techhub-my" },
  { id: "shop-2", name: "Fashion Lane", slug: "fashion-lane" },
  { id: "shop-3", name: "Home & Living Store", slug: "home-living-store" },
  { id: "shop-4", name: "Beauty Corner", slug: "beauty-corner" },
  { id: "shop-5", name: "Gadget World", slug: "gadget-world" },
  { id: "shop-6", name: "Shoe Palace", slug: "shoe-palace" },
  { id: "shop-7", name: "Kids Paradise", slug: "kids-paradise" },
  { id: "shop-8", name: "Sports Direct MY", slug: "sports-direct-my" },
  { id: "shop-9", name: "FILLEONNE", slug: "filleonne" },
  { id: "shop-10", name: "ElectroMart", slug: "electromart" },
];

const PRODUCT_IMAGES = Array.from(
  { length: 24 },
  (_, i) => `/images/stores/products/${i + 1}.webp`
);

/** Realistic product titles per category for seeding-style data */
const PRODUCT_TITLES_BY_CATEGORY: Record<string, string[]> = {
  "mobile-accessories": [
    "Wireless Bluetooth Earbuds with Charging Case",
    "Premium Phone Case Shockproof Protection",
    "Fast Charging USB-C Cable 3M Length",
    "Tempered Glass Screen Protector HD Clear",
    "Portable Power Bank 20000mAh Quick Charge",
    "Car Phone Holder Dashboard Mount",
    "Phone Ring Holder Stand 360 Rotation",
    "Selfie Stick Tripod Bluetooth Remote",
  ],
  "women-clothes": [
    "Floral Midi Dress Casual Summer",
    "High Waist Wide Leg Trousers",
    "Cotton Crop Top Short Sleeve",
    "Knit Cardigan Oversized Comfort",
    "Striped Long Sleeve Shirt",
    "A-Line Skirt Pleated Midi",
  ],
  "men-clothes": [
    "Men Casual Cotton T-Shirt Solid",
    "Slim Fit Chinos Stretch Comfort",
    "Running Shorts Lightweight Quick Dry",
    "Polo Shirt Short Sleeve Classic",
    "Cargo Pants Multiple Pockets",
  ],
  "men-shoes": [
    "Latest RUN3.0 men's sneakers casual men's shoes",
    "Canvas Low Top Sneakers White",
    "Slip On Loafers Comfort Casual",
    "Running Shoes Breathable Mesh",
    "Leather Derby Shoes Formal",
  ],
  "women-shoes": [
    "Block Heel Sandals Ankle Strap",
    "Flat Ballet Pumps Pointed Toe",
    "Canvas Sneakers Low Top",
    "Ankle Boots Chunky Heel",
  ],
  "health-beauty": [
    "Rose Sunscreen Cream SPF90 PA+++",
    "Hydrating Face Serum Vitamin C",
    "Matte Lipstick Long Lasting",
    "Silicone Facial Cleansing Brush",
  ],
  "home-living": [
    "Cotton Bed Sheet Set Queen",
    "LED Desk Lamp USB Charging",
    "Storage Baskets Set of 3",
    "Wall Art Canvas Print Abstract",
  ],
  "baby-toys": [
    "Educational Building Blocks Set",
    "Soft Plush Toy Stuffed Animal",
    "Baby Rattle Teether Set",
    "Kids Drawing Board Magnetic",
  ],
  "home-appliances": [
    "Mini Blender Portable Smoothie",
    "Electric Kettle 1.8L Fast Boil",
    "Stand Fan 16 Inch 3 Speed",
    "Air Fryer 5.5L Digital",
  ],
  "groceries-pets": [
    "Organic Rice 5kg Premium",
    "Cat Dry Food 2kg Salmon",
    "Dog Chew Toys Dental",
    "Instant Noodles Pack 5",
  ],
  "watches": [
    "Smart Watch Fitness Tracker Heart Rate",
    "Classic Leather Strap Watch",
    "Digital Sport Watch Water Resistant",
    "Minimalist Metal Watch Silver",
  ],
  "computer-accessories": [
    "Gaming Keyboard RGB Mechanical Switch",
    "Wireless Mouse Rechargeable Silent",
    "USB Flash Drive 128GB High Speed",
    "Laptop Stand Adjustable Aluminum",
    "Webcam 1080P HD Streaming",
  ],
  "fashion-accessories": [
    "Classic Leather Belt Brown",
    "Sunglasses UV400 Polarized",
    "Canvas Crossbody Bag",
    "Silk Scarf Printed",
  ],
  "womens-bags": [
    "Quilted Shoulder Bag Chain Strap",
    "Tote Bag Large Canvas",
    "Crossbody Bag Mini",
    "Backpack Leather Look",
  ],
  "sports-outdoor": [
    "Yoga Mat Non Slip 6mm",
    "Resistance Bands Set 5",
    "Running Armband Phone Holder",
    "Water Bottle 1L Insulated",
  ],
  others: [
    "Multi Tool Keychain 12 in 1",
    "Cable Organizer Management Kit",
    "Desk Organizer Tray Set",
    "Notebook A5 Ruled 120 Pages",
  ],
};

const LOCATIONS = ["Kuala Lumpur", "Selangor", "Penang", "Johor", "Sabah"];
const DEFAULT_TITLES = [
  "Premium Quality Product Best Seller",
  "Popular Item Free Shipping",
  "Best Price Guaranteed",
];

function pick<T>(arr: readonly T[], index: number): T {
  return arr[index % arr.length]!;
}

/** Build MOCK_PRODUCTS from titles and categories */
function buildMockProducts(): ProductRecord[] {
  const products: ProductRecord[] = [];
  let globalIndex = 0;
  const categorySlugs = Object.keys(CATEGORY_SLUG_TO_LABEL);

  categorySlugs.forEach((categorySlug) => {
    const titles =
      PRODUCT_TITLES_BY_CATEGORY[categorySlug] ?? DEFAULT_TITLES;
    const count = Math.min(titles.length * 4, 24);
    for (let i = 0; i < count; i++) {
      const baseTitle = pick(titles, i);
      const title = baseTitle + (i > 0 ? ` Variant ${i}` : "");
      const baseSlug = slugify(baseTitle);
      const uniqueSlug = `${baseSlug}-${globalIndex}`;
      const shop = pick(MOCK_SHOPS, globalIndex);
      const hasDiscount = globalIndex % 3 === 0;
      const discount = hasDiscount ? pick([10, 20, 30, 40], globalIndex) : 0;
      const basePrice = 15 + (globalIndex % 80);
      const price = hasDiscount
        ? Math.round(basePrice * (1 - discount / 100) * 100) / 100
        : basePrice;
      const soldCount = 100 + (globalIndex % 5) * 500 + (globalIndex % 200);
      products.push({
        slug: uniqueSlug,
        title,
        shopId: shop.id,
        categorySlug,
        price,
        originalPrice: hasDiscount ? basePrice : undefined,
        imageSrc: pick(PRODUCT_IMAGES, globalIndex),
        soldCount,
        rating: 4.2 + (globalIndex % 8) / 10,
        location: pick(LOCATIONS, globalIndex),
        promotionLabel:
          globalIndex % 2 === 0
            ? pick(["Free Shipping", "15% off", "RM9 off", "10% off"], globalIndex)
            : undefined,
        textBadges:
          globalIndex % 4 === 0 ? ["cod"] : globalIndex % 5 === 0 ? ["mall"] : undefined,
        imageBadges:
          globalIndex % 5 === 0 ? ["mall"] : globalIndex % 7 === 0 ? ["preferred"] : undefined,
      });
      globalIndex++;
    }
  });

  return products;
}

export const MOCK_PRODUCTS: ProductRecord[] = buildMockProducts();

export function getProductBySlug(slug: string): ProductRecord | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  categorySlug: string,
  page: number,
  perPage: number
): { products: ProductRecord[]; total: number } {
  const filtered = MOCK_PRODUCTS.filter((p) => p.categorySlug === categorySlug);
  const total = filtered.length;
  const start = (page - 1) * perPage;
  const products = filtered.slice(start, start + perPage);
  return { products, total };
}

/** Get products for promo pages (e.g. free-shipping-deals): filter by promotionLabel or all */
export function getProductsForPromo(
  promoSlug: string,
  page: number,
  perPage: number
): { products: ProductRecord[]; total: number } {
  let filtered = MOCK_PRODUCTS;
  if (promoSlug === "free-shipping-deals") {
    filtered = MOCK_PRODUCTS.filter((p) => p.promotionLabel === "Free Shipping");
  }
  if (filtered.length === 0) filtered = MOCK_PRODUCTS;
  const total = filtered.length;
  const start = (page - 1) * perPage;
  const products = filtered.slice(start, start + perPage);
  return { products, total };
}

export function getShopById(shopId: string): Shop | undefined {
  return MOCK_SHOPS.find((s) => s.id === shopId);
}

export function getShopBySlug(slug: string): Shop | undefined {
  return MOCK_SHOPS.find((s) => s.slug === slug);
}

/** Get products for a shop by shop slug (e.g. techhub-my). Returns up to limit, default 6 for top products. */
export function getProductsByShopSlug(
  shopSlug: string,
  limit = 6
): ProductRecord[] {
  const shop = getShopBySlug(shopSlug);
  if (!shop) return [];
  return MOCK_PRODUCTS.filter((p) => p.shopId === shop.id).slice(0, limit);
}

/** Sort option for shop "All Products" listing. */
export type ShopAllProductsSort =
  | "popular"
  | "latest"
  | "top_sales"
  | "price_asc"
  | "price_desc";

/**
 * Get paginated products for shop "All Products" section.
 * Sort: popular (default), latest, top_sales, price_asc, price_desc.
 */
export function getShopAllProductsPaginated(
  shopSlug: string,
  page: number,
  perPage: number,
  sort: ShopAllProductsSort = "popular"
): { products: ProductRecord[]; total: number } {
  const shop = getShopBySlug(shopSlug);
  if (!shop) return { products: [], total: 0 };
  let list = MOCK_PRODUCTS.filter((p) => p.shopId === shop.id);
  const total = list.length;
  if (sort === "latest") {
    list = [...list].reverse();
  } else if (sort === "top_sales") {
    list = [...list].sort((a, b) => b.soldCount - a.soldCount);
  } else if (sort === "price_asc") {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (sort === "price_desc") {
    list = [...list].sort((a, b) => b.price - a.price);
  }
  const start = (page - 1) * perPage;
  const products = list.slice(start, start + perPage);
  return { products, total };
}

/**
 * Get products for a shop collection / product line (e.g. "root-booster-line").
 * In e-commerce, a "line" or "collection" is a curated set of related products (same brand/benefit).
 * Returns up to limit; mock uses offset so collection shows different products from top products when possible.
 * Replace with API (e.g. shopCollection=246436636) later.
 */
export function getProductsByShopCollection(
  shopSlug: string,
  collectionSlug: string,
  limit = 6
): ProductRecord[] {
  const shop = getShopBySlug(shopSlug);
  if (!shop) return [];
  const all = MOCK_PRODUCTS.filter((p) => p.shopId === shop.id);
  if (collectionSlug === "root-booster-line") {
    if (all.length > limit) {
      return all.slice(6, 6 + limit);
    }
    return all.slice(0, limit);
  }
  if (collectionSlug === "new-root-treatment") {
    if (all.length >= 12 + limit) {
      return all.slice(12, 12 + limit);
    }
    if (all.length > 12) {
      return all.slice(12);
    }
    return all.slice(0, limit);
  }
  return all.slice(0, limit);
}

export function getCategoryLabel(slug: string): string {
  return CATEGORY_SLUG_TO_LABEL[slug] ?? slug;
}

export function isCategorySlug(slug: string): boolean {
  return slug in CATEGORY_SLUG_TO_LABEL && !PROMO_SLUGS.has(slug);
}
