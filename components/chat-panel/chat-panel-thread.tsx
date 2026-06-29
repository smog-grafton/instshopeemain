"use client";

import { useRef, useEffect, useState } from "react";
import type { ChatAttachment, ChatConversation, ChatProduct } from "./data";

interface ChatPanelThreadProps {
  conversation: ChatConversation;
  onSendMessage: (text: string, attachment?: File) => void;
  sending?: boolean;
  loading?: boolean;
  error?: string | null;
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
  sending = false,
  loading = false,
  error = null,
  onToggleListOnly,
  onUpdateProduct,
}: ChatPanelThreadProps) {
  const threadMessages = conversation.messages;
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [productPinned, setProductPinned] = useState(true);
  const [selectedAttachment, setSelectedAttachment] = useState<File | null>(null);
  const [attachmentPreview, setAttachmentPreview] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  }, [threadMessages]);

  useEffect(() => {
    setShowPicker(false);
    setShowEmojiPicker(false);
    setProductPinned(true);
    setSelectedAttachment(null);
  }, [conversation.id]);

  useEffect(() => {
    if (!selectedAttachment || !selectedAttachment.type.startsWith("image/")) {
      setAttachmentPreview(null);
      return;
    }

    const url = URL.createObjectURL(selectedAttachment);
    setAttachmentPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [selectedAttachment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text && !selectedAttachment) return;
    onSendMessage(text, selectedAttachment ?? undefined);
    setInput("");
    setSelectedAttachment(null);
    setShowEmojiPicker(false);
  };

  const product = conversation.product;
  const recentProducts = conversation.recentProducts || (product ? [product] : []);
  const appendEmoji = (emoji: string) => setInput((value) => `${value}${value ? " " : ""}${emoji}`);
  const toolbarButtonClass = "inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-100";
  const emojis = ["😊", "👍", "🙏", "😍", "🔥", "✅", "🎁", "💬"];

  const handleAttachmentSelect = (file?: File | null) => {
    if (!file) return;
    setSelectedAttachment(file);
  };

  const renderAttachments = (attachments?: ChatAttachment[] | null, isFromUser = false) => {
    if (!attachments?.length) return null;

    return (
      <div className="mt-2 space-y-2">
        {attachments.map((attachment, idx) => (
          attachment.type === "image" ? (
            <a key={attachment.id ?? `${attachment.url}-${idx}`} href={attachment.url} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-md border border-black/10 bg-white/10">
              <img src={attachment.url} alt={attachment.name} className="max-h-48 w-full object-cover" />
              <span className={`block truncate px-2 py-1 text-xs ${isFromUser ? "text-red-50" : "text-neutral-500"}`}>{attachment.name}</span>
            </a>
          ) : (
            <a
              key={attachment.id ?? `${attachment.url}-${idx}`}
              href={attachment.url}
              download={attachment.name}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-xs no-underline ${
                isFromUser ? "border-white/30 bg-white/10 text-white" : "border-neutral-200 bg-neutral-50 text-zinc-700"
              }`}
            >
              <span className="truncate">{attachment.name}</span>
              <span className={isFromUser ? "text-red-50" : "text-orange-600"}>Download</span>
            </a>
          )
        ))}
      </div>
    );
  };

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
        <div className="mb-4 flex flex-wrap items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-700 sm:flex-nowrap sm:px-4">
          <span className="text-amber-500">ⓘ</span>
          <span className="flex-1 text-amber-700">
            Safety Tip: Always chat and complete transactions within Shopee to protect yourself from scams.
          </span>
          <a className="shrink-0 text-sm text-blue-600" href="#">
            Learn More
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {loading && threadMessages.length === 0 && (
            <div className="max-w-[85%] animate-pulse rounded-lg bg-white px-4 py-3 text-sm text-neutral-400 shadow-sm">
              Loading messages...
            </div>
          )}
          {error && (
            <div className="max-w-[92%] rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700 shadow-sm sm:max-w-[85%]">
              {error}
            </div>
          )}
          {threadMessages.length === 0 && (
            <div className="max-w-[92%] rounded-lg bg-white px-4 py-3 text-sm text-neutral-600 shadow-sm sm:max-w-[85%]">
              Start the conversation here. Seller replies and chat support replies will appear in this thread.
            </div>
          )}
          {threadMessages.map((msg, index) => (
            <div
              key={`${conversation.id}-${String(msg.id)}-${index}-${msg.timestamp}`}
              className={`max-w-[92%] rounded-lg px-3 py-2 text-sm sm:max-w-[85%] ${
                msg.isFromUser
                  ? "ml-auto bg-red-500 text-white"
                  : msg.senderType === "admin"
                    ? "mr-auto border border-sky-100 bg-sky-50 text-sky-900"
                    : "mr-auto bg-white text-zinc-800 shadow-sm"
              }`}
            >
              {!msg.isFromUser && (
                <p
                  className={`mb-1 text-[11px] font-medium uppercase tracking-[0.08em] ${
                    msg.senderType === "admin" ? "text-sky-600" : "text-neutral-400"
                  }`}
                >
                  {msg.senderLabel || (msg.senderType === "admin" ? "Customer Support" : conversation.name)}
                </p>
              )}
              <p className="[word-break:break-word]">{msg.text}</p>
              {renderAttachments(msg.meta?.attachments, msg.isFromUser)}
              {msg.meta?.product && (
                <a
                  href={msg.meta.product.href || "#"}
                  className={`mt-2 flex gap-2 rounded-md border p-2 no-underline ${
                    msg.isFromUser ? "border-white/30 bg-white/10 text-white" : "border-neutral-100 bg-neutral-50 text-zinc-800"
                  }`}
                >
                  <img src={msg.meta.product.image} alt="" className="h-10 w-10 shrink-0 rounded object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-medium">{msg.meta.product.title}</span>
                    <span className={msg.isFromUser ? "text-xs text-red-100" : "text-xs text-red-500"}>
                      {msg.meta.product.price}
                    </span>
                  </span>
                </a>
              )}
              <p
                className={`mt-1 text-xs ${
                  msg.isFromUser
                    ? "text-red-100"
                    : msg.senderType === "admin"
                      ? "text-sky-500"
                      : "text-neutral-400"
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
              {recentProducts.length > 1 && (
                <button
                  type="button"
                  onClick={() => setShowPicker((v) => !v)}
                  className="rounded border border-neutral-200 px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-50"
                >
                  Change
                </button>
              )}
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
        {selectedAttachment && (
          <div className="mb-2 flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2">
            {attachmentPreview ? <img src={attachmentPreview} alt="" className="h-12 w-12 rounded object-cover" /> : null}
            <div className="min-w-0 flex-1 text-xs">
              <div className="truncate font-medium text-zinc-700">{selectedAttachment.name}</div>
              <div className="text-neutral-400">{Math.ceil(selectedAttachment.size / 1024)} KB</div>
            </div>
            <button type="button" onClick={() => setSelectedAttachment(null)} className="rounded px-2 py-1 text-xs text-neutral-500 hover:bg-white">Remove</button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <div className="flex shrink-0 items-center gap-2 text-slate-400 sm:gap-3">
            <input ref={imageInputRef} type="file" accept="image/*" className="hidden" onChange={(event) => handleAttachmentSelect(event.target.files?.[0])} />
            <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={(event) => handleAttachmentSelect(event.target.files?.[0])} />
            <input ref={fileInputRef} type="file" className="hidden" onChange={(event) => handleAttachmentSelect(event.target.files?.[0])} />
            <button
              type="button"
              onClick={() => setShowEmojiPicker((value) => !value)}
              className={toolbarButtonClass}
              title="Insert emoji"
              aria-label="Insert emoji"
            >
              <IconSmile />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-16 left-3 z-10 grid grid-cols-4 gap-1 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg">
                {emojis.map((emoji) => (
                  <button key={emoji} type="button" onClick={() => appendEmoji(emoji)} className="h-8 w-8 rounded text-lg hover:bg-neutral-100">
                    {emoji}
                  </button>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              className={toolbarButtonClass}
              title="Attach image"
              aria-label="Attach image"
            >
              <IconImage />
            </button>
            <div className="hidden items-center gap-3 sm:flex">
              <button type="button" onClick={() => cameraInputRef.current?.click()} className={toolbarButtonClass} title="Open camera" aria-label="Open camera">
                <IconCamera />
              </button>
              <button type="button" onClick={() => fileInputRef.current?.click()} className={toolbarButtonClass} title="Attach file" aria-label="Attach file">
                <IconUpload />
              </button>
            </div>
          </div>
          <input
            type="text"
            className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-neutral-400"
            placeholder="Type a message here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={sending}
          />
          <button type="submit" disabled={sending || (!input.trim() && !selectedAttachment)} className="rounded-full p-2 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50">
            <IconSend />
          </button>
        </div>
      </form>
    </div>
  );
}
