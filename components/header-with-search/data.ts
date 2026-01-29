/**
 * Mock data for Header with Search component
 */

export interface SearchSuggestion {
  keyword: string;
  href: string;
  ariaHidden?: boolean;
}

export interface HeaderConfig {
  searchPlaceholder: string;
  searchSuggestions: SearchSuggestion[];
  cartItemCount: number;
}

export const mockHeaderConfig: HeaderConfig = {
  searchPlaceholder:
    "Daily 25% Off Voucher only with ShopeeVIP👑! Subscribe Now 👉",
  searchSuggestions: [
    { keyword: "Bostanten Handbag", href: "/search?keyword=bostanten%20handbag" },
    { keyword: "Wallet For Man", href: "/search?keyword=wallet%20for%20man" },
    { keyword: "Smart Watch Call", href: "/search?keyword=smart%20watch%20call" },
    { keyword: "Baju Cantik", href: "/search?keyword=baju%20cantik" },
    { keyword: "iPhone 14pro Max", href: "/search?keyword=iphone%2014pro%20max" },
    { keyword: "Instax Mini 12", href: "/search?keyword=instax%20mini%2012" },
    { keyword: "Cincin Habib 916", href: "/search?keyword=cincin%20habib%20916" },
    { keyword: "Tas Wanita Terbaru Branded", href: "/search?keyword=tas%20wanita%20terbaru%20branded" },
    { keyword: "Kipas Turbo Mini", href: "/search?keyword=kipas%20turbo%20mini", ariaHidden: true },
    { keyword: "Baggy Jeans Grey", href: "/search?keyword=baggy%20jeans%20grey", ariaHidden: true },
    { keyword: "Crop Top Set Plus Size", href: "/search?keyword=crop%20top%20set%20plus%20size", ariaHidden: true },
    { keyword: "Sandal Perempuan", href: "/search?keyword=sandal%20perempuan", ariaHidden: true },
    { keyword: "女生睡衣", href: "/search?keyword=%E5%A5%B3%E7%94%9F%E7%9D%A1%E8%A1%A3", ariaHidden: true },
    { keyword: "Pandora Original 100% Malaysia", href: "/search?keyword=pandora%20original%20100%25%20malaysia", ariaHidden: true },
    { keyword: "Glad2glow", href: "/search?keyword=glad2glow", ariaHidden: true },
    { keyword: "Seluar Baggy Murah", href: "/search?keyword=seluar%20baggy%20murah", ariaHidden: true },
    { keyword: "包包 女 斜挎包 2024 新款", href: "/search?keyword=%E5%8C%85%E5%8C%85%20%E5%A5%B3%20%E6%96%9C%E6%8C%8E%E5%8C%85%202024%20%E6%96%B0%E6%AC%BE", ariaHidden: true },
    { keyword: "Tiger Shoes Onitsuka Original", href: "/search?keyword=tiger%20shoes%20onitsuka%20original", ariaHidden: true },
    { keyword: "Welding Set Mig Tanpa Gas", href: "/search?keyword=welding%20set%20mig%20tanpa%20gas", ariaHidden: true },
    { keyword: "Casing Lucu", href: "/search?keyword=casing%20lucu", ariaHidden: true },
    { keyword: "Tilam Lembut", href: "/search?keyword=tilam%20lembut", ariaHidden: true },
    { keyword: "70mai A200", href: "/search?keyword=70mai%20a200", ariaHidden: true },
    { keyword: "Jam Perempuan CASIO Original", href: "/search?keyword=jam%20perempuan%20casio%20original", ariaHidden: true },
    { keyword: "Almari Plastik Besar", href: "/search?keyword=almari%20plastik%20besar", ariaHidden: true },
    { keyword: "iPad 10th Generation Keyboard Case", href: "/search?keyword=ipad%2010th%20generation%20keyboard%20case", ariaHidden: true },
    { keyword: "Baju 1 Set Woman Korean", href: "/search?keyword=baju%201%20set%20woman%20korean", ariaHidden: true },
    { keyword: "拉布布", href: "/search?keyword=%E6%8B%89%E5%B8%83%E5%B8%83", ariaHidden: true },
    { keyword: "Roller Shoes Kids", href: "/search?keyword=roller%20shoes%20kids", ariaHidden: true },
    { keyword: "ZANZEA Blouse Plus Size", href: "/search?keyword=zanzea%20blouse%20plus%20size", ariaHidden: true },
    { keyword: "旅行箱", href: "/search?keyword=%E6%97%85%E8%A1%8C%E7%AE%B1", ariaHidden: true },
    { keyword: "Rolex Original 100%", href: "/search?keyword=rolex%20original%20100%25", ariaHidden: true },
    { keyword: "Hermes Kelly Bag", href: "/search?keyword=hermes%20kelly%20bag", ariaHidden: true },
    { keyword: "Kasut Perempuan", href: "/search?keyword=kasut%20perempuan", ariaHidden: true },
    { keyword: "Handbag Aesthetic", href: "/search?keyword=handbag%20aesthetic", ariaHidden: true },
    { keyword: "Handbag Women", href: "/search?keyword=handbag%20women", ariaHidden: true },
  ],
  cartItemCount: 0,
};
