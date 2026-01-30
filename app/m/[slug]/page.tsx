import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { CategoryMallSection } from "@/components/category-mall-section";
import { SiteFooter } from "@/components/site-footer";

interface MCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function MCategoryPage({ params }: MCategoryPageProps) {
  await params;

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div className="mx-auto w-[1200px] pb-16 pt-5">
        <div className="rounded-sm bg-white shadow-sm">
          <CategoryMallSection />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
