import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { CategoryMallSection } from "@/components/category-mall-section";
import { CategoryProductListing } from "@/components/category-product-listing";
import { SiteFooter } from "@/components/site-footer";
import { isCategorySlug } from "@/lib/products-data";

interface MCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function MCategoryPage({ params }: MCategoryPageProps) {
  const { slug } = await params;

  const isCategory = isCategorySlug(slug);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-[1200px] pb-16 pt-5">
        <div className="rounded-sm bg-white shadow-sm">
          <CategoryMallSection />
        </div>
        <CategoryProductListing
          categorySlug={isCategory ? slug : undefined}
          promoSlug={!isCategory ? slug : undefined}
        />
      </div>
      <SiteFooter />
    </div>
  );
}
