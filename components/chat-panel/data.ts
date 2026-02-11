export type ChatFilter = "all" | "unread" | "pinned";

export interface ChatMessage {
  id: string;
  text: string;
  isFromUser: boolean;
  timestamp: string;
}

export interface ChatProduct {
  id?: number;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  badges?: string[];
  href?: string;
}

export interface ChatConversation {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage: string;
  lastMessageAt: string;
  unread: boolean;
  pinned: boolean;
  product?: ChatProduct;
  recentProducts?: ChatProduct[];
  isTyping?: boolean;
  assistantIntro?: string;
  assistantTimestamp?: string;
  suggestions?: string[];
  messages: ChatMessage[];
}

export const mockConversations: ChatConversation[] = [
  {
    id: "1",
    name: "wrimo",
    avatarUrl: "/images/profile/shop/profile.webp",
    lastMessage: "Hi there! Thanks for your interest...",
    lastMessageAt: "10:56",
    unread: true,
    pinned: false,
    product: {
      title: "READY STOCK💝 WRIMO Abuku Sneakers",
      image: "/images/products/1.webp",
      price: "RM12.50",
      originalPrice: "RM50.00",
      badges: ["Inquired", "4.8k+ sold"],
      href: "/product/wrimo-abuku-sneakers",
    },
    recentProducts: [
      {
        title: "READY STOCK💝 WRIMO Abuku Sneakers",
        image: "/images/products/1.webp",
        price: "RM12.50",
        originalPrice: "RM50.00",
        badges: ["Inquired", "4.8k+ sold"],
        href: "/product/wrimo-abuku-sneakers",
      },
      {
        title: "WRIMO Flex Run Sneakers",
        image: "/images/products/2.webp",
        price: "RM19.90",
        originalPrice: "RM59.00",
        badges: ["Popular"],
        href: "/product/wrimo-flex-run",
      },
    ],
    assistantIntro:
      "Hi there! Thanks for your interest! Want to know more about this product? I’ve got all the details you need — just ask away!",
    assistantTimestamp: "10:56",
    suggestions: [
      "Can I request for an exchange instead of raising a refund?",
      "Can I add more products to a paid order?",
      "Can you wrap my parcel using a bubble wrap or cardboard?",
    ],
    messages: [
      { id: "m1-1", text: "Hi there! Thanks for your interest!", isFromUser: false, timestamp: "10:56" },
    ],
  },
  {
    id: "2",
    name: "Tech Store Official",
    avatarUrl: "/images/stores/profile/default.webp",
    lastMessage: "Your order has been shipped!",
    lastMessageAt: "10:05",
    unread: false,
    pinned: true,
    messages: [
      { id: "m2-1", text: "Hi! How can I help you today?", isFromUser: false, timestamp: "10:00" },
      { id: "m2-2", text: "I’d like to check my order status.", isFromUser: true, timestamp: "10:02" },
      { id: "m2-3", text: "Sure, please share your order ID.", isFromUser: false, timestamp: "10:03" },
      { id: "m2-4", text: "Order #12345", isFromUser: true, timestamp: "10:04" },
      { id: "m2-5", text: "Your order has been shipped! Tracking: XYZ123.", isFromUser: false, timestamp: "10:05" },
    ],
  },
];
