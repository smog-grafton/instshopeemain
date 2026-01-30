"use client";

import { useChat } from "./chat-context";
import { FloatingChatButton } from "@/components/floating-chat-button";
import { ChatPanel } from "@/components/chat-panel";

export function ChatWidget() {
  const { isOpen, openChat, closeChat } = useChat();

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-[1001] transition-all duration-300 ease-[cubic-bezier(.4,0.8,0.74,1)]"
          style={{ bottom: "3px", right: "3px" }}
        >
          <ChatPanel onMinimize={closeChat} />
        </div>
      )}
      {!isOpen && <FloatingChatButton onClick={openChat} />}
    </>
  );
}
