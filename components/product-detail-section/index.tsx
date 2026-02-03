"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { useCart } from "@/components/cart";
import { defaultProductDetailData, type ProductDetailSectionData } from "./data";

interface ProductDetailSectionProps {
  data?: Partial<ProductDetailSectionData>;
}

export function ProductDetailSection({ data: dataOverride }: ProductDetailSectionProps) {
  const data = { ...defaultProductDetailData, ...dataOverride };
  const router = useRouter();
  const { addItem } = useCart();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | null>(
    data.sizes.length === 0 ? null : 0
  );
  const [quantity, setQuantity] = useState(data.quantity);
  const [showToast, setShowToast] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 2000);
    return () => clearTimeout(t);
  }, [showToast]);

  const doAddToCart = useCallback(
    (thenNavigate: boolean) => {
      setValidationError(null);
      if (data.sizes.length > 0 && selectedSizeIndex == null) {
        setValidationError("Please select a size.");
        return;
      }
      if (!data.slug || !data.imageSrc || data.price == null) {
        setValidationError("Product data is missing. Cannot add to cart.");
        return;
      }
      const colorLabel = data.colors[selectedColorIndex]?.label;
      const size = data.sizes[selectedSizeIndex ?? 0];
      addItem({
        slug: data.slug,
        title: data.title,
        imageSrc: data.imageSrc,
        price: data.price,
        quantity,
        colorLabel,
        size: data.sizes.length > 0 ? size : undefined,
        shopId: data.shopId,
        shopName: data.shopName,
        shopSlug: data.shopSlug,
      });
      setShowToast(true);
      if (thenNavigate) router.push(data.slug ? `/checkout?from=buynow&slug=${encodeURIComponent(data.slug)}` : "/checkout?from=cart");
    },
    [
      data.slug,
      data.imageSrc,
      data.price,
      data.title,
      data.colors,
      data.sizes,
      selectedColorIndex,
      selectedSizeIndex,
      quantity,
      addItem,
      router,
    ]
  );

  const handleAddToCart = useCallback(() => doAddToCart(false), [doAddToCart]);
  const handleBuyNow = useCallback(() => doAddToCart(true), [doAddToCart]);

  const canAddToCart = Boolean(data.slug && data.imageSrc != null && data.price != null);
  const addDisabled =
    !canAddToCart ||
    !data.inStock ||
    (data.sizes.length > 0 && selectedSizeIndex == null);

  return (
    <>
      <section className="bg-white shadow-sm rounded-[3px] flex mt-5 relative">
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
                <ProductVariants
                  colors={data.colors}
                  sizes={data.sizes}
                  selectedColorIndex={selectedColorIndex}
                  selectedSizeIndex={selectedSizeIndex}
                  onColorSelect={setSelectedColorIndex}
                  onSizeSelect={setSelectedSizeIndex}
                />
                <ProductQuantity
                  initialQuantity={data.quantity}
                  inStock={data.inStock}
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>
            </div>
            <ProductActions
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              addToCartDisabled={addDisabled}
              validationError={validationError}
            />
          </div>
        </section>
      </section>

      {/* Toast: Item has been added to your shopping cart */}
      {showToast && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black/50"
          role="status"
          aria-live="polite"
        >
          <div className="bg-[rgba(0,0,0,0.65)] rounded-lg px-8 py-6 flex flex-col items-center gap-3 shadow-xl max-w-sm mx-4">
            <div
              className="w-12 h-12 rounded-full bg-[#00bfa5] flex items-center justify-center"
              aria-hidden
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-white text-base font-normal text-center">
              Item has been added to your shopping cart
            </p>
          </div>
        </div>
      )}
    </>
  );
}
