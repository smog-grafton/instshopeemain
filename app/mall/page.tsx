import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { SiteFooter } from "@/components/site-footer";
import { MallStoresListing } from "@/components/mall-stores-listing";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";

export default async function MallPage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-full max-w-[1200px] px-3 pb-16 pt-5 sm:px-4 md:px-6">
        <MallStoresListing />
      </div>
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}
