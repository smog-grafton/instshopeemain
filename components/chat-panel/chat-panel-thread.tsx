"use client";

import { useRef, useEffect, useState } from "react";
import type { ChatConversation, ChatProduct } from "./data";

interface ChatPanelThreadProps {
  conversation: ChatConversation;
  onSendMessage: (text: string) => void;
  onToggleListOnly?: () => void;
  onUpdateProduct?: (product: ChatProduct) => void;
}

function ProductBadge({ label }: { label: string }) {
  return (
    <span className="rounded bg-orange-50 px-2 py-0.5 text-[11px] text-orange-600">
      {label}
    </span>
  );
}

function IconSmile() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-4 7a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-5.2 4.2a1 1 0 011.4 0 4 4 0 005.6 0 1 1 0 111.4 1.4 6 6 0 01-8.4 0 1 1 0 010-1.4z"
      />
    </svg>
  );
}

function IconImage() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" aria-hidden>
      <path
        fill="currentColor"
        d="M4 5a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v9l3-3 2 2 5-5 4 4V5a1 1 0 00-1-1H7zm10 16a1 1 0 001-1v-4.17l-3.29-3.3-5 5-2-2-3 3V19a1 1 0 001 1h10z"
      />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" aria-hidden>
      <path
        fill="currentColor"
        d="M4 6a3 3 0 013-3h7a3 3 0 013 3v2l4-2v12l-4-2v2a3 3 0 01-3 3H7a3 3 0 01-3-3V6zm3-1a1 1 0 00-1 1v12a1 1 0 001 1h7a1 1 0 001-1V6a1 1 0 00-1-1H7z"
      />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" aria-hidden>
      <path
        fill="currentColor"
        d="M9 3l1.5 2H15l1-2h2a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h3zm3 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
      />
    </svg>
  );
}

function IconUpload() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" aria-hidden>
      <path
        fill="currentColor"
        d="M12 3l4 4h-3v6h-2V7H8l4-4zm-7 14h14v2H5v-2z"
      />
    </svg>
  );
}

function IconSend() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-orange-500" aria-hidden>
      <path
        fill="currentColor"
        d="M2 21l20-9L2 3v7l14 2-14 2v7z"
      />
    </svg>
  );
}

