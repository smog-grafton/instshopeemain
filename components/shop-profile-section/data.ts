/**
 * Shop profile section data.
 * Replace with API response later (Laravel / symlink).
 */

export interface ShopProfileData {
  /** Store display name */
  name: string;
  /** e.g. "Active 3 minutes ago" */
  status: string;
  /** Profile image path (public URL or path from API) */
  profileImageUrl: string;
  /** Cover/hero image for card background (blurred). Optional; uses placeholder if not set. */
  coverImageUrl?: string | null;
  /** Whether to show Shopee Mall badge on avatar */
  isMall?: boolean;
  /** Shop slug for links */
  slug: string;
  stats: {
    products: number;
    followers: string;
    following: number;
    rating: string;
    ratingCount: string;
    chatPerformance: string;
    chatPerformanceNote: string;
    joined: string;
  };
}

const defaultProfileImage = "/images/stores/profile/default.webp";
const defaultMallBadge = "/images/stores/logos/shopee-mall.png";

/** Paths for default assets (used when API does not provide URLs) */
export const shopProfileAssets = {
  defaultProfileImage,
  defaultMallBadge,
} as const;

/**
 * Mock shop profile for development. Replace with API call in page or layout.
 */
export function getMockShopProfile(slug: string): ShopProfileData {
  return {
    name: "Grafen Korea Official Store",
    status: "Active 3 minutes ago",
    profileImageUrl: defaultProfileImage,
    coverImageUrl: null,
    isMall: true,
    slug,
    stats: {
      products: 106,
      followers: "254.8k",
      following: 6,
      rating: "4.9",
      ratingCount: "149.5k rating",
      chatPerformance: "45%",
      chatPerformanceNote: "within hours",
      joined: "7 years ago",
    },
  };
}
