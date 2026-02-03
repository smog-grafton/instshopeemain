"use client";

import { useEffect } from "react";
import { NewAddressForm } from "./new-address-form";
import type { NewAddressFormValues } from "./types";

interface NewAddressModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: NewAddressFormValues) => void;
  /** When true, "Set as Default" is disabled (first address). */
  isFirstAddress?: boolean;
  /** Optional subtitle, e.g. "To place order, please add a delivery address" for checkout. */
  subtitle?: string;
  /** Optional initial values when editing an existing address. */
  initialValues?: NewAddressFormValues;
}

/**
 * New Address modal.
 * Single-website mode: "Select Region" (Malaysia/Brunei) is hidden; address is general.
 * Buttons use no border radius per design.
 */
export function NewAddressModal({
  open,
  onClose,
  onSubmit,
  isFirstAddress = true,
  subtitle,
  initialValues,
}: NewAddressModalProps) {
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
      aria-labelledby="new-address-modal-title"
      onClick={onClose}
    >
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 bg-white flex-col w-[500px] max-w-[calc(100vw-2rem)] flex shadow p-8 rounded-[3px] max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="items-center text-xl flex shrink-0" id="new-address-modal-title">
          New Address
        </h2>
        {subtitle && (
          <p className="text-sm text-black/70 mt-1 shrink-0" id="new-address-modal-desc">
            {subtitle}
          </p>
        )}
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
          <NewAddressForm
            onSubmit={onSubmit}
            onCancel={onClose}
            isFirstAddress={isFirstAddress}
            initialValues={initialValues}
          />
        </div>
      </div>
    </div>
  );
}

export { NewAddressForm } from "./new-address-form";
export type { NewAddressFormValues, AddressRegionCode, AddressLabel } from "./types";
export { SHOW_REGION_SELECTOR } from "./types";