export function ChatPanelThread({
  conversation,
  onSendMessage,
  onToggleListOnly,
  onUpdateProduct,
}: ChatPanelThreadProps) {
  const threadMessages = conversation.messages;
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [productPinned, setProductPinned] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  }, [threadMessages]);

  useEffect(() => {
    setShowPicker(false);
    setProductPinned(true);
  }, [conversation.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    onSendMessage(text);
    setInput("");
  };

  const product = conversation.product;
  const suggestions = conversation.suggestions || [];
  const recentProducts = conversation.recentProducts || (product ? [product] : []);

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-3 py-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
            <img
              src={conversation.avatarUrl || "/images/stores/profile/default.webp"}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-zinc-800 truncate">{conversation.name}</span>
        </div>
        <button
          type="button"
          onClick={onToggleListOnly}
          className="whitespace-nowrap text-xs text-neutral-500 hover:text-neutral-700"
        >
          Collapse
        </button>
      </div>

      {product && (
        <div className="shrink-0 border-b border-neutral-200 bg-white px-3 py-3 sm:px-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded border border-neutral-200">
              <img src={product.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-sm font-medium text-zinc-800">{product.title}</div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                {product.badges?.map((b) => (
                  <ProductBadge key={b} label={b} />
                ))}
              </div>
              <div className="mt-1 text-sm text-red-500">
                {product.price}{" "}
                {product.originalPrice && (
                  <span className="ml-2 text-xs text-neutral-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>
            {product.href && (
              <a
                href={product.href}
                className="inline-flex h-8 shrink-0 items-center justify-center rounded bg-red-500 px-3 text-xs font-medium leading-none text-white hover:bg-red-600"
              >
                Buy Now
              </a>
            )}
          </div>
        </div>
      )}

      <div ref={listRef} className="flex-1 overflow-y-auto bg-[rgb(245,245,245)] px-3 py-4 sm:px-4">
        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-white px-4 py-1 text-xs text-neutral-500 shadow">Today</span>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-700 sm:flex-nowrap sm:px-4">
          <span className="text-amber-500">ⓘ</span>
          <span className="flex-1 text-amber-700">
            Safety Tip: Always chat and complete transactions within Shopee to protect yourself from scams.
          </span>
          <a className="shrink-0 text-sm text-blue-600" href="#">
            Learn More
          </a>
        </div>

        {conversation.assistantIntro && (
          <div className="mb-4 max-w-[92%] rounded-lg bg-white p-4 text-sm text-zinc-800 shadow-sm sm:max-w-[85%]">
            <div className="text-base font-medium">{conversation.assistantIntro}</div>
            {suggestions.length > 0 && (
              <>
                <div className="mt-4 border-t border-neutral-100 pt-3 text-sm text-neutral-700">
                  You may want to ask:
                </div>
                <div className="mt-2 space-y-2">
                  {suggestions.map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => onSendMessage(q)}
                      className="block w-full text-left text-blue-600 hover:underline"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="h-9 rounded border border-orange-200 bg-orange-50 px-4 text-sm font-medium text-orange-600">
                Chat with Seller
              </button>
              <button className="h-9 w-9 rounded border border-neutral-200 text-neutral-400">👍</button>
              <button className="h-9 w-9 rounded border border-neutral-200 text-neutral-400">👎</button>
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              Sent by Chat AI Assistant{" "}
              <span className="float-right">{conversation.assistantTimestamp}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {threadMessages.map((msg, index) => (
            <div
              key={`${conversation.id}-${String(msg.id)}-${index}-${msg.timestamp}`}
              className={`max-w-[92%] rounded-lg px-3 py-2 text-sm sm:max-w-[85%] ${
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

        {conversation.isTyping && (
          <div className="mt-2 max-w-[75%] rounded-lg bg-white px-3 py-2 text-xs text-neutral-500 shadow-sm sm:max-w-[60%]">
            Seller is typing...
          </div>
        )}

        {product && productPinned && (
          <div className="relative mt-4 max-w-[96%] rounded-lg bg-white p-3 shadow-sm sm:max-w-[92%]">
            <div className="absolute right-2 top-2 flex items-center gap-2 text-neutral-400">
              <button
                type="button"
                onClick={() => setShowPicker((v) => !v)}
                className="rounded border border-neutral-200 px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-50"
              >
                Change
              </button>
              <button
                type="button"
                onClick={() => setProductPinned(false)}
                className="rounded px-1 text-neutral-400 hover:text-neutral-600"
              >
                ✕
              </button>
            </div>
            <div className="text-xs text-neutral-400 mb-2">You're inquiring about this item</div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded border border-neutral-200">
                <img src={product.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm text-zinc-800">{product.title}</div>
                <div className="text-sm text-red-500">
                  {product.price}
                  {product.originalPrice && (
                    <span className="ml-2 text-xs text-neutral-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {showPicker && recentProducts.length > 0 && (
              <div className="mt-3 border-t border-neutral-100 pt-3">
                <div className="text-xs text-neutral-500 mb-2">Recent items</div>
                <div className="space-y-2">
                  {recentProducts.map((p) => (
                    <button
                      key={p.id ?? p.title}
                      type="button"
                      onClick={() => {
                        onUpdateProduct?.(p);
                        setShowPicker(false);
                      }}
                      className="flex w-full items-center gap-2 rounded border border-neutral-200 bg-neutral-50 px-2 py-2 text-left text-xs hover:bg-white"
                    >
                      <img src={p.image} alt="" className="h-8 w-8 rounded object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-neutral-700">{p.title}</div>
                        <div className="text-orange-600">{p.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="shrink-0 border-t border-zinc-200 px-3 py-3 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="flex shrink-0 items-center gap-2 text-slate-400 sm:gap-3">
            <IconSmile />
            <IconImage />
            <div className="hidden items-center gap-3 sm:flex">
              <IconVideo />
              <IconCamera />
              <IconUpload />
            </div>
          </div>
          <input
            type="text"
            className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-neutral-400"
            placeholder="Type a message here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="rounded-full p-2 hover:bg-neutral-100">
            <IconSend />
          </button>
        </div>
      </form>
    </div>
  );
}
