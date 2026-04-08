"use client";

import type { StoredAddress } from "@/lib/address-storage";

interface CheckoutDeliveryAddressProps {
  address: StoredAddress;
  onChange: () => void;
}

/** Format second line: unit no, street, state/area, postal code */
function formatAddressLine(address: StoredAddress): string {
  const parts: string[] = [];
  if (address.unitNo?.trim()) parts.push(address.unitNo.trim());
  if (address.streetAddress?.trim()) parts.push(address.streetAddress.trim());
  if (address.stateArea?.trim()) parts.push(address.stateArea.trim());
  if (address.postalCode?.trim()) parts.push(address.postalCode.trim());
  return parts.join(", ");
}

/** Format phone for display e.g. (+60) 10 342 4534 */
function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length >= 10 && digits.startsWith("60")) {
    return `(+${digits.slice(0, 2)}) ${digits.slice(2, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  if (digits.length >= 9) {
    return `(+60) ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
  }
  return phone;
}

export function CheckoutDeliveryAddress({ address, onChange }: CheckoutDeliveryAddressProps) {
  const addressLine = formatAddressLine(address);
  const phoneDisplay = formatPhone(address.phoneNumber);

  return (
    <>
      {/* Envelope strip */}
      <div
        className="w-full h-[3px]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgb(111, 166, 214) 0px, rgb(111, 166, 214) 33px, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 41px, rgb(241, 141, 155) 0px, rgb(241, 141, 155) 74px, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 82px)`,
          backgroundPositionX: "-30px",
          backgroundSize: "116px 3px",
        }}
      />
      <div className="px-4 pb-5 pt-6 sm:px-6 lg:px-[30px] lg:pb-6 lg:pt-7">
        <div className="flex items-center justify-between">
          <div
            className="flex flex-1 items-center mb-5 text-[18px] capitalize text-[#ee4d2d]"
          >
            <div className="mr-[9px] flex">
              <svg
                height={16}
                viewBox="0 0 12 16"
                width={12}
                className="block relative overflow-hidden fill-[#ee4d2d] text-[#ee4d2d]"
                aria-hidden
              >
                <path
                  d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-[18px] font-normal leading-[21.6px] text-[#ee4d2d] m-0 p-0">
              delivery address
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="min-w-0">
            <div className="flex flex-col gap-2 break-words text-[16px] lg:flex-row lg:items-center">
              <div className="text-[#222] font-bold">
                {address.fullName} ({phoneDisplay})
              </div>
              <div className="break-words lg:ml-5">
                {addressLine}
              </div>
              {address.setAsDefault && (
                <div
                  className="w-fit shrink-0 rounded-[1px] border border-[#ee4d2d] px-1.5 py-0.5 text-[10px] capitalize text-[#ee4d2d] lg:ml-[15px]"
                >
                  default
                </div>
              )}
              {(address.kind === "template" || address.isTemplate) && (
                <div className="w-fit shrink-0 rounded-[1px] border border-black/15 px-1.5 py-0.5 text-[10px] text-black/60 lg:ml-[15px]">
                  admin address
                </div>
              )}
            </div>
          </div>
          <div className="lg:ml-10">
            <button
              type="button"
              className="appearance-none border-0 bg-transparent p-0 text-[14px] font-medium leading-[21px] text-[#0055aa] capitalize cursor-pointer"
              onClick={onChange}
            >
              change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
