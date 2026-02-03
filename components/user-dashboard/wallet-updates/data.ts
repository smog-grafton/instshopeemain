/**
 * Mock data for Wallet Updates (notifications/wallet page).
 */

export interface WalletUpdateItem {
  id: string;
  title: string;
  message: string;
  type: "top_up" | "refund" | "cashback" | "withdrawal" | "payment";
  timeAgo: string;
  href: string;
}

export const MOCK_WALLET_UPDATES: WalletUpdateItem[] = [
  {
    id: "1",
    title: "Top-up successful",
    message:
      "Your wallet has been topped up with RM50.00. You can now use your balance for purchases and payments.",
    type: "top_up",
    timeAgo: "3 hours ago",
    href: "/user/wallet",
  },
  {
    id: "2",
    title: "Refund received",
    message:
      "A refund of RM29.90 for your cancelled order has been credited to your wallet. Check your balance for details.",
    type: "refund",
    timeAgo: "1 day ago",
    href: "/user/wallet",
  },
];
