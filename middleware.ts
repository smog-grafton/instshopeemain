import { NextRequest, NextResponse } from "next/server";

/**
 * Country-aware middleware
 * 
 * This middleware reads the Host header and resolves the country context.
 * The country context is then passed to the Laravel API via headers.
 * 
 * Based on the architecture:
 * - Domain determines country (e.g., example.com.my → MY)
 * - Country context is passed to Laravel API
 * - Laravel filters all data by country_id
 * 
 * Architecture notes:
 * - One Next.js codebase handles multiple country domains
 * - Domain → Country mapping is done here
 * - Country context is available in all server components via headers()
 * 
 * Note: Next.js 16 shows a deprecation warning for middleware, but it still works.
 * We can migrate to proxy.ts later if needed.
 */

// Domain to country code mapping
// This will be replaced with API call or config file later
// In production, this should fetch from Laravel API or environment config
const domainCountryMap: Record<string, string> = {
  "localhost:3000": "DEFAULT",
  // Add more domains as needed:
  // "instshopee.my": "MY",
  // "instshopee.co.th": "TH",
  // "instshopee.co.id": "ID",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  
  // Resolve country from domain
  const countryCode = domainCountryMap[host] || "DEFAULT";
  
  // Create response
  const response = NextResponse.next();
  
  // Set country context in headers for API calls
  response.headers.set("X-Country-Code", countryCode);
  response.headers.set("X-Frontend-Domain", host);
  
  // Store country in request headers for use in server components
  request.headers.set("x-country-code", countryCode);
  request.headers.set("x-frontend-domain", host);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
