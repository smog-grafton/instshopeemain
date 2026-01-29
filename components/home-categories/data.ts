/**
 * Mock data for Home Categories component
 */

export interface CategoryItem {
  href: string;
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
    {
      href: "/Mobile-Accessories-cat.11000979",
      imageSrc: getLocalImagePath("mobile-accessories.webp"),
      webpSrc: getLocalImagePath("mobile-accessories.webp"),
      label: "Mobile & Accessories",
    },
    {
      href: "/Women-Clothes-cat.11000538",
      imageSrc: getLocalImagePath("women-clothes.webp"),
      webpSrc: getLocalImagePath("women-clothes.webp"),
      label: "Women Clothes",
    },
    {
      href: "/Watches-cat.11001724",
      imageSrc: getLocalImagePath("watches.webp"),
      webpSrc: getLocalImagePath("watches.webp"),
      label: "Watches",
    },
    {
      href: "/Men-Clothes-cat.11000587",
      imageSrc: getLocalImagePath("men-clothes.webp"),
      webpSrc: getLocalImagePath("men-clothes.webp"),
      label: "Men Clothes",
    },
    {
      href: "/Health-Beauty-cat.11000168",
      imageSrc: getLocalImagePath("health-beauty.webp"),
      webpSrc: getLocalImagePath("health-beauty.webp"),
      label: "Health & Beauty",
    },
    {
      href: "/Home-Living-cat.11001155",
      imageSrc: getLocalImagePath("home-living.webp"),
      webpSrc: getLocalImagePath("home-living.webp"),
      label: "Home & Living",
    },
    {
      href: "/Baby-Toys-cat.11000345",
      imageSrc: getLocalImagePath("baby-toys.webp"),
      webpSrc: getLocalImagePath("baby-toys.webp"),
      label: "Baby & Toys",
    },
    {
      href: "/Home-Appliances-cat.11000824",
      imageSrc: getLocalImagePath("home-appliances.webp"),
      webpSrc: getLocalImagePath("home-appliances.webp"),
      label: "Home Appliances",
    },
    {
      href: "/Groceries-Pets-cat.11000003",
      imageSrc: getLocalImagePath("groceries-pets.webp"),
      webpSrc: getLocalImagePath("groceries-pets.webp"),
      label: "Groceries & Pets",
    },
    {
      href: "/Women-Shoes-cat.11000764",
      imageSrc: getLocalImagePath("women-shoes.webp"),
      webpSrc: getLocalImagePath("women-shoes.webp"),
      label: "Women Shoes",
    },
    {
      href: "/Automotive-cat.11001440",
      imageSrc: getLocalImagePath("automotive.webp"),
      webpSrc: getLocalImagePath("automotive.webp"),
      label: "Automotive",
    },
    {
      href: "/Fashion-Accessories-cat.11000690",
      imageSrc: getLocalImagePath("fashion-accessories.webp"),
      webpSrc: getLocalImagePath("fashion-accessories.webp"),
      label: "Fashion Accessories",
    },
    {
      href: "/Women's-Bags-cat.11000710",
      imageSrc: getLocalImagePath("womens-bags.webp"),
      webpSrc: getLocalImagePath("womens-bags.webp"),
      label: "Women's Bags",
    },
    {
      href: "/Computer-Accessories-cat.11000910",
      imageSrc: getLocalImagePath("computer-accessories.webp"),
      webpSrc: getLocalImagePath("computer-accessories.webp"),
      label: "Computer & Accessories",
    },
    {
      href: "/Men's-Bags-Wallets-cat.11000745",
      imageSrc: getLocalImagePath("mens-bags-wallets.webp"),
      webpSrc: getLocalImagePath("mens-bags-wallets.webp"),
      label: "Men's Bags & Wallets",
    },
    {
      href: "/Sports-Outdoor-cat.11001273",
      imageSrc: getLocalImagePath("sports-outdoor.webp"),
      webpSrc: getLocalImagePath("sports-outdoor.webp"),
      label: "Sports & Outdoor",
    },
    {
      href: "/Muslim-Fashion-cat.11000616",
      imageSrc: getLocalImagePath("muslim-fashion.webp"),
      webpSrc: getLocalImagePath("muslim-fashion.webp"),
      label: "Muslim Fashion",
    },
    {
      href: "/Men-Shoes-cat.11000781",
      imageSrc: getLocalImagePath("men-shoes.webp"),
      webpSrc: getLocalImagePath("men-shoes.webp"),
      label: "Men Shoes",
    },
    {
      href: "/Games-Books-Hobbies-cat.11001378",
      imageSrc: getLocalImagePath("games-books-hobbies.webp"),
      webpSrc: getLocalImagePath("games-books-hobbies.webp"),
      label: "Games, Books & Hobbies",
    },
    {
      href: "/Gaming-Consoles-cat.11001085",
      imageSrc: getLocalImagePath("gaming-consoles.webp"),
      webpSrc: getLocalImagePath("gaming-consoles.webp"),
      label: "Gaming & Consoles",
    },
    {
      href: "/Travel-Luggage-cat.11000799",
      imageSrc: getLocalImagePath("travel-luggage.webp"),
      webpSrc: getLocalImagePath("travel-luggage.webp"),
      label: "Travel & Luggage",
    },
    {
      href: "/Cameras-Drones-cat.11001100",
      imageSrc: getLocalImagePath("cameras-drones.webp"),
      webpSrc: getLocalImagePath("cameras-drones.webp"),
      label: "Cameras & Drones",
    },
    {
      href: "/Others-cat.11032871",
      imageSrc: getLocalImagePath("others.webp"),
      webpSrc: getLocalImagePath("others.webp"),
      label: "Others",
    },
    {
      href: "/Tickets-Vouchers-cat.11001536",
      imageSrc: getLocalImagePath("tickets-vouchers.webp"),
      webpSrc: getLocalImagePath("tickets-vouchers.webp"),
      label: "Tickets & Vouchers",
    },
  ],
};
