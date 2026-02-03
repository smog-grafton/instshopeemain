/**
 * Shop navigation bar data.
 * Replace with API response later (Laravel).
 */

export interface ShopNavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ShopNavData {
  /** Main visible tabs */
  mainTabs: ShopNavItem[];
  /** Items in the "More" dropdown */
  moreItems: ShopNavItem[];
}

/**
 * Mock shop navigation data. Replace with API call later.
 */
export function getMockShopNav(slug: string, activeTab?: string): ShopNavData {
  const baseUrl = `/shop/${slug}`;
  
  const allTabs: ShopNavItem[] = [
    { label: "Home", href: baseUrl, isActive: activeTab === "home" || !activeTab },
    { label: "All Products", href: `${baseUrl}#product_list`, isActive: activeTab === "all-products" },
    { label: "Fulfilled by Shopee", href: `${baseUrl}?shopCollection=47117342#product_list`, isActive: activeTab === "fulfilled" },
    { label: "💖Collagen Line", href: `${baseUrl}?shopCollection=262674767#product_list`, isActive: activeTab === "collagen" },
    { label: "Find Your Perfect Scalp", href: `${baseUrl}?shopCollection=262203337#product_list`, isActive: activeTab === "scalp" },
    { label: "CLEARANCE SALE", href: `${baseUrl}?shopCollection=257386169#product_list`, isActive: activeTab === "clearance" },
    { label: "EXCLUSIVE BUNDLE", href: `${baseUrl}?shopCollection=256785684#product_list` },
    { label: "MEN'S STYLING", href: `${baseUrl}?shopCollection=256282295#product_list` },
    { label: "🎉NEW BUNDLE🎉", href: `${baseUrl}?shopCollection=256260898#product_list` },
    { label: "🤎NEW HINOKI LINE🤎", href: `${baseUrl}?shopCollection=254770751#product_list` },
    { label: "🌹NEW DAMASK ROSE LINE🌹", href: `${baseUrl}?shopCollection=253356478#product_list` },
    { label: "💜NEW SKINCARE: DERMABIOME💜", href: `${baseUrl}?shopCollection=250914874#product_list` },
    { label: "💚NEW ROOT TREATMENT💚", href: `${baseUrl}?shopCollection=249763764#product_list` },
    { label: "🔥BEST SELLERS : ROOT BOOSTER LINE🔥", href: `${baseUrl}?shopCollection=246436636#product_list` },
    { label: "KOREAN MEN STYLING", href: `${baseUrl}?shopCollection=250488031#product_list` },
    { label: "OILY SCALP HAIR HELPER", href: `${baseUrl}?shopCollection=250373254#product_list` },
    { label: "Scalp Care", href: `${baseUrl}?shopCollection=101880572#product_list` },
    { label: "Damaged Hair Treatment", href: `${baseUrl}?shopCollection=141135105#product_list` },
    { label: "Anti-Dandruff", href: `${baseUrl}?shopCollection=141137090#product_list` },
    { label: "Hair Loss Hero", href: `${baseUrl}?shopCollection=141136661#product_list` },
    { label: "Perfume Line", href: `${baseUrl}?shopCollection=141135621#product_list` },
    { label: "Hair Styling", href: `${baseUrl}?shopCollection=48893384#product_list` },
    { label: "Skin Care & Make Up", href: `${baseUrl}?shopCollection=48893181#product_list` },
  ];

  // First 6 tabs are visible, rest go in "More" dropdown
  const mainTabs = allTabs.slice(0, 6);
  const moreItems = allTabs.slice(6);

  return { mainTabs, moreItems };
}
