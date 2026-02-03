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
  hasStoredAddress,
  type StoredAddress,
} from "@/lib/address-storage";
import {
  CheckoutProductsAndSummary,
  type ShopGroup,
} from "@/components/checkout/checkout-products-summary";
import {
  CheckoutDeliveryAddress,
  CheckoutAddressBookModal,
} from "@/components/checkout";

export function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") ?? "cart";
  const slug = searchParams.get("slug") ?? "";

  const [hasAddress, setHasAddress] = useState<boolean | null>(null);
  const [storedAddress, setStoredAddressState] = useState<StoredAddress | null>(
    null
  );
  const [showAddressBookModal, setShowAddressBookModal] = useState(false);
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);
  const { items } = useCart();

  const groups: ShopGroup[] = useMemo(
    () =>
      Object.values(
        items.reduce<Record<string, ShopGroup>>((acc, item) => {
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
    [items]
  );

  useEffect(() => {
    const ok = hasStoredAddress();
    setHasAddress(ok);
    if (ok) {
      const addr = getStoredAddress();
      if (addr) setStoredAddressState(addr);
    }
  }, []);

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

  const handleSubmitAddress = (values: NewAddressFormValues) => {
    const addr = addressPayload(values);
    setStoredAddress(addr);
    setStoredAddressState(addr);
    setHasAddress(true);
    setShowEditAddressModal(false);
  };

  const showModal = hasAddress === false;
  const showChangeModal = showEditAddressModal;
  const showContent = hasAddress === true;

  const merchandiseSubtotal = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const shippingSubtotal = 2.5;
  const shippingDiscount = 2.5;
  const totalPayment = merchandiseSubtotal + shippingSubtotal - shippingDiscount;
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <CheckoutHeader />

      {showModal && (
        <NewAddressModal
          open={true}
          onClose={handleCloseModal}
          onSubmit={handleSubmitAddress}
          isFirstAddress={true}
          subtitle="To place order, please add a delivery address"
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
          className="w-[1200px] mx-auto mb-[70px] text-sm leading-tight text-black/80"
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
            <div className="bg-white rounded-t h-[50px] pt-6 px-[30px] flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.09)]">
              <div className="flex items-center w-full h-[30px] text-[14px] text-black/54">
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

            {items.length === 0 ? (
              <div className="bg-white rounded-b p-10 text-center text-black/60">
                Your cart is empty. Add items from the cart or product page to
                checkout.
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
              />
            )}
          </div>
        </main>
      )}

      {showContent && <SiteFooter />}
    </div>
  );
}
