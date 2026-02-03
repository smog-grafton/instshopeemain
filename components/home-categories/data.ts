/**
 * Mock data for Home Categories component
 */

export interface CategoryItem {
  href: string;
  /** URL slug for /m/[slug] (e.g. mobile-accessories). */
  slug: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageSrcSet2x?: string;
  webpSrc?: string;
  webpSrcSet2x?: string;
  label: string;
}

export interface HomeCategoriesConfig {
  categories: CategoryItem[];
}

// Helper function to get local image path
const getLocalImagePath = (filename: string) => `/images/home/categories/home/${filename}`;

export const mockHomeCategoriesConfig: HomeCategoriesConfig = {
  categories: [
    { slug: "mobile-accessories", href: "/m/mobile-accessories", imageSrc: getLocalImagePath("mobile-accessories.webp"), webpSrc: getLocalImagePath("mobile-accessories.webp"), label: "Mobile & Accessories" },
    { slug: "women-clothes", href: "/m/women-clothes", imageSrc: getLocalImagePath("women-clothes.webp"), webpSrc: getLocalImagePath("women-clothes.webp"), label: "Women Clothes" },
    { slug: "watches", href: "/m/watches", imageSrc: getLocalImagePath("watches.webp"), webpSrc: getLocalImagePath("watches.webp"), label: "Watches" },
    { slug: "men-clothes", href: "/m/men-clothes", imageSrc: getLocalImagePath("men-clothes.webp"), webpSrc: getLocalImagePath("men-clothes.webp"), label: "Men Clothes" },
    { slug: "health-beauty", href: "/m/health-beauty", imageSrc: getLocalImagePath("health-beauty.webp"), webpSrc: getLocalImagePath("health-beauty.webp"), label: "Health & Beauty" },
    { slug: "home-living", href: "/m/home-living", imageSrc: getLocalImagePath("home-living.webp"), webpSrc: getLocalImagePath("home-living.webp"), label: "Home & Living" },
    { slug: "baby-toys", href: "/m/baby-toys", imageSrc: getLocalImagePath("baby-toys.webp"), webpSrc: getLocalImagePath("baby-toys.webp"), label: "Baby & Toys" },
    { slug: "home-appliances", href: "/m/home-appliances", imageSrc: getLocalImagePath("home-appliances.webp"), webpSrc: getLocalImagePath("home-appliances.webp"), label: "Home Appliances" },
    { slug: "groceries-pets", href: "/m/groceries-pets", imageSrc: getLocalImagePath("groceries-pets.webp"), webpSrc: getLocalImagePath("groceries-pets.webp"), label: "Groceries & Pets" },
    { slug: "women-shoes", href: "/m/women-shoes", imageSrc: getLocalImagePath("women-shoes.webp"), webpSrc: getLocalImagePath("women-shoes.webp"), label: "Women Shoes" },
    { slug: "automotive", href: "/m/automotive", imageSrc: getLocalImagePath("automotive.webp"), webpSrc: getLocalImagePath("automotive.webp"), label: "Automotive" },
    { slug: "fashion-accessories", href: "/m/fashion-accessories", imageSrc: getLocalImagePath("fashion-accessories.webp"), webpSrc: getLocalImagePath("fashion-accessories.webp"), label: "Fashion Accessories" },
    { slug: "womens-bags", href: "/m/womens-bags", imageSrc: getLocalImagePath("womens-bags.webp"), webpSrc: getLocalImagePath("womens-bags.webp"), label: "Women's Bags" },
    { slug: "computer-accessories", href: "/m/computer-accessories", imageSrc: getLocalImagePath("computer-accessories.webp"), webpSrc: getLocalImagePath("computer-accessories.webp"), label: "Computer & Accessories" },
    { slug: "mens-bags-wallets", href: "/m/mens-bags-wallets", imageSrc: getLocalImagePath("mens-bags-wallets.webp"), webpSrc: getLocalImagePath("mens-bags-wallets.webp"), label: "Men's Bags & Wallets" },
    { slug: "sports-outdoor", href: "/m/sports-outdoor", imageSrc: getLocalImagePath("sports-outdoor.webp"), webpSrc: getLocalImagePath("sports-outdoor.webp"), label: "Sports & Outdoor" },
    { slug: "muslim-fashion", href: "/m/muslim-fashion", imageSrc: getLocalImagePath("muslim-fashion.webp"), webpSrc: getLocalImagePath("muslim-fashion.webp"), label: "Muslim Fashion" },
    { slug: "men-shoes", href: "/m/men-shoes", imageSrc: getLocalImagePath("men-shoes.webp"), webpSrc: getLocalImagePath("men-shoes.webp"), label: "Men Shoes" },
    { slug: "games-books-hobbies", href: "/m/games-books-hobbies", imageSrc: getLocalImagePath("games-books-hobbies.webp"), webpSrc: getLocalImagePath("games-books-hobbies.webp"), label: "Games, Books & Hobbies" },
    { slug: "gaming-consoles", href: "/m/gaming-consoles", imageSrc: getLocalImagePath("gaming-consoles.webp"), webpSrc: getLocalImagePath("gaming-consoles.webp"), label: "Gaming & Consoles" },
    { slug: "travel-luggage", href: "/m/travel-luggage", imageSrc: getLocalImagePath("travel-luggage.webp"), webpSrc: getLocalImagePath("travel-luggage.webp"), label: "Travel & Luggage" },
    { slug: "cameras-drones", href: "/m/cameras-drones", imageSrc: getLocalImagePath("cameras-drones.webp"), webpSrc: getLocalImagePath("cameras-drones.webp"), label: "Cameras & Drones" },
    { slug: "others", href: "/m/others", imageSrc: getLocalImagePath("others.webp"), webpSrc: getLocalImagePath("others.webp"), label: "Others" },
    { slug: "tickets-vouchers", href: "/m/tickets-vouchers", imageSrc: getLocalImagePath("tickets-vouchers.webp"), webpSrc: getLocalImagePath("tickets-vouchers.webp"), label: "Tickets & Vouchers" },
  ],
};
