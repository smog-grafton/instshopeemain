"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TopNavbar } from "@/components/top-navbar";
import { SiteFooter } from "@/components/site-footer";
import { CheckoutHeader } from "@/components/checkout/checkout-header";
import { NewAddressModal } from "@/components/user-dashboard/address/new-address-modal";
import type { NewAddressFormValues } from "@/components/user-dashboard/address/new-address-modal";
import { useCart } from "@/components/cart";
import {
  clearStoredAddress,
  getStoredAddress,
  setStoredAddress,
  type StoredAddress,
  type StoredAddressKind,
} from "@/lib/address-storage";
import {
  createAddress,
  getAddresses,
  getCheckoutConfig,
  getShippingAddressTemplates,
  type ApiAddress,
} from "@/lib/api-client";
import { useAuth } from "@/components/auth/auth-context";
import {
  canAccessBuyerPortal,
  getSellerPortalBaseUrl,
} from "@/lib/account-routing";
import {
  CheckoutAddressBookModal,
  CheckoutDeliveryAddress,
} from "@/components/checkout";
import {
  CheckoutProductsAndSummary,
  type ShopGroup,
} from "@/components/checkout/checkout-products-summary";
import { getCartItemKey, readCheckoutSelection } from "@/lib/cart-selection";

const roundMoney = (value: number) => Math.round(value * 100) / 100;

function toStoredAddress(
  address: ApiAddress,
  kind: StoredAddressKind
): StoredAddress {
  return {
    id: address.id,
    kind,
    sourceAddressId: address.sourceAddressId ?? null,
    region: address.region ?? "general",
    fullName: address.fullName,
    phoneNumber: address.phoneNumber,
    stateArea: address.stateArea,
    postalCode: address.postalCode,
    unitNo: address.unitNo,
    streetAddress: address.streetAddress,
    labelAs: address.labelAs,
    setAsDefault: address.setAsDefault,
    city: address.city,
    state: address.state ?? null,
    countryId: address.countryId ?? null,
    isTemplate: kind === "template" || Boolean(address.isTemplate),
    summaryLabel: address.summaryLabel,
  };
}

function matchesStoredAddress(
  storedAddress: StoredAddress,
  address: ApiAddress,
  kind: StoredAddressKind
): boolean {
  const storedKind =
    storedAddress.kind === "template" || storedAddress.isTemplate
      ? "template"
      : "user";

  if (storedKind !== kind) {
    return false;
  }

  if (storedAddress.id) {
    return storedAddress.id === address.id;
  }

  return (
    storedAddress.fullName === address.fullName &&
    storedAddress.phoneNumber === address.phoneNumber &&
    storedAddress.streetAddress === address.streetAddress &&
    storedAddress.unitNo === address.unitNo &&
    storedAddress.postalCode === address.postalCode
  );
}

function resolveSelectedAddress(
  cachedAddress: StoredAddress | null,
  userAddresses: ApiAddress[],
  adminAddresses: ApiAddress[]
): StoredAddress | null {
  if (!cachedAddress) {
    return null;
  }

  const cachedKind =
    cachedAddress.kind === "template" || cachedAddress.isTemplate
      ? "template"
      : "user";
  const sourceAddresses =
    cachedKind === "template" ? adminAddresses : userAddresses;
  const matchedAddress = sourceAddresses.find((address) =>
    matchesStoredAddress(cachedAddress, address, cachedKind)
  );

  return matchedAddress ? toStoredAddress(matchedAddress, cachedKind) : null;
}

