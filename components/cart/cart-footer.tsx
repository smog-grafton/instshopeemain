"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart";

/** Sticky checkout summary footer at the bottom of the cart page. */
export function CartFooter() {
  const { items } = useCart();

  const grandTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section
      aria-label="Cart summary"
      className="sticky bottom-0 z-[150] mt-3 box-border flex-1 w-full bg-white text-[16px] shadow-[rgba(0,0,0,0.05)_0px_-2px_4px_0px] grid grid-cols-[685px,325px,190px] items-center"
    >
      {/* Voucher / Discount row */}
      <h2 className="sr-only">cart_accessibility_footer</h2>
      <div className="col-span-2 col-start-2 flex items-center py-3">
        <h3 className="sr-only">cart_accessibility_footer_voucher_row</h3>
        <Image
          src="/images/svgs/cart/coupon.svg"
          alt=""
          width={24}
          height={24}
          className="mr-2 border-0"
        />
        <div className="flex-shrink-0 font-medium">Voucher / Discount</div>
        <div className="flex-1" />
        <button
          type="button"
          className="mr-7 border-0 bg-transparent p-0 text-[14px] leading-4 text-sky-700 whitespace-nowrap"
        >
          Select or enter code
        </button>
      </div>

      {/* dashed divider */}
      <div className="col-span-3 col-start-1 border-t border-dashed border-black/10" />

      {/* Coins row */}
      <h3 className="sr-only">cart_accessibility_footer_coin_row</h3>
      <div className="col-span-1 col-start-1 flex min-w-[58px] flex-row-reverse box-border px-3 pl-5 py-4">
        <label className="flex max-w-[400px] cursor-not-allowed items-center text-xs font-light text-black/60 opacity-100">
          <input
            type="checkbox"
            aria-label="Coins Balance 0"
            aria-disabled="true"
            className="sr-only"
          />
          <span className="h-4 w-4 flex-shrink-0 rounded-[2px] border border-[#e7e7e7] bg-[#e7e7e7]" />
        </label>
      </div>
      <div className="col-span-1 col-start-2 flex items-center box-border text-[14px] leading-4">
        <Image
          src="/images/common/coin/coin.png"
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] opacity-20"
        />
        <div className="ml-2 flex-shrink-0 font-medium opacity-20">
          Shopee Coins
        </div>
        <div className="ml-4 flex-0 text-sm font-medium text-[#929292]">
          No item selected
        </div>
        <button
          type="button"
          className="ml-1 border-0 bg-transparent p-0"
          aria-label="Shopee Coins info"
        >
          <svg
            viewBox="0 0 15 15"
            className="h-3 w-3 fill-black/60 stroke-black/60 px-[6px]"
          >
            <circle cx="7.5" cy="7.5" r="6.5" fill="none" />
            <path d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z" />
          </svg>
        </button>
      </div>
      <div className="col-span-1 col-start-3 flex items-center justify-end pr-7 text-[16px] font-medium text-[#d0d0d0]">
        -RM0.00
      </div>

      {/* dashed divider */}
      <div className="col-span-3 col-start-1 border-t border-dashed border-black/10" />

      {/* Checkout row */}
      <div className="col-span-3 col-start-1 flex w-full items-center py-3">
        <h3 className="sr-only">cart_accessibility_footer_checkout_row</h3>
        <div className="flex min-w-[58px] flex-row-reverse px-3 pl-5">
          <label className="flex max-w-[400px] cursor-default items-center text-xs font-light text-black/60">
            <input
              type="checkbox"
              aria-label="Click here to select all products"
              className="sr-only"
            />
            <span className="h-4 w-4 flex-shrink-0 rounded-[2px] border border-black/20 shadow-[rgba(0,0,0,0.02)_0px_2px_0px_0px_inset]" />
          </label>
        </div>
        <button
          type="button"
          className="border-0 bg-transparent text-[16px] text-black/80"
        >
          Select All ({totalItems})
        </button>
        <button
          type="button"
          className="mx-2 border-0 bg-transparent text-[16px] text-black/80"
        >
          Delete
        </button>
        <button
          type="button"
          className="mx-2 max-w-[168px] border-0 bg-transparent text-[16px] text-[#ee4d2d]"
        >
          Move to My Likes
        </button>
        <div className="flex-1" />

        <div className="flex flex-col" role="region">
          <div className="flex items-center justify-end">
            <div className="ml-5 flex items-center">
              <div className="text-[16px] leading-5 text-[#222]">
                Total ({totalItems} item{totalItems === 1 ? "" : "s"}):
              </div>
              <div className="ml-1 text-[24px] leading-7 text-[#ee4d2d]">
                RM{grandTotal.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="mt-0.5 flex justify-end text-[14px] leading-4 text-black/60" />
        </div>

        <Link
          href="/checkout?from=cart"
          className="ml-4 box-border flex h-10 w-[13.125rem] items-center justify-center rounded-[2px] border-0 bg-[#ee4d2d] px-9 py-3 text-[14px] font-light capitalize leading-[14px] text-white shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px] no-underline"
        >
          <span className="w-full text-center">Check Out</span>
        </Link>
      </div>
    </section>
  );
}

