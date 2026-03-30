"use client";

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { CartItem } from "@/components/cart";
import { useCart } from "@/components/cart";
import { useAuth } from "@/components/auth/auth-context";
import { CheckoutErrorModal } from "./checkout-error-modal";
import type { StoredAddress } from "@/lib/address-storage";
import { getPaymentMethods, getBuyerWallet, type ApiPaymentMethod } from "@/lib/api-client";
import { placeOrder, type PaymentMethodKey } from "@/lib/api-client-orders";
import { formatPrice, isBackendImage } from "@/lib/utils";
import { clearCheckoutSelection, getCartItemKey } from "@/lib/cart-selection";

const SHOP_ICON_PATH =
  "M1.95 6.6c.156.804.7 1.867 1.357 1.867.654 0 1.43 0 1.43-.933h.932s0 .933 1.155.933c1.176 0 1.15-.933 1.15-.933h.984s-.027.933 1.148.933c1.157 0 1.15-.933 1.15-.933h.94s0 .933 1.43.933c1.368 0 1.356-1.867 1.356-1.867H1.95zm11.49-4.666H3.493L2.248 5.667h12.437L13.44 1.934zM2.853 14.066h11.22l-.01-4.782c-.148.02-.295.042-.465.042-.7 0-1.436-.324-1.866-.86-.376.53-.88.86-1.622.86-.667 0-1.255-.417-1.64-.86-.39.443-.976.86-1.643.86-.74 0-1.246-.33-1.623-.86-.43.536-1.195.86-1.895.86-.152 0-.297-.02-.436-.05l-.018 4.79zM14.996 12.2v.933L14.984 15H1.94l-.002-1.867V8.84C1.355 8.306 1.003 7.456 1 6.6L2.87 1h11.193l1.866 5.6c0 .943-.225 1.876-.934 2.39v3.21z";

export interface ShopGroup {
  shopKey: string;
  shopName: string;
  shopHref: string;
  items: CartItem[];
}

interface CheckoutProductsAndSummaryProps {
  groups: ShopGroup[];
  merchandiseSubtotal: number;
  shippingSubtotal: number;
  shippingDiscount: number;
  totalPayment: number;
  totalItems: number;
  /** Address snapshot used when placing orders (mock). */
  address: StoredAddress | null;
  shippingConfigLoading?: boolean;
}

const payBtnBase =
  "inline-flex items-center justify-center h-10 min-h-[34px] min-w-[80px] px-3 py-1 rounded-[2px] border bg-white text-black/80 font-medium cursor-pointer text-left gap-1.5";

