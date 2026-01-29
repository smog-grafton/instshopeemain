/**
 * Mock data for Site Footer component
 */

export interface FooterLink {
  text: string;
  href: string;
  title?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

export interface SocialLink {
  text: string;
  href: string;
  iconSrc: string;
  title?: string;
}

export interface CountryLink {
  text: string;
  href: string;
}

export interface FooterConfig {
  columns: FooterColumn[];
  paymentLogos: LogoItem[];
  logisticsLogos: LogoItem[];
  socialLinks: SocialLink[];
  appDownload: {
    qrCode: string;
    appStoreBadges: LogoItem[];
  };
  copyright: string;
  countries: CountryLink[];
}

export const mockFooterConfig: FooterConfig = {
  columns: [
    {
      title: "CUSTOMER SERVICE",
      links: [
        { text: "Help Centre", href: "https://help.shopee.com.my/portal" },
        {
          text: "How To Buy",
          href: "https://help.shopee.com.my/portal/article/78540-[New-to-Shopee]-How-do-I-buy-a-product-on-Shopee%3F",
        },
        { text: "How To Sell", href: "https://seller.shopee.com.my/edu/article/351" },
        {
          text: "ShopeePay",
          href: "https://help.shopee.com.my/portal/article/78687-[ShopeePay]-What-is-ShopeePay?",
        },
        {
          text: "Shopee Coins",
          href: "https://help.shopee.com.my/portal/article/78476-[Shopee-Coins]-What-is-Shopee-Coins?",
        },
        { text: "Shopee Guarantee", href: "https://shopee.com.my/m/shopee-guarantee" },
        {
          text: "Shopee Free Shipping Program",
          href: "https://seller.shopee.com.my/edu/category?sub_cat_id=345",
        },
        {
          text: "Return & Refund",
          href: "https://help.shopee.com.my/portal/article/78634-[FAQ]-About-Returns%2FRefunds-for-Buyers",
        },
        {
          text: "Contact Us",
          href: "https://help.shopee.com.my/portal/article/78961-[Customer-service]-How-do-I-contact-Shopee-Customer-Service?",
        },
        {
          text: "Scam Safety Tips",
          href: "https://shopee.com.my/m/online-shopping-safety-tips",
        },
      ],
    },
    {
      title: "ABOUT SHOPEE",
      links: [
        { text: "About Us", href: "https://careers.shopee.com.my/about" },
        {
          text: "Shopee Careers",
          href: "https://careers.shopee.com.my/jobs?country_id=6",
        },
        {
          text: "Policies",
          href: "https://help.shopee.com.my/portal/4/category/17529-Policies/17530-Shopee-Policies?page=1",
        },
        {
          text: "Shopee Privacy Policy",
          href: "https://help.shopee.com.my/portal/4/article/77216-Shopee-Privacy-Policy",
        },
        { text: "Shopee Mall", href: "https://shopee.com.my/mall/" },
        { text: "Seller Centre", href: "https://seller.shopee.com.my/" },
        { text: "Shocking Sale", href: "https://shopee.com.my/shocking_sale/" },
        {
          text: "PR Newsroom",
          href: "https://sites.google.com/shopee.com/prnewsroom/home",
        },
        {
          text: "Shopee Affiliate Program",
          href: "https://s.shopee.com.my/1fyf80LeSJ",
        },
        { text: "Shopee Blog", href: "https://shopee.com.my/blog/" },
      ],
    },
  ],
  paymentLogos: [
    {
      src: "/images/footer/payment/payment-1.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-2.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-3.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-4.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-5.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-6.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-7.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-8.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-9.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-10.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-11.png",
      alt: "logo",
    },
    {
      src: "/images/footer/payment/payment-12.png",
      alt: "logo",
    },
  ],
  logisticsLogos: [
    {
      src: "/images/footer/logistics/logistics-1.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-2.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-3.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-4.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-5.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-6.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-7.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-8.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-9.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-10.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-11.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-12.png",
      alt: "logo",
    },
    {
      src: "/images/footer/logistics/logistics-13.png",
      alt: "logo",
    },
  ],
  socialLinks: [
    {
      text: "Facebook",
      href: "https://www.facebook.com/ShopeeMY",
      iconSrc: "/images/footer/social/facebook.png",
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/Shopee_MY/",
      iconSrc: "/images/footer/social/instagram.png",
    },
    {
      text: "Shopee Mamak",
      href: "https://shopee.com.my/shopee_mamak",
      iconSrc: "/images/footer/social/shopee-mamak.png",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/company/shopee",
      iconSrc: "/images/footer/social/linkedin.png",
    },
  ],
  appDownload: {
    qrCode: "/images/footer/app/qr-code.png",
    appStoreBadges: [
      {
        src: "/images/footer/app/app-store-1.png",
        alt: "app",
        href: "https://shopee.com.my/web",
      },
      {
        src: "/images/footer/app/app-store-2.png",
        alt: "app",
        href: "https://shopee.com.my/web",
      },
      {
        src: "/images/footer/app/app-store-3.png",
        alt: "app",
        href: "https://shopee.com.my/web",
      },
    ],
  },
  copyright: "Copyright 2026. Shopee Mobile Malaysia Sdn. Bhd. [201501009497 (1134832-W)]. All Rights Reserved.",
  countries: [
    { text: "Argentina", href: "https://shopee.com.ar" },
    { text: "Singapore", href: "https://shopee.sg" },
    { text: "Indonesia", href: "https://shopee.co.id" },
    { text: "Thailand", href: "https://shopee.co.th" },
    { text: "Malaysia", href: "https://shopee.com.my" },
    { text: "Vietnam", href: "https://shopee.vn" },
    { text: "Philippines", href: "https://shopee.ph" },
    { text: "Brazil", href: "https://shopee.com.br" },
    { text: "México", href: "https://shopee.com.mx" },
    { text: "Taiwan", href: "https://shopee.tw" },
  ],
};
