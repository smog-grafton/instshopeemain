"use client";

import { createContext, useContext, useState, useCallback } from "react";

export interface ChatProductContext {
  id?: number;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  href?: string;
  badges?: string[];
  soldLabel?: string;
}

export interface ChatOpenPayload {
  shopName: string;
  shopSlug?: string;
  vendorId?: number;
  product?: ChatProductContext;
}

interface ChatContextValue {
  isOpen: boolean;
  openChat: (payload?: ChatOpenPayload) => void;
  closeChat: () => void;
  payload: ChatOpenPayload | null;
  clearPayload: () => void;
}

const ChatContext = createContext<ChatContextValue | null>(null);

export function useChat(): ChatContextValue {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    return {
      isOpen: false,
      openChat: () => {},
      closeChat: () => {},
      payload: null,
      clearPayload: () => {},
    };
  }
  return ctx;
}

interface ChatProviderProps {
  children: React.ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState<ChatOpenPayload | null>(null);
  const openChat = useCallback((nextPayload?: ChatOpenPayload) => {
    if (nextPayload) setPayload(nextPayload);
    setIsOpen(true);
  }, []);
  const closeChat = useCallback(() => {
    setIsOpen(false);
    setPayload(null);
  }, []);
  const clearPayload = useCallback(() => setPayload(null), []);

  return (
    <ChatContext.Provider value={{ isOpen, openChat, closeChat, payload, clearPayload }}>
      {children}
    </ChatContext.Provider>
  );
}
