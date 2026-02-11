import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price with optional currency symbol (e.g. formatPrice("RM", 10.5) → "RM 10.50").
 * @param symbol - Currency symbol (e.g., "RM", "$", "€")
 * @param amount - Amount to format
 * @param negative - If true, adds a minus sign prefix
 */
export function formatPrice(
  symbol: string | undefined | null, 
  amount: number,
  negative: boolean = false
): string {
  const sym = (symbol ?? "").trim();
  const formatted = Math.abs(amount).toFixed(2);
  const prefix = negative ? "-" : "";
  return sym ? `${prefix}${sym} ${formatted}` : `${prefix}${formatted}`;
}

/**
 * Format large numbers as k/m/b to preserve UI (e.g. 1500 → "1.5k", 269700 → "269.7k").
 */
export function formatCompact(value: number): string {
  if (value >= 1_000_000_000) {
    const n = value / 1_000_000_000;
    return (n % 1 === 0 ? n : Number(n.toFixed(1))) + "b";
  }
  if (value >= 1_000_000) {
    const n = value / 1_000_000;
    return (n % 1 === 0 ? n : Number(n.toFixed(1))) + "m";
  }
  if (value >= 1_000) {
    const n = value / 1_000;
    return (n % 1 === 0 ? n : Number(n.toFixed(1))) + "k";
  }
  return String(value);
}

/**
 * Check if an image URL is from the backend API (needs unoptimized flag for Next.js Image)
 * Uses environment variable to detect backend URLs dynamically
 */
export function isBackendImage(imageSrc: string | null | undefined): boolean {
  if (!imageSrc) return false;
  
  // Get API base URL from environment
  const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL || "";
  if (!apiUrl) return false;
  
  // Extract base URL (remove /api suffix if present)
  const baseUrl = apiUrl.replace(/\/api\/?$/, "");
  
  // Check if image source includes the configured backend URL.
  return imageSrc.includes(baseUrl);
}
