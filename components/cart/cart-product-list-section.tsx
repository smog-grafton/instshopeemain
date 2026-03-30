"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart, type CartItem } from "@/components/cart";
import { formatPrice, isBackendImage } from "@/lib/utils";
import { getCartItemKey } from "@/lib/cart-selection";

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

function ItemCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
        aria-label={label}
      />
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-[2px] border shadow-[rgba(0,0,0,0.02)_0px_2px_0px_0px_inset] ${
          checked ? "border-[#ee4d2d] bg-[#ee4d2d] text-white" : "border-black/20 bg-white text-transparent"
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
    </label>
  );
}

function ProductThumb({ item }: { item: CartItem }) {
  if (isBackendImage(item.imageSrc)) {
    return (
      <img
        src={item.imageSrc}
        alt={item.title}
        className="h-20 w-20 object-cover sm:h-24 sm:w-24"
        loading="lazy"
      />
    );
  }

  return (
    <Image
      src={item.imageSrc}
      alt={item.title}
      width={96}
      height={96}
      className="h-20 w-20 object-cover sm:h-24 sm:w-24"
    />
  );
}

export function CartProductListSection({
  selectedItems,
  setSelectedItems,
}: CartProductListSectionProps) {
  const { items, removeItem, updateQuantity } = useCart();

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

  const toggleItemSelection = (item: CartItem) => {
    const key = getCartItemKey(item);
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
    const shopKeys = group.items.map((item) => getCartItemKey(item));
    const allSelected = shopKeys.every((key) => selectedItems.has(key));

    setSelectedItems((prev) => {
      const next = new Set(prev);
      for (const key of shopKeys) {
        if (allSelected) {
          next.delete(key);
        } else {
          next.add(key);
        }
      }
      return next;
    });
  };

  const toggleSelectAll = () => {
    const allKeys = items.map((item) => getCartItemKey(item));
    const allSelected = allKeys.length > 0 && allKeys.every((key) => selectedItems.has(key));
    setSelectedItems(allSelected ? new Set() : new Set(allKeys));
  };

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item.slug, item.colorLabel, item.size);
    setSelectedItems((prev) => {
      const next = new Set(prev);
      next.delete(getCartItemKey(item));
      return next;
    });
  };

  const allSelected =
    items.length > 0 && items.every((item) => selectedItems.has(getCartItemKey(item)));

  return (
    <main aria-label="Product List Section" className="mb-4 flex flex-col gap-3 pt-2 lg:pt-5">
      <div className="hidden h-[55px] items-center overflow-hidden rounded-[3px] bg-white px-5 text-[14px] leading-4 text-black/60 shadow-[rgba(0,0,0,0.05)_0px_1px_1px_0px] lg:flex">
        <div className="flex min-w-[58px] flex-row-reverse px-3 pl-5">
          <ItemCheckbox
            checked={allSelected}
            onChange={toggleSelectAll}
            label="Select all products"
          />
        </div>
        <div className="w-[43.6644%] text-black/80">Product</div>
        <div className="w-[14.9829%] text-center">Unit Price</div>
        <div className="w-[14.5548%] text-center">Quantity</div>
        <div className="w-[9.84589%] text-center">Total Price</div>
        <div className="w-[11.9863%] text-center">Actions</div>
      </div>

      <div className="rounded-[3px] border border-black/5 bg-white px-3 py-3 shadow-[rgba(0,0,0,0.05)_0px_1px_1px_0px] lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <label className="inline-flex items-center gap-2 text-[14px] text-black/80">
            <ItemCheckbox
              checked={allSelected}
              onChange={toggleSelectAll}
              label="Select all products"
            />
            <span>Select all products</span>
          </label>
          <span className="text-[12px] text-black/50">{items.length} line{items.length === 1 ? "" : "s"}</span>
        </div>
      </div>

      {items.length === 0 ? (
        <section className="overflow-visible rounded-[2px] bg-white shadow-[rgba(0,0,0,0.05)_0px_1px_1px_0px]">
          <div className="px-6 py-10 text-center text-sm text-black/60">
            Your cart is empty. Add items from the product page to see them here.
          </div>
        </section>
      ) : (
        groups.map((group) => {
          const shopAllSelected =
            group.items.length > 0 &&
            group.items.every((item) => selectedItems.has(getCartItemKey(item)));

          return (
            <section
              key={group.shopKey}
              className="overflow-visible rounded-[2px] bg-white shadow-[rgba(0,0,0,0.05)_0px_1px_1px_0px]"
            >
              <div className="flex flex-wrap items-center gap-3 border-b border-black/10 px-3 py-3 sm:px-4 lg:h-[60px] lg:px-5">
                <div className="flex items-center gap-3">
                  <ItemCheckbox
                    checked={shopAllSelected}
                    onChange={() => toggleShopSelection(group)}
                    label={`Select all products in ${group.shopName}`}
                  />
                  <Link
                    href={group.shopHref}
                    className="flex min-w-0 items-center text-[14px] font-medium text-black/87 no-underline"
                  >
                    <svg width={17} height={16} viewBox="0 0 17 16" aria-hidden>
                      <path
                        d="M1.95 6.6c.156.804.7 1.867 1.357 1.867.654 0 1.43 0 1.43-.933h.932s0 .933 1.155.933c1.176 0 1.15-.933 1.15-.933h.984s-.027.933 1.148.933c1.157 0 1.15-.933 1.15-.933h.94s0 .933 1.43.933c1.368 0 1.356-1.867 1.356-1.867H1.95zm11.49-4.666H3.493L2.248 5.667h12.437L13.44 1.934zM2.853 14.066h11.22l-.01-4.782c-.148.02-.295.042-.465.042-.7 0-1.436-.324-1.866-.86-.376.53-.88.86-1.622.86-.667 0-1.255-.417-1.64-.86-.39.443-.976.86-1.643.86-.74 0-1.246-.33-1.623-.86-.43.536-1.195.86-1.895.86-.152 0-.297-.02-.436-.05l-.018 4.79z"
                        strokeWidth={0.3}
                        stroke="#333"
                        fill="#333"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 truncate">{group.shopName}</span>
                  </Link>
                </div>
              </div>

              <div className="divide-y divide-black/5">
                {group.items.map((item) => {
                  const total = item.price * item.quantity;
                  const variation =
                    item.colorLabel && item.size
                      ? `${item.colorLabel}, ${item.size}`
                      : item.colorLabel ?? item.size ?? "-";
                  const itemKey = getCartItemKey(item);
                  const isSelected = selectedItems.has(itemKey);

                  return (
                    <article key={itemKey}>
                      <div className="flex gap-3 px-3 py-4 sm:px-4 lg:hidden">
                        <div className="pt-1">
                          <ItemCheckbox
                            checked={isSelected}
                            onChange={() => toggleItemSelection(item)}
                            label={`Select ${item.title}`}
                          />
                        </div>
                        <Link href={`/product/${item.slug}`} className="shrink-0">
                          <ProductThumb item={item} />
                        </Link>
                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/product/${item.slug}`}
                            className="line-clamp-2 text-[14px] leading-5 text-black/87 no-underline"
                          >
                            {item.title}
                          </Link>
                          <div className="mt-1 text-[12px] text-black/50">
                            Variation: {variation}
                          </div>
                          <div className="mt-2 flex items-center justify-between gap-3">
                            <div>
                              <div className="text-[12px] text-black/50">Unit price</div>
                              <div className="text-[16px] font-medium text-[#ee4d2d]">
                                {formatPrice(item.currencySymbol, item.price)}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[12px] text-black/50">Line total</div>
                              <div className="text-[16px] font-medium text-[#ee4d2d]">
                                {formatPrice(item.currencySymbol, total)}
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-3">
                            <div className="inline-flex items-center">
                              <button
                                type="button"
                                aria-label="Decrease"
                                onClick={() => updateQuantity(item.slug, Math.max(1, item.quantity - 1), item.colorLabel, item.size)}
                                className="flex h-8 w-8 items-center justify-center rounded-l border border-black/10 bg-transparent text-black/80"
                              >
                                -
                              </button>
                              <div className="flex h-8 min-w-[44px] items-center justify-center border-y border-black/10 px-3 text-sm">
                                {item.quantity}
                              </div>
                              <button
                                type="button"
                                aria-label="Increase"
                                onClick={() => updateQuantity(item.slug, item.quantity + 1, item.colorLabel, item.size)}
                                className="flex h-8 w-8 items-center justify-center rounded-r border border-black/10 bg-transparent text-black/80"
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item)}
                              className="border-0 bg-transparent p-0 text-[14px] text-black/70 hover:text-[#ee4d2d]"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="hidden items-center px-5 pb-5 pt-[15px] text-black/87 lg:flex">
                        <div className="flex min-w-[58px] flex-row-reverse px-3 pl-5">
                          <ItemCheckbox
                            checked={isSelected}
                            onChange={() => toggleItemSelection(item)}
                            label={`Select ${item.title}`}
                          />
                        </div>

                        <div className="relative flex w-[29.1096%] flex-col">
                          <div className="flex">
                            <Link href={`/product/${item.slug}`} className="mr-2.5">
                              <ProductThumb item={item} />
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

                        <div className="flex w-[14.5548%] items-center justify-center">
                          <div className="flex flex-1 flex-col pr-2 text-left text-sm text-black/60">
                            <div className="flex items-center capitalize">Variations:</div>
                            <div className="mt-1 overflow-hidden text-ellipsis text-[13px] leading-4">
                              {variation}
                            </div>
                          </div>
                        </div>

                        <div className="flex w-[14.9829%] justify-center text-sm">
                          <span>{formatPrice(item.currencySymbol, item.price)}</span>
                        </div>

                        <div className="flex w-[14.5548%] items-center justify-center">
                          <div className="flex items-center">
                            <button
                              type="button"
                              aria-label="Decrease"
                              onClick={() => updateQuantity(item.slug, Math.max(1, item.quantity - 1), item.colorLabel, item.size)}
                              className="flex h-8 w-8 items-center justify-center rounded-l border border-black/10 bg-transparent text-black/80 hover:bg-black/5"
                            >
                              -
                            </button>
                            <div className="flex h-8 w-12 items-center justify-center border-y border-black/10 text-base">
                              {item.quantity}
                            </div>
                            <button
                              type="button"
                              aria-label="Increase"
                              onClick={() => updateQuantity(item.slug, item.quantity + 1, item.colorLabel, item.size)}
                              className="flex h-8 w-8 items-center justify-center rounded-r border border-black/10 bg-transparent text-black/80 hover:bg-black/5"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="flex w-[9.84589%] justify-center text-[#ee4d2d]">
                          <span>{formatPrice(item.currencySymbol, total)}</span>
                        </div>

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
                            className="mt-1 border-0 bg-transparent px-2 text-[14px] text-[#ee4d2d]"
                          >
                            Find Similar
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-black/10 px-3 py-4 sm:px-4 lg:px-10">
                <Image
                  src="/images/svgs/cart/coupon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="border-0"
                />
                <div className="text-[14px] text-black/87">Up to 10% off voucher available</div>
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 text-[14px] text-sky-700"
                >
                  More Vouchers
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-black/10 px-3 py-4 sm:px-4 lg:px-10 lg:py-5">
                <Image
                  src="/images/svgs/cart/coupon-car.webp"
                  alt=""
                  width={80}
                  height={20}
                  className="h-5 w-auto align-bottom"
                />
                <div className="text-[14px] text-black/87">
                  Up to {formatPrice(group.items[0]?.currencySymbol, 5)} off shipping for orders over{" "}
                  {formatPrice(group.items[0]?.currencySymbol, 30)}
                </div>
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 text-[14px] text-sky-700"
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
