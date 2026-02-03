"use client";

import { useEffect } from "react";

interface CheckoutErrorModalProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

/**
 * Simple Shopee-style blocking modal for checkout errors
 * (e.g. "Please select payment option").
 */
export function CheckoutErrorModal({ open, message, onClose }: CheckoutErrorModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-error-title"
      aria-describedby="checkout-error-message"
      onClick={onClose}
    >
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] bg-white text-sm leading-tight text-black/80 w-[480px] max-w-[calc(100vw-2rem)] rounded-[2px] shadow-[0_1px_10px_rgba(0,0,0,0.12)] px-12 py-10 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="checkout-error-title"
          className="sr-only"
        >
          Checkout Error
        </h2>
        <p
          id="checkout-error-message"
          className="text-[15px] text-black/80 mb-8 text-center"
        >
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="min-w-[120px] h-10 px-8 rounded-[2px] border border-[#ee4d2d] bg-[#ee4d2d] text-white text-sm font-medium cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.03)] hover:opacity-95 active:opacity-100"
        >
          OK
        </button>
      </div>
    </div>
  );
}

