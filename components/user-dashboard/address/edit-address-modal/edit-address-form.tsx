"use client";

import { useState, useCallback, useEffect } from "react";
import { AddressMapView } from "./address-map-view";
import { MapSelectorModal } from "./map-selector-modal";
import { LabelAsButtons } from "../new-address-modal/label-as-buttons";
import { DefaultAddressCheckbox } from "../new-address-modal/default-address-checkbox";
import type { EditAddressFormValues, MapLocation } from "./types";
import { DEFAULT_MAP_CENTER } from "./types";
import type { AddressLabel } from "../new-address-modal/types";

interface EditAddressFormProps {
  onSubmit: (values: EditAddressFormValues) => void;
  onCancel: () => void;
  /** When true, "Set as Default" is disabled (first address). */
  isFirstAddress?: boolean;
  /** Initial values for editing */
  initialValues: EditAddressFormValues;
}

const inputBase =
  "text-neutral-800 outline-0 flex-1 w-full h-10 text-sm p-2.5 border-0 placeholder:text-zinc-400 read-only:text-zinc-400 disabled:text-neutral-200 disabled:[-webkit-text-fill-color:#e7e7e7]";
const inputWrapper =
  "items-center h-10 transition-all duration-300 ease-in-out flex relative shadow-inner rounded-sm border border-solid border-black/14 hover:shadow-inner";
const floatingLabel =
  "bg-white text-xs absolute px-[3px] left-2.5 -top-1.5 text-black/40";

