import { CoinsHeader } from "./coins-header";
import { CoinsEmpty } from "./coins-empty";
import { mockCoinBalance } from "./data";

export { CoinsHeader } from "./coins-header";
export { CoinsEmpty } from "./coins-empty";
export { mockCoinBalance, mockCoinBalanceWithCoins, COIN_IMAGE, type CoinBalance } from "./data";

/**
 * Shopee Coins main component: shows coin balance header and empty state.
 */
export function ShopeeCoin() {
  // In a real app, this would come from API/state
  const balance = mockCoinBalance;

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
