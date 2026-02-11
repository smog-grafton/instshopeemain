import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { CategoryMallSection } from "@/components/category-mall-section";
import { CategoryProductListing } from "@/components/category-product-listing";
import { SiteFooter } from "@/components/site-footer";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

/** Parse category URL format: {slug}-cat.{id} (e.g. "mobile-accessories-cat.11000979") */
function parseCategoryUrl(category: string): { categoryId: number | null; categorySlug: string | null } {
  const match = category.match(/^(.+)-cat\.(\d+)$/);
  if (match && match[2]) {
    const categoryId = parseInt(match[2], 10);
    if (!isNaN(categoryId)) {
      return { categoryId, categorySlug: null };
    }
  }
  
  // Fallback: try to extract slug for backward compatibility
  const slugMatch = category.match(/^(.+)-cat\./);
  if (slugMatch && slugMatch[1]) {
    const slug = slugMatch[1]
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    return { categoryId: null, categorySlug: slug };
  }
  
  return { categoryId: null, categorySlug: null };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const { categoryId, categorySlug } = parseCategoryUrl(category);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-[1200px] pb-16 pt-5">
        <div className="rounded-sm bg-white shadow-sm">
          <CategoryMallSection />
        </div>
        <CategoryProductListing 
          categoryId={categoryId ?? undefined} 
          categorySlug={categorySlug ?? undefined} 
        />
      </div>
      <SiteFooter />
    </div>
  );
}
