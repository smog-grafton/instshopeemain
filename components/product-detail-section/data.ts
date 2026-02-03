/** Single voucher entry shown in the Shop Vouchers popover list */
export interface ShopVoucherEntry {
  offer: string;
  minSpend: string;
  validTill: string;
  brand?: string;
  isWelcomeVoucher?: boolean;
}

export interface ProductDetailSectionData {
  title: string;
  rating: number;
  ratingsCount: number;
  sold: string;
  priceMin: string;
  priceMax: string;
  originalMin: string;
  originalMax: string;
  discountPercent: number;
  priceTeaserText: string;
  /** Short labels for inline voucher badges, e.g. ["RM1 OFF", "RM1 OFF"] */
  shopVoucherBadges: string[];
  /** Full list for the hover popover */
  shopVoucherList: ShopVoucherEntry[];
  shippingText: string;
  shippingSubtext: string;
  guaranteeText: string;
  favoriteCount: number;
  colors: { label: string; imagePath: string }[];
  sizes: string[];
  quantity: number;
  inStock: boolean;
  /** For add-to-cart; when set, Add to cart is enabled */
  slug?: string;
  imageSrc?: string;
  /** Unit price (number) for cart */
  price?: number;
  /** Shop info for grouping cart items */
  shopId?: string;
  shopName?: string;
  shopSlug?: string;
}

/** Single stat row in the shop profile (e.g. Ratings, Response Rate). */
export interface ShopProfileStat {
  label: string;
  value: string;
  /** If set, the value is rendered as a link (e.g. Products). */
  href?: string;
}

/** Data for the shop profile section (seller that posted the product). */
export interface ShopProfileData {
  shopName: string;
  activeText: string;
  shopHref: string;
  profileImagePath: string;
  stats: ShopProfileStat[];
}

export const defaultShopProfileData: ShopProfileData = {
  shopName: "FILLEONNE",
  activeText: "Active 4 Hours Ago",
  shopHref: "/filleonne.my?categoryId=100630&entryPoint=ShopByPDP&itemId=48853599058",
  profileImagePath: "/images/profile/shop/profile.webp",
  stats: [
    { label: "Ratings", value: "875" },
    { label: "Response Rate", value: "60%" },
    { label: "Joined", value: "10 months ago" },
    { label: "Products", value: "206", href: "/filleonne.my#product_list" },
    { label: "Response Time", value: "within hours" },
    { label: "Follower", value: "263" },
  ],
};

/** Category breadcrumb link for Product Specifications. */
export interface CategoryBreadcrumbLink {
  href: string;
  label: string;
}

/** Single product specification row: either a label+value or Category with breadcrumbs. */
export interface ProductSpecItem {
  label: string;
  /** Plain value for rows like Stock, Shelf Life, SPF, Ships From. */
  value?: string;
  /** For Category row only: links shown with arrow separators. */
  categoryBreadcrumbs?: CategoryBreadcrumbLink[];
}

/** Data for Product Specifications + Product Description block. */
export interface ProductSpecsDescriptionData {
  specifications: ProductSpecItem[];
  description: string;
}

export const defaultProductSpecsDescriptionData: ProductSpecsDescriptionData = {
  specifications: [
    {
      label: "Category",
      categoryBreadcrumbs: [
        { href: "/", label: "Shopee" },
        { href: "/Health-Beauty-cat.11000168", label: "Health & Beauty" },
        { href: "/Skincare-cat.11000168.11000285", label: "Skincare" },
        { href: "/Sunscreen-Aftersun-cat.11000168.11000285.11000294", label: "Sunscreen & Aftersun" },
      ],
    },
    { label: "Stock", value: "IN STOCK" },
    { label: "Shelf Life", value: "24 Months" },
    { label: "SPF", value: "90" },
    { label: "Ships From", value: "Selangor" },
  ],
  description: `﹋﹊✨✨ Welcome to My Shop ✨✨﹋﹊

💥Follow us and more discounts are awaited for you! 💥
✅ Our products are of very good quality. Please buy with confidence.
✅Don't forget to claim a voucher before order, or follow us to get a voucher before order!
🛒 All are ready stock except "Preorder" items from local malaysia. Ship within 24 hours!

Ultimate Sun Protection for Your Skin! ☀️

Enjoy high SPF90 PA+++ protection with the Rose Sunscreen Cream, designed to shield your skin from harmful UV rays while keeping it moisturized and radiant. The lightweight, non-greasy formula absorbs quickly and leaves no white cast, making it perfect for daily use and all skin types—even sensitive skin!

Choose Your Pack Size 📦

Select from multiple pack options to suit your needs: 1 PC, 2PCS, 4PCS. Whether you want a single tube for yourself or a bundle to share with family and friends, there's a choice for everyone!

Why You'll Love It 💖

- High SPF90 PA+++ protection for maximum defense
- Moisturizes and whitens for a healthy, glowing complexion
- Lightweight, non-greasy, and suitable for all skin types

Extra Perks 🌸

Each tube is packed with nourishing ingredients to help maintain your skin's natural radiance. Available in multiple pack sizes, this sunscreen is ideal for daily use and outdoor activities, ensuring your skin stays protected and beautiful every day!

The description, images and videos displayed in this listing may be enhanced by AI, actual products may vary.

❗❗After-sales treatment:
💬 Online customer service: 9:30-22:00 on weekdays, 10:00-20:00 on weekends/holidays,
 customer service is online in real time,and you can get back to us in seconds!
📩 Message feedback: If the customer service has not responded yet, you can leave a message on the order page and we will proactively contact you within 1 hour to solve the problem!

💖💖Heart-warming reminder:
After receiving the product, please check the packaging and product integrity first. If there are any problems, take photos and save them in time to facilitate quick processing.
If you have any problems with the product, please contact customer service and we will help you deal with it in time. Thank you for your understanding and support~`,
};

