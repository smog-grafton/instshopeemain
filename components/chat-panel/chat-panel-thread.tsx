"use client";

import { useRef, useEffect, useState } from "react";
import type { ChatMessage } from "./data";

interface ChatPanelThreadProps {
  conversationName: string;
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
}

export function ChatPanelThread({
  conversationName,
  messages,
  onSendMessage,
}: ChatPanelThreadProps) {
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    onSendMessage(text);
    setInput("");
  };

  return (
    <div className="flex h-full flex-col bg-[rgb(245,245,245)]">
      <div className="shrink-0 border-b border-zinc-200 px-4 py-3">
        <h3 className="text-sm font-medium text-zinc-800">{conversationName}</h3>
      </div>
      <div
        ref={listRef}
        className="flex-1 overflow-y-auto px-4 py-3"
      >
        <div className="flex flex-col gap-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                msg.isFromUser
                  ? "ml-auto bg-red-500 text-white"
                  : "mr-auto bg-white text-zinc-800 shadow-sm"
              }`}
            >
              <p className="[word-break:break-word]">{msg.text}</p>
              <p
                className={`mt-1 text-xs ${
                  msg.isFromUser ? "text-red-100" : "text-neutral-400"
                }`}
              >
                {msg.timestamp}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="shrink-0 border-t border-zinc-200 p-3">
        <div className="flex gap-2">
          <input
            type="text"
            className="min-w-0 flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
