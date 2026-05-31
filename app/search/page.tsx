import { Suspense } from "react";
import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { LiveShopsResultsSection } from "@/components/search-results/shops-results-section/live-shops-results-section";
import { SearchProductSection } from "@/components/search-results/search-product-section";
import { SearchFilterSidebar } from "@/components/search-results/search-filter-sidebar";
import { SiteFooter } from "@/components/site-footer";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";

interface SearchPageProps {
  searchParams: Promise<{ keyword?: string; type?: string }>;
}

/**
 * Search results page. Renders the "Shops related to keyword" section first,
 * then "Search result for keyword" heading, filter/sort bar, 5×12 product grid (60 products),
 * and pagination. Layout leaves room for a filter sidebar on the left (to be implemented).
 * Background matches original design: rgb(245, 245, 245).
 */
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const keyword = params.keyword ?? "";

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-full max-w-[1200px] px-3 pb-16 pt-5 sm:px-4 md:px-6">
        <div className="mt-5 flex min-w-0 gap-0">
          <SearchFilterSidebar />
          <div role="main" className="flex min-w-0 flex-1 flex-col gap-5">
            <LiveShopsResultsSection keyword={keyword} />
            <div className="px-0 py-3 sm:px-3 sm:py-4 lg:px-5 lg:py-5">
              <Suspense
                fallback={
                  <div className="py-8 text-center text-black/54 text-sm">
                    Loading search results…
                  </div>
                }
              >
                <SearchProductSection />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}
