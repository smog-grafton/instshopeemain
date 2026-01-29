export type ChatFilter = "all" | "unread" | "pinned";

export interface ChatMessage {
  id: string;
  text: string;
  isFromUser: boolean;
  timestamp: string;
}

export interface ChatConversation {
  id: string;
  name: string;
  lastMessage: string;
  unread: boolean;
  pinned: boolean;
  messages: ChatMessage[];
}

export const mockConversations: ChatConversation[] = [
  {
    id: "1",
    name: "Tech Store Official",
    lastMessage: "Your order has been shipped!",
    unread: true,
    pinned: true,
    messages: [
      { id: "m1-1", text: "Hi! How can I help you today?", isFromUser: false, timestamp: "10:00" },
      { id: "m1-2", text: "I’d like to check my order status.", isFromUser: true, timestamp: "10:02" },
      { id: "m1-3", text: "Sure, please share your order ID.", isFromUser: false, timestamp: "10:03" },
      { id: "m1-4", text: "Order #12345", isFromUser: true, timestamp: "10:04" },
      { id: "m1-5", text: "Your order has been shipped! Tracking: XYZ123.", isFromUser: false, timestamp: "10:05" },
    ],
  },
  {
    id: "2",
    name: "Fashion Hub",
    lastMessage: "The item is back in stock.",
    unread: true,
    pinned: false,
    messages: [
      { id: "m2-1", text: "Hello! Interested in the blue jacket?", isFromUser: false, timestamp: "09:30" },
      { id: "m2-2", text: "Yes, is size M available?", isFromUser: true, timestamp: "09:32" },
      { id: "m2-3", text: "Let me check for you.", isFromUser: false, timestamp: "09:33" },
      { id: "m2-4", text: "The item is back in stock. You can order now.", isFromUser: false, timestamp: "09:35" },
    ],
  },
  {
    id: "3",
    name: "Home & Living",
    lastMessage: "We offer 30-day returns.",
    unread: false,
    pinned: true,
    messages: [
      { id: "m3-1", text: "Welcome to Home & Living! Any questions?", isFromUser: false, timestamp: "Yesterday" },
      { id: "m3-2", text: "What’s your return policy?", isFromUser: true, timestamp: "Yesterday" },
      { id: "m3-3", text: "We offer 30-day returns for unused items.", isFromUser: false, timestamp: "Yesterday" },
    ],
  },
  {
    id: "4",
    name: "Gadget World",
    lastMessage: "Discount code: SAVE10",
    unread: false,
    pinned: false,
    messages: [
      { id: "m4-1", text: "Use SAVE10 for 10% off your first order!", isFromUser: false, timestamp: "Mon" },
      { id: "m4-2", text: "Thanks, I’ll try that.", isFromUser: true, timestamp: "Mon" },
      { id: "m4-3", text: "You’re welcome! Happy shopping.", isFromUser: false, timestamp: "Mon" },
    ],
  },
];
