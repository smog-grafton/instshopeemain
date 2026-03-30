"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CollectionProductCard } from "@/components/shop-root-booster-line/collection-product-card";
import type { CollectionProductItem } from "@/components/shop-root-booster-line/data";
import { getShopCollectionProducts, type ApiProduct } from "@/lib/api-client";

interface ShopCollectionPreviewSectionProps {
  shopSlug: string;
  shopCollection: string;
  title: string;
  shopName?: string;
  limit?: number;
}

function transformApiProduct(p: ApiProduct, shopName: string): CollectionProductItem {
  return {
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
    promotionLabel: p.promotionLabel ?? undefined,
    textBadges: p.textBadges,
    imageBadges: p.imageBadges,
    currencySymbol: p.currencySymbol ?? "RM",
    storeName: p.shopName || shopName,
  };
}

function ShopCollectionPreviewHeader({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 pb-2.5 pt-5">
      <div className="min-w-0 flex-1 truncate text-[15px] font-medium text-black/60 sm:text-base">
        {title}
      </div>
      <Link href={href} className="shrink-0 text-sm font-light text-[rgb(208,1,27)] no-underline">
        <span className="inline-flex items-center gap-1">
          See All
          <svg
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            className="block h-[10px] w-[10px] fill-current"
            aria-hidden
          >
            <path d="m2.5 11c.1 0 .2 0 .3-.1l6-5c.1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export function ShopCollectionPreviewSection({
  shopSlug,
  shopCollection,
  title,
  shopName,
  limit = 6,
}: ShopCollectionPreviewSectionProps) {
  const [products, setProducts] = useState<CollectionProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await getShopCollectionProducts(shopSlug, {
          shopCollection,
          limit,
        });

        if (cancelled) return;

        setProducts(
          response.products.map((product) =>
            transformApiProduct(product, shopName || shopSlug),
          ),
        );
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to fetch shop collection preview:", error);
          setProducts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, [limit, shopCollection, shopName, shopSlug]);

  if (!loading && products.length === 0) {
    return null;
  }

  const seeAllHref = `/shop/${shopSlug}?shopCollection=${encodeURIComponent(shopCollection)}#product_list`;

  return (
    <section aria-label={title}>
      <ShopCollectionPreviewHeader href={seeAllHref} title={title} />
      {loading ? (
        <div className="rounded-sm bg-white px-4 py-8 text-center text-sm text-gray-500 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          Loading products...
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {products.map((item) => (
            <div key={`${shopCollection}-${item.slug}`} className="min-w-0">
              <CollectionProductCard item={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
