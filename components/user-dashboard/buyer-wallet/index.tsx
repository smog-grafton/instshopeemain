"use client";

import { useEffect, useState } from "react";
import { getBuyerWallet, getWalletDepositMethods, requestBuyerWalletTopup } from "@/lib/api-client";

type PaymentDetailRow = {
  label: string;
  value: string;
  copyable?: boolean;
};

type PaymentDetailCard = {
  title: string;
  rows: PaymentDetailRow[];
};

type DepositMethod = {
  id: number;
  key: string;
  name: string;
  type: string;
  logo_url?: string | null;
  config?: Record<string, unknown> | string | null;
};

type WalletSummary = {
  balance: string;
  currency: string;
  available_balance?: string;
  pending_balance?: string;
};

type MessageState =
  | {
      type: "success" | "error";
      text: string;
    }
  | null;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const readText = (value: unknown): string => {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return String(value);
  return "";
};

const prettifyKey = (key: string) =>
  key
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const parseConfig = (config: DepositMethod["config"]): Record<string, unknown> => {
  if (!config) return {};
  if (typeof config === "string") {
    try {
      const parsed = JSON.parse(config) as unknown;
      return isRecord(parsed) ? parsed : {};
    } catch {
      return {};
    }
  }
  return isRecord(config) ? config : {};
};

const getFirstValue = (source: Record<string, unknown>, keys: string[]) => {
  for (const key of keys) {
    const value = readText(source[key]);
    if (value) return value;
  }
  return "";
};

const DETAIL_FIELD_KEYS = new Set([
  "label",
  "title",
  "name",
  "bank_name",
  "account_name",
  "account_number",
  "beneficiary_name",
  "holder_name",
  "phone_number",
  "mobile_number",
  "number",
  "address",
  "wallet_address",
  "network",
  "currency",
  "branch",
  "swift",
  "swift_code",
  "bic",
  "iban",
  "sort_code",
  "reference",
  "instructions",
  "note",
  "accounts",
  "bank_accounts",
]);

const buildDetailCard = (source: Record<string, unknown>, index: number): PaymentDetailCard | null => {
  const title =
    getFirstValue(source, ["label", "title", "name"]) ||
    getFirstValue(source, ["bank_name"]) ||
    (getFirstValue(source, ["network"]) ? `${getFirstValue(source, ["network"])} Wallet` : "") ||
    (getFirstValue(source, ["address", "wallet_address"]) ? "Wallet Address" : "") ||
    `Payment Details ${index + 1}`;

  const rows: PaymentDetailRow[] = [];
  const seenRows = new Set<string>();

  const pushRow = (label: string, value: string, copyable: boolean = false) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    const key = `${label}:${trimmed}`;
    if (seenRows.has(key)) return;
    seenRows.add(key);
    rows.push({ label, value: trimmed, copyable });
  };

  pushRow("Bank", getFirstValue(source, ["bank_name"]));
  pushRow("Account Name", getFirstValue(source, ["account_name", "beneficiary_name", "holder_name"]));
  pushRow("Account Number", getFirstValue(source, ["account_number"]), true);
  pushRow("Phone Number", getFirstValue(source, ["phone_number", "mobile_number", "number"]), true);
  pushRow("Wallet Address", getFirstValue(source, ["address", "wallet_address"]), true);
  pushRow("Network", getFirstValue(source, ["network"]));
  pushRow("Currency", getFirstValue(source, ["currency"]));
  pushRow("Branch", getFirstValue(source, ["branch"]));
  pushRow("SWIFT / BIC", getFirstValue(source, ["swift", "swift_code", "bic"]), true);
  pushRow("IBAN", getFirstValue(source, ["iban"]), true);
  pushRow("Sort Code", getFirstValue(source, ["sort_code"]), true);
  pushRow("Reference", getFirstValue(source, ["reference"]), true);

  for (const [key, rawValue] of Object.entries(source)) {
    if (DETAIL_FIELD_KEYS.has(key)) continue;
    const value = readText(rawValue);
    if (!value) continue;
    const copyable = /address|number|code|iban|swift|reference/i.test(key);
    pushRow(prettifyKey(key), value, copyable);
  }

  if (rows.length === 0) return null;

  return { title, rows };
};

const buildDetailCards = (config: Record<string, unknown>): PaymentDetailCard[] => {
  const sources: Record<string, unknown>[] = [];

  const pushSourceList = (value: unknown) => {
    if (!Array.isArray(value)) return;
    for (const item of value) {
      if (isRecord(item)) sources.push(item);
    }
  };

  pushSourceList(config.accounts);
  pushSourceList(config.bank_accounts);

  const cards = sources
    .map((source, index) => buildDetailCard(source, index))
    .filter((card): card is PaymentDetailCard => card !== null);

  const topLevelCard = buildDetailCard(config, cards.length);
  if (topLevelCard) {
    cards.push(topLevelCard);
  }

  return cards;
};

