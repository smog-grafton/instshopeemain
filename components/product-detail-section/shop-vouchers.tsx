"use client";

import { useState, useRef, useEffect } from "react";
import { VoucherBadge } from "./voucher-badge";
import type { ShopVoucherEntry } from "./data";

interface ShopVouchersProps {
  /** Short labels for inline badges, e.g. ["RM1 OFF", "RM1 OFF"] */
  badgeLabels: string[];
  /** Full list for the hover popover */
  voucherList: ShopVoucherEntry[];
}

/** Perforated left edge: mask creates circular cutouts along the strip */
const CARD_STRIP_MASK = {
  maskImage: "radial-gradient(circle, transparent 3px, black 3px)",
  maskSize: "8px 8px",
  WebkitMaskImage: "radial-gradient(circle, transparent 3px, black 3px)",
  WebkitMaskSize: "8px 8px",
} as const;

function VoucherPopoverCard({ voucher }: { voucher: ShopVoucherEntry }) {
  return (
    <div className="flex rounded-md shadow-sm border border-neutral-200/80 bg-white overflow-hidden">
      {/* Left perforated strip: brand + scalloped edge (mask punches circles) */}
      <div
        className="relative w-8 shrink-0 flex flex-col items-center justify-center py-3 bg-neutral-200/70 text-neutral-500 text-[10px]"
        style={CARD_STRIP_MASK}
      >
        {voucher.brand && (
          <span className="uppercase tracking-tight" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            {voucher.brand}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0 py-3 pl-3 pr-4 flex flex-col gap-1">
        <div className="font-semibold text-neutral-800">{voucher.offer}</div>
        <div className="text-sm text-neutral-600">Min. Spend {voucher.minSpend}</div>
        {voucher.isWelcomeVoucher && (
          <span className="inline-flex text-xs border border-red-500 text-red-500 px-1.5 py-0.5 rounded w-fit">
            Shop Welcome Voucher
          </span>
        )}
        <div className="text-xs text-neutral-500">Valid Till: {voucher.validTill}</div>
      </div>
      <div className="flex items-center pr-4">
        <button
          type="button"
          className="rounded-md bg-[#ee4d2d] text-white text-sm font-medium px-4 py-2 hover:opacity-95 active:opacity-90"
        >
          Claim
        </button>
      </div>
    </div>
  );
}

export function ShopVouchers({ badgeLabels, voucherList }: ShopVouchersProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <div
      ref={containerRef}
      aria-haspopup="true"
      aria-expanded={open}
      id="miniVoucherPopoverLabel"
      className="text-neutral-800 items-center flex -ml-1 -mt-1 mb-6 p-1 focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm relative"
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <section className="w-full items-center flex">
        <h2 className="text-neutral-500 capitalize w-24 shrink-0 font-normal mr-2.5">
          Shop Vouchers
        </h2>
        <div className="flex flex-[auto] w-0 min-w-[calc(100%-theme(spacing.60))] h-6">
          <div className="flex-[auto] w-0 flex relative overflow-x-hidden overflow-y-hidden gap-2.5">
            {badgeLabels.map((label, i) => (
              <VoucherBadge key={`${label}-${i}`} label={label} className="mr-0" />
            ))}
          </div>
        </div>
      </section>

      {/* Hover dropdown: white box, rounded, shadow, caret */}
      {open && (
        <div
          className="absolute left-0 top-full mt-0 z-50 w-[420px] max-w-[calc(100vw-2rem)]"
          role="dialog"
          aria-label="Shop Vouchers"
        >
          {/* Caret */}
          <div
            className="absolute -top-1 left-6 w-2 h-2 rotate-45 bg-white border-l border-t border-neutral-200/80"
            aria-hidden
          />
          <div className="mt-1 rounded-lg bg-white border border-neutral-200/80 shadow-lg overflow-hidden">
            <div className="p-4 pb-2">
              <h3 className="text-lg font-semibold text-neutral-800">Shop Vouchers</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Save more by applying these Shop Vouchers to the items in your shopping cart.
              </p>
            </div>
            <div className="px-4 pb-4 flex flex-col gap-3 max-h-56 overflow-y-auto">
              {voucherList.map((v, i) => (
                <VoucherPopoverCard key={`${v.offer}-${v.minSpend}-${i}`} voucher={v} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
