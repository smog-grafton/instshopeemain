export interface ShockingSaleProduct {
  id: string;
  name: string;
  price: string;
  discount: number;
  status: "selling-fast" | "only-left" | "sold";
  statusValue?: number; // For "only-left" or "sold"
  badge?: "choice" | "preferred" | "mall" | "top-picks";
  href: string;
  imageSrc?: string; // Will use default if not provided
}

export interface ShockingSaleConfig {
  title: string;
  titleImageUrl?: string;
  seeAllHref: string;
  promotionId: string;
  endsAt?: string; // ISO 8601 timestamp
  countdown: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  products: ShockingSaleProduct[];
}

export const mockShockingSaleConfig: ShockingSaleConfig = {
  title: "Flash Deals",
  seeAllHref: "/shocking_sale?promotionId=228338556026880",
  promotionId: "228338556026880",
  countdown: {
    hours: 3,
    minutes: 13,
    seconds: 12,
  },
  products: [
    {
      id: "1",
      name: "ZANZEA Women Vintage Loose Long Harem Elastic Waist Side Pockets Retro Pant",
      price: "28.32",
      discount: 51,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=13873413339&promotionId=228338556026880",
    },
    {
      id: "2",
      name: "OMOS Unisex Kargo Seluar Panjang Perempuan Wanita Cargo Long Pants Fashion Women",
      price: "9.41",
      discount: 29,
      status: "selling-fast",
      href: "/shocking_sale?fromItem=41625656547&promotionId=228338556026880",
    },
    {
      id: "3",
      name: "UKLI TRANSPARENT POLARISED PREMIUM OKL HIGH QUALITY MEN WOMEN UNISEX SUNGLASSES",
      price: "30.63",
      discount: 70,
      status: "selling-fast",
      href: "/shocking_sale?fromItem=28102881814&promotionId=228338556026880",
    },
    {
      id: "4",
      name: "Daduhey raya 2024 Waist Adjustment Reduce Waist Size Anti-Glare Brooch",
      price: "4.44",
      discount: 26,
      status: "only-left",
      statusValue: 8,
      badge: "top-picks",
      href: "/shocking_sale?fromItem=19106708135&promotionId=228338556026880",
    },
    {
      id: "5",
      name: "80pcs Kitchen Cleaning Wipes - Heavy Duty Degreasing Wipes for Stove",
      price: "0.86",
      discount: 75,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=25276087091&promotionId=228338556026880",
    },
    {
      id: "6",
      name: "Men Casual Pants Man Long Pants Sports Wear Seluar Lelaki Jogger Pants",
      price: "6.10",
      discount: 56,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=23479543390&promotionId=228338556026880",
    },
    {
      id: "7",
      name: "Ice Silk Seamless Underwear Middle Waist Panties Women Clothing",
      price: "0.90",
      discount: 82,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=2167390081&promotionId=228338556026880",
    },
    {
      id: "8",
      name: "200GSM Unisex Seluar Budak Panjang Sekolah Rendah Sukan Budak",
      price: "4.55",
      discount: 28,
      status: "selling-fast",
      href: "/shocking_sale?fromItem=24484225619&promotionId=228338556026880",
    },
    {
      id: "9",
      name: "ELGINI E16230 Baju Polo Mikrofiber S-XXL | Microfiber Polo Shirt",
      price: "10.79",
      discount: 38,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=28901773890&promotionId=228338556026880",
    },
    {
      id: "10",
      name: "seluar dalam bergaya lelaki 5 helai Set, seluar boxer bernafas",
      price: "7.60",
      discount: 36,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=25336311970&promotionId=228338556026880",
    },
    {
      id: "11",
      name: "ELGINI E16028 Seluar Track Slim-Fit S-XXL | Slim-Fit Track Pants",
      price: "23.90",
      discount: 3,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=6571292577&promotionId=228338556026880",
    },
    {
      id: "12",
      name: "Man Casual Long Pants Jogger Pants Long Sport Pants with Pocket",
      price: "6.78",
      discount: 39,
      status: "selling-fast",
      badge: "top-picks",
      href: "/shocking_sale?fromItem=21488608574&promotionId=228338556026880",
    },
  ],
};