export function CheckoutProductsAndSummary({
  groups,
  merchandiseSubtotal,
  shippingSubtotal,
  shippingDiscount,
  totalPayment,
  totalItems,
  address,
  shippingConfigLoading = false,
}: CheckoutProductsAndSummaryProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethodKey | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<ApiPaymentMethod[]>([]);
  const [loadingPaymentMethods, setLoadingPaymentMethods] = useState(true);
  const [placing, setPlacing] = useState(false);
  /** Buyer wallet available balance when paying with wallet */
  const [walletBalance, setWalletBalance] = useState<number | null>(null);
  const [walletLoading, setWalletLoading] = useState(false);
  const [walletResolved, setWalletResolved] = useState(false);
  const [walletAutoApplied, setWalletAutoApplied] = useState(false);
  // Payment evidence for manual payment methods
  const [accountHolderName, setAccountHolderName] = useState("");
  const [transactionScreenshot, setTransactionScreenshot] = useState<string | null>(null);
  const [, setScreenshotFile] = useState<File | null>(null);
  const initialPaymentResolved = useRef(false);
  const router = useRouter();
  const { removeItemsByKeys } = useCart();
  const { isLoggedIn } = useAuth();

  const currencySymbol = groups[0]?.items[0]?.currencySymbol || "RM";
  const effectiveBuyerShipping = Math.max(0, shippingSubtotal - shippingDiscount);
  const walletMethod = useMemo(
    () => paymentMethods.find((method) => method.key === "wallet") ?? null,
    [paymentMethods]
  );
  const walletMethodAvailable = walletMethod != null;
  const walletCanCoverOrder = walletBalance !== null && walletBalance >= totalPayment;
  const selectedPaymentMethod =
    paymentMethods.find((method) => method.key === selectedPayment) ?? null;
  const checkoutItemKeys = groups.flatMap((group) =>
    group.items.map((item) => getCartItemKey(item))
  );

  useEffect(() => {
    async function fetchPaymentMethods() {
      try {
        const methods = await getPaymentMethods();
        setPaymentMethods(methods.filter(m => m.enabledForCheckout));
      } catch (error) {
        console.error("Failed to fetch payment methods:", error);
        // Set empty array on error
        setPaymentMethods([]);
      } finally {
        setLoadingPaymentMethods(false);
      }
    }
    fetchPaymentMethods();
  }, []);

  const chooseDefaultPayment = useCallback((): PaymentMethodKey | null => {
    if (paymentMethods.length === 0) {
      return null;
    }

    if (isLoggedIn && walletMethodAvailable && walletCanCoverOrder) {
      return "wallet";
    }

    const preferredNonWallet = paymentMethods.find(
      (method) => method.key !== "wallet"
    );

    return (preferredNonWallet ?? paymentMethods[0]).key as PaymentMethodKey;
  }, [isLoggedIn, paymentMethods, walletCanCoverOrder, walletMethodAvailable]);

  useEffect(() => {
    if (!isLoggedIn || loadingPaymentMethods || !walletMethodAvailable) {
      setWalletLoading(false);
      setWalletBalance(null);
      setWalletResolved(true);
      return;
    }

    let cancelled = false;
    setWalletResolved(false);
    setWalletLoading(true);
    getBuyerWallet()
      .then((res) => {
        if (cancelled) return;
        const raw = res.wallet.available_balance ?? res.wallet.balance;
        setWalletBalance(parseFloat(String(raw ?? "0")));
      })
      .catch(() => {
        if (!cancelled) setWalletBalance(null);
      })
      .finally(() => {
        if (!cancelled) {
          setWalletLoading(false);
          setWalletResolved(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn, loadingPaymentMethods, walletMethodAvailable]);

  useEffect(() => {
    if (loadingPaymentMethods || paymentMethods.length === 0) {
      return;
    }

    if (isLoggedIn && walletMethodAvailable && !walletResolved) {
      return;
    }

    const hasValidCurrentSelection =
      selectedPayment != null &&
      paymentMethods.some((method) => method.key === selectedPayment);

    if (initialPaymentResolved.current && hasValidCurrentSelection) {
      return;
    }

    const nextPayment = chooseDefaultPayment();
    if (!nextPayment) {
      return;
    }

    setSelectedPayment(nextPayment);
    setWalletAutoApplied(nextPayment === "wallet" && walletCanCoverOrder);
    initialPaymentResolved.current = true;
  }, [
    chooseDefaultPayment,
    isLoggedIn,
    loadingPaymentMethods,
    paymentMethods,
    selectedPayment,
    walletCanCoverOrder,
    walletMethodAvailable,
    walletResolved,
  ]);

  const copyAddress = useCallback(async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      // ignore
    }
  }, []);

  const handleScreenshotUpload = async (file: File) => {
    setScreenshotFile(file);
    // Convert to base64 for now (in production, upload to server first)
    const reader = new FileReader();
    reader.onloadend = () => {
      setTransactionScreenshot(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handlePlaceOrder = async () => {
    // 1) Client-side validations
    if (!address) {
      setErrorMessage("Please add a delivery address before placing your order.");
      return;
    }

    if (!selectedPayment) {
      setErrorMessage("Please select payment option");
      return;
    }

    // Validate payment evidence for manual payment methods
    const manualPaymentMethods: PaymentMethodKey[] = ['usdt-tron', 'btc', 'usdt-eth', 'online-banking'];
    const isManualPayment = manualPaymentMethods.includes(selectedPayment);
    if (isManualPayment) {
      if (!accountHolderName.trim()) {
        setErrorMessage("Please provide the account holder name who made the payment.");
        return;
      }
      if (!transactionScreenshot) {
        setErrorMessage("Please upload a screenshot of the transaction as proof of payment.");
        return;
      }
    }

    if (selectedPayment === "wallet") {
      if (!isLoggedIn) {
        setErrorMessage("Please sign in to pay with your wallet.");
        return;
      }
      if (walletLoading) {
        setErrorMessage("Wallet balance is still loading. Please wait a moment.");
        return;
      }
      if (walletBalance === null || walletBalance < totalPayment) {
        setErrorMessage(
          `Insufficient wallet balance for this order (${formatPrice(currencySymbol, totalPayment)}). Top up your wallet and try again.`
        );
        return;
      }
    }

    // 2) Build order item snapshots from cart groups
    const itemSnapshots = groups.flatMap((group) =>
      group.items.map((item) => ({
        productSlug: item.slug,
        title: item.title,
        imageSrc: item.imageSrc,
        variation:
          item.colorLabel && item.size
            ? `${item.colorLabel}, ${item.size}`
            : item.colorLabel ?? item.size ?? "-",
        unitPrice: item.price,
        quantity: item.quantity,
      }))
    );

    // 3) Call real order API (requires auth)
    setPlacing(true);
    setErrorMessage(null);
    try {
      // Prepare payment evidence for manual payment methods
      const paymentEvidence = isManualPayment ? {
        accountHolderName: accountHolderName.trim(),
        transactionScreenshot: transactionScreenshot!,
      } : undefined;

      const result = await placeOrder({
        items: itemSnapshots,
        address: {
          fullName: address.fullName,
          phoneNumber: address.phoneNumber,
          stateArea: address.stateArea,
          postalCode: address.postalCode,
          unitNo: address.unitNo ?? undefined,
          streetAddress: address.streetAddress,
          labelAs: address.labelAs ?? undefined,
        },
        paymentMethod: selectedPayment,
        merchandiseSubtotal,
        shippingSubtotal,
        shippingDiscount,
        totalPayment,
        paymentEvidence,
      });

      await removeItemsByKeys(checkoutItemKeys);
      clearCheckoutSelection();

      const createdOrders = result.orders && result.orders.length > 0
        ? result.orders
        : result.order
          ? [result.order]
          : [];

      const highlightIds = createdOrders.map((order) => order.id).filter(Boolean);
      const nextQuery = highlightIds.length > 1
        ? `?orderIds=${encodeURIComponent(highlightIds.join(","))}`
        : `?orderId=${encodeURIComponent(highlightIds[0] ?? "")}`;

      router.push(`/user/purchase${nextQuery}`);
    } catch (error) {
      console.error("Failed to place order", error);
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong while placing your order. Please try again."
      );
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div className="bg-white rounded-b shadow-[0_1px_1px_rgba(0,0,0,0.09)]">
      {groups.map((group) => (
        <div
          key={group.shopKey}
          className="bg-white rounded border-b border-black/[0.09]"
        >
          <div className="flex flex-col gap-5 border-b border-black/[0.09] py-5 lg:gap-[25px] lg:py-[25px]">
            <div className="flex flex-wrap items-center gap-2 px-4 sm:px-6 lg:h-5 lg:px-[30px]">
              <div className="flex items-center">
                <svg
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  className="overflow-hidden"
                  aria-hidden
                >
                  <path
                    d={SHOP_ICON_PATH}
                    strokeWidth={0.3}
                    stroke="#333"
                    fill="#333"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-[14px] font-normal leading-[16.8px] text-black/87 m-0 ml-[5px] no-underline">
                {group.shopName}
              </h3>
              <button
                type="button"
                className="ml-auto flex items-center border-0 border-black/[0.09] bg-transparent p-0 text-[14px] text-[#00bfa5] lg:ml-2.5 lg:border-l"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="mr-1 block h-[15px] w-5 fill-[#00bfa5] lg:ml-2.5"
                >
                  <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                </svg>
                chat now
              </button>
            </div>

            <div className="flex flex-col gap-[15px]">
              {group.items.map((item) => {
                const total = item.price * item.quantity;
                const variation =
                  item.colorLabel && item.size
                    ? `${item.colorLabel}, ${item.size}`
                    : item.colorLabel ?? item.size ?? "-";
                return (
                  <div
                    key={`${item.slug}-${item.colorLabel ?? ""}-${item.size ?? ""}`}
                    className="mx-4 flex flex-col gap-2 overflow-hidden text-[14px] text-[#222] sm:mx-6 lg:mx-[30px] lg:min-h-[55px] lg:flex-row lg:items-center"
                  >
                    <div className="flex items-center overflow-hidden text-ellipsis lg:flex-[4_1_0%]">
                      {isBackendImage(item.imageSrc) ? (
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          width={40}
                          height={40}
                          className="h-10 w-10 align-bottom border-0 object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          width={40}
                          height={40}
                          className="align-bottom border-0"
                        />
                      )}
                      <span className="mx-3 flex min-w-0 flex-col justify-center overflow-hidden lg:mx-4">
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                          {item.title}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#929292] lg:flex-[2_1_0%] lg:justify-start">
                      <span className="text-[12px] text-black/45 lg:hidden">Variation</span>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap lg:pl-[13px]">
                        {variation}
                      </span>
                    </div>
                    <div className="flex items-center justify-between lg:flex-[2_1_0%] lg:justify-end">
                      <span className="text-[12px] text-black/45 lg:hidden">Unit Price</span>
                      {formatPrice(item.currencySymbol || currencySymbol, item.price)}
                    </div>
                    <div className="flex items-center justify-between lg:flex-[2_1_0%] lg:justify-end">
                      <span className="text-[12px] text-black/45 lg:hidden">Quantity</span>
                      {item.quantity}
                    </div>
                    <div className="flex items-center justify-between font-medium lg:flex-[2_1_0%] lg:justify-end">
                      <span className="text-[12px] font-normal text-black/45 lg:hidden">Subtotal</span>
                      {formatPrice(item.currencySymbol || currencySymbol, total)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-b border-dashed border-black/[0.09]">
            <div className="p-4 sm:p-6 lg:ml-auto lg:max-w-[720px] lg:p-[25px]">
              <div className="flex justify-between items-end">
                <div className="flex items-center text-[14px]">
                  <Image
                    src="/images/svgs/cart/coupon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="block mr-1"
                  />
                  <span>Shop Voucher</span>
                </div>
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 text-[14px] font-medium text-[#0055aa] cursor-pointer"
                >
                  Select Voucher
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="grid border-b border-dashed border-black/[0.09] bg-[#fafdff] min-w-0 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)]">
        <div className="flex min-w-0 flex-col p-4 text-[14px] sm:p-6 lg:p-[25px]">
          <div className="flex min-w-0 flex-col gap-2 lg:flex-row lg:items-center">
            <span className="leading-10">Message for Sellers:</span>
            <div className="min-w-0 flex-1 lg:ml-4">
              <div className="relative text-xs font-light">
                <div className="flex items-center h-10 border border-black/20 rounded-[2px] bg-white shadow-[0_2px_0_0_rgba(0,0,0,0.02)_inset]">
                  <input
                    type="text"
                    placeholder="Please leave a message…"
                    aria-label="Message for Sellers:"
                    className="w-full h-10 py-1 px-3 box-border bg-transparent border-0 outline-none text-[#bbb] text-[14px] flex-1 min-w-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-col border-t border-black/[0.06] p-4 text-[14px] sm:p-6 lg:border-t-0 lg:p-[25px]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-black/87">
            <span className="text-[14px] font-medium leading-5 shrink-0">
              Shipping Option:
            </span>
            <span className="text-[14px] font-normal leading-5 shrink-0">
              Standard Doorstep Delivery (International)
            </span>
            <button
              type="button"
              className="shrink-0 border-0 bg-transparent p-0 text-[#0055aa] text-sm font-medium cursor-pointer"
            >
              change
            </button>
            <div className="ml-auto flex shrink-0 items-baseline gap-1 text-[14px] font-medium leading-5 text-[#222]">
              <Image
                src="/images/svgs/cart/fast-car-delivery.svg"
                alt=""
                width={19}
                height={13}
                className="align-text-bottom shrink-0 border-0"
              />
              <span className="text-black/26 line-through">{formatPrice(currencySymbol, shippingSubtotal)}</span>
              <span>{formatPrice(currencySymbol, effectiveBuyerShipping)}</span>
              <span className="text-black/54 text-xs leading-4">(incl. SST)</span>
            </div>
          </div>
          <div className="border-t border-dashed border-black/[0.09] w-full mt-2.5 pt-2.5" />
          <div className="flex flex-wrap items-center gap-2 text-[14px] leading-5">
            <Image
              src="/images/svgs/cart/fast-car-delivery.svg"
              alt=""
              width={16}
              height={12}
              className="shrink-0 border-0"
            />
            <span className="font-medium text-[#26aa99]">
              Get by 5 - 10 Feb with Standard Doorstep Delivery (International)
            </span>
            <span className="ml-0.5 shrink-0 text-black/40" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 inline-block">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-4 bg-[#fafdff]">
        <div className="flex items-center justify-end px-4 sm:px-6 lg:px-[30px]">
          <h3 className="text-[14px] font-normal leading-[16.8px] text-black/54 m-0 p-0 flex items-center">
            Items Total ({totalItems} Item{totalItems !== 1 ? "s" : ""}):
          </h3>
          <div className="text-[#ee4d2d] text-xl font-medium min-w-[100px] h-10 py-0 px-[25px] pl-2.5 flex items-center justify-end">
            {formatPrice(currencySymbol, merchandiseSubtotal)}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative flex flex-col gap-3 border-b border-black/5 bg-white px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:px-[30px] lg:py-7">
          <div className="flex flex-col flex-grow flex-shrink-0">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
              <div className="flex flex-grow flex-shrink-0 items-end">
                <Image
                  src="/images/svgs/cart/coupon.svg"
                  alt=""
                  width={24}
                  height={23}
                  className="block"
                />
                <h2 className="text-lg font-normal leading-[21.6px] text-black/80 m-0 mx-2">
                  Voucher / Discount
                </h2>
              </div>
              <div className="flex flex-grow-0 flex-shrink-0 items-center">
                <span className="text-[14px] text-[#757575]">
                  <span className="text-[#ee4d2d]">1</span> Selected
                </span>
                <div className="flex-1" />
                <div className="relative flex items-center justify-center h-[19px] ml-2 py-0 px-1.5 text-xs font-medium text-[#00bfa5] border-y border-[#00bfa5] cursor-default whitespace-nowrap box-border">
                  <span className="overflow-hidden text-ellipsis">
                    Free Shipping Discount
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 lg:ml-4 lg:pl-[50px]">
            <button
              type="button"
              className="float-right border-0 bg-transparent p-0 text-[14px] font-medium text-[#0055aa] cursor-pointer"
            >
              change
            </button>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-b border-black/5 bg-white px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:px-[30px] lg:py-7">
          <div className="flex flex-grow flex-shrink-0 items-center">
            <Image
              src="/images/common/coin/coin.png"
              alt=""
              width={18}
              height={18}
              className="block p-0.5"
            />
            <h2 className="text-lg font-normal leading-[21.6px] text-black/80 m-0 mx-2">
              Shopee Coins
            </h2>
            <div className="text-[#929292] flex-[0_1_auto] ml-4 font-medium">
              Coins cannot be redeemed
            </div>
          </div>
          <div className="flex">
            <div className="text-[#d0d0d0] pr-3 font-medium">[{formatPrice(currencySymbol, 0, true)}]</div>
            <label className="opacity-35 cursor-not-allowed text-black/54 text-xs font-light flex items-center max-w-[400px] relative">
              <input
                type="checkbox"
                aria-checked="false"
                aria-disabled={true}
                tabIndex={0}
                role="checkbox"
                aria-label="Coins Balance 0"
                className="sr-only"
              />
              <span className="flex-shrink-0 w-4 h-4 rounded-[2px] border border-black/20 bg-[#e7e7e7] mr-2 relative" />
            </label>
          </div>
        </div>
      </div>

      <div className="rounded-[3px] mb-3 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
        <div className="bg-white mt-5">
          <h2 className="sr-only">Payment Method</h2>
          <div className="relative flex flex-col gap-4 border-b border-black/5 px-4 py-4 sm:px-6 lg:min-h-[90px] lg:flex-row lg:items-start lg:px-[30px] lg:pb-5">
            <div className="text-lg text-[#222] lg:flex-[0_0_200px]">
              Payment Method
            </div>
            {loadingPaymentMethods ? (
              <div className="py-4 text-center text-gray-500 text-sm">Loading payment methods...</div>
            ) : (
              <>
                <div
                  role="radiogroup"
                  className="mt-1 flex flex-wrap gap-x-2 gap-y-2 lg:mt-2.5"
                >
                  {paymentMethods.map((method) => (
                    <button
                      key={method.key}
                      type="button"
                      role="radio"
                      aria-label={method.name}
                      aria-checked={selectedPayment === method.key}
                      className={`${payBtnBase} ${selectedPayment === method.key ? "border-[#ee4d2d]" : "border-black/[0.09]"}`}
                      onClick={() => {
                        setSelectedPayment(method.key as PaymentMethodKey);
                        setWalletAutoApplied(false);
                      }}
                    >
                      {method.logoUrl && (
                        <Image
                          src={method.logoUrl}
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0 object-contain"
                        />
                      )}
                      {method.key === "voucher" && !method.logoUrl && (
                        <Image
                          src="/images/svgs/cart/coupon.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0"
                        />
                      )}
                      {method.key === "wallet" && !method.logoUrl && (
                        <Image
                          src="/images/common/coin/coin.png"
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0"
                        />
                      )}
                      <span>{method.name}</span>
                    </button>
                  ))}
                </div>
                {selectedPayment === "wallet" && (
                  <div className="mt-3 p-4 rounded-[2px] border border-black/10 bg-black/[0.02] text-[13px] space-y-2 text-left w-full">
                    {!isLoggedIn && (
                      <p className="text-black/70 m-0">Sign in to pay with your wallet balance.</p>
                    )}
                    {isLoggedIn && walletLoading && <p className="text-black/70 m-0">Loading wallet balance…</p>}
                    {isLoggedIn && !walletLoading && walletBalance !== null && (
                      <>
                        {walletAutoApplied && walletCanCoverOrder && (
                          <p className="m-0 rounded-[2px] border border-[#b7e4c7] bg-[#eefaf3] px-2 py-1 text-[#1c7c54]">
                            Account funds are available, so this order will be paid from your wallet automatically.
                          </p>
                        )}
                        <p className="m-0 text-black/80">
                          Available balance:{" "}
                          <strong className="text-[#222]">{formatPrice(currencySymbol, walletBalance)}</strong>
                          {walletBalance < totalPayment && (
                            <span className="text-[#ee4d2d] ml-2">Not enough for this order.</span>
                          )}
                        </p>
                        {walletBalance >= totalPayment && (
                          <p className="m-0 text-black/60">
                            Wallet-paid orders move straight to processing. No separate admin payment approval is needed.
                          </p>
                        )}
                        <Link href="/user/wallet" className="text-[#0055aa] underline text-[13px] inline-block">
                          Top up wallet
                        </Link>
                      </>
                    )}
                    {isLoggedIn && !walletLoading && walletBalance === null && (
                      <p className="text-[#ee4d2d] m-0">Could not load wallet. Try again or choose another payment method.</p>
                    )}
                  </div>
                )}
                {selectedPayment && selectedPaymentMethod?.type === "manual" && selectedPaymentMethod.config?.address && (
                  <div className="mt-3 p-4 rounded-[2px] border border-black/10 bg-black/[0.02] text-[13px] space-y-3">
                    <div>
                      <div className="text-black/70 mb-1 font-medium">
                        {selectedPaymentMethod.name} deposit address:
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <code className="flex-1 min-w-0 break-all font-mono text-[12px] text-black/87 bg-white px-2 py-1 rounded border border-black/10">
                          {selectedPaymentMethod.config?.address}
                        </code>
                        <button
                          type="button"
                          className="shrink-0 px-2 py-1 rounded border border-black/20 bg-white text-[12px] text-black/80 hover:bg-black/5"
                          onClick={() => {
                            const addr = selectedPaymentMethod.config?.address;
                            if (addr) copyAddress(addr);
                          }}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t border-black/10 pt-3 space-y-3">
                      <div className="text-black/70 font-medium mb-2">
                        Payment Evidence Required:
                      </div>
                      
                      <div>
                        <label className="block text-black/70 mb-1 text-[12px]">
                          Account Holder Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={accountHolderName}
                          onChange={(e) => setAccountHolderName(e.target.value)}
                          placeholder="Enter the name of the account holder who made the payment"
                          className="w-full px-3 py-2 border border-black/20 rounded bg-white text-[13px] focus:outline-none focus:border-[#ee4d2d]"
                        />
                        <p className="text-[11px] text-black/50 mt-1">
                          The name must match the account used for the transaction
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-black/70 mb-1 text-[12px]">
                          Transaction Screenshot <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-start gap-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                if (file.size > 5 * 1024 * 1024) {
                                  setErrorMessage("Screenshot must be less than 5MB");
                                  return;
                                }
                                handleScreenshotUpload(file);
                              }
                            }}
                            className="hidden"
                            id="transaction-screenshot"
                          />
                          <label
                            htmlFor="transaction-screenshot"
                            className="px-3 py-2 border border-black/20 rounded bg-white text-[12px] text-black/80 hover:bg-black/5 cursor-pointer"
                          >
                            {transactionScreenshot ? "Change Screenshot" : "Upload Screenshot"}
                          </label>
                          {transactionScreenshot && (
                            <div className="flex-1">
                              <div className="relative inline-block">
                                <img
                                  src={transactionScreenshot}
                                  alt="Transaction screenshot"
                                  className="max-w-[200px] max-h-[150px] border border-black/10 rounded"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setTransactionScreenshot(null);
                                    setScreenshotFile(null);
                                  }}
                                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                >
                                  ×
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        <p className="text-[11px] text-black/50 mt-1">
                          Upload a clear screenshot showing the transaction details (max 5MB)
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-[11px] text-yellow-800">
                        <strong>Important:</strong> Your order will be pending until admin confirms the payment. 
                        Please ensure the screenshot clearly shows the transaction ID and amount.
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div
          aria-live="polite"
          className="flex flex-col items-end border-t border-[#f1f0ed] bg-[#fffefb] px-4 pb-0 pt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:px-6 lg:px-[30px]"
        >
          <h2 className="sr-only">Total Payment:</h2>
          <div className="flex items-center justify-end gap-x-6 min-h-10">
            <h3 className="text-[14px] font-normal leading-[16.8px] text-black/54 m-0 p-0 text-right">
              Merchandise Subtotal
            </h3>
            <span className="text-[14px] text-black/65 min-w-[70px] text-right">
              {formatPrice(currencySymbol, merchandiseSubtotal)}
            </span>
          </div>
          <div className="flex items-center justify-end gap-x-6 min-h-10">
            <h3 className="text-[14px] font-normal leading-[16.8px] text-black/54 m-0 p-0 text-right">
              Shipping Subtotal (excl. sst)
            </h3>
            <span className="text-[14px] text-black/65 min-w-[70px] text-right">
              {formatPrice(currencySymbol, shippingSubtotal)}
            </span>
          </div>
          <div className="flex items-center justify-end gap-x-6 min-h-10">
            <h3 className="text-[14px] font-normal leading-[16.8px] text-black/54 m-0 p-0 flex items-center justify-end gap-1.5 text-right">
              Shipping Fee SST
              <span className="inline-flex cursor-pointer text-black/54 fill-black/54 shrink-0" title="SST info" aria-hidden>
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3.5 w-3.5">
                  <circle cx="7.5" cy="7.5" fill="none" r="6.5" strokeMiterlimit={10} stroke="currentColor" />
                  <path d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z" fill="currentColor" stroke="none" />
                </svg>
              </span>
            </h3>
            <span className="text-[14px] text-black/65 min-w-[70px] text-right">
              {formatPrice(currencySymbol, 0)}
            </span>
          </div>
          <div className="flex items-center justify-end gap-x-6 min-h-10">
            <h3 className="text-[14px] font-normal leading-[16.8px] text-black/54 m-0 p-0 text-right">
              Shipping Discount Subtotal
            </h3>
            <span className="text-[14px] text-[#ee4d2d] min-w-[70px] text-right">
              {formatPrice(currencySymbol, shippingDiscount, true)}
            </span>
          </div>
          <div className="flex items-center justify-end gap-x-6 min-h-[50px]">
            <h3 className="text-[14px] font-normal leading-[16.8px] text-black/54 m-0 p-0 text-right">
              Total Payment:
            </h3>
            <span className="text-[#ee4d2d] text-[28px] font-medium min-w-[90px] text-right">
              {formatPrice(currencySymbol, totalPayment)}
            </span>
          </div>
          <div className="flex justify-end items-center mt-1 mb-1 min-h-[12px] text-[12px] text-black/54 gap-1">
            Sales Tax on LVG included, where applicable
            <span className="inline-flex cursor-pointer text-black/54 fill-black/54 shrink-0" title="LVG info" aria-hidden>
              <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="h-3 w-3">
                <circle cx="7.5" cy="7.5" fill="none" r="6.5" strokeMiterlimit={10} stroke="currentColor" />
                <path d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z" fill="currentColor" stroke="none" />
              </svg>
            </span>
          </div>
          <div className="mt-2 flex min-h-[95px] w-full items-center justify-end border-t border-dashed border-black/[0.09]">
            <div className="flex-1" />
            <button
              type="button"
              disabled={
                shippingConfigLoading ||
                placing ||
                (selectedPayment === "wallet" &&
                  (!isLoggedIn ||
                    walletLoading ||
                    walletBalance === null ||
                    walletBalance < totalPayment))
              }
              className="flex h-10 w-full items-center justify-center rounded-[2px] border border-black/[0.09] bg-[#ee4d2d] px-3.5 py-3 text-base font-normal text-white shadow-[0_1px_1px_rgba(0,0,0,0.03)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-[210px]"
              onClick={handlePlaceOrder}
            >
              {shippingConfigLoading ? "Calculating…" : placing ? "Placing…" : "Place Order"}
            </button>
          </div>
        </div>
      </div>

      <CheckoutErrorModal
        open={errorMessage != null}
        message={errorMessage ?? ""}
        onClose={() => setErrorMessage(null)}
      />
    </div>
  );
}
