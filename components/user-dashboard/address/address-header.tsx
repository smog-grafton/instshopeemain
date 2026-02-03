"use client";

import { useState } from "react";
import { NewAddressModal, type NewAddressFormValues } from "./new-address-modal";

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

export function AddressHeader() {
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleAddAddress = () => setShowAddressModal(true);

  const handleAddressSubmit = (values: NewAddressFormValues) => {
    console.log("Address submitted:", values);
    // TODO: API call to save address
    setShowAddressModal(false);
  };

  return (
    <div className="border-b border-b-[rgb(239,239,239)] box-border h-20 px-5 py-[22px] flex items-center">
      <div className="flex-1">
        <h1 className="text-[rgb(51,51,51)] text-lg font-medium leading-6">
          My Addresses
        </h1>
        <div className="text-[rgb(85,85,85)] text-sm leading-[17px] mt-[3px]" />
      </div>
      <div>
        <div className="ml-2.5">
          <div className="flex">
            <button
              type="button"
              onClick={handleAddAddress}
              className="bg-[rgb(238,77,45)] outline-none relative overflow-visible text-white select-none rounded-[2px] transition-opacity duration-200 shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px] cursor-pointer border-0 justify-center items-center text-sm font-light leading-[14px] flex h-10 px-5 hover:opacity-90"
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
