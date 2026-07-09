import Link from "next/link";

const sections = [
  {
    id: "closure-eligibility",
    title: "1. Store Closure Eligibility",
    paragraphs: ["Sellers who wish to permanently close their shop must first fulfill all outstanding obligations to buyers and the platform.", "A shop is eligible for closure only if:"],
    bullets: ["There are no pending orders awaiting processing or shipment.", "All completed orders have been fulfilled in accordance with Shopee's Seller Terms.", "There are no ongoing disputes, return/refund requests, chargebacks, or claims.", "All seller obligations and account-related responsibilities have been completed.", "The seller account is in good standing and complies with Shopee's policies."],
    footer: "Shopee reserves the right to decline or postpone a store closure request if these conditions are not met.",
  },
  {
    id: "pending-orders",
    title: "2. Pending Orders",
    paragraphs: ["Pending orders remain the seller's responsibility regardless of whether the seller intends to continue operating the shop.", "Sellers must:"],
    bullets: ["Process all paid orders within the required processing period.", "Ship orders before the shipping deadline.", "Maintain communication with buyers regarding order fulfillment.", "Comply with all marketplace fulfillment standards."],
    footer: "Failure to process pending orders may result in seller penalty points, account restrictions or suspension, delayed release of seller funds, and rejection of store closure requests.",
  },
  {
    id: "withdrawals",
    title: "3. Available Balance & Withdrawals",
    paragraphs: ["Available balances may be subject to review if seller obligations remain outstanding.", "Shopee may temporarily delay withdrawals when:"],
    bullets: ["There are overdue unprocessed orders.", "The account is under investigation.", "Seller obligations have not been fulfilled.", "Platform policies require a temporary fund hold for buyer protection."],
    footer: "Funds become eligible for withdrawal once the account meets all payout requirements.",
  },
  {
    id: "vacation-mode",
    title: "4. Vacation Mode — Temporary Store Pause",
    paragraphs: ["If sellers are temporarily unable to operate their shop, they are encouraged to enable Vacation Mode instead of closing their store.", "Vacation Mode allows sellers to:"],
    bullets: ["Temporarily stop receiving new orders.", "Keep existing shop information.", "Resume operations at a later time.", "Complete all existing orders, resolve pending customer inquiries, and ensure there are no overdue shipments before pausing."],
    footer: "Vacation Mode does not remove a seller's responsibility to fulfill existing orders.",
  },
  {
    id: "suspension",
    title: "5. Store Suspension",
    paragraphs: ["If a shop has been suspended, sellers remain responsible for all outstanding orders placed before the suspension.", "Depending on the reason for suspension, Shopee may require sellers to:"],
    bullets: ["Process pending orders.", "Resolve buyer complaints.", "Complete ongoing transactions.", "Meet platform compliance requirements before any remaining funds are released."],
  },
  {
    id: "permanent-closure",
    title: "6. Permanent Store Closure",
    paragraphs: ["Once all obligations have been completed, sellers may request permanent store closure.", "Before approval, Shopee will verify that:"],
    bullets: ["No active orders remain.", "No pending disputes exist.", "No seller obligations are outstanding.", "The account is eligible for closure under applicable marketplace policies."],
    footer: "Store closure is irreversible in most cases. Sellers should withdraw eligible funds and download any required business records before submitting a closure request.",
  },
];

export default function PlatformPoliciesPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 text-neutral-900 sm:py-12">
      <article className="mx-auto max-w-4xl rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="text-sm font-bold text-[#ee4d2d] no-underline">Back to Shopee</Link>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#ee4d2d]">Platform Policies</span>
        </div>
        <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">Shopee Seller Policy – Store Closure & Vacation Mode</h1>
        <p className="mt-3 text-sm leading-7 text-neutral-600">These rules protect buyers, sellers, and marketplace funds when a store pauses operations or requests permanent closure.</p>
        <nav aria-label="Policy contents" className="mt-7 rounded-lg border border-orange-100 bg-orange-50 p-4">
          <div className="text-sm font-black">Contents</div>
          <ol className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
            {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="inline-flex min-h-9 items-center text-neutral-700 hover:text-[#ee4d2d]">{section.title}</a></li>)}
          </ol>
        </nav>
        <div className="mt-8 space-y-9">
          {sections.map((section) => (
            <section id={section.id} key={section.id} className="scroll-mt-6">
              <h2 className="text-xl font-black">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-7 text-neutral-700">{paragraph}</p>)}
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-neutral-700">
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              {section.footer ? <p className="mt-3 rounded-md bg-neutral-50 p-3 text-sm font-medium leading-7 text-neutral-800">{section.footer}</p> : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
