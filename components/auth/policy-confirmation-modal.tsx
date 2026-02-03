"use client";

import { useEffect } from "react";

export interface PolicyConfirmationModalProps {
  open: boolean;
  title?: string;
  message?: string;
  onCancel: () => void;
  onAgree: () => void;
}

const DEFAULT_TITLE = "Review Shopee Account Policies";
const DEFAULT_MESSAGE =
  "Our services are only available in Malaysia. By proceeding, you confirm that you are in Malaysia and using the Shopee app there.";

/**
 * Reusable modal for policy confirmation (e.g. signup flow).
 * Matches design: white card, title, body text, Cancel (outline) + Agree (orange) buttons.
 */
export function PolicyConfirmationModal({
  open,
  title = DEFAULT_TITLE,
  message = DEFAULT_MESSAGE,
  onCancel,
  onAgree,
}: PolicyConfirmationModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      aria-describedby="policy-modal-message"
      onClick={onCancel}
    >
      <div
        className="bg-white w-[400px] max-w-[calc(100vw-2rem)] rounded-[4px] shadow-[0_3px_10px_rgba(0,0,0,0.14)] px-8 py-6 flex flex-col gap-4 text-sm text-black/87"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="policy-modal-title"
          className="text-base font-semibold text-black/87 text-center"
        >
          {title}
        </h2>
        <p
          id="policy-modal-message"
          className="text-sm text-black/80 text-center leading-relaxed"
        >
          {message}
        </p>
        <div className="flex gap-3 justify-end mt-2">
          <button
            type="button"
            onClick={onCancel}
            className="min-w-[80px] h-10 px-4 rounded-[2px] border border-black/26 bg-white text-black/87 text-sm font-medium cursor-pointer hover:bg-black/5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onAgree}
            className="min-w-[80px] h-10 px-4 rounded-[2px] border-0 bg-[#ee4d2d] text-white text-sm font-medium cursor-pointer shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px] hover:opacity-95"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
}
