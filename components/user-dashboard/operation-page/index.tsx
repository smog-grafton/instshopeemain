"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChatPanel } from "@/components/chat-panel";
import {
  getBrowsingHistory,
  getBuyerWallet,
  getBuyerWalletTransactions,
  getFollowedStores,
  getNotifications,
} from "@/lib/api-client";

export type BuyerOperationKind =
  | "current-balance"
  | "my-message"
  | "site-message"
  | "billing"
  | "recharge-record"
  | "withdrawals-record"
  | "followed-stores"
  | "browsing-history";

type RecordMap = Record<string, unknown>;

const titles: Record<BuyerOperationKind, string> = {
  "current-balance": "Current balance",
  "my-message": "My message",
  "site-message": "Site message",
  billing: "Billing Details",
  "recharge-record": "Recharge record",
  "withdrawals-record": "Withdrawals record",
  "followed-stores": "Stores you follow",
  "browsing-history": "Browsing history",
};

function isRecord(value: unknown): value is RecordMap {
  return typeof value === "object" && value !== null;
}

function rows(value: unknown): RecordMap[] {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (isRecord(value) && Array.isArray(value.data)) return value.data.filter(isRecord);
  return [];
}

function valueText(value: unknown, fallback = "") {
  if (value === null || value === undefined || value === "") return fallback;
  return String(value);
}

function money(value: unknown, currency = "$") {
  const amount = Number(value ?? 0);
  return `${currency} ${Number.isFinite(amount) ? amount.toFixed(2) : "0.00"}`;
}

function resolveBackendAssetUrl(path: string) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) return path;
  const apiBase = (process.env.NEXT_PUBLIC_LARAVEL_API_URL || "").replace(/\/api\/?$/, "").replace(/\/$/, "");
  return apiBase ? `${apiBase}/${path.replace(/^\/+/, "")}` : `/${path.replace(/^\/+/, "")}`;
}

function EmptyState({ text }: { text: string }) {
  return <div className="border border-dashed border-zinc-200 bg-white px-5 py-10 text-center text-sm text-zinc-500">{text}</div>;
}

