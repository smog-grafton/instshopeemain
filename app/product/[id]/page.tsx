import Link from "next/link";
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

const BREADCRUMB_LINKS = [
  { href: "/", label: "Shopee" },
  { href: "/Men-Shoes-cat.11000781", label: "Men Shoes" },
  { href: "/Sneakers-cat.11000781.11000797", label: "Sneakers" },
  { href: "/Others-cat.11000781.11000797.11001800", label: "Others" },
] as const;

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productTitle = "Latest RUN3.0 men's sneakers, casual men's shoes";

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
                {BREADCRUMB_LINKS.map((link) => (
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
                  className="whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden"
                  tabIndex={0}
                >
                  {productTitle}
                </span>
              </div>
              <ProductDetailSection />
              <ShopProfile data={defaultShopProfileData} />
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
