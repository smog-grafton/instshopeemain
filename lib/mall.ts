export const MALL_PLACEHOLDER_IMAGE = "/images/placeholders/shopee-store-placeholder.jpg";

const KNOWN_BACKEND_FALLBACKS = [
  "/images/stores/logos/default.png",
  "/images/stores/profile/default.webp",
];

export function resolveMallImageSource(imageUrl: string | null | undefined): string {
  if (!imageUrl) {
    return MALL_PLACEHOLDER_IMAGE;
  }

  if (KNOWN_BACKEND_FALLBACKS.some((fallback) => imageUrl.includes(fallback))) {
    return MALL_PLACEHOLDER_IMAGE;
  }

  return imageUrl;
}
