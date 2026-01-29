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
  const frontendDomain = headersList.get("x-frontend-domain") || "localhost:3000";

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
  "localhost:3000": "DEFAULT",
  // Production domains will be added here:
  // "instshopee.my": "MY",
  // "instshopee.co.th": "TH",
  // "instshopee.co.id": "ID",
};
