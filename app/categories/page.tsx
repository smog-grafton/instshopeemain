import { HeaderWithSearch } from "@/components/header-with-search";
import { TopNavbar } from "@/components/top-navbar";
import { CategoriesDirectory } from "@/components/categories-directory";
import { SiteFooter } from "@/components/site-footer";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      <main className="mx-auto w-full max-w-[1200px] px-3 pb-16 pt-5 sm:px-4 md:px-6 lg:px-0">
        <CategoriesDirectory />
      </main>
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}
