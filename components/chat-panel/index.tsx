"use client";

import { useState, useCallback, useEffect } from "react";
import { ChatPanelHeader } from "./chat-panel-header";
import { ChatPanelSidebar } from "./chat-panel-sidebar";
import { ChatPanelWelcome } from "./chat-panel-welcome";
import { ChatPanelThread } from "./chat-panel-thread";
import {
  mockConversations,
  type ChatFilter,
  type ChatConversation,
  type ChatMessage,
} from "./data";

interface ChatPanelProps {
  onMinimize: () => void;
}

export function ChatPanel({ onMinimize }: ChatPanelProps) {
  const [conversations, setConversations] = useState<ChatConversation[]>(() =>
    mockConversations.map((c) => ({ ...c, messages: [...c.messages] }))
  );
  const [filter, setFilter] = useState<ChatFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [listOnly, setListOnly] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const selected = selectedId
    ? conversations.find((c) => c.id === selectedId) ?? null
    : null;

  const handleMinimize = useCallback(() => {
    setExiting(true);
  }, []);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.propertyName === "opacity" && exiting) {
        onMinimize();
      }
    },
    [exiting, onMinimize]
  );

  const handleSendMessage = useCallback(
    (text: string) => {
      if (!selectedId) return;
      const newMsg: ChatMessage = {
        id: `m-${Date.now()}`,
        text,
        isFromUser: true,
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      };
      setConversations((prev) =>
        prev.map((c) =>
          c.id === selectedId
            ? {
                ...c,
                lastMessage: text,
                unread: false,
                messages: [...c.messages, newMsg],
              }
            : c
        )
      );
    },
    [selectedId]
  );

  return (
    <div
      role="dialog"
      aria-label="Chat"
      id="shopee-mini-chat-embedded"
      className={`cursor-default flex h-[582px] w-[642px] flex-col rounded-t border border-solid border-neutral-200 bg-white shadow transition-all duration-300 ease-[cubic-bezier(.4,0.8,0.74,1)] [font-family:Roboto,Droid_Sans,Arial,sans-serif] text-sm leading-tight text-black/80 ${
        entered && !exiting ? "opacity-100" : "opacity-0"
      }`}
      onTransitionEnd={handleTransitionEnd}
      style={{ transitionProperty: "opacity" }}
    >
      <ChatPanelHeader onShowListOnly={() => setListOnly((v) => !v)} onMinimize={handleMinimize} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <ChatPanelSidebar
            conversations={conversations}
            filter={filter}
            onFilterChange={setFilter}
            selectedId={selectedId}
            onSelectConversation={setSelectedId}
          />
          <div
            className={`relative z-[999] h-full shrink-0 border-l border-l-zinc-200 transition-all duration-[300ms] ease-[cubic-bezier(.4,0.8,0.74,1)] ${
              listOnly ? "w-0 overflow-hidden border-l-0" : "w-96 grow"
            }`}
          >
            {selected ? (
              <ChatPanelThread
                conversationName={selected.name}
                messages={selected.messages}
                onSendMessage={handleSendMessage}
              />
            ) : (
              <ChatPanelWelcome />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
