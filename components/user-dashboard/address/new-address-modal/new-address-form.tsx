"use client";

import { useState, useCallback, useEffect } from "react";
import { LabelAsButtons } from "./label-as-buttons";
import { DefaultAddressCheckbox } from "./default-address-checkbox";
import { AddressMapView } from "../edit-address-modal/address-map-view";
import { MapSelectorModal } from "../edit-address-modal/map-selector-modal";
import { DEFAULT_MAP_CENTER } from "../edit-address-modal/types";
import {
  SHOW_REGION_SELECTOR,
  type NewAddressFormValues,
  type AddressRegionCode,
  type AddressLabel,
} from "./types";

interface MapLocation {
  lat: number;
  lng: number;
}

interface NewAddressFormProps {
  onSubmit: (values: NewAddressFormValues) => void;
  onCancel: () => void;
  /** When true, "Set as Default" is disabled (first address). */
  isFirstAddress?: boolean;
  /** Optional initial values when editing an existing address. */
  initialValues?: NewAddressFormValues;
}

const inputBase =
  "text-neutral-800 outline-0 flex-1 w-full h-10 text-sm p-2.5 border-0 placeholder:text-zinc-400 read-only:text-zinc-400 disabled:text-neutral-200 disabled:[-webkit-text-fill-color:#e7e7e7]";
const inputWrapper =
  "items-center h-10 transition-all duration-300 ease-in-out flex relative shadow-inner rounded-sm border border-solid border-black/14 hover:shadow-inner";

export function NewAddressForm({
  onSubmit,
  onCancel,
  isFirstAddress = true,
  initialValues,
}: NewAddressFormProps) {
  const [values, setValues] = useState<NewAddressFormValues>(
    initialValues ?? {
      region: "general",
      fullName: "",
      phoneNumber: "",
      stateArea: "",
      postalCode: "",
      unitNo: "",
      streetAddress: "",
      labelAs: "home",
      setAsDefault: true,
    }
  );

  const [mapLocation, setMapLocation] = useState<MapLocation>(DEFAULT_MAP_CENTER);
  const [showMapSelector, setShowMapSelector] = useState(false);

  // Map should be interactive by default (always show map)
  const isMapInteractive = true;

  // When editing, keep form in sync with incoming initial values.
  useEffect(() => {
    if (initialValues) {
      setValues(initialValues);
    }
  }, [initialValues]);

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
    setMapLocation(location);
    setValues((v) => ({
      ...v,
      streetAddress: addressComponents.streetAddress || v.streetAddress,
      stateArea: addressComponents.stateArea || v.stateArea,
      postalCode: addressComponents.postalCode || v.postalCode,
    }));
  };

  const stateAreaPlaceholder = "State, Province or Area";

  // Build full address string for geocoding
  const fullAddressString = [
    values.streetAddress,
    values.unitNo,
    values.stateArea,
    values.postalCode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <form onSubmit={handleSubmit} className="h-full flex flex-col min-h-0">
      <div className="flex-col flex-1 flex relative pt-4 min-h-0 max-h-[480px]">
        <div className="[-ms-overflow-style:none] [scrollbar-width:none] flex-1 overflow-y-auto overflow-x-hidden pb-16 min-h-0">
          {/* Region selector: hidden in single-website mode */}
          {SHOW_REGION_SELECTOR && (
            <div className="justify-between items-center max-w-full flex mt-8">
              <div className="text-sm text-black/87">Select Region</div>
              <div className="max-w-full overflow-x-auto">
                <div className="flex">
                  {(["MY", "BN"] as AddressRegionCode[]).map((code) => (
                    <div key={code} className="ml-6 items-center flex grow">
                      <div className="cursor-pointer flex-none inline-block relative pr-2">
                        <input
                          type="radio"
                          name="locale-selector"
                          value={code}
                          checked={values.region === code}
                          onChange={() =>
                            setValues((v) => ({ ...v, region: code }))
                          }
                          className="leading-4 [-webkit-tap-highlight-color:#0000] appearance-none cursor-pointer bg-white outline-0 w-5 h-5 block rounded-full border border-solid border-stone-300 text-red-500"
                        />
                      </div>
                      <label className="[-webkit-tap-highlight-color:#0000] cursor-pointer flex-1 overflow-x-hidden overflow-y-hidden">
                        {code === "MY" ? "Malaysia" : "Brunei"}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Full Name & Phone Number */}
          <div className="w-full flex">
            <div className="relative mt-1.5 mb-4 flex-1">
              <div className={`${inputWrapper}`}>
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
                  <input
                    type="text"
                    placeholder={stateAreaPlaceholder}
                    autoComplete="address-level1"
                    value={values.stateArea}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, stateArea: e.target.value }))
                    }
                    className="text-neutral-800 outline-0 flex-1 min-h-10 p-2.5 border-0 placeholder:text-zinc-400"
                  />
                  <div className="items-center flex pr-2.5">
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
                <input
                  type="text"
                  placeholder="Postal Code"
                  autoComplete="postal-code"
                  maxLength={10}
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

          <LabelAsButtons
            value={values.labelAs}
            onChange={(label: AddressLabel) =>
              setValues((v) => ({ ...v, labelAs: label }))
            }
          />

          <DefaultAddressCheckbox
            checked={values.setAsDefault}
            disabled={isFirstAddress}
            onChange={(checked) =>
              setValues((v) => ({ ...v, setAsDefault: checked }))
            }
          />
        </div>

        {/* Footer: Cancel / Submit — no border radius */}
        <div className="bg-[linear-gradient(#ffffffb3,#fff)] justify-end items-end h-16 flex absolute bottom-0 inset-x-0">
          <button
            type="button"
            onClick={onCancel}
            className="[appearance:auto] cursor-pointer outline-0 justify-center items-center min-w-36 text-sm flex p-2.5 rounded-[0] border-0 text-neutral-600 mr-1.5 hover:opacity-90 hover:bg-stone-50 active:bg-neutral-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="[appearance:auto] cursor-pointer outline-0 justify-center items-center min-w-36 text-sm flex p-2.5 rounded-[0] border-0 text-white bg-red-500 hover:opacity-90 active:bg-red-500"
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
      currentAddress={fullAddressString}
    />
  </>
  );
}
