import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { DailyDiscover } from "@/components/daily-discover";
import { SiteFooter } from "@/components/site-footer";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      <main className="mx-auto w-full max-w-[1200px] px-3 pb-16 pt-5 sm:px-4 md:px-6">
        <div className="mb-4 border border-black/[0.06] bg-white px-4 py-4 shadow-sm sm:px-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Products
          </div>
          <h1 className="mt-1 text-xl font-semibold text-neutral-900 sm:text-2xl">All Products</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
            Browse the live buyer feed with backend-powered product images, pricing, and badges.
          </p>
        </div>
        <DailyDiscover pullUp={false} showSeeMore={false} sectionId="products-grid" />
      </main>
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}
