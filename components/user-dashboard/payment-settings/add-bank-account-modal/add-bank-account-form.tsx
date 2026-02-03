"use client";

import { useState, useCallback } from "react";
import { BankDropdown } from "./bank-dropdown";

export interface AddBankAccountFormValues {
  fullName: string;
  accountNo: string;
  bankName: string;
  setAsDefault: boolean;
}

export interface AddBankAccountFormErrors {
  fullName?: string;
  accountNo?: string;
  bankName?: string;
}

const FULL_NAME_PLACEHOLDER =
  "Full name in the bank account (i.e.Michael Wang)";
const FULL_NAME_ERROR = "Please fill in bank account name.";
const ACCOUNT_NO_ERROR = "Please fill with your bank account number";
const BANK_NAME_ERROR = "Please fill in bank name.";

interface AddBankAccountFormProps {
  onSubmit: (values: AddBankAccountFormValues) => void;
  onCancel: () => void;
}

function validate(values: AddBankAccountFormValues): AddBankAccountFormErrors {
  const errors: AddBankAccountFormErrors = {};
  if (!values.fullName.trim()) errors.fullName = FULL_NAME_ERROR;
  if (!values.accountNo.trim()) errors.accountNo = ACCOUNT_NO_ERROR;
  if (!values.bankName.trim()) errors.bankName = BANK_NAME_ERROR;
  return errors;
}

export function AddBankAccountForm({ onSubmit, onCancel }: AddBankAccountFormProps) {
  const [values, setValues] = useState<AddBankAccountFormValues>({
    fullName: "",
    accountNo: "",
    bankName: "",
    setAsDefault: true,
  });
  const [errors, setErrors] = useState<AddBankAccountFormErrors>({});

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const nextErrors = validate(values);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0) {
        onSubmit(values);
      }
    },
    [values, onSubmit]
  );

  const isValid = Object.keys(errors).length === 0;
  const disabledCheckbox = !isValid;

  const inputBase =
    "text-neutral-800 outline-0 flex-1 w-full h-10 text-sm p-2.5 border-0 disabled:cursor-not-allowed";
  const wrapperError =
    "rounded-sm border border-solid border-rose-500 bg-rose-500/5 shadow-inner";
  const wrapperNormal =
    "rounded-sm border border-solid border-black/9 bg-white shadow-inner";

  return (
    <form id="add-bank-form" onSubmit={handleSubmit} className="mb-20">
      {/* Full name */}
      <div className="mb-4">
        <div
          className={`items-center h-10 transition-all duration-300 ease-in-out flex ${errors.fullName ? wrapperError : wrapperNormal}`}
        >
          <input
            type="text"
            placeholder={FULL_NAME_PLACEHOLDER}
            maxLength={64}
            value={values.fullName}
            onChange={(e) => {
              setValues((v) => ({ ...v, fullName: e.target.value }));
              if (errors.fullName) setErrors((e) => ({ ...e, fullName: undefined }));
            }}
            className={inputBase}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "err-fullName" : undefined}
          />
        </div>
        {errors.fullName && (
          <span
            id="err-fullName"
            className="text-rose-500 text-xs block pt-2 pb-0.5 first-letter:capitalize"
          >
            {errors.fullName}
          </span>
        )}
      </div>

      {/* Account No */}
      <div className="mb-4">
        <div
          className={`items-center h-10 transition-all duration-300 ease-in-out flex ${errors.accountNo ? wrapperError : wrapperNormal}`}
        >
          <input
            type="text"
            placeholder="Account No."
            value={values.accountNo}
            onChange={(e) => {
              setValues((v) => ({ ...v, accountNo: e.target.value }));
              if (errors.accountNo) setErrors((e) => ({ ...e, accountNo: undefined }));
            }}
            className={inputBase}
            aria-invalid={!!errors.accountNo}
            aria-describedby={errors.accountNo ? "err-accountNo" : undefined}
          />
        </div>
        {errors.accountNo && (
          <span
            id="err-accountNo"
            className="text-rose-500 text-xs block pt-2 pb-0.5 first-letter:capitalize"
          >
            {errors.accountNo}
          </span>
        )}
      </div>

      {/* Bank name dropdown */}
      <div className="mb-4">
        <div className="mb-2.5">
          <BankDropdown
            value={values.bankName}
            onChange={(bankName) => {
              setValues((v) => ({ ...v, bankName }));
              if (errors.bankName) setErrors((e) => ({ ...e, bankName: undefined }));
            }}
            hasError={!!errors.bankName}
          />
        </div>
        {errors.bankName && (
          <div className="text-rose-500 text-xs pb-3.5">{errors.bankName}</div>
        )}
      </div>

      {/* Set as Default */}
      <div className="h-8 flex items-center">
        <input
          type="checkbox"
          id="set-as-default"
          disabled={disabledCheckbox}
          checked={values.setAsDefault}
          onChange={(e) =>
            setValues((v) => ({ ...v, setAsDefault: e.target.checked }))
          }
          className={`leading-4 flex-none ${disabledCheckbox ? 'cursor-default' : 'cursor-pointer'}`}
        />
        <label
          htmlFor="set-as-default"
          className={`leading-8 inline-block mx-3 ${disabledCheckbox ? 'cursor-default' : 'cursor-pointer'}`}
        >
          Set as Default
        </label>
      </div>
    </form>
  );
}
