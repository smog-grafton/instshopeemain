"use client";

import { useState, useCallback } from "react";
import { TopNavbar } from "@/components/top-navbar";
import { SiteFooter } from "@/components/site-footer";
import { CartHeader } from "@/components/cart/cart-header";
import { CartProductListSection } from "@/components/cart/cart-product-list-section";
import { CartFooter } from "@/components/cart/cart-footer";
import { CartYouMayAlsoLike } from "@/components/cart/cart-you-may-also-like";
import { useCart } from "@/components/cart";

export default function CartPage() {
  const { items, removeItem } = useCart();
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const getItemKey = useCallback(
    (slug: string, colorLabel?: string, size?: string) => {
      return `${slug}-${colorLabel ?? ""}-${size ?? ""}`;
    },
    []
  );

  const toggleSelectAll = useCallback(() => {
    if (selectedItems.size === items.length && items.length > 0) {
      setSelectedItems(new Set());
    } else {
      const allKeys = new Set(
        items.map((item) => getItemKey(item.slug, item.colorLabel, item.size))
      );
      setSelectedItems(allKeys);
    }
  }, [items, selectedItems.size, getItemKey]);

  const handleDeleteSelected = useCallback(() => {
    selectedItems.forEach((key) => {
      const [slug, colorLabel, size] = key.split("-");
      removeItem(slug, colorLabel || undefined, size || undefined);
    });
    setSelectedItems(new Set());
  }, [selectedItems, removeItem]);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <CartHeader />
      <main
        id="component"
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,sans-serif] text-sm leading-tight text-black/80"
      >
        <div className="w-[1200px] mx-auto py-6">
          <CartProductListSection
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <CartFooter
            selectedItems={selectedItems}
            onSelectAll={toggleSelectAll}
            onDeleteSelected={handleDeleteSelected}
          />

          {/* Bottom recommendation section: You May Also Like */}
          <CartYouMayAlsoLike />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
