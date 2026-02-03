export interface FlashSaleGridProduct {
  id: string;
  name: string;
  imageSrc: string;
  originalPrice: string;
  price: string;
  discount: number;
  rating: number; // 0–5, e.g. 4.5
  status: "selling-fast" | "sold" | "only-left";
  statusValue?: number;
  badge?: "choice" | "preferred" | "mall";
  href: string;
}

const productImages = [
  "/images/stores/products/1.webp",
  "/images/stores/products/2.webp",
  "/images/stores/products/3.webp",
  "/images/stores/products/4.webp",
  "/images/stores/products/5.webp",
  "/images/stores/products/6.webp",
  "/images/stores/products/7.webp",
  "/images/stores/products/8.webp",
  "/images/stores/products/9.webp",
  "/images/stores/products/10.webp",
  "/images/stores/products/11.webp",
  "/images/stores/products/12.webp",
  "/images/stores/products/13.webp",
  "/images/stores/products/14.webp",
  "/images/stores/products/15.webp",
  "/images/stores/products/16.webp",
  "/images/stores/products/17.webp",
  "/images/stores/products/18.webp",
  "/images/stores/products/19.webp",
  "/images/stores/products/20.webp",
  "/images/stores/products/21.webp",
  "/images/stores/products/22.webp",
  "/images/stores/products/23.webp",
  "/images/stores/products/24.webp",
  "/images/stores/products/my-11134004-820lh-mk3ix8tx5i4g70.jpeg",
];

const sampleNames = [
  "DDPAI Z60 Pro 4K Dual Sony Starvis 2 Front & Rear Super Capacitor GPS Dash Cam with 4G Connectivity",
  "70x140cm Disposable Thick Bath Towels for Hotel & Travel - Individually Packaged, Bed Bug & Mite Resistant",
  "Ice Silk Seamless Underwear Middle Waist Panties Women Clothing",
  "Mid-Long Casual Sport Running Pants Short Pants Fitness Breathable Plus Size Men Selaur Lelaki",
  "MINISO MS105 AI Translator Earbud Wireless Earphone Bluetooth 6.0 Noise Reduction Earbuds",
  "ELGINI E16274 Seluar Denim Potongan Longgar S-XXL | Denim Loose Cut Pants",
  "ELGINI E16152 Seluar Bootcut Wanita S-XXL | Women's Bootcut Pants",
  "3 Ways Carry Duffel Backpack Water Resistant Wet Pocket Shoes Compartment Travel Outdoor",
  "LABER LEE Men Crossbody Pouch Bag Waterproof Nylon Polyester",
  "HELLO Men's Boxer Briefs Set (3/5 Pieces) - Breathable, Soft, Comfortable, Quick-Dry",
  "[Authentic] Durex Condom Love 12s Condoms",
  "Rechargeable Hair Clipper – Cordless Beard Trimmer, Cutter & Mini Shaver for Men (3-in-1 Set)",
  "X1 Mini Wireless Bluetooth Speaker | 360° Stereo Surround Sound & Deep Bass",
  "ELGINI E16051 Seluar Trek Kanak-Kanak S-XXL | Kids' Track Pants",
  "TWS Air31 Earbuds | Noise Reduction | Waterproof | Bluetooth 5.0 | HiFi 9D Stereo Sound (Black)",
  "Waterproof Leather Motor Seat Cover – Sun & Dustproof Protection Cushion Mat for EX5",
  "ZANZEA Women Vintage Loose Long Harem Elastic Waist Side Pockets Retro Pant",
  "OMOS Unisex Kargo Seluar Panjang Perempuan Wanita Cargo Long Pants Fashion Women",
  "UKLI TRANSPARENT POLARISED PREMIUM OKL HIGH QUALITY MEN WOMEN UNISEX SUNGLASSES",
  "80pcs Kitchen Cleaning Wipes - Heavy Duty Degreasing Wipes for Stove",
  "Men Casual Pants Man Long Pants Sports Wear Seluar Lelaki Jogger Pants",
  "200GSM Unisex Seluar Budak Panjang Sekolah Rendah Sukan Budak",
  "ELGINI E16230 Baju Polo Mikrofiber S-XXL | Microfiber Polo Shirt",
  "ELGINI E16028 Seluar Track Slim-Fit S-XXL | Slim-Fit Track Pants",
  "Man Casual Long Pants Jogger Pants Long Sport Pants with Pocket",
  "Daduhey raya 2024 Waist Adjustment Reduce Waist Size Anti-Glare Brooch",
  "Wireless Earbuds Bluetooth 5.0 with Charging Case",
  "Portable Bluetooth Speaker Waterproof IPX7 Outdoor",
  "Men's Cotton T-Shirt Basic Crew Neck Short Sleeve",
  "Women's Running Shoes Lightweight Breathable Sneakers",
];

function buildProducts(): FlashSaleGridProduct[] {
  const products: FlashSaleGridProduct[] = [];
  const statuses: Array<"selling-fast" | "sold" | "only-left"> = [
    "selling-fast",
    "sold",
    "only-left",
    "selling-fast",
    "sold",
    "selling-fast",
    "only-left",
    "sold",
    "selling-fast",
    "selling-fast",
  ];
  const badges: Array<"choice" | "preferred" | "mall" | undefined> = [
    "mall",
    "choice",
    "preferred",
    "preferred",
    "mall",
    "mall",
    "preferred",
    "choice",
    "mall",
    undefined,
  ];

  for (let i = 0; i < 30; i++) {
    const status = statuses[i % statuses.length];
    const statusValue =
      status === "sold"
        ? [86, 27, 24, 23, 81, 24][i % 6]
        : status === "only-left"
          ? [3, 5][i % 2]
          : undefined;
    const discount = [13, 96, 72, 69, 75, 25, 26, 72, 68, 55, 18, 80, 82, 7, 51, 55][i % 16] ?? 50;
    const originalPrices = ["889.00", "2.70", "10.60", "29.90", "65.98", "40.00", "30.00", "95.00", "56.00", "24.00", "29.90", "19.90", "35.97", "25.90", "15.60", "10.00"];
    const prices = ["755.99", "0.08", "1.99", "6.47", "16.39", "29.97", "22.21", "21.89", "18.04", "7.62", "24.52", "2.76", "4.62", "24.15", "5.33", "3.14"];
    const orig = originalPrices[i % originalPrices.length];
    const pr = prices[i % prices.length];
    products.push({
      id: `grid-${i + 1}`,
      name: sampleNames[i % sampleNames.length],
      imageSrc: productImages[i % productImages.length],
      originalPrice: orig,
      price: pr,
      discount,
      rating: i % 2 === 0 ? 4.5 : 5,
      status,
      statusValue,
      badge: badges[i % badges.length],
      href: `/product/${i + 1}`,
    });
  }
  return products;
}

export const flashSaleGridProducts: FlashSaleGridProduct[] = buildProducts();
