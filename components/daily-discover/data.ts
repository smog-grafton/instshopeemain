export interface DailyDiscoverProduct {
  id: string;
  title: string;
  discountPercent: number;
  price: string;
  sold: string;
  href: string;
  findSimilarHref: string;
  imageIndex: number; // 1–7, cycles through local images
  imageSrc?: string;
  hasVideo: boolean;
  badges: ("shopee-lagi-murah" | "cod" | "mall" | "new-arrival" | "preferred" | "sea-shipping")[];
  promotionLabel?: string; // e.g. "15% off", "RM9 off", "RM0.3 off"
  hasFlagLabel?: boolean; // e.g. [Ready Stock]
}

const IMAGE_EXT: Record<number, "jpeg" | "webp"> = {
  1: "jpeg",
  2: "webp",
  3: "webp",
  4: "jpeg",
  5: "webp",
  6: "webp",
  7: "webp",
};

export function getDailyDiscoverImageSrc(imageIndex: number): string {
  const n = ((imageIndex - 1) % 7) + 1;
  const ext = IMAGE_EXT[n as keyof typeof IMAGE_EXT] ?? "webp";
  return `/images/home/daily-discover/${n}.${ext}`;
}

export const INFO_BAR_IMAGE = "/images/home/daily-discover/bar/info-bar.png";

