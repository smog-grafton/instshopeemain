"use client";

import { useState } from "react";
import { NewAddressModal, type NewAddressFormValues } from "./new-address-modal";
import { createAddress } from "@/lib/api-client";

function PlusIcon() {
  return (
    <svg
      enableBackground="new 0 0 10 10"
      viewBox="0 0 10 10"
      x="0"
      y="0"
      className="block h-[14px] w-[1em] fill-white relative overflow-hidden"
    >
      <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
    </svg>
  );
}

interface AddressHeaderProps {
  onAddressAdded?: () => void;
}

export function AddressHeader({ onAddressAdded }: AddressHeaderProps = {}) {
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleAddAddress = () => setShowAddressModal(true);

  const handleAddressSubmit = async (values: NewAddressFormValues) => {
    try {
      await createAddress({
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
      });
      setShowAddressModal(false);
      // Notify parent to refresh
      if (onAddressAdded) {
        onAddressAdded();
      }
    } catch (error) {
      console.error("Failed to save address:", error);
      alert("Failed to save address. Please try again.");
    }
  };

  return (
    <div className="box-border flex flex-col items-start gap-4 border-b border-b-[rgb(239,239,239)] px-4 py-4 sm:px-5 md:h-20 md:flex-row md:items-center md:py-[22px]">
      <div className="flex-1">
        <h1 className="text-[rgb(51,51,51)] text-lg font-medium leading-6">
          My Addresses
        </h1>
        <div className="text-[rgb(85,85,85)] text-sm leading-[17px] mt-[3px]" />
      </div>
      <div className="w-full md:w-auto">
        <div className="md:ml-2.5">
          <div className="flex">
            <button
              type="button"
              onClick={handleAddAddress}
              className="relative flex h-10 w-full items-center justify-center overflow-visible rounded-[2px] border-0 bg-[rgb(238,77,45)] px-5 text-sm font-light leading-[14px] text-white shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px] outline-none transition-opacity duration-200 hover:opacity-90 md:w-auto"
            >
              <div className="w-full justify-between items-center flex">
                <div className="mr-2.5 items-center flex">
                  <PlusIcon />
                </div>
                <div>Add New Address</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <NewAddressModal
        open={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onSubmit={handleAddressSubmit}
        isFirstAddress
      />
    </div>
  );
}
