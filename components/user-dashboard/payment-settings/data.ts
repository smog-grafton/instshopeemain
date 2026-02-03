/**
 * Payment settings: section config for Cards and Bank Accounts
 */

export interface PaymentSectionConfig {
  id: string;
  title: string;
  emptyMessage: string;
  buttonLabel: string;
  buttonHref: string;
}

export const PAYMENT_SECTIONS: PaymentSectionConfig[] = [
  {
    id: "card",
    title: "Credit / Debit Card",
    emptyMessage: "You don't have cards yet.",
    buttonLabel: "Add New Card",
    buttonHref: "/user/account/payment/card/add",
  },
  {
    id: "installment",
    title: "Credit Card Installment",
    emptyMessage: "You don't have cards yet.",
    buttonLabel: "Add New Card",
    buttonHref: "/user/account/payment/installment/add",
  },
  {
    id: "bank",
    title: "My Bank Accounts",
    emptyMessage: "You don't have bank accounts yet.",
    buttonLabel: "Add New Bank Account",
    buttonHref: "/user/account/payment/bank/add",
  },
];