export const dailyDiscoverProducts: DailyDiscoverProduct[] = [
  { id: "1", title: "Cartoon Children Learning Chopstick Kids Training Chopstick with Stainless Steel Bottom Beginner Latih 宝宝儿童训练筷", discountPercent: 61, price: "3.90", sold: "1k+", href: "#", findSimilarHref: "#", imageIndex: 1, hasVideo: true, badges: ["shopee-lagi-murah", "cod"] },
  { id: "2", title: "【Ready Stock】Glad2Glow Perfect Glow Cover Cushion Foundation Full Coverage Glowing Finish Glass Makeup Lightweight", discountPercent: 55, price: "26.50", sold: "20k+", href: "#", findSimilarHref: "#", imageIndex: 2, hasVideo: true, badges: ["shopee-lagi-murah"], promotionLabel: "15% off", hasFlagLabel: true },
  { id: "3", title: "FASHION KIDS' CLOTHES, PREMIUM SPORTY BASEBALL JERSEY FOR AGES 1-10 YEARS", discountPercent: 44, price: "5.87", sold: "117", href: "#", findSimilarHref: "#", imageIndex: 3, hasVideo: false, badges: ["cod"], hasFlagLabel: true },
  { id: "4", title: "GS28 High Glitter Women Beauty Weekend Original Premium Korean/ Y02", discountPercent: 54, price: "9.83", sold: "2k+", href: "#", findSimilarHref: "#", imageIndex: 4, hasVideo: false, badges: ["cod"] },
  { id: "5", title: "ELGINI E16028 Seluar Track Slim-Fit S-XXL | Slim-Fit Track Pants", discountPercent: 86, price: "29.90", sold: "1000k+", href: "#", findSimilarHref: "#", imageIndex: 5, hasVideo: true, badges: ["shopee-lagi-murah"], promotionLabel: "RM9 off", hasFlagLabel: true },
  { id: "6", title: "VODELL 46/53/61pcs Combination Socket Wrench Ratchet Spanner Tools Set Box Spark Plug Alatan 工具套装", discountPercent: 73, price: "12.90", sold: "8k+", href: "#", findSimilarHref: "#", imageIndex: 6, hasVideo: false, badges: ["shopee-lagi-murah", "cod"], hasFlagLabel: true },
  { id: "7", title: "CRYBABY Leopard Cat Series Vinyl Plush Pendant Blind Box Cute Gift", discountPercent: 72, price: "14.94", sold: "10k+", href: "#", findSimilarHref: "#", imageIndex: 7, hasVideo: true, badges: ["shopee-lagi-murah"], promotionLabel: "10% off" },
  { id: "8", title: "4000mAh High Speed Handheld Fan Strong Wind 100 Gear With Adjustable Speeds LED Display Battery Portable Quiet Mini Fan", discountPercent: 89, price: "11.99", sold: "20k+", href: "#", findSimilarHref: "#", imageIndex: 1, hasVideo: false, badges: ["shopee-lagi-murah"], promotionLabel: "15% off", hasFlagLabel: true },
  { id: "9", title: "【READY STOCK】Men's Automatic Quartz Watch Hollow Waterproof Luminous Watch High-End Business Watches Jam Tangan", discountPercent: 84, price: "4.07", sold: "3k+", href: "#", findSimilarHref: "#", imageIndex: 2, hasVideo: true, badges: ["shopee-lagi-murah"], promotionLabel: "RM0.59 off" },
  { id: "10", title: "【New Launch】Glad2Glow Niacinamide Serum Facial Wash Cleanser Brightening Hydrating Glowing Face Wash Pencuci Muka", discountPercent: 59, price: "15.90", sold: "10k+", href: "#", findSimilarHref: "#", imageIndex: 3, hasVideo: true, badges: ["shopee-lagi-murah"], promotionLabel: "15% off", hasFlagLabel: true },
  { id: "11", title: "Mix Nuts & Dried Fruits - Product of Malaysia with Imported Premium Ingredients", discountPercent: 40, price: "5.99", sold: "5k+", href: "#", findSimilarHref: "#", imageIndex: 4, hasVideo: false, badges: ["shopee-lagi-murah", "cod"] },
  { id: "12", title: "Iron Ceramic Hair Straightener Styling Tools Machine 2 in 1 Hair Straightener Hair Curler Wet Dry Pelurus Rambut 直发棒", discountPercent: 86, price: "13.90", sold: "10k+", href: "#", findSimilarHref: "#", imageIndex: 5, hasVideo: false, badges: ["shopee-lagi-murah"], promotionLabel: "RM2 off" },
  { id: "13", title: "Jogging shoes, men's and women's sneakers, wings s", discountPercent: 59, price: "6.05", sold: "5k+", href: "#", findSimilarHref: "#", imageIndex: 6, hasVideo: false, badges: ["shopee-lagi-murah", "cod"] },
  { id: "14", title: "Glad2Glow FLAWLESS BLURRING SKIN TINT High Coverage Lightweight Long Lasting Foundation Tinted Moisturizer Concealer", discountPercent: 69, price: "18.32", sold: "100k+", href: "#", findSimilarHref: "#", imageIndex: 7, hasVideo: true, badges: ["shopee-lagi-murah"], promotionLabel: "15% off", hasFlagLabel: true },
  { id: "15", title: "A9 Pro TWS Screen Wireless Bluetooth Headphones TWS in-Ear with Microphone Hifi Stereo Sports Waterproof Gaming Headset", discountPercent: 73, price: "14.90", sold: "10k+", href: "#", findSimilarHref: "#", imageIndex: 1, hasVideo: false, badges: ["shopee-lagi-murah"], promotionLabel: "15% off", hasFlagLabel: true },
  { id: "16", title: "【READY STOCK AT Johor】 Hotgirl⭐Women's casual wide leg pants loose pants straight trousers(SIZE: S-3XL)", discountPercent: 51, price: "12.69", sold: "7k+", href: "#", findSimilarHref: "#", imageIndex: 2, hasVideo: false, badges: ["shopee-lagi-murah", "cod"], hasFlagLabel: true },
  { id: "17", title: "Clothing Set CNY 2026, Horse Printed Train Button Set.NT25 .", discountPercent: 58, price: "3.63", sold: "1k+", href: "#", findSimilarHref: "#", imageIndex: 3, hasVideo: true, badges: ["cod"], hasFlagLabel: true },
  { id: "18", title: "Lakers Snapback Hat Men and Women Fashion Embroidery Hip-Hop Caps Build UP Baseball Hat Large Size", discountPercent: 75, price: "8.25", sold: "10k+", href: "#", findSimilarHref: "#", imageIndex: 4, hasVideo: false, badges: ["cod"] },
  { id: "19", title: "🚚LOCALSALES&COD🚚 Men Short Pants Ice Sports Casual Shorts Wear Men's Summer Beach Pants Quick-Drying", discountPercent: 70, price: "8.90", sold: "10k+", href: "#", findSimilarHref: "#", imageIndex: 5, hasVideo: true, badges: ["shopee-lagi-murah", "cod"] },
  { id: "20", title: "Latest Women's 5cm Heel Flip Flops with Pearl Straps for Weddings", discountPercent: 72, price: "11.81", sold: "279", href: "#", findSimilarHref: "#", imageIndex: 6, hasVideo: true, badges: ["cod"] },
  { id: "21", title: "Beg bagasi 14/16/20/24 Inch Abs Hardshell Lightweight Carry On Suitcase Travel Luggage G Hook", discountPercent: 17, price: "24.90", sold: "3k+", href: "#", findSimilarHref: "#", imageIndex: 7, hasVideo: false, badges: ["shopee-lagi-murah"], promotionLabel: "RM6 off" },
  { id: "22", title: "NUNU Matte Josie Bag Beg Tangan Viral - Women Fashion PU Leather Crossbody & Shoulder Bag, Free Keychain Included", discountPercent: 72, price: "42.00", sold: "153", href: "#", findSimilarHref: "#", imageIndex: 1, hasVideo: false, badges: ["new-arrival"], promotionLabel: "30% off", hasFlagLabel: true },
  { id: "23", title: "American style women clothing | Oversized Crew Neck T-shirt 100% cotton | RISE print  stylish casual tops y2k", discountPercent: 6, price: "15.90", sold: "360", href: "#", findSimilarHref: "#", imageIndex: 2, hasVideo: true, badges: ["shopee-lagi-murah", "cod"] },
  { id: "24", title: "Women's volleyball pants with a slit", discountPercent: 40, price: "4.55", sold: "6k+", href: "#", findSimilarHref: "#", imageIndex: 3, hasVideo: true, badges: ["cod"] },
  { id: "25", title: "Men's and Women's Slip-On Sandals, Adults, Teenagers, Kids, Cool, Trendy, Anti-Slip Sandals for Girls and Boys", discountPercent: 40, price: "13.09", sold: "8k+", href: "#", findSimilarHref: "#", imageIndex: 4, hasVideo: false, badges: ["cod", "shopee-lagi-murah"] },
  { id: "26", title: "MIRA Knit Women's Crop Top (LD 80, P 45)", discountPercent: 74, price: "5.87", sold: "217", href: "#", findSimilarHref: "#", imageIndex: 5, hasVideo: false, badges: ["new-arrival", "cod"] },
  { id: "27", title: "PANDAEYES SUNSET PALAZZO PANTS (CLO-CNXC0906LP)", discountPercent: 79, price: "16.90", sold: "1k+", href: "#", findSimilarHref: "#", imageIndex: 6, hasVideo: false, badges: ["shopee-lagi-murah", "new-arrival"], hasFlagLabel: true },
  { id: "28", title: "OMOS Long Pants Loose Wide Leg Fashion American Style Side Stripe Summer Thin Paratrooper For Women", discountPercent: 26, price: "13.96", sold: "4k+", href: "#", findSimilarHref: "#", imageIndex: 7, hasVideo: false, badges: ["shopee-lagi-murah"], promotionLabel: "30% off" },
  { id: "29", title: "TIME PHORIA - 【New Launch】Milkyway Melting Lip Stick 5D Mirror-Like Effect Bionic Breathable Film Silky smooth", discountPercent: 56, price: "34.99", sold: "955", href: "#", findSimilarHref: "#", imageIndex: 1, hasVideo: false, badges: ["new-arrival"], promotionLabel: "20% off", hasFlagLabel: true },
  { id: "30", title: "CUSTOM MIKIHAT CAP HAT with Hijrah Writing UAS PECI/", discountPercent: 40, price: "5.87", sold: "6k+", href: "#", findSimilarHref: "#", imageIndex: 2, hasVideo: false, badges: ["cod", "shopee-lagi-murah"] },
  { id: "31", title: "MODERN FLAT SANDALS G77", discountPercent: 40, price: "6.49", sold: "171", href: "#", findSimilarHref: "#", imageIndex: 3, hasVideo: false, badges: ["cod"] },
  { id: "32", title: "Women's Shoulder Bag | Women's shoulder bag, moon-shaped leather shoulder bag", discountPercent: 9, price: "10.88", sold: "9k+", href: "#", findSimilarHref: "#", imageIndex: 4, hasVideo: true, badges: ["shopee-lagi-murah", "cod"] },
  { id: "33", title: "9PCS Ice Silk 7A Antibacterial Mid Waist Women Panties Mulberry Silk Soft Breathable", discountPercent: 24, price: "6.80", sold: "920", href: "#", findSimilarHref: "#", imageIndex: 5, hasVideo: true, badges: ["shopee-lagi-murah"], promotionLabel: "5% off" },
  { id: "34", title: "BOY Long Sleeves Kids Cartoon Pyjamas Baju Tidur Cotton Budak Lelaki Kids Sleepwear Set", discountPercent: 50, price: "10.80", sold: "607", href: "#", findSimilarHref: "#", imageIndex: 6, hasVideo: false, badges: ["new-arrival", "cod"] },
  { id: "35", title: "Zigjak ase men's and women's casual sneakers", discountPercent: 50, price: "16.39", sold: "3k+", href: "#", findSimilarHref: "#", imageIndex: 7, hasVideo: false, badges: ["shopee-lagi-murah", "cod"] },
  { id: "36", title: "CELANASWPR - Baggy Pant Fleece Material Black Skena Pants 10-15", discountPercent: 54, price: "18.15", sold: "272", href: "#", findSimilarHref: "#", imageIndex: 1, hasVideo: false, badges: ["cod", "shopee-lagi-murah"], hasFlagLabel: true },
  { id: "37", title: "Mintas SPORT Round Clear Bag for Sports, GYM, Soccer with Separate Shoe Compartment", discountPercent: 61, price: "14.25", sold: "262", href: "#", findSimilarHref: "#", imageIndex: 2, hasVideo: true, badges: ["cod"], hasFlagLabel: true },
  { id: "38", title: "seluar dalam bergaya lelaki 5 helai Set, seluar boxer bernafas, lembut, selesa, cepat kering, murah", discountPercent: 36, price: "7.64", sold: "100k+", href: "#", findSimilarHref: "#", imageIndex: 3, hasVideo: false, badges: ["shopee-lagi-murah", "cod"], hasFlagLabel: true },
  { id: "39", title: "playboy wallet leather texture men's wallet short wallet card holder clutch bag long wallet driver's license leather case", discountPercent: 70, price: "6.00", sold: "8k+", href: "#", findSimilarHref: "#", imageIndex: 4, hasVideo: false, badges: ["shopee-lagi-murah", "cod"] },
  { id: "40", title: "JST Grill pan outdoor barbecue non-stick grill pan camping cookware pinggan BBQ 燒盤", discountPercent: 33, price: "9.99", sold: "166", href: "#", findSimilarHref: "#", imageIndex: 5, hasVideo: false, badges: ["new-arrival", "cod"] },
  { id: "41", title: "Handsock thumb cuff unisex volleyball sports bicycle", discountPercent: 40, price: "4.54", sold: "1k+", href: "#", findSimilarHref: "#", imageIndex: 6, hasVideo: false, badges: ["cod", "shopee-lagi-murah"], hasFlagLabel: true },
  { id: "42", title: "Cloud Running Hat Outdoor Lightweight Cycling Running Hat/ Cycling Run Caps Hat Quick Dry Ultralight", discountPercent: 40, price: "8.25", sold: "244", href: "#", findSimilarHref: "#", imageIndex: 7, hasVideo: false, badges: ["cod"] },
];
