"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getBuyerWallet,
  getBuyerWalletWithdrawals,
  requestBuyerWalletWithdrawal,
  type WalletWithdrawalMethod,
} from "@/lib/api-client";
import { formatPrice } from "@/lib/utils";

type WalletSummary = {
  balance?: string;
  available_balance?: string;
  pending_balance?: string;
  currency?: string;
};

type Message = { type: "success" | "error"; text: string } | null;

const methods: Array<{ value: WalletWithdrawalMethod; label: string; note: string }> = [
  { value: "bank", label: "Bank account", note: "Send payout to a local or international bank account." },
  { value: "crypto", label: "Crypto wallet", note: "Use a wallet address and network such as BTC, USDT TRC20, or ERC20." },
  { value: "binance", label: "Binance ID", note: "Use the Binance account ID supplied by the buyer." },
  { value: "mobile_money", label: "Mobile money", note: "Use a mobile money provider and registered number." },
];

function valueText(value: unknown, fallback = "") {
  if (value === null || value === undefined || value === "") return fallback;
  return String(value);
}

function statusClass(status: string) {
  if (status === "approved" || status === "paid") return "bg-emerald-50 text-emerald-700";
  if (status === "rejected") return "bg-rose-50 text-rose-700";
  return "bg-amber-50 text-amber-700";
}

