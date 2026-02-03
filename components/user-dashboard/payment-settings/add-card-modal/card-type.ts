/**
 * Card payment types
 */
export type CardPaymentType = "card" | "installment";

export interface AddCardFormValues {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
  address: string;
  postalCode: string;
  acknowledgment: boolean;
}

export interface AddCardFormErrors {
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  nameOnCard?: string;
  address?: string;
  postalCode?: string;
}

export const CARD_TYPE_TITLES: Record<CardPaymentType, string> = {
  card: "Add Credit Card",
  installment: "Add Credit Card",
};
