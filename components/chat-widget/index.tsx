"use client";

import { useState } from "react";
import { FloatingChatButton } from "@/components/floating-chat-button";
import { ChatPanel } from "@/components/chat-panel";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-[1001] transition-all duration-300 ease-[cubic-bezier(.4,0.8,0.74,1)]"
          style={{ bottom: "3px", right: "3px" }}
        >
          <ChatPanel onMinimize={() => setIsOpen(false)} />
        </div>
      )}
      {!isOpen && <FloatingChatButton onClick={() => setIsOpen(true)} />}
    </>
  );
}
