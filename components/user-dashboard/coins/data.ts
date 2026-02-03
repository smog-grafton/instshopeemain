/**
 * Shopee Coins: data types and mock data
 */

export interface CoinBalance {
  available: number;
  expiring: number;
  expiringDate: string | null;
}

export const COIN_IMAGE = "/images/common/coin/coin.png";

export const mockCoinBalance: CoinBalance = {
  available: 0,
  expiring: 0,
  expiringDate: null,
};

// For demo with coins:
export const mockCoinBalanceWithCoins: CoinBalance = {
  available: 1250,
  expiring: 50,
  expiringDate: "31 Jan 2026",
};