export function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.toString();
  const from = searchParams.get("from") ?? "cart";
  const slug = searchParams.get("slug") ?? "";
  const nextCheckoutPath = searchQuery ? `/checkout?${searchQuery}` : "/checkout";

  const [selectedAddress, setSelectedAddressState] = useState<StoredAddress | null>(
    null
  );
  const [userAddresses, setUserAddresses] = useState<ApiAddress[]>([]);
  const [adminAddresses, setAdminAddresses] = useState<ApiAddress[]>([]);
  const [loadingAddresses, setLoadingAddresses] = useState(true);
  const [showAddressBookModal, setShowAddressBookModal] = useState(false);
  const [showNewAddressModal, setShowNewAddressModal] = useState(false);
  const [checkoutSelectionKeys, setCheckoutSelectionKeys] = useState<string[] | null>(
    null
  );
  const [checkoutShippingPercent, setCheckoutShippingPercent] = useState(0);
  const [shippingConfigLoading, setShippingConfigLoading] = useState(true);
  const { items } = useCart();
  const { authResolved, isLoggedIn, user } = useAuth();
  const shouldRedirectToLogin = authResolved && !isLoggedIn;
  const shouldRedirectToSellerPortal =
    authResolved && isLoggedIn && !canAccessBuyerPortal(user);

  const applySelectedAddress = useCallback((address: StoredAddress | null) => {
    setSelectedAddressState(address);

    if (address) {
      setStoredAddress(address);
    } else {
      clearStoredAddress();
    }
  }, []);

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
        setUserAddresses([]);
        setAdminAddresses([]);
        applySelectedAddress(null);
        setShowAddressBookModal(false);
        setShowNewAddressModal(false);
        setLoadingAddresses(false);
        return;
      }

      try {
        setLoadingAddresses(true);
        const [addresses, templates] = await Promise.all([
          getAddresses(),
          getShippingAddressTemplates(),
        ]);

        if (cancelled) {
          return;
        }

        setUserAddresses(addresses);
        setAdminAddresses(templates);

        const cachedAddress = getStoredAddress();
        const restoredAddress = resolveSelectedAddress(
          cachedAddress,
          addresses,
          templates
        );
        const defaultAddress =
          addresses.find((address) => address.setAsDefault) ?? addresses[0] ?? null;
        const nextSelectedAddress =
          restoredAddress ??
          (defaultAddress ? toStoredAddress(defaultAddress, "user") : null);

        applySelectedAddress(nextSelectedAddress);

        if (nextSelectedAddress) {
          setShowAddressBookModal(false);
          setShowNewAddressModal(false);
        } else if (templates.length > 0 || addresses.length > 0) {
          setShowAddressBookModal(true);
          setShowNewAddressModal(false);
        } else {
          setShowAddressBookModal(false);
          setShowNewAddressModal(true);
        }
      } catch (error) {
        console.error("Failed to load addresses:", error);

        if (cancelled) {
          return;
        }

        const cachedAddress = getStoredAddress();
        setUserAddresses([]);
        setAdminAddresses([]);
        applySelectedAddress(cachedAddress);
        setShowAddressBookModal(false);
        setShowNewAddressModal(!cachedAddress);
      } finally {
        if (!cancelled) {
          setLoadingAddresses(false);
        }
      }
    }

    let cancelled = false;
    void loadAddresses();

    return () => {
      cancelled = true;
    };
  }, [applySelectedAddress, authResolved, isLoggedIn, user]);

  const handleCloseCheckout = () => {
    if (from === "cart") {
      router.replace("/cart");
    } else if (from === "buynow" && slug) {
      router.replace(`/product/${slug}`);
    } else {
      router.replace("/cart");
    }
  };

  const handleSubmitAddress = async (values: NewAddressFormValues) => {
    if (!isLoggedIn) {
      router.replace(`/login?next=${encodeURIComponent(nextCheckoutPath)}`);
      return;
    }

    try {
      const createdAddress = await createAddress({
        full_name: values.fullName,
        phone: values.phoneNumber,
        line1: values.streetAddress,
        line2: values.unitNo || undefined,
        city: values.stateArea.split(",")[0] || values.stateArea,
        state: values.stateArea,
        postal_code: values.postalCode || undefined,
        is_default: values.setAsDefault,
        region: values.region,
        label_as: values.labelAs,
      });

      const nextUserAddresses = createdAddress.setAsDefault
        ? userAddresses.map((address) => ({ ...address, setAsDefault: false }))
        : [...userAddresses];

      nextUserAddresses.unshift(createdAddress);
      setUserAddresses(nextUserAddresses);

      const nextSelectedAddress = toStoredAddress(createdAddress, "user");
      applySelectedAddress(nextSelectedAddress);
      setShowNewAddressModal(false);
      setShowAddressBookModal(false);
    } catch (error) {
      console.error("Failed to save address:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to save address. Please try again."
      );
      throw error;
    }
  };

  const handleSelectAddress = (
    address: ApiAddress,
    kind: StoredAddressKind
  ) => {
    applySelectedAddress(toStoredAddress(address, kind));
    setShowAddressBookModal(false);
  };

  const handleAddressUpdated = (updatedAddress: ApiAddress) => {
    const nextUserAddresses = userAddresses.map((address) => {
      if (address.id === updatedAddress.id) {
        return updatedAddress;
      }

      if (updatedAddress.setAsDefault && address.setAsDefault) {
        return {
          ...address,
          setAsDefault: false,
        };
      }

      return address;
    });

    setUserAddresses(nextUserAddresses);

    if (selectedAddress?.kind === "user" && selectedAddress.id) {
      const refreshedSelection = nextUserAddresses.find(
        (address) => address.id === selectedAddress.id
      );

      if (refreshedSelection) {
        applySelectedAddress(toStoredAddress(refreshedSelection, "user"));
      }
    }
  };

  const handleOpenNewAddressModal = () => {
    setShowAddressBookModal(false);
    setShowNewAddressModal(true);
  };

  const handleCloseNewAddressModal = () => {
    if (selectedAddress) {
      setShowNewAddressModal(false);
      return;
    }

    if (userAddresses.length > 0 || adminAddresses.length > 0) {
      setShowNewAddressModal(false);
      setShowAddressBookModal(true);
      return;
    }

    handleCloseCheckout();
  };

  const handleCloseAddressBookModal = () => {
    if (selectedAddress) {
      setShowAddressBookModal(false);
      return;
    }

    handleCloseCheckout();
  };

  const merchandiseSubtotal = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
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
  const totalItems = checkoutItems.reduce((sum, item) => sum + item.quantity, 0);

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

      {showNewAddressModal && (
        <NewAddressModal
          open={true}
          onClose={handleCloseNewAddressModal}
          onSubmit={handleSubmitAddress}
          isFirstAddress={userAddresses.length === 0}
          subtitle={
            selectedAddress
              ? "Add a new delivery address for this checkout."
              : "Choose a delivery address to place your order."
          }
        />
      )}

      {showAddressBookModal && (
        <CheckoutAddressBookModal
          open={true}
          onClose={handleCloseAddressBookModal}
          selectedAddress={selectedAddress}
          userAddresses={userAddresses}
          adminAddresses={adminAddresses}
          onSelectAddress={handleSelectAddress}
          onAddNew={handleOpenNewAddressModal}
          onAddressUpdated={handleAddressUpdated}
        />
      )}

      {loadingAddresses && (
        <main className="mx-auto flex w-full max-w-[1200px] items-center justify-center px-4 py-20">
          <div className="w-full max-w-md rounded-[3px] bg-white px-6 py-10 text-center shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            <div className="text-base font-medium text-[#222]">
              Loading your addresses...
            </div>
            <div className="mt-2 text-sm text-black/60">
              We&apos;re checking your saved addresses and the admin-managed shipping address list.
            </div>
          </div>
        </main>
      )}

      {!loadingAddresses && selectedAddress && (
        <main
          role="main"
          className="mx-auto mb-[70px] w-full max-w-[1200px] px-3 text-sm leading-tight text-black/80 sm:px-4 lg:px-0"
        >
          <div className="mt-3 overflow-hidden rounded-[3px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            <CheckoutDeliveryAddress
              address={selectedAddress}
              onChange={() => setShowAddressBookModal(true)}
            />
          </div>

          <div className="mt-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            <div className="hidden h-[50px] items-center rounded-t bg-white px-[30px] pt-6 shadow-[0_1px_1px_rgba(0,0,0,0.09)] lg:flex">
              <div className="flex h-[30px] w-full items-center text-[14px] text-black/54">
                <div className="flex-[4_1_0%] text-left">
                  <h2 className="m-0 p-0 text-lg font-normal text-[#222]">
                    Products Ordered
                  </h2>
                </div>
                <div className="flex-[2_1_0%] text-center" />
                <div className="flex-[2_1_0%] text-center text-right">
                  Unit Price
                </div>
                <div className="flex-[2_1_0%] text-center text-right">
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
              <div className="rounded-b bg-white p-10 text-center text-black/60">
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
                address={selectedAddress}
                shippingConfigLoading={shippingConfigLoading}
              />
            )}
          </div>
        </main>
      )}

      {!loadingAddresses && selectedAddress && <SiteFooter />}
    </div>
  );
}
