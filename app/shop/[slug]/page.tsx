import { TopNavbar } from "@/components/top-navbar";
import { ShopMainHeader } from "@/components/shop-page-header";
import { ShopProfileSection, getMockShopProfile } from "@/components/shop-profile-section";
import { ShopNavigationBar, getMockShopNav } from "@/components/shop-navigation";
import { ShopVouchersSection, getMockShopVouchers } from "@/components/shop-vouchers";
import { ShopTopProductsSection, getShopTopProducts } from "@/components/shop-top-products";
import { ShopRootBoosterLineSection, getRootBoosterLineProducts } from "@/components/shop-root-booster-line";
import { ShopNewRootTreatmentSection, getNewRootTreatmentProducts } from "@/components/shop-new-root-treatment";
import { ShopAllProductsSection } from "@/components/shop-all-products";
import { SiteFooter } from "@/components/site-footer";

interface ShopPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Shop / store profile page (e.g. /shop/mandom-official-store).
 * Uses shop-specific header and shop profile section (store card + stats).
 * Profile data is mock for now; replace getMockShopProfile with API call (Laravel/symlink) later.
 */
export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;
  const shopProfile = getMockShopProfile(slug);
  const shopNav = getMockShopNav(slug);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar variant="shop" />
      <ShopMainHeader shopSlug={slug} />

      {/* White section full width edge-to-edge */}
      <ShopProfileSection data={shopProfile} />
      
      {/* Navigation bar - merged with profile section (same white background) */}
      <ShopNavigationBar data={shopNav} shopSlug={slug} />

      {/* Voucher: white strip; Top Products: on grey (no section white bg) */}
      <main className="mx-auto w-[1200px] max-w-[1200px] px-4 pb-8">
        <ShopVouchersSection vouchers={getMockShopVouchers(slug)} />
        <div className="mt-4 px-[30px] pb-5 pt-5">
          <ShopTopProductsSection shopSlug={slug} products={getShopTopProducts(slug)} />
          <ShopRootBoosterLineSection shopSlug={slug} products={getRootBoosterLineProducts(slug)} />
          <ShopNewRootTreatmentSection products={getNewRootTreatmentProducts(slug)} />
          <ShopAllProductsSection shopSlug={slug} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
