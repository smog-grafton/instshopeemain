"use client";

import { ChatProvider } from "./chat-context";
import { CartProvider } from "@/components/cart";
import { ChatWidget } from "./index";

interface LayoutWithChatProps {
  children: React.ReactNode;
}

/** Wraps app in ChatProvider, CartProvider and renders the sticky chat widget on every page. */
export function LayoutWithChat({ children }: LayoutWithChatProps) {
  return (
    <ChatProvider>
      <CartProvider>
        {children}
        <ChatWidget />
      </CartProvider>
    </ChatProvider>
  );
}
