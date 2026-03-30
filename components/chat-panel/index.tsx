"use client";

import { useState, useCallback, useEffect, useRef } from "react";
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
import type { ChatOpenPayload } from "@/components/chat-widget/chat-context";
import {
  getChatThreads,
  getChatMessages,
  sendChatMessage,
  setChatThreadProduct,
  startChatThread,
} from "@/lib/api-client";

interface ChatPanelProps {
  onMinimize: () => void;
  openPayload?: ChatOpenPayload | null;
  onPayloadConsumed?: () => void;
}

function toSlug(value?: string | null) {
  if (!value) return "shop";
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function isNumericId(value: string | null) {
  return Boolean(value && /^\d+$/.test(value));
}

function normalizeProduct(product?: any) {
  if (!product) return undefined;
  return {
    ...product,
    image: product.image || "/images/common/no-image.png",
  };
}

function mapThreadToConversation(t: any, fallback?: ChatConversation): ChatConversation {
  const normalizedProduct = normalizeProduct(t.product) || fallback?.product;
  const normalizedRecent = Array.isArray(t.recentProducts)
    ? t.recentProducts.map((p: any) => normalizeProduct(p))
    : fallback?.recentProducts || [];
  return {
    id: t.id,
    name: t.shopName,
    avatarUrl: t.avatarUrl || "/images/stores/profile/default.webp",
    lastMessage: t.lastMessage || "",
    lastMessageAt: t.lastMessageAt || "",
    unread: t.unread,
    pinned: fallback?.pinned ?? false,
    product: normalizedProduct,
    recentProducts: normalizedRecent.filter(Boolean),
    isTyping: fallback?.isTyping ?? false,
    assistantIntro:
      fallback?.assistantIntro ||
      "Hi there! Thanks for your interest! Want to know more about this product? I’ve got all the details you need — just ask away!",
    assistantTimestamp: t.lastMessageAt || fallback?.assistantTimestamp || "now",
    suggestions: fallback?.suggestions || [
      "Can I request for an exchange instead of raising a refund?",
      "Can I add more products to a paid order?",
      "Can you wrap my parcel using a bubble wrap or cardboard?",
    ],
    messages: fallback?.messages || [],
  };
}

export function ChatPanel({ onMinimize, openPayload, onPayloadConsumed }: ChatPanelProps) {
  const [conversations, setConversations] = useState<ChatConversation[]>(() =>
    mockConversations.map((c) => ({ ...c, messages: [...c.messages] }))
  );
  const [filter, setFilter] = useState<ChatFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [listOnly, setListOnly] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [entered, setEntered] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
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
    getChatThreads()
      .then((res) => {
        const threads = res.threads.map((t) => mapThreadToConversation(t));
        if (threads.length > 0) {
          setConversations(threads);
          if (!selectedId) setSelectedId(threads[0].id);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getChatThreads()
        .then((res) => {
          const apiThreads: ChatConversation[] = res.threads.map((t: any) => {
            const existing = conversationsRef.current.find((c) => c.id === t.id);
            return mapThreadToConversation(t, existing);
          });
          setConversations((prev) => {
            const existingIds = new Set(apiThreads.map((t) => t.id));
            const extras = prev.filter((c) => !existingIds.has(c.id));
            return [...apiThreads, ...extras];
          });
        })
        .catch(() => {});
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!openPayload) return;
    if (openPayload.vendorId) {
      startChatThread(openPayload.vendorId, openPayload.product?.id)
        .then((res) => {
          const t = res.thread;
          const next: ChatConversation = mapThreadToConversation(t);
          setConversations((prev) => {
            const exists = prev.find((c) => c.id === t.id);
            return exists ? prev.map((c) => (c.id === t.id ? { ...c, ...next } : c)) : [next, ...prev];
          });
          setSelectedId(t.id);
        })
        .finally(() => onPayloadConsumed?.());
      return;
    }
    const shopName = openPayload.shopName || "Shop";
    const shopSlug = openPayload.shopSlug || shopName;
    const convoId = `shop-${toSlug(shopSlug)}`;
    const fallbackProducts = [
      {
        title: "WRIMO Flex Run Sneakers",
        image: "/images/products/2.webp",
        price: "RM19.90",
        originalPrice: "RM59.00",
        badges: ["Popular"],
        href: "/product/wrimo-flex-run",
      },
    ];
    setConversations((prev) => {
      const existing = prev.find((c) => c.id === convoId);
      if (existing) {
        return prev.map((c) =>
          c.id === convoId
            ? {
                ...c,
                name: shopName,
                product: openPayload.product ?? c.product,
                recentProducts: openPayload.product
                  ? [openPayload.product, ...(c.recentProducts || fallbackProducts)]
                  : c.recentProducts,
                lastMessage: c.lastMessage || "Hi there! Thanks for your interest...",
                lastMessageAt: c.lastMessageAt || "now",
              }
            : c
        );
      }
      const intro =
        "Hi there! Thanks for your interest! Want to know more about this product? I’ve got all the details you need — just ask away!";
      return [
        {
          id: convoId,
          name: shopName,
          avatarUrl: "/images/profile/shop/default.webp",
          lastMessage: "Hi there! Thanks for your interest...",
          lastMessageAt: "now",
          unread: false,
          pinned: false,
          product: openPayload.product,
          recentProducts: openPayload.product ? [openPayload.product, ...fallbackProducts] : fallbackProducts,
          assistantIntro: intro,
          assistantTimestamp: "now",
          suggestions: [
            "Can I request for an exchange instead of raising a refund?",
            "Can I add more products to a paid order?",
            "Can you wrap my parcel using a bubble wrap or cardboard?",
          ],
          messages: [
            {
              id: `m-${Date.now()}`,
              text: "Hi there! Thanks for your interest!",
              isFromUser: false,
              timestamp: "now",
            },
          ],
        },
        ...prev,
      ];
    });
    setSelectedId(convoId);
    onPayloadConsumed?.();
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
          prev.map((c) =>
            c.id === selectedId
              ? {
                  ...c,
                  messages: res.messages.map((m) => ({
                    id: m.id,
                    text: m.text,
                    isFromUser: m.sender_type === "buyer",
                    timestamp: m.timestamp,
                  })),
                }
              : c
          )
        );
      })
      .catch(() => {});
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId || !isNumericId(selectedId)) return;
    const base = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
    if (!base) return;
    const thread = conversationsRef.current.find((c) => c.id === selectedId);
    const lastId = thread?.messages
      .map((m) => Number(m.id))
      .filter((id) => !Number.isNaN(id))
      .reduce((max, id) => (id > max ? id : max), 0);
    const url = `${base}/v1/chat/threads/${selectedId}/stream${lastId && lastId > 0 ? `?last_id=${lastId}` : ""}`;
    const source = new EventSource(url, { withCredentials: true });

    source.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data);
        setConversations((prev) =>
          prev.map((c) => {
            if (c.id !== selectedId) return c;
            if (c.messages.some((m) => m.id === data.id)) return c;
            return {
              ...c,
              isTyping: false,
              lastMessage: data.text,
              lastMessageAt: data.timestamp || c.lastMessageAt,
              unread: false,
              messages: [
                ...c.messages,
                {
                  id: data.id,
                  text: data.text,
                  isFromUser: data.sender_type === "buyer",
                  timestamp: data.timestamp,
                },
              ],
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
          prev.map((c) => (c.id === selectedId ? { ...c, isTyping: Boolean(data.typing) } : c))
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
      const thread = conversationsRef.current.find((c) => c.id === selectedId);
      const lastId = thread?.messages
        .map((m) => Number(m.id))
        .filter((id) => !Number.isNaN(id))
        .reduce((max, id) => (id > max ? id : max), 0);
      getChatMessages(selectedId, lastId && lastId > 0 ? lastId : undefined)
        .then((res) => {
          if (!res.messages || res.messages.length === 0) return;
          setConversations((prev) =>
            prev.map((c) => {
              if (c.id !== selectedId) return c;
              const incoming = res.messages.map((m) => ({
                id: m.id,
                text: m.text,
                isFromUser: m.sender_type === "buyer",
                timestamp: m.timestamp,
              }));
              const existingIds = new Set(c.messages.map((m) => String(m.id)));
              const toAdd = incoming.filter((m) => !existingIds.has(String(m.id)));
              if (toAdd.length === 0) return c;
              return {
                ...c,
                lastMessage: incoming[incoming.length - 1].text,
                lastMessageAt: incoming[incoming.length - 1].timestamp || c.lastMessageAt,
                unread: false,
                messages: [...c.messages, ...toAdd],
              };
            })
          );
        })
        .catch(() => {});
    }, 4500);
    return () => clearInterval(interval);
  }, [selectedId]);

  const selected = selectedId
    ? conversations.find((c) => c.id === selectedId) ?? null
    : null;
  const showSidebar = isCompact ? listOnly : true;
  const showThread = isCompact ? !listOnly : true;

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
      const timeLabel = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const tempId = `tmp-${Date.now()}`;
      const newMsg: ChatMessage = {
        id: tempId,
        text,
        isFromUser: true,
        timestamp: timeLabel,
      };
      setConversations((prev) =>
        prev.map((c) =>
          c.id === selectedId
            ? {
                ...c,
                lastMessage: text,
                lastMessageAt: timeLabel,
                unread: false,
                isTyping: false,
                messages: [...c.messages, newMsg],
              }
            : c
        )
      );
      if (!isNumericId(selectedId)) return;
      const thread = conversations.find((c) => c.id === selectedId);
      sendChatMessage(selectedId, text, thread?.product?.id)
        .then((res) => {
          setConversations((prev) =>
            prev.map((c) =>
              c.id === selectedId
                ? {
                    ...c,
                    lastMessage: res.message.text,
                    lastMessageAt: res.message.timestamp || c.lastMessageAt,
                    messages: [
                      ...c.messages.filter((m) => m.id !== tempId),
                      {
                        id: res.message.id,
                        text: res.message.text,
                        isFromUser: true,
                        timestamp: res.message.timestamp,
                      },
                    ],
                  }
                : c
            )
          );
        })
        .catch(() => {});
    },
    [selectedId, conversations]
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
      <ChatPanelHeader onShowListOnly={() => setListOnly((v) => !v)} onMinimize={handleMinimize} />
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
                  prev.map((c) => (c.id === id ? { ...c, unread: false, isTyping: false } : c))
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
                  onToggleListOnly={() => setListOnly((v) => !v)}
                  onUpdateProduct={(product) => {
                    setConversations((prev) =>
                      prev.map((c) =>
                        c.id === selected.id ? { ...c, product } : c
                      )
                    );
                    if (product.id && isNumericId(selected.id)) {
                      setChatThreadProduct(selected.id, product.id)
                        .then((res) => {
                          const normalized = (res.recent_products || []).map((p: any) => normalizeProduct(p));
                          setConversations((prev) =>
                            prev.map((c) =>
                              c.id === selected.id
                                ? { ...c, recentProducts: normalized.filter(Boolean) || c.recentProducts }
                                : c
                            )
                          );
                        })
                        .catch(() => {});
                    }
                  }}
                />
              ) : (
                <ChatPanelWelcome />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