export function EditAddressForm({
  onSubmit,
  onCancel,
  isFirstAddress = false,
  initialValues,
}: EditAddressFormProps) {
  const [values, setValues] = useState<EditAddressFormValues>(initialValues);
  const [showMapSelector, setShowMapSelector] = useState(false);

  // Map should be interactive by default (always show map)
  const isMapInteractive = true;

  // Use provided location or default
  const mapLocation: MapLocation = values.location || DEFAULT_MAP_CENTER;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await onSubmit(values);
        // Modal will be closed by parent component
      } catch (error) {
        console.error("Failed to submit address:", error);
        // Don't close modal on error
      }
    },
    [values, onSubmit]
  );

  const handleMapConfirm = (
    location: MapLocation,
    addressComponents: {
      streetAddress: string;
      stateArea: string;
      postalCode: string;
      formattedAddress: string;
    }
  ) => {
    setValues((v) => ({
      ...v,
      location,
      streetAddress: addressComponents.streetAddress || v.streetAddress,
      stateArea: addressComponents.stateArea || v.stateArea,
      postalCode: addressComponents.postalCode || v.postalCode,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="h-full flex flex-col min-h-0">
        <div className="flex-col flex-1 flex relative pt-4 min-h-0 max-h-[480px]">
          <div className="[-ms-overflow-style:none] [scrollbar-width:none] flex-1 overflow-y-auto overflow-x-hidden pb-16 min-h-0">
            {/* Full Name & Phone Number */}
            <div className="w-full flex">
              <div className="relative mt-1.5 mb-4 flex-1">
                <div className={inputWrapper}>
                  {values.fullName && (
                    <div className={floatingLabel}>Full Name</div>
                  )}
                  <input
                    type="text"
                    placeholder="Full Name"
                    autoComplete="name"
                    maxLength={64}
                    value={values.fullName}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, fullName: e.target.value }))
                    }
                    className={inputBase}
                  />
                </div>
              </div>
              <div className="w-4" />
              <div className="relative mt-1.5 mb-4 flex-1">
                <div className={inputWrapper}>
                  {values.phoneNumber && (
                    <div className={floatingLabel}>Phone Number</div>
                  )}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={values.phoneNumber}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, phoneNumber: e.target.value }))
                    }
                    className={inputBase}
                  />
                </div>
              </div>
            </div>

            {/* State / Province / Area */}
            <div className="w-full flex">
              <div className="flex-1 relative mb-4">
                <div className="relative mt-1.5">
                  <div className="items-center min-h-10 transition-all duration-300 ease-in-out flex relative shadow-inner rounded-sm border border-solid border-black/14 hover:shadow-inner">
                    {values.stateArea && (
                      <div className={floatingLabel}>State, Area</div>
                    )}
                    <input
                      type="text"
                      placeholder="State, Area"
                      autoComplete="address-level1"
                      value={values.stateArea}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, stateArea: e.target.value }))
                      }
                      className="text-neutral-800 outline-0 flex-1 min-h-10 p-2.5 border-0 placeholder:text-zinc-400"
                    />
                    <div className="items-center flex pr-2.5">
                      <div className="w-4 h-4 mr-[3px]" />
                      <div className="[border-top-style:solid] [border-left-style:solid] [border-right-style:solid] w-0 h-0 border-t-4 border-x-4 border-x-transparent border-t-black/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Postal Code */}
            <div className="w-full flex">
              <div className="relative mt-1.5 mb-4 flex-1">
                <div className={inputWrapper}>
                  {values.postalCode && (
                    <div className={floatingLabel}>Postal Code</div>
                  )}
                  <input
                    type="text"
                    placeholder="Postal Code"
                    autoComplete="postal-code"
                    maxLength={5}
                    value={values.postalCode}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, postalCode: e.target.value }))
                    }
                    className={inputBase}
                  />
                </div>
              </div>
            </div>

            {/* Unit No (Optional) */}
            <div className="w-full flex">
              <div className="relative mt-1.5 mb-4 flex-1">
                <div className={inputWrapper}>
                  {values.unitNo && (
                    <div className={floatingLabel}>Unit No (Optional)</div>
                  )}
                  <input
                    type="text"
                    placeholder="Unit No (Optional)"
                    maxLength={15}
                    value={values.unitNo}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, unitNo: e.target.value }))
                    }
                    className={inputBase}
                  />
                </div>
              </div>
            </div>

            {/* House Number, Building, Street Name */}
            <div className="w-full flex">
              <div className="w-full mb-4">
                <div className="relative mt-1.5 flex-1">
                  <div className="items-center h-fit transition-all duration-300 ease-in-out flex shadow-inner rounded-sm border border-solid border-black/14 hover:shadow-inner">
                    {values.streetAddress && (
                      <div className={floatingLabel}>
                        House Number, Building, Street Name
                      </div>
                    )}
                    <textarea
                      className="text-neutral-800 resize-none outline-0 flex-1 w-full text-sm p-2.5 border-0 placeholder:text-zinc-400 min-h-[4.5rem]"
                      rows={2}
                      placeholder="House Number, Building, Street Name"
                      autoComplete="street-address"
                      maxLength={128}
                      value={values.streetAddress}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, streetAddress: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Map View */}
            <AddressMapView
              location={mapLocation}
              onViewMapClick={() => setShowMapSelector(true)}
              isInteractive={isMapInteractive}
            />

            {/* Label As */}
            <LabelAsButtons
              value={values.labelAs}
              onChange={(label: AddressLabel) =>
                setValues((v) => ({ ...v, labelAs: label }))
              }
            />

            {/* Set as Default */}
            <DefaultAddressCheckbox
              checked={values.setAsDefault}
              disabled={isFirstAddress}
              onChange={(checked) =>
                setValues((v) => ({ ...v, setAsDefault: checked }))
              }
            />
          </div>

          {/* Footer: Cancel / Submit */}
          <div className="bg-[linear-gradient(#ffffffb3,#fff)] justify-end items-end h-16 flex absolute bottom-0 inset-x-0">
            <button
              type="button"
              onClick={onCancel}
              className="[appearance:auto] cursor-pointer outline-0 justify-center items-center min-w-36 text-sm flex p-2.5 rounded-sm border-0 text-neutral-600 mr-1.5 hover:opacity-90 hover:bg-stone-50 active:bg-neutral-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="[appearance:auto] cursor-pointer outline-0 justify-center items-center min-w-36 text-sm flex p-2.5 rounded-sm border-0 text-white bg-red-500 hover:opacity-90 active:bg-red-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* Map Selector Modal */}
      <MapSelectorModal
        open={showMapSelector}
        onClose={() => setShowMapSelector(false)}
        initialLocation={mapLocation}
        onConfirm={handleMapConfirm}
        currentAddress={values.streetAddress}
      />
    </>
  );
}
