"use client";

import { useState } from "react";

export function AddVoucherForm() {
  const [code, setCode] = useState("");
  const isEmpty = !code.trim();

  return (
    <div className="mt-5 rounded-3xl border border-zinc-100 bg-zinc-50 p-4 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="min-w-0 lg:max-w-[220px]">
          <p className="text-base font-semibold text-black/87">Add voucher</p>
          <p className="mt-1 text-sm leading-6 text-zinc-500">
            Paste a valid voucher code to add it to your wallet.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <div className="flex h-11 items-center rounded-xl border border-black/14 bg-white p-3.5 shadow-inner transition-colors duration-100 hover:border-zinc-300">
              <input
                type="text"
                placeholder="Please enter voucher code"
                maxLength={255}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-w-0 flex-1 border-0 py-px text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
              />
            </div>
          </div>
          <button
            type="button"
            disabled={isEmpty}
            className="inline-flex h-11 items-center justify-center rounded-full bg-red-500 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-black/10"
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}
