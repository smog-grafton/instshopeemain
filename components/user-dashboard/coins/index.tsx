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
      <div className="w-[980px] ml-7">
        <div className="bg-white rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] p-6">
          <p className="text-center text-black/54">Loading coin balance...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[980px] ml-7">
      <CoinsHeader balance={balance} />
      {balance.available === 0 ? (
        <CoinsEmpty />
      ) : (
        <div className="bg-white rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] p-6">
          {/* Future: Coin history/transactions list */}
          <p className="text-center text-black/54">Coin transactions will appear here.</p>
        </div>
      )}
    </div>
  );
}
