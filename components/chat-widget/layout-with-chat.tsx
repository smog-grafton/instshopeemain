"use client";

import { ChatProvider } from "./chat-context";
import { ChatWidget } from "./index";

interface LayoutWithChatProps {
  children: React.ReactNode;
}

/** Wraps app in ChatProvider and renders the sticky chat widget on every page. */
export function LayoutWithChat({ children }: LayoutWithChatProps) {
  return (
    <ChatProvider>
      {children}
      <ChatWidget />
    </ChatProvider>
  );
}
