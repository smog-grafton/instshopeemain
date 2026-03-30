"use client";

import { useState } from "react";
import Link from "next/link";
import type { PaymentSectionConfig } from "./data";
import { AddBankAccountModal, type AddBankAccountFormValues } from "./add-bank-account-modal";
import { AddCardModal, type AddCardFormValues, type CardPaymentType } from "./add-card-modal";
import { createPaymentMethod, deletePaymentMethod, type ApiUserPaymentMethod } from "@/lib/api-client";

interface PaymentSectionProps {
  section: PaymentSectionConfig;
  paymentMethods?: ApiUserPaymentMethod[];
  onRefresh?: () => void;
}

function PlusIcon() {
  return (
    <span className="inline-block w-4 h-4 leading-4 text-center text-white font-normal mr-1.5" aria-hidden>
      +
    </span>
  );
}

export function PaymentSection({ section, paymentMethods = [], onRefresh }: PaymentSectionProps) {
  const [showBankModal, setShowBankModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  const handleBankSubmit = async (values: AddBankAccountFormValues) => {
    try {
      await createPaymentMethod({
        type: "bank_account",
        bank_name: values.bankName,
        bank_account_number: values.accountNo,
        bank_account_holder: values.fullName,
        is_default: values.setAsDefault || false,
      });
      setShowBankModal(false);
      if (onRefresh) onRefresh();
    } catch (error) {
      console.error("Failed to save bank account:", error);
      alert("Failed to save bank account. Please try again.");
    }
  };

  const handleCardSubmit = async (values: AddCardFormValues) => {
    try {
      // Parse expiryDate (format: MM/YY)
      const [expiryMonth, expiryYear] = values.expiryDate.split("/");
      const year = expiryYear ? `20${expiryYear}` : undefined;
      
      await createPaymentMethod({
        type: "card",
        card_type: "credit", // Default to credit, can be enhanced later
        card_number_last4: values.cardNumber.slice(-4),
        card_holder_name: values.nameOnCard,
        card_expiry_month: expiryMonth ? parseInt(expiryMonth, 10) : undefined,
        card_expiry_year: year ? parseInt(year, 10) : undefined,
        is_default: false, // No setAsDefault in form, default to false
      });
      setShowCardModal(false);
      if (onRefresh) onRefresh();
    } catch (error) {
      console.error("Failed to save card:", error);
      alert("Failed to save card. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this payment method?")) return;
    try {
      await deletePaymentMethod(id);
      if (onRefresh) onRefresh();
    } catch (error) {
      console.error("Failed to delete payment method:", error);
      alert("Failed to delete payment method. Please try again.");
    }
  };

  const isBankSection = section.id === "bank";
  const isCardSection = section.id === "card" || section.id === "installment";
  const cardType: CardPaymentType = section.id === "installment" ? "installment" : "card";

  return (
    <section>
      {/* Title row: title (left) + Add button (right) */}
      <div className="flex flex-col items-start justify-between gap-4 px-4 pb-4 pt-6 sm:px-6 md:flex-row md:items-center">
        <h2 className="text-xl font-medium text-black/87">{section.title}</h2>
        {isBankSection || isCardSection ? (
          <button
            type="button"
            onClick={() => {
              if (isBankSection) setShowBankModal(true);
              if (isCardSection) setShowCardModal(true);
            }}
            className="inline-flex w-full items-center justify-center rounded-[2px] border-0 bg-[rgb(238,77,45)] px-[18px] py-2.5 text-base font-normal text-white transition-colors hover:bg-[rgb(225,72,42)] md:w-auto"
          >
            <PlusIcon />
            {section.buttonLabel}
          </button>
        ) : (
          <Link
            href={section.buttonHref}
            className="inline-flex w-full items-center justify-center rounded-[2px] bg-[rgb(238,77,45)] px-[18px] py-2.5 text-base font-normal text-white no-underline transition-colors hover:bg-[rgb(225,72,42)] md:w-auto"
          >
            <PlusIcon />
            {section.buttonLabel}
          </Link>
        )}
      </div>
      <div className="h-px bg-black/6 w-full" aria-hidden />
      {/* Payment methods list or empty state */}
      {paymentMethods.length === 0 ? (
        <p className="text-center text-sm text-black/54 py-10 px-6">
          {section.emptyMessage}
        </p>
      ) : (
        <div className="px-4 py-4 sm:px-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="mb-3 flex flex-col gap-3 rounded-[3px] border border-black/10 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                {method.type === "card" ? (
                  <>
                    <div className="text-sm font-medium text-black/87">
                      {method.cardHolderName}
                    </div>
                    <div className="text-xs text-black/54 mt-1">
                      **** **** **** {method.cardNumberLast4} • Expires {method.cardExpiryMonth}/{method.cardExpiryYear}
                    </div>
                    {method.isDefault && (
                      <span className="inline-block mt-2 rounded-[1px] border border-[#ee4d2d] px-1.5 py-0.5 text-[11px] text-[#ee4d2d]">
                        Default
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <div className="text-sm font-medium text-black/87">
                      {method.bankAccountHolder}
                    </div>
                    <div className="text-xs text-black/54 mt-1">
                      {method.bankName} • {method.bankAccountNumber}
                    </div>
                    {method.isDefault && (
                      <span className="inline-block mt-2 rounded-[1px] border border-[#ee4d2d] px-1.5 py-0.5 text-[11px] text-[#ee4d2d]">
                        Default
                      </span>
                    )}
                  </>
                )}
              </div>
              <button
                type="button"
                className="ml-0 cursor-pointer border-0 bg-transparent p-0 text-left text-[13px] text-[#0055aa] sm:ml-4"
                onClick={() => handleDelete(method.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Bank Account Modal */}
      {isBankSection && (
        <AddBankAccountModal
          open={showBankModal}
          onClose={() => setShowBankModal(false)}
          onSubmit={handleBankSubmit}
        />
      )}

      {/* Card Modal */}
      {isCardSection && (
        <AddCardModal
          open={showCardModal}
          onClose={() => setShowCardModal(false)}
          onSubmit={handleCardSubmit}
          cardType={cardType}
        />
      )}
    </section>
  );
}
