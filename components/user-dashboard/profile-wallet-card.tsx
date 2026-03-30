"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBuyerWallet } from "@/lib/api-client";

type WalletSnapshot = {
  balance: string;
  available_balance?: string;
  pending_balance?: string;
  currency: string;
};

function formatMoney(wallet: WalletSnapshot | null): string {
  if (!wallet) return "0.00";
  const raw = wallet.available_balance ?? wallet.balance ?? "0";
  const amount = Number.parseFloat(String(raw));
  return Number.isFinite(amount) ? amount.toFixed(2) : "0.00";
}

export function ProfileWalletCard() {
  const [wallet, setWallet] = useState<WalletSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadWallet() {
      try {
        const response = await getBuyerWallet();
        if (!active) return;
        setWallet(response.wallet);
        setError(null);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Could not load wallet");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadWallet();

    return () => {
      active = false;
    };
  }, []);

  const currency = wallet?.currency ?? "USD";

  return (
    <section className="rounded-sm border border-zinc-100 bg-[#fffaf6] p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="text-xs font-medium uppercase tracking-[0.08em] text-[#ee4d2d]">
            Buyer Wallet
          </div>
          <div className="mt-1 text-2xl font-semibold text-zinc-800">
            {loading ? "Loading..." : `${currency} ${formatMoney(wallet)}`}
          </div>
          <p className="mt-2 text-sm leading-5 text-neutral-600">
            Use this balance for checkout and top-ups. Seller portal funds stay separate even when the same user has both accounts.
          </p>
          {error && <p className="mt-2 text-sm text-[#ee4d2d]">{error}</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/user/wallet"
            className="inline-flex h-10 items-center justify-center rounded-sm bg-[#ee4d2d] px-5 text-sm font-medium text-white hover:bg-[#d94021]"
          >
            Top Up Funds
          </Link>
          <Link
            href="/user/wallet"
            className="inline-flex h-10 items-center justify-center rounded-sm border border-black/10 bg-white px-5 text-sm font-medium text-zinc-700 hover:bg-black/[0.02]"
          >
            View Wallet
          </Link>
        </div>
      </div>
    </section>
  );
}
