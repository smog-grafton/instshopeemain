"use client";

import { useEffect, useState } from "react";
import { searchProducts, type ApiSearchStore } from "@/lib/api-client";
import { ShopsResultsSection } from ".";
import type { ShopsResultCardData } from "./types";

function toCard(store: ApiSearchStore): ShopsResultCardData {
  return {
    shop: {
      name: store.name,
      visitShopHref: `/shop/${store.slug}`,
      avatarSrc: store.avatarSrc,
      avatarAlt: store.name,
      isMall: store.isMall,
      rating: store.rating,
      followers: store.followers,
    },
    products: store.products.slice(0, 3).map((product) => ({
      title: product.title,
      href: product.href,
      imageSrc: product.imageSrc,
      imageAlt: product.title,
      discountPercent: 0,
      price: product.price,
      sold: product.sold,
    })),
    voucher: {
      discountPercent: 0,
      minSpend: "Visit shop",
      claimHref: `/shop/${store.slug}`,
    },
  };
}

export function LiveShopsResultsSection({ keyword }: { keyword: string }) {
  const [cards, setCards] = useState<ShopsResultCardData[]>([]);

  useEffect(() => {
    if (!keyword.trim()) {
      setCards([]);
      return;
    }

    let active = true;
    searchProducts({ keyword, per_page: 1 })
      .then((res) => {
        if (active) setCards((res.stores || []).map(toCard));
      })
      .catch(() => {
        if (active) setCards([]);
      });

    return () => {
      active = false;
    };
  }, [keyword]);

  if (cards.length === 0) return null;

  return (
    <div className="rounded-sm bg-white px-5 shadow-sm">
      <ShopsResultsSection keyword={keyword} moreShopsHref={`/search?keyword=${encodeURIComponent(keyword)}&type=shop`} cards={cards} />
    </div>
  );
}
