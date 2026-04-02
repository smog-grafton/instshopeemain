import { TopNavbar } from "@/components/top-navbar";
import { ShopMainHeader } from "@/components/shop-page-header";
import { ShopProfileSection } from "@/components/shop-profile-section";
import { ShopNavigationBar } from "@/components/shop-navigation";
import { ShopVouchersSection } from "@/components/shop-vouchers";
import { ShopTopProductsSection } from "@/components/shop-top-products";
import { ShopCollectionPreviewSection } from "@/components/shop-collection-preview/shop-collection-preview-section";
import { ShopAllProductsSection } from "@/components/shop-all-products";
import { SiteFooter } from "@/components/site-footer";
import { notFound } from "next/navigation";
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

function toFiniteNumber(value: unknown, fallback: number = 0): number {
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

/**
 * Shop / store profile page (e.g. /shop/mandom-official-store).
 * Uses shop-specific header and shop profile section (store card + stats).
 */
export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;
  const shopProfile = await getShopBySlugApi(slug).catch(() => null);

  if (!shopProfile) {
    notFound();
  }

  const [shopVouchers, productsResponse, shopNav] = await Promise.all([
    getShopVouchersApi(slug).catch(() => []),
    getShopProductsApi(slug, { page: 1, per_page: 6 }).catch(() => ({
      products: [],
      pagination: { page: 1, per_page: 6, total: 0, last_page: 1 },
    })),
    getShopNavigationApi(slug).catch(() => ({
      mainTabs: [
        { label: "Home", href: `/shop/${slug}` },
        { label: "All Products", href: `/shop/${slug}#product_list` },
      ],
      moreItems: [],
    })),
  ]);

  const shopProducts = Array.isArray(productsResponse.products) ? productsResponse.products : [];

  // Transform API shop profile to component format
  const shopProfileData = {
    id: String(shopProfile.id ?? ""),
    name: shopProfile.name,
    status: shopProfile.status,
    profileImageUrl: shopProfile.profileImageUrl || "/images/stores/profile/default.webp",
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
      shopId: String(p.shopId ?? ""),
      categorySlug: p.categorySlug,
      price: toFiniteNumber(p.price),
      originalPrice: p.originalPrice == null ? undefined : toFiniteNumber(p.originalPrice),
      imageSrc: p.imageSrc,
      soldCount: toFiniteNumber(p.soldCount),
      rating: toFiniteNumber(p.rating),
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
