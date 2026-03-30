"use client";

import { useEffect } from "react";
import { useChat } from "./chat-context";
import { FloatingChatButton } from "@/components/floating-chat-button";
import { ChatPanel } from "@/components/chat-panel";

export function ChatWidget() {
  const { isOpen, openChat, closeChat, payload, clearPayload } = useChat();

  useEffect(() => {
    if (!isOpen) return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[999] bg-black/10 backdrop-blur-[1px] lg:hidden"
            aria-hidden
          />
          <div
            className="fixed inset-x-2 bottom-[calc(env(safe-area-inset-bottom)+0.5rem)] top-2 z-[1001] flex items-end justify-end transition-all duration-300 ease-[cubic-bezier(.4,0.8,0.74,1)] lg:inset-auto lg:bottom-[3px] lg:right-[3px]"
          >
            <ChatPanel onMinimize={closeChat} openPayload={payload} onPayloadConsumed={clearPayload} />
          </div>
        </>
      )}
      {!isOpen && <FloatingChatButton onClick={openChat} />}
    </>
  );
}
