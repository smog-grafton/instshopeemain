export type ChatFilter = "all" | "unread" | "pinned";

export interface ChatMessage {
  id: string;
  text: string;
  isFromUser: boolean;
  senderType: string;
  senderLabel?: string;
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
  messages: ChatMessage[];
}
