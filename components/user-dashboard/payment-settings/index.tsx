"use client";

import { PAYMENT_SECTIONS } from "./data";
import { PaymentSection } from "./payment-section";

export { PaymentSection } from "./payment-section";
export { PAYMENT_SECTIONS, type PaymentSectionConfig } from "./data";

/**
 * Payment settings: Credit/Debit Card, Credit Card Installment, My Bank Accounts.
 */
export function PaymentSettings() {
  return (
    <div className="w-[980px] ml-7">
      <div className="bg-white rounded-[2px] shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] overflow-hidden">
        {PAYMENT_SECTIONS.map((section, index) => (
          <div key={section.id} className={index > 0 ? "pt-6" : ""}>
            {index > 0 && (
              <div
                className="h-px w-full bg-black/6 -mt-px"
                aria-hidden
                role="separator"
              />
            )}
            <PaymentSection section={section} />
          </div>
        ))}
      </div>
    </div>
  );
}
