/**
 * Mock data for Shopee Updates (notifications/shopee page).
 * Uses local images from public/images/common/user/shopee.
 */

export interface ShopeeUpdateItem {
  id: string;
  title: string;
  description: string;
  /** Thumbnail image path - use 1.png or 2.png */
  imageUrl: string;
  dateTime: string;
  href?: string;
}

const IMG1 = "/images/common/user/shopee/1.png";
const IMG2 = "/images/common/user/shopee/2.png";

export const MOCK_SHOPEE_UPDATES: ShopeeUpdateItem[] = [
  {
    id: "1",
    title: "Stand a chance to win up to 5,000 coins!",
    description:
      "Hi smogcoders, we would like to hear from you on your Shopee experience so that we can serve you better. Submit your survey now and stand a chance to win up to 5,000 coins! 👉",
    imageUrl: IMG1,
    dateTime: "21-01-2026 11:00",
    href: "#",
  },
  {
    id: "2",
    title: "Complete Your Profile Today!",
    description:
      "Get personalized vouchers, deals & news just for you! Update your profile now. 👉",
    imageUrl: IMG2,
    dateTime: "07-01-2026 12:00",
    href: "#",
  },
];
