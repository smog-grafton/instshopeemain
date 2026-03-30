import Link from "next/link";
import { notFound } from "next/navigation";
import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { ProductDetailSection } from "@/components/product-detail-section";
import { ShopProfile } from "@/components/product-detail-section/shop-profile";
import { ProductSpecsDescription } from "@/components/product-detail-section/product-specs-description";
import { ProductReviewsSection } from "@/components/product-detail-section/product-reviews-section";
import { FromTheSameShop } from "@/components/product-detail-section/from-the-same-shop";
import { YouMayAlsoLike } from "@/components/product-detail-section/you-may-also-like";
import { ShopVouchersSidebar } from "@/components/product-detail-section/shop-vouchers-sidebar";
import type {
  CategoryBreadcrumbLink,
  ProductSpecItem,
  ProductSpecsDescriptionData,
  ProductReviewsSectionData,
  ReviewAttribute,
} from "@/components/product-detail-section/data";
import { SiteFooter } from "@/components/site-footer";
import { IconArrowRight } from "@/components/product-detail-section/icons";
import {
  getProductBySlug as getProductBySlugApi,
  getProductReviews,
  getRelatedProducts,
  getShopBySlug as getShopBySlugApi,
  getShopVouchers as getShopVouchersApi,
} from "@/lib/api-client";
import { getCategoryLabel } from "@/lib/products-data";
import { formatCompact, formatPrice } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  let product, reviews, sameShopProducts, recommendedProducts, shopProfile, shopVouchers;

  try {
    [product, reviews, sameShopProducts, recommendedProducts] = await Promise.all([
      getProductBySlugApi(slug),
      getProductReviews(slug, { page: 1, per_page: 10 }).catch(() => null),
      getRelatedProducts(slug, { type: "same_shop", limit: 10 }).catch(() => null),
      getRelatedProducts(slug, { type: "recommended", limit: 40 }).catch(() => null),
    ]);

    if (product.shopSlug) {
      [shopVouchers, shopProfile] = await Promise.all([
        getShopVouchersApi(product.shopSlug).catch(() => null),
        getShopBySlugApi(product.shopSlug).catch(() => null),
      ]);
    }
  } catch {
    notFound();
  }

  const shop = {
    id: product.shopId,
    name: product.shopName,
    slug: product.shopSlug || "shop",
  };

  const categoryLabel = getCategoryLabel(product.categorySlug);
  const categoryUrl = product.categoryId && product.categorySlug
    ? `/${product.categorySlug.toLowerCase()}-cat.${product.categoryId}`
    : product.categorySlug
      ? `/m/${product.categorySlug}`
      : "/";

  const breadcrumbLinks: CategoryBreadcrumbLink[] = [
    { href: "/", label: "Shopee" },
    { href: categoryUrl, label: categoryLabel },
  ];

  const currencySymbol = product.currencySymbol ?? "USD";
  const currentPriceLabel = formatPrice(currencySymbol, product.price);
  const originalPriceLabel = formatPrice(currencySymbol, product.originalPrice ?? product.price);
  const hasDiscount = product.originalPrice != null && product.originalPrice > product.price;

  const colors = (product.colors || []).map((color: { label: string; imagePath: string | null }) => ({
    label: color.label,
    imagePath: color.imagePath || product.imageSrc,
  }));
  const sizes = product.sizes || [];

  const shopVoucherList = shopVouchers && shopVouchers.length > 0
    ? shopVouchers.map((voucher) => ({
        offer: voucher.title,
        minSpend: voucher.description.includes("Min. Spend")
          ? voucher.description.split("Min. Spend ")[1]?.split(" ")[0] || voucher.description
          : voucher.description,
        validTill: voucher.validTill || new Date().toLocaleDateString("en-GB"),
        brand: product.shopName,
        isWelcomeVoucher: voucher.tag === "Shop Welcome Voucher",
      }))
    : [];

  const shopVoucherBadges = shopVoucherList.slice(0, 2).map((voucher) => voucher.offer || "Voucher");

  type ImageItem = { imagePath: string | null; imagePathWebp: string | null; isThumbnail: boolean };
  const productImages: ImageItem[] = product.images && product.images.length > 0
    ? product.images.map((image: ImageItem) => ({
        imagePath: image.imagePath || null,
        imagePathWebp: image.imagePathWebp || null,
        isThumbnail: Boolean(image.isThumbnail),
      }))
    : product.imageSrc
      ? [{ imagePath: product.imageSrc, imagePathWebp: null, isThumbnail: true }]
      : [];

  const thumbnailImage = productImages.find((image) => image.isThumbnail && image.imagePath) || productImages[0];
  const productImageSrc = thumbnailImage?.imagePath || product.imageSrc;

  const productDetailData = {
    title: product.title,
    slug: product.slug,
    imageSrc: productImageSrc,
    price: product.price,
    shopId: shop.id,
    shopName: shop.name,
    shopSlug: shop.slug,
    priceMin: currentPriceLabel,
    priceMax: currentPriceLabel,
    originalMin: originalPriceLabel,
    originalMax: originalPriceLabel,
    discountPercent: hasDiscount ? Math.round((1 - product.price / product.originalPrice) * 100) : 0,
    priceTeaserText: product.promotionLabel ?? "",
    sold: formatCompact(product.soldCount),
    rating: product.rating,
    ratingsCount: product.ratingsCount || 0,
    favoriteCount: product.favoriteCount || 0,
    inStock: product.inStock ?? true,
    shippingText: product.shippingText || "Shipping details available at checkout",
    shippingSubtext:
      product.shippingSubtext || "Delivery timing depends on seller handling time and your destination.",
    guaranteeText: product.guaranteeText || "Seller-backed after-sales support available",
    colors,
    sizes,
    shopVoucherBadges,
    shopVoucherList,
    images: productImages,
    promotionEndsAt: product.promotionEndsAt ?? undefined,
    currencySymbol,
    catalogShippingFee: product.catalogShippingFee ?? 0,
    quantity: 1,
  };

  const chatProductContext = {
    id: product.id ?? (Number(product.shopId) || 0),
    title: product.title,
    image: productImageSrc,
    price: currentPriceLabel,
    originalPrice: product.originalPrice ? originalPriceLabel : undefined,
    href: `/product/${product.slug}`,
    badges: [
      "Inquired",
      product.soldCount ? `${formatCompact(product.soldCount)} sold` : "",
    ].filter(Boolean),
  };

  type SpecItem = {
    label: string;
    value?: string | null;
    categoryBreadcrumbs?: CategoryBreadcrumbLink[] | unknown;
  };

  const fallbackSpecifications: ProductSpecItem[] = [
    {
      label: "Category",
      categoryBreadcrumbs: breadcrumbLinks,
    },
    {
      label: "Availability",
      value: product.inStock ? "In Stock" : "Out of Stock",
    },
    {
      label: "Sold By",
      value: product.shopName,
    },
  ];

  const productSpecsDescriptionData: ProductSpecsDescriptionData = {
    specifications: product.specifications?.length
      ? product.specifications.map((spec: SpecItem) => ({
          label: spec.label,
          value: spec.value ?? undefined,
          categoryBreadcrumbs: Array.isArray(spec.categoryBreadcrumbs)
            ? (spec.categoryBreadcrumbs as CategoryBreadcrumbLink[])
            : undefined,
        }))
      : fallbackSpecifications,
    description:
      product.description?.trim() || "This seller has not added a detailed product description yet.",
  };

  type ReviewMediaItem = { type: string; src: string; duration?: string | null; poster?: string | null };
  const reviewEntries = reviews?.reviews ?? [];
  const productReviewsSectionData: ProductReviewsSectionData = {
    overallScore: reviews?.overallScore ?? product.rating ?? 0,
    filterChips: [{ label: `all (${reviewEntries.length})`, active: true }],
    reviews: reviewEntries.map((review) => ({
      username: review.username,
      rating: review.rating,
      date: review.date,
      variation: review.variation,
      attributes: Array.isArray(review.attributes)
        ? (review.attributes as unknown as ReviewAttribute[])
        : [],
      comment: review.comment,
      media: review.media.map((media: ReviewMediaItem) => ({
        type: media.type as "image" | "video",
        src: media.src,
        duration: media.duration ?? undefined,
        poster: media.poster ?? undefined,
      })),
      helpfulCount: review.helpfulCount,
    })),
  };

  const shopProfileData = {
    shopName: shopProfile?.name || shop.name,
    activeText: "Active Recently",
    shopHref: `/shop/${shopProfile?.slug || shop.slug}`,
    profileImagePath: shopProfile?.profileImageUrl || "/images/profile/shop/profile.webp",
    stats: [
      { label: "Ratings", value: String(shopProfile?.stats?.ratings ?? shopProfile?.stats?.rating ?? product.rating ?? 0) },
      { label: "Response Rate", value: `${shopProfile?.stats?.responseRate ?? shopProfile?.stats?.chatPerformance ?? 0}%` },
      { label: "Joined", value: shopProfile?.stats?.joined || "Recently" },
      {
        label: "Products",
        value: String(shopProfile?.stats?.products || sameShopProducts?.products?.length || 0),
        href: `/shop/${shop.slug}#product_list`,
      },
      { label: "Response Time", value: shopProfile?.stats?.responseTime ?? shopProfile?.stats?.chatPerformanceNote ?? "within hours" },
      { label: "Follower", value: String(shopProfile?.stats?.followers || 0) },
    ],
  };

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,sans-serif] flex-1 text-sm leading-tight text-black/80"
        id="component"
      >
        <div className="contents">
          <div className="transition-all duration-300 ease-in-out">
            <div role="main" className="mx-auto w-full max-w-[1200px] px-3 pb-12 sm:px-4 lg:px-6 lg:pb-16">
              <div className="mt-4 hidden h-4 items-center whitespace-nowrap overflow-x-auto text-sm sm:flex lg:mt-5">
                {breadcrumbLinks.map((link) => (
                  <span key={link.href} className="contents">
                    <Link
                      href={link.href}
                      className="cursor-pointer whitespace-nowrap text-sm text-sky-700 no-underline active:outline-0 hover:outline-0 focus-visible:-m-1.5 focus-visible:rounded-sm focus-visible:p-1.5 focus-visible:outline-2 focus-visible:outline-solid"
                    >
                      {link.label}
                    </Link>
                    <IconArrowRight className="mx-1.5 inline h-2.5 w-2.5 align-baseline text-black/54" />
                  </span>
                ))}
                <span
                  className="overflow-x-hidden overflow-y-hidden text-ellipsis whitespace-nowrap text-black/80"
                  tabIndex={0}
                >
                  {product.title}
                </span>
              </div>

              <ProductDetailSection data={productDetailData} />
              <ShopProfile
                data={shopProfileData}
                vendorId={Number(shop.id) || undefined}
                productContext={chatProductContext}
              />

              <div className="flex w-full flex-col xl:flex-row">
                <div className="min-w-0 flex-1">
                  <ProductSpecsDescription data={productSpecsDescriptionData} />
                  <ProductReviewsSection data={productReviewsSectionData} productSlug={slug} />
                  <FromTheSameShop shopSlug={shop.slug} products={sameShopProducts?.products || []} />
                  <YouMayAlsoLike products={recommendedProducts?.products || []} />
                </div>
                {shopVoucherList.length > 0 && <ShopVouchersSidebar voucherList={shopVoucherList} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
