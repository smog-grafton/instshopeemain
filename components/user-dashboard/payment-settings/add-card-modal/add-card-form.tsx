"use client";

import { useState, useCallback } from "react";
import { FloatingLabelInput } from "./floating-label-input";
import { SecurityNotice } from "./security-notice";
import type { AddCardFormValues, AddCardFormErrors, CardPaymentType } from "./card-type";

interface AddCardFormProps {
  cardType: CardPaymentType;
  onSubmit: (values: AddCardFormValues) => void;
  onCancel: () => void;
}

function formatCardNumber(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  const groups = cleaned.match(/.{1,4}/g);
  return groups ? groups.join(" ") : cleaned;
}

function formatExpiryDate(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length >= 2) {
    return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
  }
  return cleaned;
}

function validate(values: AddCardFormValues): AddCardFormErrors {
  const errors: AddCardFormErrors = {};

  // Card number validation (basic - 13-19 digits)
  const cardDigits = values.cardNumber.replace(/\D/g, "");
  if (!cardDigits) {
    errors.cardNumber = "Card number is required";
  } else if (cardDigits.length < 13 || cardDigits.length > 19) {
    errors.cardNumber = "Invalid card number";
  }

  // Expiry date validation (MM/YY format)
  if (!values.expiryDate) {
    errors.expiryDate = "Expiry date is required";
  } else {
    const [month, year] = values.expiryDate.split("/");
    if (!month || !year || month.length !== 2 || year.length !== 2) {
      errors.expiryDate = "Invalid format (MM/YY)";
    } else {
      const monthNum = parseInt(month, 10);
      if (monthNum < 1 || monthNum > 12) {
        errors.expiryDate = "Invalid month";
      }
    }
  }

  // CVV validation (3-4 digits)
  if (!values.cvv) {
    errors.cvv = "CVV is required";
  } else if (values.cvv.length < 3 || values.cvv.length > 4) {
    errors.cvv = "Invalid CVV";
  }

  // Name validation
  if (!values.nameOnCard.trim()) {
    errors.nameOnCard = "Name on card is required";
  }

  // Address validation
  if (!values.address.trim()) {
    errors.address = "Address is required";
  }

  // Postal code validation
  if (!values.postalCode.trim()) {
    errors.postalCode = "Postal code is required";
  }

  return errors;
}

function CVVInfoIcon() {
  return (
    <svg
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="align-baseline inline h-5 fill-none overflow-x-hidden overflow-y-hidden"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.75 10C16.75 13.7279 13.7279 16.75 10 16.75C6.27208 16.75 3.25 13.7279 3.25 10C3.25 6.27208 6.27208 3.25 10 3.25C13.7279 3.25 16.75 6.27208 16.75 10ZM10 18.25C14.5563 18.25 18.25 14.5563 18.25 10C18.25 5.44365 14.5563 1.75 10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 14.5563 5.44365 18.25 10 18.25ZM9.14535 11.8387C9.14535 11.3024 9.2125 10.875 9.3468 10.5565C9.4811 10.2379 9.74564 9.88911 10.1404 9.51008C10.5392 9.12702 10.7916 8.85484 10.8974 8.69355C11.0602 8.44758 11.1416 8.18145 11.1416 7.89516C11.1416 7.51613 11.0459 7.22782 10.8547 7.03024C10.6674 6.82863 10.3907 6.72782 10.0244 6.72782C9.67442 6.72782 9.39157 6.82661 9.17587 7.02419C8.96424 7.21774 8.85843 7.48185 8.85843 7.81653H7.375C7.38314 7.10282 7.62733 6.53831 8.10756 6.12298C8.59186 5.70766 9.23081 5.5 10.0244 5.5C10.8424 5.5 11.4794 5.70565 11.9352 6.11694C12.3951 6.52823 12.625 7.10282 12.625 7.84073C12.625 8.49798 12.3157 9.14516 11.6971 9.78226L10.9462 10.5141C10.6776 10.8165 10.5392 11.2581 10.5311 11.8387H9.14535ZM9.04157 13.7198C9.04157 13.4819 9.11686 13.2903 9.26744 13.1452C9.41802 12.996 9.62151 12.9214 9.87791 12.9214C10.1384 12.9214 10.3439 12.998 10.4945 13.1512C10.6451 13.3004 10.7203 13.4899 10.7203 13.7198C10.7203 13.9415 10.6471 14.127 10.5006 14.2762C10.3541 14.4254 10.1465 14.5 9.87791 14.5C9.6093 14.5 9.40174 14.4254 9.25523 14.2762C9.11279 14.127 9.04157 13.9415 9.04157 13.7198Z"
        fillOpacity="0.4"
        className="fill-black"
      />
    </svg>
  );
}

