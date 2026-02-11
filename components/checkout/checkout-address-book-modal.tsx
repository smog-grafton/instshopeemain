"use client";

import { useState, useEffect } from "react";
import type { StoredAddress } from "@/lib/address-storage";
import { EditAddressModal, type EditAddressFormValues } from "@/components/user-dashboard/address/edit-address-modal";
import { getAddresses, updateAddress, type ApiAddress } from "@/lib/api-client";
import { useAuth } from "@/components/auth/auth-context";

interface CheckoutAddressBookModalProps {
  open: boolean;
  onClose: () => void;
  address: StoredAddress;
  /** Called when user submits edited address. */
  onEditSubmit?: (values: EditAddressFormValues) => void;
  /** Called when user clicks Add New Address. */
  onAddNew: () => void;
}

function formatPhoneInline(phone: string): string {
  return phone;
}

export function CheckoutAddressBookModal({
  open,
  onClose,
  address,
  onEditSubmit,
  onAddNew,
}: CheckoutAddressBookModalProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [apiAddresses, setApiAddresses] = useState<ApiAddress[]>([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (open && isLoggedIn) {
      async function loadAddresses() {
        try {
          const addresses = await getAddresses();
          setApiAddresses(addresses);
        } catch (error) {
          console.error("Failed to load addresses:", error);
        } finally {
          setLoading(false);
        }
      }
      loadAddresses();
    } else {
      setLoading(false);
    }
  }, [open, isLoggedIn]);

  if (!open) return null;

  const phoneDisplay = formatPhoneInline(address.phoneNumber);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleEditSubmit = async (values: EditAddressFormValues) => {
    try {
      if (isLoggedIn && address) {
        // Find the address ID from API addresses
        const apiAddr = apiAddresses.find(a => 
          a.fullName === address.fullName && 
          a.phoneNumber === address.phoneNumber
        );
        if (apiAddr) {
          await updateAddress(apiAddr.id, {
            full_name: values.fullName,
            phone: values.phoneNumber,
            line1: values.streetAddress,
            line2: values.unitNo || undefined,
            city: values.stateArea.split(',')[0] || values.stateArea,
            state: values.stateArea,
            postal_code: values.postalCode || undefined,
            is_default: values.setAsDefault,
          });
          // Reload addresses
          try {
            const addresses = await getAddresses();
            setApiAddresses(addresses);
          } catch (err) {
            console.error("Failed to reload addresses:", err);
          }
        }
      }
      onEditSubmit?.(values);
      setShowEditModal(false);
    } catch (error) {
      console.error("Failed to update address:", error);
      // Don't close modal on error
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-address-book-title"
      onClick={onClose}
    >
      <div
        className="bg-white w-[480px] max-w-[calc(100vw-2rem)] rounded-[3px] shadow max-h-[90vh] min-h-[420px] overflow-hidden flex flex-col text-sm text-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
          <h2
            id="checkout-address-book-title"
            className="text-base font-medium text-black/87"
          >
            My Address
          </h2>
          <button
            type="button"
            className="border-0 bg-transparent text-black/60 text-xl leading-none cursor-pointer"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="mb-3 text-sm text-black/80">Malaysia</div>

          {loading ? (
            <div className="py-4 text-center text-gray-500 text-sm">Loading addresses...</div>
          ) : (
            <>
              {(isLoggedIn ? apiAddresses : [address]).map((addr, index) => {
                const addrId = isLoggedIn ? (addr as ApiAddress).id : `stored-${index}-${(addr as StoredAddress).fullName}`;
                return (
                <div key={addrId} className="border border-black/10 rounded-[3px] p-4 flex flex-col gap-2 mb-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#ee4d2d]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ee4d2d]" />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center text-[14px] font-medium text-black/87">
                        <span className="truncate">{addr.fullName}</span>
                        <span className="mx-2 text-black/20">|</span>
                        <span className="truncate text-black/80">
                          {addr.phoneNumber}
                        </span>
                      </div>
                      <div className="mt-1 text-[13px] text-black/80">
                        {addr.streetAddress}
                        {addr.unitNo ? `, ${addr.unitNo}` : ""}
                      </div>
                      <div className="text-[13px] text-black/80">
                        {addr.stateArea}
                        {addr.postalCode ? `, ${addr.postalCode}` : ""}
                      </div>
                      {addr.setAsDefault && (
                        <div className="mt-2 inline-flex rounded-[1px] border border-[#ee4d2d] px-1.5 py-0.5 text-[11px] text-[#ee4d2d]">
                          Default
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className="ml-2 border-0 bg-transparent p-0 text-[13px] text-[#0055aa] cursor-pointer"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                );
              })}
            </>
          )}
        </div>

        <div className="border-t border-black/10 px-6 py-3 flex justify-end">
          <button
            type="button"
            className="flex items-center justify-center bg-[#ee4d2d] text-white text-sm font-medium h-10 px-5 rounded-[2px] border-0 cursor-pointer shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px]"
            onClick={onAddNew}
          >
            <span className="mr-2 inline-flex items-center justify-center rounded-[2px]">
              <svg
                viewBox="0 0 10 10"
                className="h-[14px] w-[14px] fill-white"
                aria-hidden
              >
                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
              </svg>
            </span>
            Add New Address
          </button>
        </div>
      </div>

      {/* Edit Address Modal */}
      <EditAddressModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleEditSubmit}
        isFirstAddress={address.setAsDefault}
        initialValues={{
          region: (address.region || "general") as "MY" | "BN" | "general",
          fullName: address.fullName,
          phoneNumber: address.phoneNumber,
          stateArea: address.stateArea,
          postalCode: address.postalCode,
          unitNo: address.unitNo,
          streetAddress: address.streetAddress,
          labelAs: (address.labelAs || "home") as "home" | "work",
          setAsDefault: address.setAsDefault,
          location: {
            lat: 3.07563,
            lng: 101.48119,
          },
        }}
      />
    </div>
  );
}

