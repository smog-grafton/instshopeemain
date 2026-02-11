import { TopNavbar } from "@/components/top-navbar";
import { ShopMainHeader } from "@/components/shop-page-header";
import { ShopProfileSection } from "@/components/shop-profile-section";
import { ShopNavigationBar } from "@/components/shop-navigation";
import { ShopVouchersSection } from "@/components/shop-vouchers";
import { ShopTopProductsSection } from "@/components/shop-top-products";
import { ShopRootBoosterLineSection } from "@/components/shop-root-booster-line";
import { ShopNewRootTreatmentSection } from "@/components/shop-new-root-treatment";
import { ShopAllProductsSection } from "@/components/shop-all-products";
import { SiteFooter } from "@/components/site-footer";
import {
  getShopBySlug as getShopBySlugApi,
  getShopProducts as getShopProductsApi,
  getShopVouchers as getShopVouchersApi,
  getShopNavigation as getShopNavigationApi,
} from "@/lib/api-client";

interface ShopPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Shop / store profile page (e.g. /shop/mandom-official-store).
 * Uses shop-specific header and shop profile section (store card + stats).
 */
export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;
  
  let shopProfile;
  let shopVouchers;
  let shopProducts;
  let shopNav;
  try {
    shopProfile = await getShopBySlugApi(slug);
    shopVouchers = await getShopVouchersApi(slug);
    const productsResponse = await getShopProductsApi(slug, { page: 1, per_page: 6 });
    shopProducts = productsResponse.products;
    shopNav = await getShopNavigationApi(slug);
  } catch (error) {
    // Handle error - could redirect to 404 or show error page
    throw error;
  }

  // Transform API shop profile to component format
  const shopProfileData = {
    name: shopProfile.name,
    status: shopProfile.status,
    profileImageUrl: shopProfile.profileImageUrl,
    coverImageUrl: shopProfile.coverImageUrl,
    isMall: shopProfile.isMall,
    slug: shopProfile.slug,
    stats: shopProfile.stats,
  };

  // Transform API products to ShopTopProductItem format
  const topProducts = shopProducts.map((p, i) => {
    const item: any = {
      slug: p.slug,
      title: p.title,
      shopId: p.shopId,
      categorySlug: p.categorySlug,
      price: p.price,
      originalPrice: p.originalPrice ?? undefined,
      imageSrc: p.imageSrc,
      soldCount: p.soldCount,
      rating: p.rating,
      location: p.location,
      rank: i + 1,
      storeName: shopProfile.name,
    };
    if (p.promotionLabel != null) item.promotionLabel = p.promotionLabel;
    if (p.textBadges) item.textBadges = p.textBadges;
    if (p.imageBadges) item.imageBadges = p.imageBadges;
    return item;
  });

  // Transform vouchers - convert null to undefined
  const transformedVouchers = shopVouchers.map((v) => ({
    ...v,
    tag: v.tag ?? undefined,
    claimLabel: v.claimLabel ?? undefined,
    badgeCount: v.badgeCount ?? undefined,
    usedPercent: v.usedPercent ?? undefined,
    claimCount: v.claimCount ?? undefined,
  }));

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar variant="shop" />
      <ShopMainHeader shopSlug={slug} />

      {/* White section full width edge-to-edge */}
      <ShopProfileSection data={shopProfileData} />
      
      {/* Navigation bar - merged with profile section (same white background) */}
      <ShopNavigationBar data={shopNav} shopSlug={slug} />

      {/* Voucher: white strip; Top Products: on grey (no section white bg) */}
      <main className="mx-auto w-[1200px] max-w-[1200px] px-4 pb-8">
        <ShopVouchersSection vouchers={transformedVouchers} />
        <div className="mt-4 px-[30px] pb-5 pt-5">
          <ShopTopProductsSection shopSlug={slug} products={topProducts} />
          <ShopRootBoosterLineSection shopSlug={slug} />
          <ShopNewRootTreatmentSection shopSlug={slug} />
          <ShopAllProductsSection shopSlug={slug} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
