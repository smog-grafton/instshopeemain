"use client";

import { useState } from "react";
import Link from "next/link";
import type { PaymentSectionConfig } from "./data";
import { AddBankAccountModal, type AddBankAccountFormValues } from "./add-bank-account-modal";
import { AddCardModal, type AddCardFormValues, type CardPaymentType } from "./add-card-modal";

interface PaymentSectionProps {
  section: PaymentSectionConfig;
}

function PlusIcon() {
  return (
    <span className="inline-block w-4 h-4 leading-4 text-center text-white font-normal mr-1.5" aria-hidden>
      +
    </span>
  );
}

export function PaymentSection({ section }: PaymentSectionProps) {
  const [showBankModal, setShowBankModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  const handleBankSubmit = (values: AddBankAccountFormValues) => {
    console.log("Bank account submitted:", values);
    // TODO: Handle form submission (API call, etc.)
    setShowBankModal(false);
  };

  const handleCardSubmit = (values: AddCardFormValues) => {
    console.log(`${section.id} card submitted:`, values);
    // TODO: Handle form submission (API call, etc.)
    setShowCardModal(false);
  };

  const isBankSection = section.id === "bank";
  const isCardSection = section.id === "card" || section.id === "installment";
  const cardType: CardPaymentType = section.id === "installment" ? "installment" : "card";

  return (
    <section>
      {/* Title row: title (left) + Add button (right) */}
      <div className="flex items-center justify-between gap-4 px-6 pt-6 pb-4">
        <h2 className="text-xl font-medium text-black/87">{section.title}</h2>
        {isBankSection || isCardSection ? (
          <button
            type="button"
            onClick={() => {
              if (isBankSection) setShowBankModal(true);
              if (isCardSection) setShowCardModal(true);
            }}
            className="shrink-0 inline-flex items-center px-[18px] py-2.5 text-base font-normal text-white rounded-[2px] bg-[rgb(238,77,45)] hover:bg-[rgb(225,72,42)] border-0 cursor-pointer transition-colors"
          >
            <PlusIcon />
            {section.buttonLabel}
          </button>
        ) : (
          <Link
            href={section.buttonHref}
            className="shrink-0 inline-flex items-center px-[18px] py-2.5 text-base font-normal text-white rounded-[2px] bg-[rgb(238,77,45)] hover:bg-[rgb(225,72,42)] no-underline transition-colors"
          >
            <PlusIcon />
            {section.buttonLabel}
          </Link>
        )}
      </div>
      <div className="h-px bg-black/6 w-full" aria-hidden />
      {/* Empty state */}
      <p className="text-center text-sm text-black/54 py-10 px-6">
        {section.emptyMessage}
      </p>

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
