const BASE_QUERY = "fromItem=23479543390&promotionId=230023730900992";

export interface CategoryTab {
  label: string;
  href: string;
  categoryId: number;
}

export interface MoreMenuItem {
  label: string;
  href: string;
}

export const defaultCategoryTabs: CategoryTab[] = [
  { label: "Top Picks", categoryId: 0, href: `/shocking_sale?categoryId=0&${BASE_QUERY}` },
  { label: "CNY 2026", categoryId: 21, href: `/shocking_sale?categoryId=21&${BASE_QUERY}` },
  { label: "Ramadan 2026", categoryId: 22, href: `/shocking_sale?categoryId=22&${BASE_QUERY}` },
  { label: "Fashion", categoryId: 1, href: `/shocking_sale?categoryId=1&${BASE_QUERY}` },
  { label: "Health & Beauty", categoryId: 6, href: `/shocking_sale?categoryId=6&${BASE_QUERY}` },
  {
    label: "Lagi Murah Viral Trends",
    categoryId: 119,
    href: `/shocking_sale?categoryId=119&${BASE_QUERY}`,
  },
];

export const defaultMoreMenuItems: MoreMenuItem[] = [
  { label: "E-Vouchers & Services", href: `/shocking_sale?categoryId=100&${BASE_QUERY}` },
  { label: "Shopee Choice", href: `/shocking_sale?categoryId=101&${BASE_QUERY}` },
  { label: "Shopee Mall", href: `/shocking_sale?categoryId=102&${BASE_QUERY}` },
  { label: "Home & Living", href: `/shocking_sale?categoryId=103&${BASE_QUERY}` },
  { label: "Lifestyle", href: `/shocking_sale?categoryId=104&${BASE_QUERY}` },
  { label: "Electronics", href: `/shocking_sale?categoryId=105&${BASE_QUERY}` },
  { label: "Baby & Toys", href: `/shocking_sale?categoryId=106&${BASE_QUERY}` },
  { label: "Groceries & Pets", href: `/shocking_sale?categoryId=107&${BASE_QUERY}` },
];
