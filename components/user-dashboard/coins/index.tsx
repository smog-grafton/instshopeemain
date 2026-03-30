"use client";

import { useEffect, useState } from "react";
import { CoinsHeader } from "./coins-header";
import { CoinsEmpty } from "./coins-empty";
import { getCoinsBalance, type ApiCoinBalance } from "@/lib/api-client";
import type { CoinBalance } from "./data";

export { CoinsHeader } from "./coins-header";
export { CoinsEmpty } from "./coins-empty";
export { mockCoinBalance, mockCoinBalanceWithCoins, COIN_IMAGE, type CoinBalance } from "./data";

function transformApiBalance(apiBalance: ApiCoinBalance): CoinBalance {
  return {
    available: apiBalance.available,
    expiring: apiBalance.expiring,
    expiringDate: apiBalance.expiringDate,
  };
}

/**
 * Shopee Coins main component: shows coin balance header and empty state.
 */
export function ShopeeCoin() {
  const [balance, setBalance] = useState<CoinBalance | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBalance() {
      try {
        const apiBalance = await getCoinsBalance();
        setBalance(transformApiBalance(apiBalance));
      } catch (error) {
        console.error("Failed to load coin balance:", error);
        // Fallback to empty balance
        setBalance({ available: 0, expiring: 0, expiringDate: null });
      } finally {
        setLoading(false);
      }
    }
    loadBalance();
  }, []);

  if (loading || !balance) {
    return (
      <div className="w-full min-w-0 lg:ml-7 lg:w-[980px]">
        <div className="rounded-3xl border border-zinc-100 bg-white px-4 py-10 text-center text-sm text-zinc-500 shadow-sm sm:px-6">
          Loading coin balance...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 space-y-4 lg:ml-7 lg:w-[980px]">
      <CoinsHeader balance={balance} />
      {balance.available === 0 ? (
        <CoinsEmpty />
      ) : (
        <div className="rounded-3xl border border-zinc-100 bg-white shadow-sm">
          <div className="border-b border-zinc-100 px-4 py-5 sm:px-6">
            <h2 className="text-base font-semibold text-zinc-800">Coin activity</h2>
            <p className="mt-1 text-sm leading-6 text-zinc-500">
              Your recent earn, spend, and expiry history will appear here.
            </p>
          </div>
          <div className="grid gap-3 px-4 py-5 sm:px-6 md:grid-cols-3">
            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-amber-700">
                Available now
              </p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">
                {balance.available}
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                Expiring soon
              </p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">
                {balance.expiring}
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-sky-700">
                Next expiry
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-800">
                {balance.expiringDate || "No coins expiring yet"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
