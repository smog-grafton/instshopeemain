import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { CategoryMallSection } from "@/components/category-mall-section";
import { CategoryProductListing } from "@/components/category-product-listing";
import { SiteFooter } from "@/components/site-footer";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

/** Parse legacy category param (e.g. "Mobile-Accessories-cat.11000979") to slug "mobile-accessories". */
function categoryParamToSlug(category: string): string | undefined {
  const match = category.match(/^(.+)-cat\./);
  if (!match) return undefined;
  const part = match[1];
  if (!part) return undefined;
  return part
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categorySlug = categoryParamToSlug(category);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-[1200px] pb-16 pt-5">
        <div className="rounded-sm bg-white shadow-sm">
          <CategoryMallSection />
        </div>
        <CategoryProductListing categorySlug={categorySlug ?? undefined} />
      </div>
      <SiteFooter />
    </div>
  );
}
