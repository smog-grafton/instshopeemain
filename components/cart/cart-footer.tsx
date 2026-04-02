"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart";
import { useAuth } from "@/components/auth/auth-context";
import {
  canAccessBuyerPortal,
  getSellerPortalBaseUrl,
} from "@/lib/account-routing";
import { formatPrice } from "@/lib/utils";
import { getCartItemKey, saveCheckoutSelection } from "@/lib/cart-selection";

interface CartFooterProps {
  selectedItems?: Set<string>;
  onSelectAll?: () => void;
  onDeleteSelected?: () => void;
}

export function CartFooter({ selectedItems, onSelectAll, onDeleteSelected }: CartFooterProps) {
  const router = useRouter();
  const { items } = useCart();
  const { isLoggedIn, user } = useAuth();

  const selectedCartItems = useMemo(() => {
    if (!selectedItems || selectedItems.size === 0) return [];
    return items.filter((item) => selectedItems.has(getCartItemKey(item)));
  }, [items, selectedItems]);

  const selectedLineCount = selectedCartItems.length;
  const selectedQuantity = selectedCartItems.reduce((sum, item) => sum + item.quantity, 0);
  const selectedTotal = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const allSelected =
    items.length > 0 &&
    selectedItems !== undefined &&
    selectedItems.size === items.length;
  const currencySymbol =
    selectedCartItems[0]?.currencySymbol ?? items[0]?.currencySymbol ?? "RM";

  const handleCheckout = () => {
    if (selectedLineCount === 0) return;

    if (isLoggedIn && !canAccessBuyerPortal(user)) {
      window.location.href = getSellerPortalBaseUrl();
      return;
    }

    saveCheckoutSelection(selectedCartItems.map((item) => getCartItemKey(item)));
    router.push("/checkout?from=cart");
  };

  return (
    <section
      aria-label="Cart summary"
      className="sticky bottom-0 z-[150] mt-3 overflow-hidden border border-black/5 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.08)]"
    >
      <div className="hidden border-b border-dashed border-black/10 px-5 py-3 lg:flex lg:items-center">
        <div className="flex items-center gap-2 text-[14px] text-black/80">
          <Image
            src="/images/svgs/cart/coupon.svg"
            alt=""
            width={24}
            height={24}
            className="border-0"
          />
          <span className="font-medium">Voucher / Discount</span>
        </div>
        <button
          type="button"
          className="ml-auto border-0 bg-transparent p-0 text-[14px] text-sky-700"
        >
          Select or enter code
        </button>
      </div>

      <div className="hidden border-b border-dashed border-black/10 px-5 py-4 lg:flex lg:items-center">
        <span className="mr-4 h-4 w-4 rounded-[2px] border border-[#e7e7e7] bg-[#e7e7e7]" />
        <div className="flex items-center text-[14px] text-black/50">
          <Image
            src="/images/common/coin/coin.png"
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px] opacity-25"
          />
          <span className="ml-2 font-medium opacity-50">Shopee Coins</span>
          <span className="ml-4 text-[#929292]">Select products to see coin usage</span>
        </div>
        <div className="ml-auto text-[16px] font-medium text-[#d0d0d0]">
          -{formatPrice(currencySymbol, 0)}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-3 py-3 sm:px-4 lg:flex-row lg:items-center lg:gap-4 lg:px-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-black/80 lg:text-[16px]">
          <label className="inline-flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={onSelectAll}
              aria-label="Select all cart products"
              className="sr-only"
            />
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-[2px] border ${
                allSelected
                  ? "border-[#ee4d2d] bg-[#ee4d2d] text-white"
                  : "border-black/20 bg-white text-transparent"
              }`}
            >
              <svg
                className="h-full w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>Select All ({items.length})</span>
          </label>

          <button
            type="button"
            onClick={onDeleteSelected}
            disabled={selectedLineCount === 0}
            className="border-0 bg-transparent p-0 text-left text-black/80 hover:text-[#ee4d2d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Delete
          </button>

          <button
            type="button"
            className="border-0 bg-transparent p-0 text-left text-[#ee4d2d]"
          >
            Move to My Likes
          </button>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/10 pt-3 lg:ml-auto lg:flex-row lg:items-center lg:gap-4 lg:border-t-0 lg:pt-0">
          <div className="text-right">
            <div className="text-[13px] text-black/60 lg:text-[14px]">
              Selected ({selectedLineCount} line{selectedLineCount === 1 ? "" : "s"}, {selectedQuantity} item{selectedQuantity === 1 ? "" : "s"})
            </div>
            <div className="mt-1 flex items-baseline justify-end gap-1">
              <span className="text-[14px] text-[#222] lg:text-[16px]">Total:</span>
              <span className="text-[24px] leading-none text-[#ee4d2d] lg:text-[28px]">
                {formatPrice(currencySymbol, selectedTotal)}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            disabled={selectedLineCount === 0}
            className="inline-flex h-11 w-full items-center justify-center rounded-[2px] bg-[#ee4d2d] px-6 text-[15px] font-medium text-white disabled:cursor-not-allowed disabled:bg-[#f3a08f] lg:w-[210px]"
          >
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
}
