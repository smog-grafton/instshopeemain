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
  avatarUrl: string;
}

export interface NavbarConfig {
  sellerCentreUrl: string;
  downloadUrl: string;
  helpUrl: string;
  notificationsUrl: string;
  socialLinks: SocialLink[];
  user: UserData;
  currentLanguage: string;
}

export const mockNavbarConfig: NavbarConfig = {
  sellerCentreUrl: "//seller.shopee.com.my",
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
    username: "smogcoders",
    avatarUrl:
      "https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134226-820l6-mj5a4a9mul1h55_tn",
  },
  currentLanguage: "English",
};
