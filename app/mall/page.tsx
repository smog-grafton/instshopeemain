import { Suspense } from "react";
import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { SiteFooter } from "@/components/site-footer";
import { MallStoresListing } from "@/components/mall-stores-listing";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";
import { CategoryProductListing } from "@/components/category-product-listing";

export default async function MallPage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-full max-w-[1200px] px-3 pb-16 pt-5 sm:px-4 md:px-6">
        <MallStoresListing />
        <Suspense fallback={<div className="mt-5 bg-white py-8 text-center text-sm text-neutral-500 shadow-sm">Loading products...</div>}>
          <CategoryProductListing />
        </Suspense>
      </div>
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}
