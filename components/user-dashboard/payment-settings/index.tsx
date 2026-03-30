"use client";

import { useEffect, useState } from "react";
import { PAYMENT_SECTIONS } from "./data";
import { PaymentSection } from "./payment-section";
import { getUserPaymentMethods, type ApiUserPaymentMethod } from "@/lib/api-client";

export { PaymentSection } from "./payment-section";
export { PAYMENT_SECTIONS, type PaymentSectionConfig } from "./data";

/**
 * Payment settings: Credit/Debit Card, Credit Card Installment, My Bank Accounts.
 */
export function PaymentSettings() {
  const [paymentMethods, setPaymentMethods] = useState<ApiUserPaymentMethod[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPaymentMethods = async () => {
    try {
      const methods = await getUserPaymentMethods();
      setPaymentMethods(methods);
    } catch (error) {
      console.error("Failed to load payment methods:", error);
      setPaymentMethods([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPaymentMethods();
  }, []);

  return (
    <div className="w-full lg:ml-7 lg:w-[980px]">
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
            <PaymentSection
              section={section}
              paymentMethods={paymentMethods.filter((m) => {
                if (section.id === "bank") return m.type === "bank_account";
                if (section.id === "card" || section.id === "installment") {
                  return m.type === "card" && (section.id === "installment" ? m.cardType === "credit" : true);
                }
                return false;
              })}
              onRefresh={loadPaymentMethods}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
