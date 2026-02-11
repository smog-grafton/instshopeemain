import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { SiteFooter } from "@/components/site-footer";
import { MallStoresListing } from "@/components/mall-stores-listing";

export default async function MallPage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-[1200px] pb-16 pt-5 px-4">
        <MallStoresListing />
      </div>
      <SiteFooter />
    </div>
  );
}
