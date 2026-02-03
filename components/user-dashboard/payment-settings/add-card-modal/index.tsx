"use client";

import { useEffect } from "react";
import { AddCardForm } from "./add-card-form";
import type { AddCardFormValues, CardPaymentType } from "./card-type";
import { CARD_TYPE_TITLES } from "./card-type";

interface AddCardModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: AddCardFormValues) => void;
  cardType: CardPaymentType;
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      className="align-baseline inline overflow-x-hidden overflow-y-hidden sm:fill-black/40 sm:hidden fill-red-500 w-6 h-6 cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.31 11.25l7.22-7.22-1.06-1.06-8.495 8.494a.748.748 0 000 1.072l8.495 8.494 1.06-1.06-7.22-7.22H22.5v-1.5H4.31z"
        className="fill-current"
      />
    </svg>
  );
}

/**
 * Add Card Modal
 * Full-screen modal for adding credit/debit cards or installment cards.
 * Adapts to mobile and desktop viewports.
 */
export function AddCardModal({
  open,
  onClose,
  onSubmit,
  cardType,
}: AddCardModalProps) {
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

  const title = CARD_TYPE_TITLES[cardType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="card-modal-title"
      onClick={onClose}
    >
      <div
        role="main"
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] sm:bg-white sm:max-w-xl sm:shadow-md sm:rounded-[3px] sm:max-h-[90vh] max-sm:h-full bg-white flex-col w-full text-sm flex text-black/87 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="sm:h-20 sm:relative sm:p-0 sm:border-b-0 z-[1] bg-white [border-bottom-style:solid] w-full flex-shrink-0 p-3 border-b border-b-black/9">
          <div className="sm:h-20 sm:relative sm:px-8 z-10 items-center flex">
            <div
              className="cursor-pointer select-none items-center flex"
              tabIndex={0}
              role="button"
              onClick={onClose}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClose();
                }
              }}
            >
              <BackIcon />
            </div>
            <div
              id="card-modal-title"
              className="sm:text-2xl sm:ml-0 flex-1 text-xl ml-4 text-black/87"
              role="heading"
              aria-level={1}
            >
              {title}
            </div>
          </div>
        </div>

        {/* Form - Scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 sm:px-8">
          <AddCardForm
            cardType={cardType}
            onSubmit={onSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export { AddCardForm } from "./add-card-form";
export { CARD_TYPE_TITLES, type AddCardFormValues, type CardPaymentType } from "./card-type";