export function BuyerWalletPage() {
  const [loading, setLoading] = useState(true);
  const [methodsLoading, setMethodsLoading] = useState(true);
  const [wallet, setWallet] = useState<WalletSummary | null>(null);
  const [methods, setMethods] = useState<DepositMethod[]>([]);
  const [amount, setAmount] = useState("");
  const [methodId, setMethodId] = useState<number | null>(null);
  const [reference, setReference] = useState("");
  const [proof, setProof] = useState<File | null>(null);
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<MessageState>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    getBuyerWallet()
      .then((r) => setWallet(r.wallet))
      .catch(() => setWallet(null))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    setMethodsLoading(true);
    getWalletDepositMethods()
      .then((r) => setMethods(r.methods || []))
      .catch(() => setMethods([]))
      .finally(() => setMethodsLoading(false));
  }, []);

  useEffect(() => {
    if (!proof) {
      setProofPreview(null);
      return;
    }

    const previewUrl = URL.createObjectURL(proof);
    setProofPreview(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [proof]);

  const selectedMethod = methods.find((method) => method.id === methodId) ?? null;
  const selectedConfig = parseConfig(selectedMethod?.config);
  const detailCards = buildDetailCards(selectedConfig);
  const methodInstructions =
    getFirstValue(selectedConfig, ["instructions", "note"]) ||
    (selectedMethod?.type === "manual"
      ? "Send your payment using the details below, then upload a clear screenshot as proof so the admin team can verify and approve the top-up."
      : "Complete any gateway steps required for this method, then submit your top-up request.");
  const manualMethods = methods.filter((method) => method.type === "manual");
  const automaticMethods = methods.filter((method) => method.type !== "manual");
  const automaticMethodNames = automaticMethods.map((method) => method.name).join(", ");

  const copyValue = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((currentKey) => (currentKey === key ? null : currentKey));
      }, 1800);
    } catch {
      setCopiedKey(null);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const n = parseFloat(amount);
    if (!n || n < 10) {
      setMessage({ type: "error", text: "Minimum top-up amount is 10." });
      return;
    }
    if (!methodId) {
      setMessage({ type: "error", text: "Select a payment method." });
      return;
    }
    const selected = methods.find((m) => m.id === methodId);
    if (selected?.type === "manual" && !proof) {
      setMessage({ type: "error", text: "Proof of transfer is required for this method." });
      return;
    }
    setSubmitting(true);
    try {
      await requestBuyerWalletTopup({
        amount: n,
        payment_method_id: methodId,
        reference: reference || undefined,
        notes: notes || undefined,
        proof: proof ?? undefined,
      });
      setMessage({
        type: "success",
        text: "Top-up request submitted. Your balance will update after approval.",
      });
      setAmount("");
      setReference("");
      setProof(null);
      setNotes("");
      load();
    } catch (err) {
      setMessage({
        type: "error",
        text: err instanceof Error ? err.message : "Request failed",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading && !wallet) {
    return <div className="py-12 text-center text-gray-500">Loading wallet…</div>;
  }

  const bal = wallet ? parseFloat(String(wallet.available_balance ?? wallet.balance ?? "0")) : 0;
  const pending = wallet ? parseFloat(String(wallet.pending_balance ?? "0")) : 0;
  const cur = wallet?.currency ?? "MYR";

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">My Wallet</h1>
        <p className="mt-1 text-sm text-gray-500">
          Use this balance at checkout. If you also have a seller account, its funds stay separate from this buyer wallet.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Available balance</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">
            {cur} {bal.toFixed(2)}
          </div>
          <p className="mt-2 text-xs text-gray-500">Ready to use for checkout.</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="text-sm text-gray-500">Pending top-ups</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">
            {cur} {pending.toFixed(2)}
          </div>
          <p className="mt-2 text-xs text-gray-500">Submitted requests waiting for admin approval.</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 shadow-sm">
          <div className="text-sm font-medium text-orange-900">How manual methods work</div>
          <p className="mt-2 text-sm text-orange-800">
            Pick a method, send the money using the backend-configured instructions, then upload a screenshot or receipt.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-5 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <h2 className="text-sm font-semibold text-gray-800">Request top-up</h2>
          <p className="mt-1 text-xs text-gray-500">
            Payment instructions below come from the admin payment-method setup in the backend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-gray-600">Amount (min. 10)</label>
            <input
              type="number"
              min={10}
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-10 w-full rounded border border-gray-200 px-3 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">Payment method</label>
            <select
              value={methodId ?? ""}
              onChange={(e) => setMethodId(e.target.value ? Number(e.target.value) : null)}
              className="h-10 w-full rounded border border-gray-200 px-3 text-sm"
              disabled={methodsLoading || manualMethods.length === 0}
            >
              <option value="">
                {methodsLoading
                  ? "Loading methods..."
                  : manualMethods.length > 0
                    ? "Select a manual payment method"
                    : "No manual methods available"}
              </option>
              {manualMethods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.name}
                </option>
              ))}
            </select>
            {automaticMethods.length > 0 && (
              <p className="mt-2 text-xs text-gray-500">
                Configured in admin but not yet handled as instant wallet top-ups here: {automaticMethodNames}.
              </p>
            )}
          </div>
        </div>

        {selectedMethod ? (
          <div className="space-y-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-900">{selectedMethod.name}</div>
                <p className="mt-1 text-xs text-gray-600">
                  {selectedMethod.type === "manual"
                    ? "Send payment first, then upload proof so the admin team can verify it."
                    : "Use this gateway for your top-up request and include a reference if you receive one."}
                </p>
              </div>
              <span
                className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
                  selectedMethod.type === "manual"
                    ? "bg-orange-100 text-orange-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {selectedMethod.type === "manual" ? "Manual verification" : "Gateway"}
              </span>
            </div>

            <div className="rounded-lg border border-white bg-white p-3 text-sm text-gray-700">
              <div className="text-xs font-medium uppercase tracking-wide text-gray-400">Instructions</div>
              <div className="mt-2 whitespace-pre-line">{methodInstructions}</div>
            </div>

            {detailCards.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {detailCards.map((card, index) => (
                  <div key={`${card.title}-${index}`} className="rounded-lg border border-white bg-white p-4">
                    <div className="text-sm font-semibold text-gray-800">{card.title}</div>
                    <div className="mt-3 space-y-3">
                      {card.rows.map((row) => {
                        const rowKey = `${card.title}-${row.label}-${row.value}`;
                        return (
                          <div
                            key={rowKey}
                            className="flex flex-col gap-2 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                          >
                            <div className="min-w-0">
                              <div className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                                {row.label}
                              </div>
                              <div className="mt-1 break-all text-sm text-gray-700">{row.value}</div>
                            </div>
                            {row.copyable && (
                              <button
                                type="button"
                                onClick={() => copyValue(rowKey, row.value)}
                                className="inline-flex h-8 w-fit items-center rounded border border-gray-200 px-3 text-xs font-medium text-gray-600 hover:bg-gray-50"
                              >
                                {copiedKey === rowKey ? "Copied" : "Copy"}
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-orange-200 bg-white/80 p-3 text-xs text-gray-500">
                No custom destination details are configured for this method yet. If this gateway needs account or wallet
                details, add them in the backend payment-method config so customers can see them here.
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-4 text-sm text-gray-500">
            Choose a payment method to see its transfer instructions and destination details.
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-gray-600">Reference / Transaction ID (optional)</label>
            <input
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Enter transfer reference"
              className="h-10 w-full rounded border border-gray-200 px-3 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">
              Transfer proof {selectedMethod?.type === "manual" ? "*" : "(optional)"}
            </label>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setProof(e.target.files?.[0] ?? null)}
              className="block w-full text-sm text-gray-600 file:mr-4 file:rounded file:border-0 file:bg-orange-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-orange-700 hover:file:bg-orange-200"
            />
            {proof && <p className="mt-2 text-xs text-gray-500">Selected file: {proof.name}</p>}
          </div>
        </div>

        {proofPreview && (
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-400">Proof Preview</div>
            <img src={proofPreview} alt="Transfer proof preview" className="mt-3 max-h-64 rounded border border-gray-100" />
          </div>
        )}

        <div>
          <label className="mb-1 block text-xs text-gray-600">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
            placeholder="Add anything the admin should know about this payment."
          />
        </div>

        {message && (
          <div
            className={`rounded-lg border px-3 py-2 text-sm ${
              message.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-600"
            }`}
          >
            {message.text}
          </div>
        )}

        {manualMethods.length === 0 && !methodsLoading && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            No manual wallet top-up methods are configured right now.
          </div>
        )}

        <button
          type="submit"
          disabled={submitting || methodsLoading || manualMethods.length === 0}
          className="h-10 w-full rounded bg-orange-600 text-sm font-medium text-white hover:bg-orange-700 disabled:opacity-50"
        >
          {submitting ? "Submitting…" : "Submit top-up request"}
        </button>
      </form>
    </div>
  );
}
