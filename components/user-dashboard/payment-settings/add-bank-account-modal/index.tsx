"use client";

import { useEffect } from "react";
import { AddBankAccountForm, type AddBankAccountFormValues } from "./add-bank-account-form";

interface AddBankAccountModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: AddBankAccountFormValues) => void;
}

/**
 * Add Bank Account Modal
 * Full-screen modal overlay with a form to add a new bank account.
 */
export function AddBankAccountModal({
  open,
  onClose,
  onSubmit,
}: AddBankAccountModalProps) {
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
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 bg-white flex-col w-[500px] max-w-full flex overflow-x-hidden overflow-y-hidden shadow-sm pt-8 px-8 rounded-[3px] h-[34.375rem] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="items-center h-16 flex">
          <h2
            id="modal-title"
            className="text-neutral-800 capitalize items-center text-xl flex"
          >
            Add Bank Account
          </h2>
        </div>

        {/* Form Content */}
        <div className="flex-1 relative overflow-y-auto -mx-12 px-12">
          <AddBankAccountForm onSubmit={onSubmit} onCancel={onClose} />
        </div>

        {/* Footer Actions */}
        <div className="uppercase bg-[linear-gradient(#ffffffe6,#fff)] justify-end items-center h-20 flex absolute px-8 py-6 rounded-br-[3px] rounded-bl-[3px] bottom-0 inset-x-0">
          <button
            type="button"
            onClick={onClose}
            className="[appearance:auto] text-neutral-600 cursor-pointer uppercase w-36 text-sm font-normal leading-none transition-colors duration-100 ease-in-out mr-1.5 py-2.5 border-0 hover:bg-stone-50 active:bg-neutral-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="add-bank-form"
            className="[appearance:auto] w-36 text-ellipsis [-webkit-line-clamp:1] cursor-pointer capitalize flex-col justify-center items-center text-sm shadow-sm rounded-sm border-0 inline-flex min-w-16 max-w-48 h-9 px-4 text-white bg-red-500 outline-0 relative focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-red-500 active:bg-red-500 active:shadow-inner"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export { AddBankAccountForm, type AddBankAccountFormValues } from "./add-bank-account-form";
export { BankDropdown } from "./bank-dropdown";
export { BANK_NAMES } from "./bank-list";
