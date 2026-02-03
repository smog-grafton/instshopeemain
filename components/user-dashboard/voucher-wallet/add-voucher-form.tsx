"use client";

import { useState } from "react";

export function AddVoucherForm() {
  const [code, setCode] = useState("");
  const isEmpty = !code.trim();

  return (
    <div className="flex justify-center items-center mt-5 px-11 py-7 bg-black/5">
      <div className="capitalize cursor-default text-base font-medium text-black/87">
        add voucher
      </div>
      <div className="relative ml-3.5 mr-2">
        <div className="text-neutral-800 bg-white items-center transition-colors duration-100 flex relative rounded-sm hover:shadow-inner w-96 h-11 shadow-inner p-3.5 border border-solid border-black/14">
          <input
            type="text"
            placeholder="Please enter voucher code"
            maxLength={255}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="py-px outline-none flex-1 text-sm border-0 placeholder:text-zinc-400 text-zinc-800 min-w-0"
          />
        </div>
      </div>
      <button
        type="button"
        disabled={isEmpty}
        className="[appearance:auto] text-white capitalize bg-red-500 outline-none justify-center items-center w-24 h-11 font-medium flex shadow-sm rounded-sm border-0 disabled:bg-black/10 disabled:cursor-not-allowed"
      >
        Redeem
      </button>
    </div>
  );
}
