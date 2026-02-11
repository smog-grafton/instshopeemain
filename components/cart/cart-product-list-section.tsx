 "use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, type CartItem } from "@/components/cart";
import { formatPrice } from "@/lib/utils";

interface CartShopGroup {
  shopKey: string;
  shopName: string;
  shopHref: string;
  items: CartItem[];
}

interface CartProductListSectionProps {
  selectedItems: Set<string>;
  setSelectedItems: React.Dispatch<React.SetStateAction<Set<string>>>;
}

/** Header + product rows + voucher/shipping strips on the cart page. */
export function CartProductListSection({
  selectedItems,
  setSelectedItems,
}: CartProductListSectionProps) {
  const { items, removeItem, updateQuantity } = useCart();

  const grandTotal = useMemo(() => {
    return items
      .filter((item) => {
        const key = `${item.slug}-${item.colorLabel ?? ""}-${item.size ?? ""}`;
        return selectedItems.has(key);
      })
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items, selectedItems]);

  const groups: CartShopGroup[] = Object.values(
    items.reduce<Record<string, CartShopGroup>>((acc, item) => {
      const shopKey = item.shopSlug ?? item.shopId ?? "default-shop";
      if (!acc[shopKey]) {
        acc[shopKey] = {
          shopKey,
          shopName: item.shopName ?? "Shop",
          shopHref: item.shopSlug ? `/shop/${item.shopSlug}` : "#",
          items: [],
        };
      }
      acc[shopKey].items.push(item);
      return acc;
    }, {})
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const selectedItemsCount = selectedItems.size;

  const getItemKey = (item: CartItem) => {
    return `${item.slug}-${item.colorLabel ?? ""}-${item.size ?? ""}`;
  };

  const toggleItemSelection = (item: CartItem) => {
    const key = getItemKey(item);
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const toggleShopSelection = (group: CartShopGroup) => {
    const groupKeys = new Set(group.items.map(getItemKey));
    const allSelected = group.items.every((item) => selectedItems.has(getItemKey(item)));

    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (allSelected) {
        groupKeys.forEach((key) => next.delete(key));
      } else {
        groupKeys.forEach((key) => next.add(key));
      }
      return next;
    });
  };

  const toggleSelectAll = () => {
    const allKeys = new Set(items.map(getItemKey));
    const allSelected = items.every((item) => selectedItems.has(getItemKey(item)));

    setSelectedItems(allSelected ? new Set() : allKeys);
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    const newQuantity = Math.max(1, item.quantity - 1);
    updateQuantity(item.slug, newQuantity, item.colorLabel, item.size);
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    updateQuantity(item.slug, item.quantity + 1, item.colorLabel, item.size);
  };

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item.slug, item.colorLabel, item.size);
    // Remove from selection if selected
    const key = getItemKey(item);
    setSelectedItems((prev) => {
      const next = new Set(prev);
      next.delete(key);
      return next;
    });
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((key) => {
      const [slug, colorLabel, size] = key.split("-");
      removeItem(slug, colorLabel || undefined, size || undefined);
    });
    setSelectedItems(new Set());
  };

  const allSelected = items.length > 0 && items.every((item) => selectedItems.has(getItemKey(item)));

  return (
    <main
      aria-label="Product List Section"
      className="mb-4 flex flex-col pt-5 text-[14px] text-black/80"
    >
      {/* Column header row */}
      <div className="mb-3 flex h-[55px] items-center overflow-hidden rounded-[3px] bg-white px-5 text-[14px] leading-4 text-black/60 shadow-[rgba(0,0,0,0.05)_0px_1px_1px_0px]">
        <div className="flex min-w-[58px] flex-row-reverse px-3 pl-5">
          <label className="flex max-w-[400px] cursor-pointer items-center text-xs font-light text-black/60">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleSelectAll}
              className="sr-only"
              aria-label="Click here to select all products"
            />
            <span
              className={`h-4 w-4 rounded-[2px] border shadow-[rgba(0,0,0,0.02)_0px_2px_0px_0px_inset] ${
                allSelected
                  ? "border-[#ee4d2d] bg-[#ee4d2d]"
                  : "border-black/20 bg-white"
              }`}
            >
              {allSelected && (
                <svg
                  className="h-full w-full text-white"
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
              )}
            </span>
          </label>
        </div>
        <div className="w-[43.6644%] text-black/80">Product</div>
        <div className="w-[14.9829%] text-center">Unit Price</div>
        <div className="w-[14.5548%] text-center">Quantity</div>
        <div className="w-[9.84589%] text-center">Total Price</div>
        <div className="w-[11.9863%] text-center">Actions</div>
      </div>

      {items.length === 0 ? (
        <section className="mb-4 block overflow-visible rounded-[2px] bg-white shadow-[rgba(0,0,0,0.05)_0px_1px_1px_0px]">
          <div className="px-10 py-10 text-center text-sm text-black/60">
            Your cart is empty. Add items from the product page to see them
            here.
          </div>
        </section>
      ) : (
        groups.map((group) => {
          const shopItemsSelected = group.items.filter((item) =>
            selectedItems.has(getItemKey(item))
          );
          const shopAllSelected =
            group.items.length > 0 &&
            group.items.every((item) => selectedItems.has(getItemKey(item)));

          return (
            <section
              key={group.shopKey}
              className="mb-4 block overflow-visible rounded-[2px] bg-white shadow-[rgba(0,0,0,0.05)_0px_1px_1px_0px]"
            >
              {/* Shop header */}
              <div className="flex h-[60px] items-center border-b border-black/10 px-5">
                <div className="flex flex-1 items-center">
                  <div className="flex min-w-[58px] flex-row-reverse px-3 pl-5">
                    <label className="flex max-w-[400px] cursor-pointer items-center text-xs font-light text-black/60">
                      <input
                        type="checkbox"
                        checked={shopAllSelected}
                        onChange={() => toggleShopSelection(group)}
                        className="sr-only"
                        aria-label={`Click here to select all products in ${group.shopName}`}
                      />
                      <span
                        className={`h-4 w-4 rounded-[2px] border shadow-[rgba(0,0,0,0.02)_0px_2px_0px_0px_inset] ${
                          shopAllSelected
                            ? "border-[#ee4d2d] bg-[#ee4d2d]"
                            : "border-black/20 bg-white"
                        }`}
                      >
                        {shopAllSelected && (
                          <svg
                            className="h-full w-full text-white"
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
                        )}
                      </span>
                    </label>
                  </div>
                  <Link
                    href={group.shopHref}
                    className="flex min-w-[50px] items-center text-[14px] font-medium text-black/87 no-underline"
                  >
                    <div className="flex items-center">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        className="overflow-hidden"
                        aria-hidden
                      >
                        <path
                          d="M1.95 6.6c.156.804.7 1.867 1.357 1.867.654 0 1.43 0 1.43-.933h.932s0 .933 1.155.933c1.176 0 1.15-.933 1.15-.933h.984s-.027.933 1.148.933c1.157 0 1.15-.933 1.15-.933h.94s0 .933 1.43.933c1.368 0 1.356-1.867 1.356-1.867H1.95zm11.49-4.666H3.493L2.248 5.667h12.437L13.44 1.934zM2.853 14.066h11.22l-.01-4.782c-.148.02-.295.042-.465.042-.7 0-1.436-.324-1.866-.86-.376.53-.88.86-1.622.86-.667 0-1.255-.417-1.64-.86-.39.443-.976.86-1.643.86-.74 0-1.246-.33-1.623-.86-.43.536-1.195.86-1.895.86-.152 0-.297-.02-.436-.05l-.018 4.79z"
                          strokeWidth={0.3}
                          stroke="#333"
                          fill="#333"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="ml-2.5">{group.shopName}</span>
                  </Link>
                  <button
                    type="button"
                    className="ml-1.5 flex items-center border-0 bg-transparent p-0 text-[14px] leading-[16.8px] text-black/80"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-5 fill-[#ee4d2d]"
                      aria-hidden
                    >
                      <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52z" />
                    </svg>
                  </button>
                  <div className="flex-1" />
                </div>
              </div>

              {/* Product rows */}
              <section
                role="list"
                className="relative block pb-0.5"
                aria-label="Cart items"
              >
                {group.items.map((item) => {
                  const total = item.price * item.quantity;
                  const variation =
                    item.colorLabel && item.size
                      ? `${item.colorLabel}, ${item.size}`
                      : item.colorLabel ?? item.size ?? "-";
                  const itemKey = getItemKey(item);
                  const isSelected = selectedItems.has(itemKey);

                  return (
                    <div
                      key={itemKey}
                      role="listitem"
                      className="mt-4 flex items-center px-5 pb-5 pt-[15px] text-black/87"
                    >
                      {/* Item checkbox */}
                      <div className="flex min-w-[58px] flex-row-reverse px-3 pl-5">
                        <label className="flex max-w-[400px] cursor-pointer items-center text-xs font-light text-black/60">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleItemSelection(item)}
                            className="sr-only"
                            aria-label="Click here to select this product"
                          />
                          <span
                            className={`h-4 w-4 rounded-[2px] border shadow-[rgba(0,0,0,0.02)_0px_2px_0px_0px_inset] ${
                              isSelected
                                ? "border-[#ee4d2d] bg-[#ee4d2d]"
                                : "border-black/20 bg-white"
                            }`}
                          >
                            {isSelected && (
                              <svg
                                className="h-full w-full text-white"
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
                            )}
                          </span>
                        </label>
                      </div>

                      {/* Product info */}
                      <div className="relative flex w-[29.1096%] flex-col">
                        <div className="flex">
                          <Link href={`/product/${item.slug}`} className="mr-2.5">
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              width={80}
                              height={80}
                              className="h-20 w-20 object-cover"
                            />
                          </Link>
                          <div className="flex flex-1 flex-col overflow-hidden px-2.5 pt-1 text-sm leading-4">
                            <Link
                              href={`/product/${item.slug}`}
                              className="mb-1 block overflow-hidden text-ellipsis text-sm leading-4 text-black/87 no-underline line-clamp-2"
                              title={item.title}
                            >
                              {item.title}
                            </Link>
                            <Image
                              src="/images/svgs/cart/discount-infobar.png"
                              alt=""
                              width={72}
                              height={18}
                              className="h-[18px] w-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Variations */}
                      <div className="flex w-[14.5548%] items-center justify-center">
                        <button
                          type="button"
                          className="flex flex-1 cursor-pointer flex-col border-0 bg-transparent pr-2 text-left text-sm text-black/60"
                        >
                          <div className="flex items-center text-left capitalize">
                            Variations:
                            <span className="ml-2 inline-block border-x-[4px] border-t-[5px] border-x-transparent border-t-black/60" />
                          </div>
                          <div className="mt-1 overflow-hidden text-ellipsis text-left text-[13px] leading-4">
                            {variation}
                          </div>
                        </button>
                      </div>

                      {/* Unit price */}
                      <div className="flex w-[14.9829%] flex-col items-center justify-center text-sm">
                        <span>{formatPrice(item.currencySymbol, item.price)}</span>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex w-[14.5548%] items-center justify-center">
                        <div className="flex items-center">
                          <button
                            type="button"
                            aria-label="Decrease"
                            onClick={() => handleDecreaseQuantity(item)}
                            className="flex h-8 w-8 items-center justify-center rounded-l border border-black/10 bg-transparent text-black/80 hover:bg-black/5"
                          >
                            <svg
                              viewBox="0 0 10 10"
                              className="h-2.5 w-2.5 fill-black/80"
                              aria-hidden
                            >
                              <polygon points="0 4.5 10 4.5 10 5.5 0 5.5" />
                            </svg>
                          </button>
                          <div className="flex h-8 w-12 items-center justify-center border-y border-black/10 text-base">
                            {item.quantity}
                          </div>
                          <button
                            type="button"
                            aria-label="Increase"
                            onClick={() => handleIncreaseQuantity(item)}
                            className="flex h-8 w-8 items-center justify-center rounded-r border border-black/10 bg-transparent text-black/80 hover:bg-black/5"
                          >
                            <svg
                              viewBox="0 0 10 10"
                              className="h-2.5 w-2.5 fill-black/80"
                              aria-hidden
                            >
                              <polygon points="4.5 0 5.5 0 5.5 4.5 10 4.5 10 5.5 5.5 5.5 5.5 10 4.5 10 4.5 5.5 0 5.5 0 4.5 4.5 4.5" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Total price */}
                      <div className="flex w-[9.84589%] items-center justify-center text-[#ee4d2d]">
                        <span>{formatPrice(item.currencySymbol, total)}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex w-[11.9863%] flex-col items-center justify-center text-[14px] capitalize">
                        <button
                          type="button"
                          className="border-0 bg-transparent text-black/87 hover:text-[#ee4d2d]"
                          onClick={() => handleRemoveItem(item)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="mt-1 flex h-[30px] max-w-full items-center justify-center border border-transparent bg-transparent px-2 text-[14px] font-normal leading-[14px] text-[#ee4d2d]"
                        >
                          <span>Find Similar</span>
                          <svg
                            viewBox="0 0 15 15"
                            className="ml-1 h-3.5 w-2.5 fill-[#ee4d2d]"
                            aria-hidden
                          >
                            <path d="M6.5 12.9l-6-7.9S-.9 3.5 1 3.5h13s1.8 0 .6 1.5l-6 7.9c-1.2 1.3-2 0-2.1 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </section>

              {/* Voucher info row per shop */}
              <div className="flex items-center border-t border-black/10 px-10 py-4">
                <Image
                  src="/images/svgs/cart/coupon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="border-0"
                />
                <div className="ml-3 flex h-7 items-center">
                  <div className="text-black/87">
                    Up to 10% off voucher available
                  </div>
                  <div className="relative ml-6">
                    <button
                      type="button"
                      className="border-0 bg-transparent p-0 text-[14px] text-sky-700"
                    >
                      More Vouchers
                    </button>
                  </div>
                </div>
              </div>

              {/* Shipping discount info row per shop */}
              <div className="flex items-center border-t border-black/10 px-10 py-5">
                <div className="mr-4">
                  <Image
                    src="/images/svgs/cart/coupon-car.webp"
                    alt=""
                    width={80}
                    height={20}
                    className="h-5 w-auto align-bottom"
                  />
                </div>
                <div className="text-black/87">
                  Up to {formatPrice(group.items[0]?.currencySymbol, 5)} off shipping for orders over {formatPrice(group.items[0]?.currencySymbol, 30)}
                </div>
                <button
                  type="button"
                  className="ml-2 border-0 bg-transparent text-[14px] text-sky-700"
                >
                  Learn more
                </button>
              </div>
            </section>
          );
        })
      )}
    </main>
  );
}