export function BuyerOperationPage({ kind }: { kind: BuyerOperationKind }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<RecordMap>({});

  useEffect(() => {
    let active = true;
    setLoading(true);

    async function load() {
      if (kind === "current-balance") {
        const res = await getBuyerWallet();
        if (active) setData({ wallet: res.wallet });
      } else if (kind === "site-message") {
        const messages = await getNotifications("shopee");
        if (active) setData({ messages });
      } else if (kind === "billing" || kind === "recharge-record" || kind === "withdrawals-record") {
        const res = await getBuyerWalletTransactions();
        if (active) setData({ transactions: res.transactions });
      } else if (kind === "followed-stores") {
        const res = await getFollowedStores();
        if (active) setData({ stores: res.stores || [] });
      } else if (kind === "browsing-history") {
        const res = await getBrowsingHistory();
        if (active) setData({ history: res.items || [] });
      } else if (active) {
        setData({});
      }
    }

    load()
      .catch(() => {
        if (active) setData({});
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [kind]);

  const wallet = isRecord(data.wallet) ? data.wallet : {};
  const currency = valueText(wallet.currency, "$");
  const transactions = rows(data.transactions);
  const filteredTransactions = transactions.filter((item) => {
    const type = valueText(item.type).toLowerCase();
    if (kind === "recharge-record") return type.includes("topup") || type.includes("deposit");
    if (kind === "withdrawals-record") return type.includes("withdraw");
    return true;
  });

  return (
    <div className="relative grow bg-white shadow-sm lg:ml-7 lg:w-[980px]">
      <div className="border-b border-zinc-100 px-6 py-5">
        <h1 className="text-lg font-medium text-zinc-800">{titles[kind]}</h1>
      </div>
      <div className="p-6">
        {loading ? <div className="py-10 text-center text-sm text-zinc-500">Loading...</div> : null}

        {!loading && kind === "current-balance" ? (
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-zinc-200 bg-white p-5">
              <div className="text-sm text-zinc-500">Available balance</div>
              <div className="mt-3 text-3xl font-semibold text-red-500">{money(wallet.available_balance ?? wallet.balance, currency)}</div>
            </div>
            <div className="border border-zinc-200 bg-white p-5">
              <div className="text-sm text-zinc-500">Pending balance</div>
              <div className="mt-3 text-3xl font-semibold text-zinc-900">{money(wallet.pending_balance, currency)}</div>
            </div>
            <Link href="/user/wallet" className="flex items-center justify-center border border-red-500 bg-red-500 p-5 text-center text-sm font-semibold text-white no-underline">
              Add funds
            </Link>
          </div>
        ) : null}

        {!loading && kind === "my-message" ? (
          <div className="min-h-[640px]">
            <ChatPanel onMinimize={() => {}} />
          </div>
        ) : null}

        {!loading && kind === "site-message" ? (
          <div className="space-y-4">
            {rows(data.messages).length === 0 ? <EmptyState text="No site messages yet." /> : null}
            {rows(data.messages).map((item) => (
              <div key={valueText(item.id)} className="border border-zinc-200 bg-white p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <div className="font-semibold text-zinc-900">{valueText(item.title, "System information")}</div>
                  <div className="text-xs text-zinc-500">{valueText(item.createdAt)}</div>
                </div>
                <div className="mt-3 whitespace-pre-wrap text-sm leading-6 text-zinc-600">{valueText(item.message)}</div>
              </div>
            ))}
          </div>
        ) : null}

        {!loading && (kind === "billing" || kind === "recharge-record" || kind === "withdrawals-record") ? (
          <div className="space-y-4">
            {filteredTransactions.length === 0 ? <EmptyState text="No records found." /> : null}
            {filteredTransactions.map((item) => (
              <div key={valueText(item.id)} className="grid gap-3 border border-zinc-200 bg-white p-5 text-sm sm:grid-cols-[160px_1fr]">
                <div className="font-semibold text-zinc-500">Trading pair</div><div className="text-zinc-900">{valueText(item.type, "Wallet transaction")}</div>
                <div className="font-semibold text-zinc-500">ID:</div><div>{valueText(item.id)}</div>
                <div className="font-semibold text-zinc-500">Amount</div><div className={Number(item.amount) < 0 ? "font-semibold text-red-600" : "font-semibold text-emerald-600"}>{valueText(item.amount)}</div>
                <div className="font-semibold text-zinc-500">Balance</div><div>{valueText(item.balance_after ?? item.balance)}</div>
                <div className="font-semibold text-zinc-500">Time</div><div>{valueText(item.created_at)}</div>
              </div>
            ))}
          </div>
        ) : null}

        {!loading && kind === "followed-stores" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {rows(data.stores).length === 0 ? <EmptyState text="You are not following any stores yet." /> : null}
            {rows(data.stores).map((store) => {
              const logo = resolveBackendAssetUrl(valueText(store.logo_url));
              return (
                <Link key={valueText(store.id)} href={`/shop/${valueText(store.slug)}`} className="flex gap-4 border border-zinc-200 bg-white p-4 no-underline">
                  {logo ? <Image src={logo} alt="" width={64} height={64} className="h-16 w-16 object-cover" /> : <div className="h-16 w-16 bg-zinc-100" />}
                  <div>
                    <div className="font-semibold text-zinc-900">{valueText(store.name, "Store")}</div>
                    <div className="mt-1 text-sm text-zinc-500">{valueText(store.followers_count, "0")} followers</div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}

        {!loading && kind === "browsing-history" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {rows(data.history).length === 0 ? <EmptyState text="No browsing history yet." /> : null}
            {rows(data.history).map((item) => {
              const product = isRecord(item.product) ? item.product : {};
              const image = resolveBackendAssetUrl(valueText(product.thumbnail_url));
              return (
                <Link key={valueText(item.id)} href={`/product/${valueText(product.slug)}`} className="flex gap-4 border border-zinc-200 bg-white p-4 no-underline">
                  {image ? <Image src={image} alt="" width={64} height={64} className="h-16 w-16 object-cover" /> : <div className="h-16 w-16 bg-zinc-100" />}
                  <div>
                    <div className="font-semibold text-zinc-900">{valueText(product.title, "Product")}</div>
                    <div className="mt-1 text-sm text-zinc-500">{valueText(product.shop_name, "Shop")}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
