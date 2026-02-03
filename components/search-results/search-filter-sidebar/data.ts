/**
 * Filter options for the search results sidebar.
 * Matches the sections from the Shopee-style filter UI (Shipped From, Shipping Option, etc.).
 */

export const SHIPPED_FROM_OPTIONS = [
  "Local",
  "Overseas",
  "West Malaysia",
  "East Malaysia",
  "Selangor",
  "Kuala Lumpur",
  "Johor",
  "Penang",
  "Perak",
  "Kedah",
  "Kelantan",
  "Negeri Sembilan",
  "Melaka",
  "Pahang",
  "Terengganu",
  "Perlis",
  "Sabah",
  "Sarawak",
  "Putrajaya",
  "Labuan",
] as const;

export const SHIPPING_OPTION_OPTIONS = [
  "Instant Delivery",
  "2-Day Delivery",
  "Self Collection Point",
  "Doorstep Delivery",
  "Trade-in",
  "Standard Doorstep Delivery (International)",
  "Express Delivery (International)",
  "Doorstep Delivery (Sea Shipping)",
  "Doorstep Delivery (International Sea Shipping)",
  "Economy Delivery (Mail Drop)",
  "Bulky Delivery",
  "In-Store Pickup",
  "Installation Service",
  "Doorstep Delivery (Brunei)",
] as const;

export const SHOP_TYPE_OPTIONS = [
  "Shopee Mall",
  "Shopee Choice",
  "Shopee Preferred",
  "Fulfilled by Shopee",
] as const;

export const SERVICE_PROMOTION_OPTIONS = [
  "Shopee Lagi Murah",
  "Free Shipping",
  "10% Cashback",
  "15 Days Free Returns",
  "0% SPayLater Instalment",
  "With Discount",
  "Ready Stock",
  "Wholesale",
] as const;

export const BY_CATEGORY_OPTIONS = [
  { value: "11000241", label: "Hair Styling" },
  { value: "11000239", label: "Hair & Scalp Treatments" },
  { value: "11000690", label: "Fashion Accessories" },
  { value: "11000003", label: "Groceries & Pets" },
  { value: "11000123", label: "Beauty & Personal Care" },
  { value: "11000001", label: "Women's Apparel" },
  { value: "11000002", label: "Men's Apparel" },
  { value: "11000004", label: "Home & Living" },
  { value: "11000005", label: "Mobile & Gadgets" },
  { value: "11000006", label: "Sports & Outdoors" },
] as const;

export const BRAND_OPTIONS = [
  { value: "1511680", label: "agiva" },
  { value: "1003882", label: "Gatsby" },
  { value: "1802473", label: "SEVICH" },
  { value: "2558109", label: "EELHOE" },
  { value: "1000001", label: "Samsung" },
  { value: "1000002", label: "Apple" },
  { value: "1000003", label: "Xiaomi" },
  { value: "1000004", label: "Sony" },
  { value: "1000005", label: "Philips" },
  { value: "1000006", label: "Dyson" },
] as const;

export const PAYMENT_OPTION_OPTIONS = ["Installment", "Cash On Delivery"] as const;

export const RATING_OPTIONS = [5, 4, 3, 2, 1] as const;

export const CONDITIONS_OPTIONS = ["New", "Used"] as const;

/** Number of options to show before "More" in expandable sections */
export const INITIAL_VISIBLE_COUNT = 4;
