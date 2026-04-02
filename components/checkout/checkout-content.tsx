"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TopNavbar } from "@/components/top-navbar";
import { SiteFooter } from "@/components/site-footer";
import { CheckoutHeader } from "@/components/checkout/checkout-header";
import { NewAddressModal } from "@/components/user-dashboard/address/new-address-modal";
import type { NewAddressFormValues } from "@/components/user-dashboard/address/new-address-modal";
import { useCart } from "@/components/cart";
import {
  getStoredAddress,
  setStoredAddress,
  type StoredAddress,
} from "@/lib/address-storage";
import {
  getAddresses,
  createAddress,
  type ApiAddress,
  getCheckoutConfig,
} from "@/lib/api-client";
import { useAuth } from "@/components/auth/auth-context";
import {
  canAccessBuyerPortal,
  getSellerPortalBaseUrl,
} from "@/lib/account-routing";
import {
  CheckoutProductsAndSummary,
  type ShopGroup,
} from "@/components/checkout/checkout-products-summary";
import {
  CheckoutDeliveryAddress,
  CheckoutAddressBookModal,
} from "@/components/checkout";
import { getCartItemKey, readCheckoutSelection } from "@/lib/cart-selection";

const roundMoney = (value: number) => Math.round(value * 100) / 100;

export function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.toString();
  const from = searchParams.get("from") ?? "cart";
  const slug = searchParams.get("slug") ?? "";
  const nextCheckoutPath = searchQuery ? `/checkout?${searchQuery}` : "/checkout";

  const [hasAddress, setHasAddress] = useState<boolean | null>(null);
  const [storedAddress, setStoredAddressState] = useState<StoredAddress | null>(
    null
  );
  const [, setApiAddresses] = useState<ApiAddress[]>([]);
  const [loadingAddresses, setLoadingAddresses] = useState(true);
  const [showAddressBookModal, setShowAddressBookModal] = useState(false);
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);
  const [checkoutSelectionKeys, setCheckoutSelectionKeys] = useState<string[] | null>(null);
  const [checkoutShippingPercent, setCheckoutShippingPercent] = useState(0);
  const [shippingConfigLoading, setShippingConfigLoading] = useState(true);
  const { items } = useCart();
  const { authResolved, isLoggedIn, user } = useAuth();
  const shouldRedirectToLogin = authResolved && !isLoggedIn;
  const shouldRedirectToSellerPortal =
    authResolved && isLoggedIn && !canAccessBuyerPortal(user);

  useEffect(() => {
    if (from !== "cart") {
      setCheckoutSelectionKeys([]);
      return;
    }

    setCheckoutSelectionKeys(readCheckoutSelection());
  }, [from]);

  const checkoutItems = useMemo(() => {
    if (from === "buynow" && slug) {
      const matched = items.filter((item) => item.slug === slug);
      return matched.length > 0 ? matched : items;
    }

    if (from === "cart" && checkoutSelectionKeys && checkoutSelectionKeys.length > 0) {
      return items.filter((item) => checkoutSelectionKeys.includes(getCartItemKey(item)));
    }

    return items;
  }, [checkoutSelectionKeys, from, items, slug]);

  const groups: ShopGroup[] = useMemo(
    () =>
      Object.values(
        checkoutItems.reduce<Record<string, ShopGroup>>((acc, item) => {
          const shopKey = item.shopSlug ?? item.shopId ?? "default-shop";
          if (!acc[shopKey]) {
            acc[shopKey] = {
              shopKey,
              shopName: item.shopName ?? "Shop",
              shopHref: item.shopSlug ? `/m/${item.shopSlug}` : "#",
              items: [],
            };
          }
          acc[shopKey].items.push(item);
          return acc;
        }, {})
      ),
    [checkoutItems]
  );

  useEffect(() => {
    if (!shouldRedirectToLogin) {
      return;
    }

    router.replace(`/login?next=${encodeURIComponent(nextCheckoutPath)}`);
  }, [nextCheckoutPath, router, shouldRedirectToLogin]);

  useEffect(() => {
    if (!shouldRedirectToSellerPortal) {
      return;
    }

    window.location.href = getSellerPortalBaseUrl();
  }, [shouldRedirectToSellerPortal]);

  useEffect(() => {
    let cancelled = false;

    getCheckoutConfig()
      .then((config) => {
        if (!cancelled) {
          setCheckoutShippingPercent(Number(config.shippingPercent ?? 0));
        }
      })
      .catch((error) => {
        console.error("Failed to load checkout config:", error);
        if (!cancelled) {
          setCheckoutShippingPercent(0);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setShippingConfigLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    async function loadAddresses() {
      if (!authResolved) {
        return;
      }

      if (!isLoggedIn || !canAccessBuyerPortal(user)) {
        setStoredAddressState(null);
        setHasAddress(null);
        setLoadingAddresses(false);
        return;
      }

      try {
        setLoadingAddresses(true);
        const addresses = await getAddresses();
        setApiAddresses(addresses);

        if (addresses.length > 0) {
          const defaultAddr = addresses.find((address) => address.setAsDefault) || addresses[0];
          const stored: StoredAddress = {
            region: defaultAddr.region,
            fullName: defaultAddr.fullName,
            phoneNumber: defaultAddr.phoneNumber,
            stateArea: defaultAddr.stateArea,
            postalCode: defaultAddr.postalCode,
            unitNo: defaultAddr.unitNo,
            streetAddress: defaultAddr.streetAddress,
            labelAs: defaultAddr.labelAs,
            setAsDefault: defaultAddr.setAsDefault,
          };
          setStoredAddressState(stored);
          setStoredAddress(stored);
          setHasAddress(true);
          return;
        }

        const cachedAddress = getStoredAddress();
        setStoredAddressState(cachedAddress);
        setHasAddress(Boolean(cachedAddress));
      } catch (error) {
        console.error("Failed to load addresses:", error);
        const cachedAddress = getStoredAddress();
        setStoredAddressState(cachedAddress);
        setHasAddress(Boolean(cachedAddress));
      } finally {
        setLoadingAddresses(false);
      }
    }
    void loadAddresses();
  }, [authResolved, isLoggedIn, user]);

  const handleCloseModal = () => {
    if (from === "cart") {
      router.replace("/cart");
    } else if (from === "buynow" && slug) {
      router.replace(`/product/${slug}`);
    } else {
      router.replace("/cart");
    }
  };

  const addressPayload = (values: NewAddressFormValues) => ({
    region: values.region,
    fullName: values.fullName,
    phoneNumber: values.phoneNumber,
    stateArea: values.stateArea,
    postalCode: values.postalCode,
    unitNo: values.unitNo,
    streetAddress: values.streetAddress,
    labelAs: values.labelAs,
    setAsDefault: values.setAsDefault,
  });

  const storedAddressToFormValues = (
    addr: StoredAddress
  ): NewAddressFormValues => ({
    region: addr.region as NewAddressFormValues["region"],
    fullName: addr.fullName,
    phoneNumber: addr.phoneNumber,
    stateArea: addr.stateArea,
    postalCode: addr.postalCode,
    unitNo: addr.unitNo,
    streetAddress: addr.streetAddress,
    labelAs: addr.labelAs as NewAddressFormValues["labelAs"],
    setAsDefault: addr.setAsDefault,
  });

  const handleSubmitAddress = async (values: NewAddressFormValues) => {
    if (!isLoggedIn) {
      router.replace(`/login?next=${encodeURIComponent(nextCheckoutPath)}`);
      return;
    }

    try {
      const addrData = {
        full_name: values.fullName,
        phone: values.phoneNumber,
        line1: values.streetAddress,
        line2: values.unitNo || undefined,
        city: values.stateArea.split(',')[0] || values.stateArea,
        state: values.stateArea,
        postal_code: values.postalCode || undefined,
        is_default: values.setAsDefault,
        region: values.region,
        label_as: values.labelAs,
      };
      const apiAddr = await createAddress(addrData);
      const stored: StoredAddress = {
        region: apiAddr.region,
        fullName: apiAddr.fullName,
        phoneNumber: apiAddr.phoneNumber,
        stateArea: apiAddr.stateArea,
        postalCode: apiAddr.postalCode,
        unitNo: apiAddr.unitNo,
        streetAddress: apiAddr.streetAddress,
        labelAs: apiAddr.labelAs,
        setAsDefault: apiAddr.setAsDefault,
      };
      setStoredAddressState(stored);
      setStoredAddress(stored);

      try {
        const addresses = await getAddresses();
        setApiAddresses(addresses);
      } catch (err) {
        console.error("Failed to reload addresses:", err);
      }

      // Close modals and update state
      setHasAddress(true);
      setShowEditAddressModal(false);
    } catch (error) {
      console.error("Failed to save address:", error);
      // Fallback to localStorage
      const addr = addressPayload(values);
      setStoredAddress(addr);
      setStoredAddressState(addr);
      setHasAddress(true);
      setShowEditAddressModal(false);
    }
  };

  const showModal = hasAddress === false;
  const showChangeModal = showEditAddressModal;
  const showContent = hasAddress === true;

  const merchandiseSubtotal = checkoutItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const shippingBreakdown = useMemo(
    () =>
      groups.reduce(
        (sum, group) => {
          const groupMerchandise = group.items.reduce(
            (groupSum, item) => groupSum + item.price * item.quantity,
            0
          );
          const groupCatalogShipping = group.items.reduce(
            (groupSum, item) => groupSum + (item.catalogShippingFee ?? 0),
            0
          );
          const percentageShipping = roundMoney(
            groupMerchandise * (checkoutShippingPercent / 100)
          );
          const groupShippingSubtotal = roundMoney(
            percentageShipping + groupCatalogShipping
          );

          return {
            shippingSubtotal: roundMoney(
              sum.shippingSubtotal + groupShippingSubtotal
            ),
            shippingDiscount: roundMoney(
              sum.shippingDiscount + groupShippingSubtotal
            ),
          };
        },
        { shippingSubtotal: 0, shippingDiscount: 0 }
      ),
    [checkoutShippingPercent, groups]
  );
  const shippingSubtotal = shippingBreakdown.shippingSubtotal;
  const shippingDiscount = shippingBreakdown.shippingDiscount;
  const totalPayment = roundMoney(
    merchandiseSubtotal + shippingSubtotal - shippingDiscount
  );
  const totalItems = checkoutItems.reduce((sum, i) => sum + i.quantity, 0);

  if (!authResolved || shouldRedirectToLogin) {
    return (
      <div className="min-h-screen bg-[rgb(245,245,245)]">
        <TopNavbar />
        <CheckoutHeader />
        <main className="mx-auto flex w-full max-w-[1200px] items-center justify-center px-4 py-20">
          <div className="w-full max-w-md rounded-[3px] bg-white px-6 py-10 text-center shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            <div className="text-base font-medium text-[#222]">
              {authResolved ? "Redirecting to login..." : "Checking your account..."}
            </div>
            <div className="mt-2 text-sm text-black/60">
              Checkout requires an authenticated account so we can load your address and order details safely.
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <CheckoutHeader />

      {(showModal || loadingAddresses) && (
        <NewAddressModal
          open={true}
          onClose={loadingAddresses ? () => {} : handleCloseModal}
          onSubmit={handleSubmitAddress}
          isFirstAddress={true}
          subtitle={loadingAddresses ? "Loading addresses..." : "To place order, please add a delivery address"}
        />
      )}

      {showChangeModal && (
        <NewAddressModal
          open={true}
          onClose={() => setShowEditAddressModal(false)}
          onSubmit={handleSubmitAddress}
          isFirstAddress={false}
          subtitle="Update your delivery address"
          initialValues={
            storedAddress ? storedAddressToFormValues(storedAddress) : undefined
          }
        />
      )}

      {showAddressBookModal && storedAddress && (
        <CheckoutAddressBookModal
          open={true}
          onClose={() => setShowAddressBookModal(false)}
          address={storedAddress}
          onAddNew={() => {
            setShowAddressBookModal(false);
            setShowEditAddressModal(true);
          }}
        />
      )}

      {showContent && (
        <main
          role="main"
          className="mx-auto mb-[70px] w-full max-w-[1200px] px-3 text-sm leading-tight text-black/80 sm:px-4 lg:px-0"
        >
          {/* Delivery address card */}
          {storedAddress && (
            <div className="mt-3 bg-white rounded-[3px] overflow-hidden shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <CheckoutDeliveryAddress
                address={storedAddress}
                onChange={() => setShowAddressBookModal(true)}
              />
            </div>
          )}

          {/* Products Ordered card */}
          <div className="mt-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            <div className="hidden h-[50px] items-center rounded-t bg-white px-[30px] pt-6 shadow-[0_1px_1px_rgba(0,0,0,0.09)] lg:flex">
              <div className="flex h-[30px] w-full items-center text-[14px] text-black/54">
                <div className="flex-[4_1_0%] text-left">
                  <h2 className="text-lg font-normal text-[#222] m-0 p-0">
                    Products Ordered
                  </h2>
                </div>
                <div className="flex-[2_1_0%] text-center" />
                <div className="flex-[2_1_0%] text-right text-center">
                  Unit Price
                </div>
                <div className="flex-[2_1_0%] text-right text-center">
                  Amount
                </div>
                <div className="flex-[2_1_0%] text-right">
                  Item Subtotal
                </div>
              </div>
            </div>
            <div className="rounded-t bg-white px-4 py-4 shadow-[0_1px_1px_rgba(0,0,0,0.09)] lg:hidden">
              <h2 className="m-0 text-lg font-normal text-[#222]">Products Ordered</h2>
            </div>

            {checkoutItems.length === 0 ? (
              <div className="bg-white rounded-b p-10 text-center text-black/60">
                No products are selected for checkout yet. Return to your cart and
                choose the items you want to place an order for.
              </div>
            ) : (
              <CheckoutProductsAndSummary
                groups={groups}
                merchandiseSubtotal={merchandiseSubtotal}
                shippingSubtotal={shippingSubtotal}
                shippingDiscount={shippingDiscount}
        totalPayment={totalPayment}
        totalItems={totalItems}
        address={storedAddress}
        shippingConfigLoading={shippingConfigLoading}
      />
            )}
          </div>
        </main>
      )}

      {showContent && <SiteFooter />}
    </div>
  );
}