export function BuyerWithdrawPage() {
  const [wallet, setWallet] = useState<WalletSummary | null>(null);
  const [records, setRecords] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<Message>(null);

  const [method, setMethod] = useState<WalletWithdrawalMethod>("bank");
  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [cryptoNetwork, setCryptoNetwork] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [binanceId, setBinanceId] = useState("");
  const [mobileProvider, setMobileProvider] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const load = () => {
    setLoading(true);
    Promise.allSettled([getBuyerWallet(), getBuyerWalletWithdrawals()])
      .then(([walletResult, recordsResult]) => {
        if (walletResult.status === "fulfilled") setWallet(walletResult.value.wallet);
        if (recordsResult.status === "fulfilled") setRecords(recordsResult.value.records?.data || []);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const availableAmount = Number(wallet?.available_balance ?? wallet?.balance ?? 0);
  const availableBalance = useMemo(
    () => formatPrice(wallet?.currency || "$", Number.isFinite(availableAmount) ? availableAmount : 0),
    [availableAmount, wallet?.currency],
  );

  const selectedMethod = methods.find((item) => item.value === method) || methods[0];
  const canSubmit = Number(amount) >= 10 && confirmed && !submitting;

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);

    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount < 10) {
      setMessage({ type: "error", text: "Minimum withdrawal amount is 10." });
      return;
    }

    if (numericAmount > availableAmount) {
      setMessage({ type: "error", text: "Withdrawal amount is higher than your available balance." });
      return;
    }

    setSubmitting(true);
    try {
      await requestBuyerWalletWithdrawal({
        amount: numericAmount,
        method,
        bank_name: bankName || undefined,
        bank_account_name: accountName || undefined,
        bank_account_number: accountNumber || undefined,
        crypto_network: cryptoNetwork || undefined,
        crypto_address: cryptoAddress || undefined,
        binance_id: binanceId || undefined,
        mobile_money_provider: mobileProvider || undefined,
        mobile_money_number: mobileNumber || undefined,
        phone_number: phoneNumber || undefined,
        notes: notes || undefined,
      });
      setMessage({ type: "success", text: "Withdrawal request submitted. Processing can take up to 7 business days." });
      setAmount("");
      setNotes("");
      setConfirmed(false);
      load();
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Failed to submit withdrawal request." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative grow bg-white shadow-sm lg:ml-7 lg:w-[980px]">
      <div className="border-b border-zinc-100 px-5 py-5 sm:px-6">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Wallet</div>
        <h1 className="mt-1 text-xl font-semibold text-zinc-900">Withdraw funds</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500">Submit a payout request to crypto, Binance, mobile money, or a bank account. Processing can take up to 7 business days.</p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:p-6">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="rounded-lg border border-zinc-200 bg-gradient-to-br from-[#fff8f4] to-white p-4">
            <div className="text-sm text-zinc-500">Available balance</div>
            <div className="mt-2 text-3xl font-semibold text-[#ee4d2d]">{loading ? "Loading..." : availableBalance}</div>
          </div>

          {message ? (
            <div className={`rounded-lg px-4 py-3 text-sm ${message.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
              {message.text}
            </div>
          ) : null}

          <div>
            <label className="text-sm font-medium text-zinc-700">Amount</label>
            <input
              type="number"
              min="10"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Minimum 10"
              className="mt-2 h-11 w-full rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]"
            />
          </div>

          <div>
            <div className="mb-2 text-sm font-medium text-zinc-700">Withdrawal method</div>
            <div className="grid gap-2 sm:grid-cols-2">
              {methods.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setMethod(item.value)}
                  className={`rounded-lg border px-3 py-3 text-left text-sm transition ${
                    method === item.value ? "border-[#ee4d2d] bg-red-50 text-[#ee4d2d]" : "border-zinc-200 bg-white text-zinc-700"
                  }`}
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-zinc-500">{item.note}</span>
                </button>
              ))}
            </div>
          </div>

          {method === "bank" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <input value={bankName} onChange={(event) => setBankName(event.target.value)} placeholder="Bank name" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
              <input value={accountName} onChange={(event) => setAccountName(event.target.value)} placeholder="Account holder name" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
              <input value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} placeholder="Account number" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d] sm:col-span-2" />
            </div>
          ) : null}

          {method === "crypto" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <input value={cryptoNetwork} onChange={(event) => setCryptoNetwork(event.target.value)} placeholder="Network, e.g. USDT TRC20" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
              <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="Contact phone (optional)" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
              <textarea value={cryptoAddress} onChange={(event) => setCryptoAddress(event.target.value)} placeholder="Wallet address" rows={3} className="rounded-md border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-[#ee4d2d] sm:col-span-2" />
            </div>
          ) : null}

          {method === "binance" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <input value={binanceId} onChange={(event) => setBinanceId(event.target.value)} placeholder="Binance ID" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
              <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="Contact phone (optional)" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
            </div>
          ) : null}

          {method === "mobile_money" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <input value={mobileProvider} onChange={(event) => setMobileProvider(event.target.value)} placeholder="Provider, e.g. MTN" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
              <input value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)} placeholder="Registered mobile money number" className="h-11 rounded-md border border-zinc-200 px-3 text-sm outline-none focus:border-[#ee4d2d]" />
            </div>
          ) : null}

          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            placeholder="Notes for the payout team (optional)"
            className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-[#ee4d2d]"
          />

          <label className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 text-sm leading-6 text-zinc-600">
            <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} className="mt-1" />
            I confirm the payout details are correct. Incorrect details can delay processing.
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            className="h-11 w-full rounded-md bg-[#ee4d2d] px-4 text-sm font-semibold text-white transition hover:bg-[#d83f21] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {submitting ? "Submitting..." : `Submit ${selectedMethod.label}`}
          </button>
        </form>

        <aside className="space-y-3">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
            <div className="text-sm font-semibold text-zinc-900">Withdrawal timeline</div>
            <p className="mt-2 text-sm leading-6 text-zinc-600">Requests move to pending immediately, then admin approval releases the reserved balance to your payout channel.</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4">
            <div className="mb-3 text-sm font-semibold text-zinc-900">Recent requests</div>
            {records.length === 0 ? <div className="text-sm text-zinc-500">No withdrawal requests yet.</div> : null}
            <div className="space-y-2">
              {records.slice(0, 5).map((record) => {
                const status = valueText(record.status, "pending");
                return (
                  <div key={valueText(record.id)} className="rounded-md border border-zinc-100 p-3 text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-zinc-900">{valueText(record.currency, "$")} {Number(record.amount ?? 0).toFixed(2)}</span>
                      <span className={`rounded-full px-2 py-1 text-[11px] font-semibold capitalize ${statusClass(status)}`}>{status}</span>
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">{valueText(record.method, "bank")} - {valueText(record.created_at)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
