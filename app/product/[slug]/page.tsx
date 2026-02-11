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
import {
  defaultShopProfileData,
  defaultProductSpecsDescriptionData,
  defaultProductReviewsSectionData,
  defaultProductDetailData,
} from "@/components/product-detail-section/data";
import { SiteFooter } from "@/components/site-footer";
import { IconArrowRight } from "@/components/product-detail-section/icons";
import {
  getProductBySlug as getProductBySlugApi,
  getShopBySlug as getShopBySlugApi,
  getShopVouchers as getShopVouchersApi,
  getProductReviews,
  getRelatedProducts,
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
    
    // Fetch shop vouchers
    if (product.shopSlug) {
      try {
        shopVouchers = await getShopVouchersApi(product.shopSlug);
      } catch {
        shopVouchers = null;
      }
    }
    
    // Fetch shop profile
    if (product.shopSlug) {
      try {
        shopProfile = await getShopBySlugApi(product.shopSlug);
      } catch {
        shopProfile = null;
      }
    }
  } catch (error) {
    notFound();
  }

  const shop = {
    id: product.shopId,
    name: product.shopName,
    slug: product.shopSlug || "shop",
  };
  const categoryLabel = getCategoryLabel(product.categorySlug);

  // Generate category URL in new format: {slug}-cat.{id}
  // The categorySlug from API is already slugified, so we just need to ensure it's lowercase
  const categoryUrl = product.categoryId && product.categorySlug
    ? `/${product.categorySlug.toLowerCase()}-cat.${product.categoryId}`
    : product.categorySlug
    ? `/m/${product.categorySlug}` // Fallback to old format
    : '/';

  const breadcrumbLinks = [
    { href: "/", label: "Shopee" },
    { href: categoryUrl, label: categoryLabel },
  ];

  // Transform colors and sizes from API
  const colors = (product.colors || []).map((c) => ({
    label: c.label,
    imagePath: c.imagePath || `/images/home/mall/products/1.jpeg`,
  }));
  const sizes = product.sizes || [];

  // Transform shop vouchers (get from shop if available)
  const shopVoucherList = shopVouchers && shopVouchers.length > 0
    ? shopVouchers.map((v) => ({
        offer: v.title,
        minSpend: v.description.includes('Min. Spend') 
          ? v.description.split('Min. Spend ')[1]?.split(' ')[0] || v.description
          : v.description,
        validTill: v.validTill || new Date().toLocaleDateString('en-GB'),
        brand: product.shopName,
        isWelcomeVoucher: v.tag === 'Shop Welcome Voucher',
      }))
    : defaultProductDetailData.shopVoucherList;
  const shopVoucherBadges = shopVoucherList.slice(0, 2).map((v) => v.offer || "RM1 OFF");

  // Transform images for gallery
  const productImages = product.images && product.images.length > 0
    ? product.images.map((img) => ({
        imagePath: img.imagePath || null,
        imagePathWebp: img.imagePathWebp || null,
        isThumbnail: img.isThumbnail || false,
      }))
    : undefined;

  // Use first product image as imageSrc if available, otherwise use thumbnail_url
  const productImageSrc = productImages && productImages.length > 0 && productImages[0]?.imagePath
    ? productImages[0].imagePath
    : product.imageSrc;

  const currencySymbol = product.currencySymbol ?? "RM";
  const productDetailData = {
    ...defaultProductDetailData,
    title: product.title,
    slug: product.slug,
    imageSrc: productImageSrc,
    price: product.price,
    shopId: shop.id,
    shopName: shop.name,
    shopSlug: shop.slug,
    priceMin: formatPrice(currencySymbol, product.price),
    priceMax: formatPrice(currencySymbol, product.price),
    originalMin: formatPrice(currencySymbol, product.originalPrice ?? product.price),
    originalMax: formatPrice(currencySymbol, product.originalPrice ?? product.price),
    discountPercent:
      product.originalPrice != null
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0,
    sold: formatCompact(product.soldCount),
    rating: product.rating,
    ratingsCount: product.ratingsCount || 0,
    favoriteCount: product.favoriteCount || 0,
    inStock: product.inStock ?? true,
    shippingText: product.shippingText || defaultProductDetailData.shippingText,
    shippingSubtext: product.shippingSubtext || defaultProductDetailData.shippingSubtext,
    guaranteeText: product.guaranteeText || defaultProductDetailData.guaranteeText,
    colors: colors.length > 0 ? colors : defaultProductDetailData.colors,
    sizes: sizes.length > 0 ? sizes : defaultProductDetailData.sizes,
    shopVoucherBadges,
    shopVoucherList,
    images: productImages,
    promotionEndsAt: product.promotionEndsAt ?? undefined,
    currencySymbol: currencySymbol,
  };

  const chatProductContext = {
    id: product.id,
    title: product.title,
    image: productImageSrc,
    price: formatPrice(currencySymbol, product.price),
    originalPrice: product.originalPrice ? formatPrice(currencySymbol, product.originalPrice) : undefined,
    href: `/product/${product.slug}`,
    badges: [
      "Inquired",
      product.soldCount ? `${formatCompact(product.soldCount)} sold` : "",
    ].filter(Boolean),
  };

  // Transform specifications
  const specifications = product.specifications || [];
  const productSpecsDescriptionData = {
    specifications: specifications.length > 0 ? specifications.map((spec) => ({
      label: spec.label,
      value: spec.value || undefined,
      categoryBreadcrumbs: spec.categoryBreadcrumbs || undefined,
    })) : defaultProductSpecsDescriptionData.specifications,
    description: product.description || defaultProductSpecsDescriptionData.description,
  };

  // Transform reviews
  const productReviewsSectionData = reviews ? {
    overallScore: reviews.overallScore,
    filterChips: defaultProductReviewsSectionData.filterChips, // Keep filter chips as is
    reviews: reviews.reviews.map((r) => ({
      username: r.username,
      rating: r.rating,
      date: r.date,
      variation: r.variation,
      attributes: r.attributes,
      comment: r.comment,
      media: r.media.map((m) => ({
        type: m.type as "image" | "video",
        src: m.src,
        duration: m.duration,
        poster: m.poster,
      })),
      helpfulCount: r.helpfulCount,
    })),
  } : defaultProductReviewsSectionData;

  // Shop profile data
  const shopProfileData = shopProfile ? {
    shopName: shopProfile.name,
    activeText: "Active Recently", // Can be enhanced later
    shopHref: `/shop/${shopProfile.slug}`,
    profileImagePath: shopProfile.profileImageUrl || defaultShopProfileData.profileImagePath,
    stats: [
      { label: "Ratings", value: String(shopProfile.stats?.ratings || 0) },
      { label: "Response Rate", value: `${shopProfile.stats?.responseRate || 0}%` },
      { label: "Joined", value: shopProfile.stats?.joined || "Recently" },
      { label: "Products", value: String(shopProfile.stats?.products || 0), href: `/shop/${shopProfile.slug}#product_list` },
      { label: "Response Time", value: shopProfile.stats?.responseTime || "within hours" },
      { label: "Follower", value: String(shopProfile.stats?.followers || 0) },
    ],
  } : {
    ...defaultShopProfileData,
    shopName: shop.name,
    shopHref: `/shop/${shop.slug}`,
  };

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,sans-serif] text-sm leading-tight text-black/80 flex-1"
        id="component"
      >
        <div className="contents">
          <div className="transition-all duration-300 ease-in-out">
            <div role="main" className="w-[1200px] mx-auto pb-16">
              <div className="flex items-center whitespace-nowrap h-4 mt-5">
                {breadcrumbLinks.map((link, i) => (
                  <span key={link.href} className="contents">
                    <Link
                      href={link.href}
                      className="cursor-pointer text-sky-700 whitespace-nowrap text-sm no-underline active:outline-0 hover:outline-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-m-1.5 focus-visible:p-1.5 focus-visible:rounded-sm"
                    >
                      {link.label}
                    </Link>
                    <IconArrowRight className="align-baseline inline w-2.5 h-2.5 mx-1.5 text-black/54" />
                  </span>
                ))}
                <span
                  className="whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-black/80"
                  tabIndex={0}
                >
                  {product.title}
                </span>
              </div>
              <ProductDetailSection data={productDetailData} />
              <ShopProfile data={shopProfileData} vendorId={shop.id} productContext={chatProductContext} />
              <div className="flex gap-0 w-full">
                <div className="flex-1 min-w-0">
                  <ProductSpecsDescription data={productSpecsDescriptionData} />
                  <ProductReviewsSection data={productReviewsSectionData} productSlug={slug} />
                  <FromTheSameShop shopSlug={shop.slug} products={sameShopProducts?.products || []} />
                  <YouMayAlsoLike products={recommendedProducts?.products || []} />
                </div>
                <ShopVouchersSidebar voucherList={shopVoucherList} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
