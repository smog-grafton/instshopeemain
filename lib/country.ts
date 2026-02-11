import { headers } from "next/headers";

/**
 * Country Context Utilities
 * 
 * Helper functions to get country context in server components
 * based on the middleware resolution.
 */

export interface CountryContext {
  code: string;
  domain: string;
}

/**
 * Get country context from request headers (server components only)
 */
export async function getCountryContext(): Promise<CountryContext> {
  const headersList = await headers();
  const countryCode = headersList.get("x-country-code") || "DEFAULT";
  const frontendDomain =
    headersList.get("x-frontend-domain") ||
    headersList.get("host") ||
    "";

  return {
    code: countryCode,
    domain: frontendDomain,
  };
}

/**
 * Domain to country code mapping
 * This should eventually be fetched from Laravel API or a config file
 */
export const DOMAIN_COUNTRY_MAP: Record<string, string> = {
  ...(() => {
    const raw = process.env.NEXT_PUBLIC_DOMAIN_COUNTRY_MAP;
    if (!raw) return {};
    try {
      return JSON.parse(raw) as Record<string, string>;
    } catch {
      return {};
    }
  })(),
};