/** Review media: image (product image path) or video (URL + duration). */
export interface ReviewMediaItem {
  type: "image" | "video";
  /** Image path (e.g. /images/products/1.webp) or video URL. */
  src: string;
  /** For video: duration label e.g. "0:07". */
  duration?: string;
  /** For video: optional poster image path. */
  poster?: string;
}

/** Optional key-value attributes shown in a review (e.g. Skin Suitability, Absorption). */
export interface ReviewAttribute {
  label: string;
  value: string;
}

/** Single product review. */
export interface ProductReviewEntry {
  username: string;
  rating: number;
  date: string;
  variation: string;
  attributes?: ReviewAttribute[];
  comment: string;
  media: ReviewMediaItem[];
  helpfulCount?: number;
}

/** Product Ratings / Reviews section data. */
export interface ProductReviewsSectionData {
  overallScore: number;
  filterChips: { label: string; active?: boolean }[];
  reviews: ProductReviewEntry[];
}

const REVIEW_PRODUCT_IMAGES = [
  "/images/products/1.webp",
  "/images/products/2.webp",
  "/images/products/3.webp",
  "/images/products/4.webp",
  "/images/products/5.webp",
  "/images/products/6.webp",
  "/images/products/7.webp",
] as const;

/** Shuffle array and return new array (Fisher–Yates). */
function shuffle<T>(arr: readonly T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Sample video URL for review media (demo). */
const SAMPLE_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

function buildReviewMedia(hasVideo: boolean): ReviewMediaItem[] {
  const shuffled = shuffle(REVIEW_PRODUCT_IMAGES);
  const items: ReviewMediaItem[] = [];
  if (hasVideo) {
    items.push({
      type: "video",
      src: SAMPLE_VIDEO_URL,
      duration: ["0:04", "0:06", "0:07", "0:12"][Math.floor(Math.random() * 4)] ?? "0:07",
      poster: shuffled[0],
    });
  }
  shuffled.slice(0, hasVideo ? 4 : 5).forEach((src) => {
    if (items.some((m) => m.type === "video" && m.poster === src)) return;
    items.push({ type: "image", src });
  });
  return items;
}

export const defaultProductReviewsSectionData: ProductReviewsSectionData = {
  overallScore: 4.9,
  filterChips: [
    { label: "all", active: true },
    { label: "5 star (133)" },
    { label: "4 star (7)" },
    { label: "3 star (3)" },
    { label: "2 star (1)" },
    { label: "1 star (0)" },
    { label: "with comments (22)" },
    { label: "With Media (18)" },
  ],
  reviews: [
    {
      username: "d*****3",
      rating: 5,
      date: "2025-12-12 15:17",
      variation: "1PCS",
      attributes: [
        { label: "Skin Suitability:", value: "lembut dan wangi" },
        { label: "Absorption:", value: "brg smpai dgn selamat" },
      ],
      comment:
        "...wangi dan mudah menyerap dgn cepat lain kali order lagi..ini baru pertama beli kalau okey beli lagi ..tapi wangi dan mudah dipakai",
      media: buildReviewMedia(true),
      helpfulCount: undefined,
    },
    {
      username: "s*****i",
      rating: 5,
      date: "2025-09-20 09:00",
      variation: "1PCS",
      comment:
        "Wangi, mudah serap pd kulit, lembut ja. Pakai sikit ja dah nampak beza kat kulit. Boleh la dengan harga nya. Harap tak da la efax pd kulit.",
      media: buildReviewMedia(true),
      helpfulCount: 24,
    },
    {
      username: "y*****e",
      rating: 5,
      date: "2025-12-10 13:55",
      variation: "1PCS",
      attributes: [
        { label: "Absorption:", value: "Good" },
        { label: "Effectiveness:", value: "Good" },
      ],
      comment:
        "Hope it will do wonders to my complexion.. First trial..\n\nTq Seller.. ⭐⭐⭐⭐⭐",
      media: buildReviewMedia(true),
      helpfulCount: 1,
    },
    {
      username: "h*****a",
      rating: 5,
      date: "2025-11-12 14:08",
      variation: "BUY 1 TAKE 1(2pCs)",
      comment: "Nice design and very comfortable with affordable price. Good quality",
      media: buildReviewMedia(true),
      helpfulCount: undefined,
    },
    {
      username: "n*****8",
      rating: 5,
      date: "2025-12-20 06:00",
      variation: "1PCS",
      comment: "Brg slmt smpai tp biaseer je nyahhh. Sesuai la dgn harga nya..",
      media: buildReviewMedia(true),
      helpfulCount: undefined,
    },
    {
      username: "r*****1",
      rating: 5,
      date: "2025-10-23 09:13",
      variation: "1PCS",
      comment:
        "Sangat berpuas hati.... X melekit terus meresap dlm kulit dan senang dipakai bau pun wangi bau rose",
      media: buildReviewMedia(false),
      helpfulCount: undefined,
    },
  ],
};

/** Product images: main + thumbnails use /images/home/mall/products/ (1–5) */
export const PRODUCT_IMAGE_BASE = "/images/home/mall/products";

export function getProductImagePath(index: number, ext: "jpeg" | "webp" = "jpeg"): string {
  const n = Math.max(1, Math.min(18, index));
  return `${PRODUCT_IMAGE_BASE}/${n}.${ext}`;
}

/** Default product data for the first section */
export const defaultProductDetailData: ProductDetailSectionData = {
  title: "Latest RUN3.0 men's sneakers, casual men's shoes",
  rating: 4.4,
  ratingsCount: 685,
  sold: "3k+",
  priceMin: "RM10.48",
  priceMax: "RM18.59",
  originalMin: "RM17.49",
  originalMax: "RM18.59",
  discountPercent: 40,
  priceTeaserText: "Lower prices from 15:00, 1 Feb",
  shopVoucherBadges: ["RM1 OFF", "RM1 OFF"],
  shopVoucherList: [
    { offer: "RM1 off", minSpend: "RM10.9", validTill: "19.03.2026", brand: "FILLEONNE", isWelcomeVoucher: true },
    { offer: "RM1 off", minSpend: "RM15", validTill: "19.03.2026", brand: "FILLEONNE" },
  ],
  shippingText: "Guaranteed to get by 4 - 9 Feb",
  shippingSubtext: "Get a RM5.00 voucher if your order arrives late.",
  guaranteeText: "15-Day Free Returns · Cash on Delivery · Product Care Service Programme",
  favoriteCount: 198,
  colors: [
    { label: "RUN3.0 Black", imagePath: getProductImagePath(1) },
    { label: "RUN3.0 Blue", imagePath: getProductImagePath(2) },
    { label: "Black White AB", imagePath: getProductImagePath(3) },
    { label: "White green AB", imagePath: getProductImagePath(4) },
    { label: "AB orange", imagePath: getProductImagePath(5) },
    { label: "Black and white lightning", imagePath: getProductImagePath(6) },
    { label: "Black red lightning", imagePath: getProductImagePath(7) },
    { label: "Black and white Chx", imagePath: getProductImagePath(8) },
    { label: "Chx black red", imagePath: getProductImagePath(9) },
    { label: "F30 Black", imagePath: getProductImagePath(10) },
    { label: "Black Silluet", imagePath: getProductImagePath(11) },
    { label: "Silhouette Ash", imagePath: getProductImagePath(12) },
    { label: "Xtron Black", imagePath: getProductImagePath(13) },
    { label: "Xtron Ash", imagePath: getProductImagePath(14) },
  ],
  sizes: ["38", "39", "40", "41", "42", "43", "37"],
  quantity: 1,
  inStock: true,
};
