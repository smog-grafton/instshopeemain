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
  getProductBySlug,
  getShopById,
  getCategoryLabel,
} from "@/lib/products-data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const shop = getShopById(product.shopId) ?? {
    id: "unknown",
    name: "Shop",
    slug: "shop",
  };
  const categoryLabel = getCategoryLabel(product.categorySlug);

  const breadcrumbLinks = [
    { href: "/", label: "Shopee" },
    { href: `/m/${product.categorySlug}`, label: categoryLabel },
  ];

  const productDetailData = {
    ...defaultProductDetailData,
    title: product.title,
    slug: product.slug,
    imageSrc: product.imageSrc,
    price: product.price,
     shopId: shop.id,
     shopName: shop.name,
     shopSlug: shop.slug,
    priceMin: product.price.toFixed(2),
    priceMax: product.price.toFixed(2),
    originalMin: product.originalPrice?.toFixed(2) ?? product.price.toFixed(2),
    originalMax: product.originalPrice?.toFixed(2) ?? product.price.toFixed(2),
    discountPercent:
      product.originalPrice != null
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0,
    sold:
      product.soldCount >= 1000
        ? `${(product.soldCount / 1000).toFixed(1)}k`
        : String(product.soldCount),
  };

  const shopProfileData = {
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
              <ShopProfile data={shopProfileData} />
              <div className="flex gap-0 w-full">
                <div className="flex-1 min-w-0">
                  <ProductSpecsDescription data={defaultProductSpecsDescriptionData} />
                  <ProductReviewsSection data={defaultProductReviewsSectionData} />
                  <FromTheSameShop />
                  <YouMayAlsoLike />
                </div>
                <ShopVouchersSidebar voucherList={defaultProductDetailData.shopVoucherList} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
