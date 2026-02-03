"use client";

import { useEffect } from "react";
import { EditAddressForm } from "./edit-address-form";
import type { EditAddressFormValues } from "./types";

interface EditAddressModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: EditAddressFormValues) => void;
  /** When true, "Set as Default" is disabled (first address). */
  isFirstAddress?: boolean;
  /** Initial values for editing */
  initialValues: EditAddressFormValues;
}

/**
 * Edit Address modal with Google Maps integration.
 * Shows a form with all address fields and an interactive map.
 * Users can click "View Map" to open a full-screen map selector.
 */
export function EditAddressModal({
  open,
  onClose,
  onSubmit,
  isFirstAddress = false,
  initialValues,
}: EditAddressModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-address-modal-title"
      onClick={onClose}
    >
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 bg-white w-[500px] max-w-[calc(100vw-2rem)] flex shadow p-6 rounded-sm max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-col w-full flex">
          <h2 className="items-center text-xl flex shrink-0" id="edit-address-modal-title">
            Edit Address
          </h2>
          <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
            <EditAddressForm
              onSubmit={onSubmit}
              onCancel={onClose}
              isFirstAddress={isFirstAddress}
              initialValues={initialValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { EditAddressForm } from "./edit-address-form";
export { AddressMapView } from "./address-map-view";
export { MapSelectorModal } from "./map-selector-modal";
export type { AddressComponents } from "./map-selector-modal";
export type { EditAddressFormValues, MapLocation } from "./types";
