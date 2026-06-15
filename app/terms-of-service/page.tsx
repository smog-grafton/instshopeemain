import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Shopee marketplace account, wallet, order, and seller operating terms.",
};

const sections = [
  {
    title: "1. Account Registration",
    body: "You are responsible for keeping your login details, verification codes, transaction passwords, and account information accurate and secure. Shopee may review, limit, suspend, or close accounts that provide false information, misuse platform tools, or create risk for buyers, sellers, or the marketplace.",
  },
  {
    title: "2. Buyer Responsibilities",
    body: "Buyers must place orders using accurate delivery and contact information, pay through supported checkout methods, review order details before payment, and confirm receipt only after goods are received in acceptable condition. Disputes should be raised through Shopee support with clear evidence.",
  },
  {
    title: "3. Seller and Merchant Responsibilities",
    body: "Sellers must keep product details, prices, stock, shipping details, identity documents, and payout information accurate. Sellers are responsible for processing eligible orders within the required processing window, maintaining sufficient wallet balance, and responding to buyers or support in a professional manner.",
  },
  {
    title: "4. Wallets, Top Ups, and Withdrawals",
    body: "Wallet balances may be used for order processing reserves, approved platform services, and withdrawals. Top-up requests may require proof of transfer and are credited after review or payment confirmation. Withdrawal requests are reviewed before release and may take up to 7 business days depending on method, bank, network, compliance checks, or support review.",
  },
  {
    title: "5. Order Processing and Frozen Orders",
    body: "A seller normally has 24 hours to process an eligible order for delivery. If the seller does not process the order within the processing window, Shopee may mark the order as frozen. Frozen orders may require support review before they can continue. Shopee may also hold, reverse, or adjust wallet movements when an order is cancelled, disputed, refunded, or identified as risky.",
  },
  {
    title: "6. Receipt Confirmation and Seller Settlement",
    body: "When a buyer confirms receipt, Shopee may release eligible processing reserves back to the seller wallet together with the seller's configured share of profit. Platform service rules, profit share settings, shipping reserves, refunds, chargebacks, and compliance adjustments may affect the final amount released.",
  },
  {
    title: "7. Prohibited Activities",
    body: "Users may not submit false identity information, manipulate orders, abuse vouchers, bypass platform payments, harass other users, upload unlawful content, sell prohibited goods, interfere with platform systems, or use Shopee for fraud, money laundering, or misleading activity.",
  },
  {
    title: "8. Suspension, Support, and Changes",
    body: "Shopee may suspend tools, freeze orders, request additional information, update operating rules, or restrict accounts when needed to protect the marketplace. Support messages and site notices may be used to communicate important account, order, wallet, or policy updates.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 text-neutral-900 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="border-b border-neutral-200 pb-6">
          <Link href="/register" className="text-sm font-semibold text-[#ee4d2d] no-underline">Back to signup</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-normal">Shopee Terms of Service</h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            These terms explain how Shopee accounts, orders, wallets, seller processing, support, and marketplace services operate.
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">Effective June 15, 2026</p>
        </div>

        <div className="mt-6 space-y-6">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold">{section.title}</h2>
              <p className="mt-2 text-sm leading-7 text-neutral-700">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-orange-100 bg-orange-50 p-4 text-sm leading-6 text-orange-900">
          For account, wallet, seller processing, or order support, contact Shopee Support from your Message Center.
        </div>
      </article>
    </main>
  );
}
