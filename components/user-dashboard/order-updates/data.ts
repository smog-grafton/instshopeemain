/**
 * Mock data for Order Updates (notifications/order page).
 */

export interface OrderUpdateItem {
  id: string;
  title: string;
  message: string;
  orderId: string;
  status: "shipped" | "delivered" | "confirmed" | "out_for_delivery";
  timeAgo: string;
  href: string;
}

export const MOCK_ORDER_UPDATES: OrderUpdateItem[] = [
  {
    id: "1",
    title: "Your order has been shipped",
    message:
      "Order #ORD-28491 is on the way. Track your package for delivery updates.",
    orderId: "ORD-28491",
    status: "shipped",
    timeAgo: "2 hours ago",
    href: "/user/purchase?order=28491",
  },
  {
    id: "2",
    title: "Order delivered",
    message:
      "Order #ORD-28012 was delivered. Thank you for shopping with us!",
    orderId: "ORD-28012",
    status: "delivered",
    timeAgo: "1 day ago",
    href: "/user/purchase?order=28012",
  },
];
