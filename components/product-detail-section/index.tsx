import { ProductGallery } from "./product-gallery";
import { ProductShareFavorite } from "./product-share-favorite";
import { ProductTitleRating } from "./product-title-rating";
import { LowerPricesBanner } from "./lower-prices-banner";
import { ProductPriceBlock } from "./product-price-block";
import { ShopVouchers } from "./shop-vouchers";
import { ProductShipping } from "./product-shipping";
import { ProductGuarantee } from "./product-guarantee";
import { ProductVariants } from "./product-variants";
import { ProductQuantity } from "./product-quantity";
import { ProductActions } from "./product-actions";
import { defaultProductDetailData, type ProductDetailSectionData } from "./data";

interface ProductDetailSectionProps {
  data?: Partial<ProductDetailSectionData>;
}

export function ProductDetailSection({ data: dataOverride }: ProductDetailSectionProps) {
  const data = { ...defaultProductDetailData, ...dataOverride };

  return (
    <section className="bg-white shadow-sm rounded-[3px] flex mt-5">
      <section className="shrink-0 w-96 p-4">
        <ProductGallery productTitle={data.title} />
        <ProductShareFavorite favoriteCount={data.favoriteCount} />
      </section>
      <section className="flex flex-[auto] grow shrink-0 w-0">
        <div className="flex-col flex-[auto] w-full pl-5 pr-9 pt-5">
          <ProductTitleRating
            title={data.title}
            rating={data.rating}
            ratingsCount={data.ratingsCount}
            sold={data.sold}
          />
          <LowerPricesBanner headline="Lower prices today!" />
          <ProductPriceBlock
            priceMin={data.priceMin}
            priceMax={data.priceMax}
            originalMin={data.originalMin}
            originalMax={data.originalMax}
            discountPercent={data.discountPercent}
            priceTeaserText={data.priceTeaserText}
            hideTeaserLine
          />
          <div className="mt-6 px-5">
            <div className="flex flex-col">
              <ShopVouchers
                badgeLabels={data.shopVoucherBadges}
                voucherList={data.shopVoucherList}
              />
              <ProductShipping
                shippingText={data.shippingText}
                shippingSubtext={data.shippingSubtext}
              />
              <ProductGuarantee guaranteeText={data.guaranteeText} />
              <ProductVariants colors={data.colors} sizes={data.sizes} />
              <ProductQuantity
                initialQuantity={data.quantity}
                inStock={data.inStock}
              />
            </div>
          </div>
          <ProductActions />
        </div>
      </section>
    </section>
  );
}
