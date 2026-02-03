"use client";

import { useState } from "react";
import type { StoredAddress } from "@/lib/address-storage";
import { EditAddressModal, type EditAddressFormValues } from "@/components/user-dashboard/address/edit-address-modal";

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

  if (!open) return null;

  const phoneDisplay = formatPhoneInline(address.phoneNumber);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleEditSubmit = (values: EditAddressFormValues) => {
    console.log("Edited address:", values);
    onEditSubmit?.(values);
    setShowEditModal(false);
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

          <div className="border border-black/10 rounded-[3px] p-4 flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <div className="mt-0.5">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#ee4d2d]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ee4d2d]" />
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center text-[14px] font-medium text-black/87">
                  <span className="truncate">{address.fullName}</span>
                  <span className="mx-2 text-black/20">|</span>
                  <span className="truncate text-black/80">
                    {phoneDisplay}
                  </span>
                </div>
                <div className="mt-1 text-[13px] text-black/80">
                  {address.streetAddress}
                  {address.unitNo ? `, ${address.unitNo}` : ""}
                </div>
                <div className="text-[13px] text-black/80">
                  {address.stateArea}
                  {address.postalCode ? `, ${address.postalCode}` : ""}
                </div>
                {address.setAsDefault && (
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

