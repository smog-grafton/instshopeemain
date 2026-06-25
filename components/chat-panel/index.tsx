"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChatPanelHeader } from "./chat-panel-header";
import { ChatPanelSidebar } from "./chat-panel-sidebar";
import { ChatPanelThread } from "./chat-panel-thread";
import { ChatPanelWelcome } from "./chat-panel-welcome";
import type { ChatFilter, ChatConversation, ChatMessage } from "./data";
import type { ChatOpenPayload } from "@/components/chat-widget/chat-context";
import { getChatMessages, getChatThreads, sendChatMessage, setChatThreadProduct, startChatThread } from "@/lib/api-client";

interface ChatPanelProps {
  onMinimize: () => void;
  openPayload?: ChatOpenPayload | null;
  onPayloadConsumed?: () => void;
}

function isNumericId(value: string | null) {
  return Boolean(value && /^\d+$/.test(value));
}

function getStreamBaseUrl() {
  const raw = (process.env.NEXT_PUBLIC_LARAVEL_API_URL ?? "").replace(/\/+$/, "");
  if (!raw) return "";
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

function normalizeProduct(product?: any) {
  if (!product) return undefined;
  return {
    ...product,
    image: product.image || "/images/placeholders/shopee-product-placeholder.jpg",
  };
}

function mapApiMessage(message: any): ChatMessage {
  return {
    id: String(message.id),
    text: message.text ?? "",
    isFromUser: message.sender_type === "buyer",
    senderType: message.sender_type ?? "seller",
    senderLabel: message.sender_label,
    timestamp: message.timestamp ?? "",
    meta: message.meta
      ? {
          ...message.meta,
          product: normalizeProduct(message.meta.product),
        }
      : null,
  };
}

function mapThreadToConversation(thread: any, fallback?: ChatConversation): ChatConversation {
  const normalizedProduct = normalizeProduct(thread.product) || fallback?.product;
  const normalizedRecent = Array.isArray(thread.recentProducts)
    ? thread.recentProducts.map((product: any) => normalizeProduct(product)).filter(Boolean)
    : fallback?.recentProducts || [];

  return {
    id: String(thread.id),
    name: thread.shopName || fallback?.name || "Shop",
    avatarUrl: thread.avatarUrl || fallback?.avatarUrl || "/images/stores/profile/default.webp",
    lastMessage: thread.lastMessage || "",
    lastMessageAt: thread.lastMessageAt || "",
    unread: Boolean(thread.unread),
    pinned: fallback?.pinned ?? false,
    product: normalizedProduct,
    recentProducts: normalizedRecent,
    isTyping: fallback?.isTyping ?? false,
    messages: fallback?.messages || [],
  };
}

export function ChatPanel({ onMinimize, openPayload, onPayloadConsumed }: ChatPanelProps) {
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [filter, setFilter] = useState<ChatFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [listOnly, setListOnly] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [entered, setEntered] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [loadingThreads, setLoadingThreads] = useState(true);
  const [chatError, setChatError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const conversationsRef = useRef(conversations);

  useEffect(() => {
    conversationsRef.current = conversations;
  }, [conversations]);

  useEffect(() => {
    const t = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const syncCompact = () => setIsCompact(media.matches);

    syncCompact();
    media.addEventListener("change", syncCompact);

    return () => {
      media.removeEventListener("change", syncCompact);
    };
  }, []);

  useEffect(() => {
    setLoadingThreads(true);
    getChatThreads()
      .then((res) => {
        const threads = res.threads.map((thread) => mapThreadToConversation(thread));
        setConversations(threads);
        if (!selectedId && threads.length > 0) {
          setSelectedId(threads[0].id);
        }
      })
      .catch((error) => setChatError(error instanceof Error ? error.message : "Unable to load chats."))
      .finally(() => setLoadingThreads(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getChatThreads()
        .then((res) => {
          setConversations((prev) =>
            res.threads.map((thread) => {
              const existing = prev.find((conversation) => conversation.id === String(thread.id));
              return mapThreadToConversation(thread, existing);
            })
          );
        })
        .catch(() => {});
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!openPayload) return;

    if (!openPayload.vendorId) {
      setChatError("We could not identify the seller for this chat.");
      onPayloadConsumed?.();
      return;
    }

    setChatError(null);
    startChatThread(openPayload.vendorId, openPayload.product?.id)
      .then((res) => {
        const nextConversation = mapThreadToConversation(res.thread);
        setConversations((prev) => {
          const existing = prev.find((conversation) => conversation.id === nextConversation.id);
          return existing
            ? prev.map((conversation) => (conversation.id === nextConversation.id ? { ...conversation, ...nextConversation } : conversation))
            : [nextConversation, ...prev];
        });
        setSelectedId(nextConversation.id);
      })
      .catch((error) => {
        setChatError(error instanceof Error ? error.message : "We could not load this product for chat. Please refresh the page or try again.");
      })
      .finally(() => onPayloadConsumed?.());
  }, [openPayload, onPayloadConsumed]);

  useEffect(() => {
    if (selectedId || conversations.length === 0) return;
    setSelectedId(conversations[0].id);
  }, [conversations, selectedId]);

  useEffect(() => {
    if (!selectedId || !isNumericId(selectedId)) return;

    getChatMessages(selectedId)
      .then((res) => {
        setConversations((prev) =>
          prev.map((conversation) =>
            conversation.id === selectedId
              ? {
                  ...conversation,
                  unread: false,
                  messages: res.messages.map(mapApiMessage),
                }
              : conversation
          )
        );
      })
      .catch(() => {});
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId || !isNumericId(selectedId)) return;

    const streamBase = getStreamBaseUrl();
    if (!streamBase) return;

    const thread = conversationsRef.current.find((conversation) => conversation.id === selectedId);
    const lastId = thread?.messages
      .map((message) => Number(message.id))
      .filter((id) => !Number.isNaN(id))
      .reduce((max, id) => (id > max ? id : max), 0);
    const url = `${streamBase}/v1/chat/threads/${selectedId}/stream${lastId && lastId > 0 ? `?last_id=${lastId}` : ""}`;
    const source = new EventSource(url, { withCredentials: true });

    source.addEventListener("message", (event) => {
      try {
        const data = mapApiMessage(JSON.parse(event.data));
        setConversations((prev) =>
          prev.map((conversation) => {
            if (conversation.id !== selectedId) return conversation;
            if (conversation.messages.some((message) => message.id === data.id)) return conversation;

            return {
              ...conversation,
              isTyping: false,
              unread: false,
              lastMessage: data.text,
              lastMessageAt: data.timestamp || conversation.lastMessageAt,
              messages: [...conversation.messages, data],
            };
          })
        );
      } catch {
        // ignore malformed events
      }
    });

    source.addEventListener("typing", (event) => {
      try {
        const data = JSON.parse(event.data);
        setConversations((prev) =>
          prev.map((conversation) =>
            conversation.id === selectedId ? { ...conversation, isTyping: Boolean(data.typing) } : conversation
          )
        );
      } catch {
        // ignore malformed events
      }
    });

    source.onerror = () => {
      source.close();
    };

    return () => {
      source.close();
    };
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId || !isNumericId(selectedId)) return;

    const interval = setInterval(() => {
      const thread = conversationsRef.current.find((conversation) => conversation.id === selectedId);
      const lastId = thread?.messages
        .map((message) => Number(message.id))
        .filter((id) => !Number.isNaN(id))
        .reduce((max, id) => (id > max ? id : max), 0);

      getChatMessages(selectedId, lastId && lastId > 0 ? lastId : undefined)
        .then((res) => {
          if (!res.messages || res.messages.length === 0) return;

          setConversations((prev) =>
            prev.map((conversation) => {
              if (conversation.id !== selectedId) return conversation;

              const incoming = res.messages.map(mapApiMessage);
              const existingIds = new Set(conversation.messages.map((message) => String(message.id)));
              const toAdd = incoming.filter((message) => !existingIds.has(String(message.id)));

              if (toAdd.length === 0) return conversation;

              return {
                ...conversation,
                unread: false,
                isTyping: false,
                lastMessage: toAdd[toAdd.length - 1].text,
                lastMessageAt: toAdd[toAdd.length - 1].timestamp || conversation.lastMessageAt,
                messages: [...conversation.messages, ...toAdd],
              };
            })
          );
        })
        .catch(() => {});
    }, 4500);

    return () => clearInterval(interval);
  }, [selectedId]);

  const selected = selectedId ? conversations.find((conversation) => conversation.id === selectedId) ?? null : null;
  const showSidebar = isCompact ? listOnly : true;
  const showThread = isCompact ? !listOnly : true;

  const handleMinimize = useCallback(() => {
    setExiting(true);
  }, []);

  const handleTransitionEnd = useCallback(
    (event: React.TransitionEvent) => {
      if (event.propertyName === "opacity" && exiting) {
        onMinimize();
      }
    },
    [exiting, onMinimize]
  );

  const handleSendMessage = useCallback(
    (text: string) => {
      if (!selectedId || !isNumericId(selectedId) || sending) return;

      const timestamp = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const tempId = `tmp-${Date.now()}`;
      const tempMessage: ChatMessage = {
        id: tempId,
        text,
        isFromUser: true,
        senderType: "buyer",
        senderLabel: "You",
        timestamp,
      };

      setSending(true);
      setChatError(null);
      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === selectedId
            ? {
                ...conversation,
                unread: false,
                isTyping: false,
                lastMessage: text,
                lastMessageAt: timestamp,
                messages: [...conversation.messages, tempMessage],
              }
            : conversation
        )
      );

      const thread = conversationsRef.current.find((conversation) => conversation.id === selectedId);

      sendChatMessage(selectedId, text, thread?.product?.id)
        .then((res) => {
          const persistedMessage = mapApiMessage(res.message);

          setConversations((prev) =>
            prev.map((conversation) =>
              conversation.id === selectedId
                ? {
                    ...conversation,
                    lastMessage: persistedMessage.text,
                    lastMessageAt: persistedMessage.timestamp || conversation.lastMessageAt,
                    messages: [
                      ...conversation.messages.filter((message) => message.id !== tempId),
                      persistedMessage,
                    ],
                  }
                : conversation
            )
          );
        })
        .catch((error) => {
          setChatError(error instanceof Error ? error.message : "Message could not be sent. Please try again.");
          setConversations((prev) =>
            prev.map((conversation) =>
              conversation.id === selectedId
                ? {
                    ...conversation,
                    messages: conversation.messages.filter((message) => message.id !== tempId),
                  }
                : conversation
            )
          );
        })
        .finally(() => setSending(false));
    },
    [selectedId, sending]
  );

  return (
    <div
      role="dialog"
      aria-label="Chat"
      id="shopee-mini-chat-embedded"
      className={`cursor-default flex h-full max-h-[calc(100dvh_-_1rem_-_env(safe-area-inset-bottom))] w-full max-w-[42rem] flex-col overflow-hidden rounded-[0.95rem] border border-solid border-neutral-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition-all duration-300 ease-[cubic-bezier(.4,0.8,0.74,1)] [font-family:Roboto,Droid_Sans,Arial,sans-serif] text-sm leading-tight text-black/80 sm:max-h-[calc(100dvh_-_1.5rem)] lg:h-[582px] lg:max-h-[582px] lg:w-[642px] lg:rounded-t lg:rounded-b-none lg:shadow ${
        entered && !exiting ? "opacity-100" : "opacity-0"
      }`}
      onTransitionEnd={handleTransitionEnd}
      style={{ transitionProperty: "opacity" }}
    >
      <ChatPanelHeader onShowListOnly={() => setListOnly((value) => !value)} onMinimize={handleMinimize} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="relative flex flex-1 overflow-hidden">
          {showSidebar && (
            <ChatPanelSidebar
              conversations={conversations}
              filter={filter}
              onFilterChange={setFilter}
              selectedId={selectedId}
              onSelectConversation={(id) => {
                setSelectedId(id);
                setConversations((prev) =>
                  prev.map((conversation) =>
                    conversation.id === id ? { ...conversation, unread: false, isTyping: false } : conversation
                  )
                );
                if (isCompact) {
                  setListOnly(false);
                }
              }}
            />
          )}
          {showThread && (
            <div
              className={`relative z-[999] h-full min-w-0 overflow-hidden ${
                isCompact
                  ? "w-full"
                  : `shrink-0 border-l border-l-zinc-200 transition-all duration-[300ms] ease-[cubic-bezier(.4,0.8,0.74,1)] ${
                      listOnly ? "w-0 border-l-0" : "w-96 grow"
                    }`
              }`}
            >
              {selected ? (
                <ChatPanelThread
                  conversation={selected}
                  onSendMessage={handleSendMessage}
                  sending={sending}
                  loading={loadingThreads}
                  error={chatError}
                  onToggleListOnly={() => setListOnly((value) => !value)}
                  onUpdateProduct={(product) => {
                    setConversations((prev) =>
                      prev.map((conversation) => (conversation.id === selected.id ? { ...conversation, product } : conversation))
                    );

                    if (product.id && isNumericId(selected.id)) {
                      setChatThreadProduct(selected.id, product.id)
                        .then((res) => {
                          const normalized = (res.recent_products || []).map((item: any) => normalizeProduct(item)).filter(Boolean);
                          setConversations((prev) =>
                            prev.map((conversation) =>
                              conversation.id === selected.id
                                ? { ...conversation, recentProducts: normalized.length > 0 ? normalized : conversation.recentProducts }
                                : conversation
                            )
                          );
                        })
                        .catch(() => {});
                    }
                  }}
                />
              ) : (
                <ChatPanelWelcome loading={loadingThreads} error={chatError} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
