import { Suspense } from "react";
import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { ShopsResultsSection } from "@/components/search-results/shops-results-section";
import { getShopsResultsSectionData } from "@/components/search-results/shops-results-section/data";
import { SearchProductSection } from "@/components/search-results/search-product-section";
import { SearchFilterSidebar } from "@/components/search-results/search-filter-sidebar";
import { SiteFooter } from "@/components/site-footer";

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
  const shopsData = keyword
    ? getShopsResultsSectionData(keyword)
    : { keyword: "", moreShopsHref: "/search?type=shop", cards: [] };

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-[1200px] pb-16 pt-5 px-4">
        {/* Single flex row: filter sidebar + content column */}
        <div className="mt-5 flex gap-0">
          <SearchFilterSidebar />
          <div role="main" className="flex-1 min-w-0 flex flex-col gap-5">
            {/* Shops related to keyword - same width/edge as search product section below */}
            {shopsData.cards.length > 0 && (
              <div className="rounded-sm bg-white shadow-sm px-5">
                <ShopsResultsSection
                  keyword={shopsData.keyword}
                  moreShopsHref={shopsData.moreShopsHref}
                  cards={shopsData.cards}
                />
              </div>
            )}
            {/* Search product results: heading, filter/sort bar, 5-col grid, pagination */}
            <div className="px-5 py-5">
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
    </div>
  );
}
