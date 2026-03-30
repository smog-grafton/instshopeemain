import { TopNavbar } from "@/components/top-navbar";
import { ShopMainHeader } from "@/components/shop-page-header";
import { ShopProfileSection } from "@/components/shop-profile-section";
import { ShopNavigationBar } from "@/components/shop-navigation";
import { ShopVouchersSection } from "@/components/shop-vouchers";
import { ShopTopProductsSection } from "@/components/shop-top-products";
import { ShopCollectionPreviewSection } from "@/components/shop-collection-preview/shop-collection-preview-section";
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

function getShopCollectionFromHref(href: string): string | null {
  const queryIndex = href.indexOf("?");
  if (queryIndex === -1) return null;
  const params = new URLSearchParams(href.slice(queryIndex + 1));
  return params.get("shopCollection");
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
    const [profileResponse, vouchersResponse, productsResponse, navigationResponse] =
      await Promise.all([
        getShopBySlugApi(slug),
        getShopVouchersApi(slug),
        getShopProductsApi(slug, { page: 1, per_page: 6 }),
        getShopNavigationApi(slug),
      ]);

    shopProfile = profileResponse;
    shopVouchers = vouchersResponse;
    shopProducts = productsResponse.products;
    shopNav = navigationResponse;
  } catch (error) {
    // Handle error - could redirect to 404 or show error page
    throw error;
  }

  // Transform API shop profile to component format
  const shopProfileData = {
    id: shopProfile.id,
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
    item.currencySymbol = p.currencySymbol ?? shopProfile.currencySymbol ?? "RM";
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

  const previewCollections = [...shopNav.mainTabs, ...shopNav.moreItems]
    .filter((tab) => tab.label !== "Home" && tab.label !== "All Products")
    .map((tab) => {
      const shopCollection = getShopCollectionFromHref(tab.href);
      if (!shopCollection) return null;
      return {
        shopCollection,
        title: tab.label,
      };
    })
    .filter((item): item is { shopCollection: string; title: string } => item !== null)
    .filter(
      (item, index, items) =>
        items.findIndex(
          (candidate) => candidate.shopCollection === item.shopCollection,
        ) === index,
    )
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar variant="shop" />
      <ShopMainHeader shopSlug={slug} />

      {/* White section full width edge-to-edge */}
      <ShopProfileSection data={shopProfileData} />
      
      {/* Navigation bar - merged with profile section (same white background) */}
      <ShopNavigationBar data={shopNav} shopSlug={slug} />

      {/* Voucher: white strip; Top Products: on grey (no section white bg) */}
      <main className="mx-auto w-full max-w-[1200px] px-3 pb-8 sm:px-4 lg:px-4">
        <ShopVouchersSection vouchers={transformedVouchers} />
        <div className="mt-4 px-0 pb-5 pt-2 sm:pt-4 lg:px-[30px] lg:pt-5">
          <ShopTopProductsSection shopSlug={slug} products={topProducts} />
          {previewCollections.map((collection) => (
            <ShopCollectionPreviewSection
              key={collection.shopCollection}
              shopSlug={slug}
              shopCollection={collection.shopCollection}
              title={collection.title}
              shopName={shopProfile.name}
            />
          ))}
          <ShopAllProductsSection shopSlug={slug} shopName={shopProfile.name} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