export function AddCardForm({ cardType, onSubmit, onCancel }: AddCardFormProps) {
  const [values, setValues] = useState<AddCardFormValues>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    address: "",
    postalCode: "",
    acknowledgment: true,
  });
  const [errors, setErrors] = useState<AddCardFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const nextErrors = validate(values);
      setErrors(nextErrors);
      setTouched({
        cardNumber: true,
        expiryDate: true,
        cvv: true,
        nameOnCard: true,
        address: true,
        postalCode: true,
      });

      if (Object.keys(nextErrors).length === 0) {
        onSubmit(values);
      }
    },
    [values, onSubmit]
  );

  const isValid = Object.keys(errors).length === 0;

  return (
    <form id="add-card-form" onSubmit={handleSubmit} className="h-full flex flex-col">
      <div className="sm:bg-white sm:pb-4 bg-zinc-100 text-black/87 sm:pt-4">
        {/* Security Notice */}
        <div className="mb-3 sm:mb-4">
          <SecurityNotice />
        </div>

        {/* Card Details Section */}
        <div className="max-sm:px-3 bg-white overflow-x-hidden overflow-y-hidden mb-3">
          <div className="justify-between items-center flex pt-4 pb-6">
            <div className="[font-family:Roboto] text-base font-medium">
              Card Details
            </div>
            <div className="items-center flex">
              <div className="bg-[50%] bg-no-repeat bg-size-[100%] w-8 h-6 duration-200 bg-[url('https://deo.shopeemobile.com/shopee/shopee-shopeepayweb-live-my/payment-v2-pc/module-federation/assets/ea9b71899d63d3fe04d1.png')]" />
              <div className="bg-[50%] bg-no-repeat bg-size-[100%] w-8 h-6 duration-200 bg-[url('https://deo.shopeemobile.com/shopee/shopee-shopeepayweb-live-my/payment-v2-pc/module-federation/assets/88890d3c07dd9ebba52a.png')] ml-2.5" />
              <div className="bg-[50%] bg-no-repeat bg-size-[100%] w-8 h-6 duration-200 bg-[url('https://deo.shopeemobile.com/shopee/shopee-shopeepayweb-live-my/payment-v2-pc/module-federation/assets/55dd346f188d48c74f91.png')] ml-2.5" />
            </div>
          </div>

          {/* Card Number */}
          <FloatingLabelInput
            label="Card Number"
            type="tel"
            inputMode="numeric"
            maxLength={19}
            value={values.cardNumber}
            onChange={(e) => {
              const formatted = formatCardNumber(e.target.value);
              setValues((v) => ({ ...v, cardNumber: formatted }));
              if (touched.cardNumber) {
                const newErrors = { ...errors };
                delete newErrors.cardNumber;
                setErrors(newErrors);
              }
            }}
            onBlur={() => {
              setTouched((t) => ({ ...t, cardNumber: true }));
              const newErrors = validate(values);
              if (newErrors.cardNumber) {
                setErrors((e) => ({ ...e, cardNumber: newErrors.cardNumber }));
              }
            }}
            error={touched.cardNumber ? errors.cardNumber : undefined}
            autoComplete="off"
          />

          <div className="justify-between flex">
            {/* Expiry Date */}
            <div className="flex-[2]">
              <FloatingLabelInput
                label="Expiry Date (MM/YY)"
                type="tel"
                inputMode="numeric"
                maxLength={5}
                value={values.expiryDate}
                onChange={(e) => {
                  const formatted = formatExpiryDate(e.target.value);
                  setValues((v) => ({ ...v, expiryDate: formatted }));
                  if (touched.expiryDate) {
                    const newErrors = { ...errors };
                    delete newErrors.expiryDate;
                    setErrors(newErrors);
                  }
                }}
                onBlur={() => {
                  setTouched((t) => ({ ...t, expiryDate: true }));
                  const newErrors = validate(values);
                  if (newErrors.expiryDate) {
                    setErrors((e) => ({ ...e, expiryDate: newErrors.expiryDate }));
                  }
                }}
                error={touched.expiryDate ? errors.expiryDate : undefined}
                autoComplete="off"
              />
            </div>

            {/* CVV */}
            <div className="flex-1 ml-2.5">
              <div className="ml-2.5">
                <FloatingLabelInput
                  label="CVV"
                  type="password"
                  inputMode="numeric"
                  maxLength={3}
                  value={values.cvv}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, "");
                    setValues((v) => ({ ...v, cvv: cleaned }));
                    if (touched.cvv) {
                      const newErrors = { ...errors };
                      delete newErrors.cvv;
                      setErrors(newErrors);
                    }
                  }}
                  onBlur={() => {
                    setTouched((t) => ({ ...t, cvv: true }));
                    const newErrors = validate(values);
                    if (newErrors.cvv) {
                      setErrors((e) => ({ ...e, cvv: newErrors.cvv }));
                    }
                  }}
                  error={touched.cvv ? errors.cvv : undefined}
                  icon={<CVVInfoIcon />}
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>

          {/* Name on Card */}
          <FloatingLabelInput
            label="Name on Card"
            type="text"
            value={values.nameOnCard}
            onChange={(e) => {
              setValues((v) => ({ ...v, nameOnCard: e.target.value }));
              if (touched.nameOnCard) {
                const newErrors = { ...errors };
                delete newErrors.nameOnCard;
                setErrors(newErrors);
              }
            }}
            onBlur={() => {
              setTouched((t) => ({ ...t, nameOnCard: true }));
              const newErrors = validate(values);
              if (newErrors.nameOnCard) {
                setErrors((e) => ({ ...e, nameOnCard: newErrors.nameOnCard }));
              }
            }}
            error={touched.nameOnCard ? errors.nameOnCard : undefined}
            autoComplete="off"
          />
        </div>

        {/* Billing Address Section */}
        <div className="max-sm:px-3 bg-white overflow-x-hidden overflow-y-hidden mb-3">
          <div className="text-base font-medium pt-4 pb-6">Billing Address</div>

          {/* Address */}
          <FloatingLabelInput
            label="Address"
            type="text"
            maxLength={50}
            value={values.address}
            onChange={(e) => {
              setValues((v) => ({ ...v, address: e.target.value }));
              if (touched.address) {
                const newErrors = { ...errors };
                delete newErrors.address;
                setErrors(newErrors);
              }
            }}
            onBlur={() => {
              setTouched((t) => ({ ...t, address: true }));
              const newErrors = validate(values);
              if (newErrors.address) {
                setErrors((e) => ({ ...e, address: newErrors.address }));
              }
            }}
            error={touched.address ? errors.address : undefined}
          />

          {/* Postal Code */}
          <FloatingLabelInput
            label="Postal Code"
            type="text"
            value={values.postalCode}
            onChange={(e) => {
              setValues((v) => ({ ...v, postalCode: e.target.value }));
              if (touched.postalCode) {
                const newErrors = { ...errors };
                delete newErrors.postalCode;
                setErrors(newErrors);
              }
            }}
            onBlur={() => {
              setTouched((t) => ({ ...t, postalCode: true }));
              const newErrors = validate(values);
              if (newErrors.postalCode) {
                setErrors((e) => ({ ...e, postalCode: newErrors.postalCode }));
              }
            }}
            error={touched.postalCode ? errors.postalCode : undefined}
          />
        </div>

        {/* Acknowledgment */}
        <div>
          <div className="sm:pb-0 sm:px-0 text-xs leading-4 pb-3 px-3 text-black/54">
            I acknowledge that my card information is saved securely on my
            ShopeePay account and One Time Password (OTP) might not be required
            for future transactions on Shopee.
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="sm:w-auto sm:shadow-none sm:justify-end sm:relative sm:mt-6 sm:mb-0 bg-white flex-col self-end w-full flex shadow-sm p-4 sm:p-2 sticky bottom-0 border-t sm:border-t-0 border-black/6">
        <div className="sm:justify-end sm:relative flex">
          <button
            type="button"
            onClick={onCancel}
            className="sm:rounded-sm appearance-none cursor-pointer bg-white outline-0 justify-center items-center min-w-36 h-10 text-sm leading-4 flex mr-4 rounded border-solid text-black/87 border-black/26 duration-300 ease-in-out border-0 hover:text-red-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isValid || Object.keys(touched).length === 0}
            className={`sm:rounded-sm appearance-none outline-0 min-w-36 h-10 text-sm leading-10 duration-300 ease-in-out relative rounded border-0 after:content-[''] after:pointer-events-none after:duration-300 after:ease-in-out after:absolute after:inset-0 ${
              isValid && Object.keys(touched).length > 0
                ? "cursor-pointer text-white bg-red-500 hover:after:bg-black/20"
                : "cursor-not-allowed text-black/26 bg-black/9 sm:text-white sm:bg-red-300"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
