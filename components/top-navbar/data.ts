/**
 * Mock data for Top Navbar component
 */

export interface SocialLink {
  href: string;
  title: string;
  bgPosition: string;
}

export interface UserData {
  username: string;
  avatarUrl: string | null;
}

export interface NavbarConfig {
  /** First left link (e.g. "Seller Centre" or "Shopee Home"). If omitted, sellerCentreUrl is used with label "Seller Centre". */
  firstLeftLink?: { label: string; href: string };
  sellerCentreUrl: string;
  downloadUrl: string;
  helpUrl: string;
  notificationsUrl: string;
  socialLinks: SocialLink[];
  user: UserData;
  currentLanguage: string;
}

const sellerCentreUrl = process.env.NEXT_PUBLIC_SELLER_CENTRE_URL || "/portal";

export const mockNavbarConfig: NavbarConfig = {
  sellerCentreUrl,
  downloadUrl: "/web/",
  helpUrl: "https://help.shopee.com.my/my/s",
  notificationsUrl: "/user/notifications/order",
  socialLinks: [
    {
      href: "https://facebook.com/ShopeeMY",
      title: "Follow us on Facebook",
      bgPosition: "5.37634% 12.1951%",
    },
    {
      href: "https://instagram.com/Shopee_MY",
      title: "Follow us on Instagram!",
      bgPosition: "38.7097% 12.1951%",
    },
  ],
  user: {
    username: "User",
    avatarUrl: null as string | null,
  },
  currentLanguage: "English",
};

/** Config for shop/mall pages: "Shopee Home" as first link, same right section. */
export const mockShopNavbarConfig: NavbarConfig = {
  ...mockNavbarConfig,
  firstLeftLink: { label: "Shopee Home", href: "/" },
};
