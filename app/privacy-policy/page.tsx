import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "How Shopee collects, uses, stores, and protects marketplace account data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "Shopee collects account details such as name, username, email, phone number, country, login activity, seller status, and support preferences. We also collect wallet, top-up, withdrawal, payment, order, delivery, product, and transaction information needed to operate the marketplace.",
  },
  {
    title: "2. Merchant Verification Documents",
    body: "When a user applies to become a merchant, Shopee may collect identity document images, business registration documents, store details, bank or payout information, phone verification data, and related review notes. These records are used for onboarding, risk checks, compliance, and seller support.",
  },
  {
    title: "3. Messages and Support Data",
    body: "Buyer, seller, and admin support messages may be stored so Shopee can provide customer service, resolve disputes, review frozen orders, investigate wallet issues, and send site messages or important operational notices.",
  },
  {
    title: "4. Device and Browser Information",
    body: "We may collect device, browser, session, IP, cookie, and security information to protect accounts, prevent abuse, maintain login sessions, support verification codes, and improve reliability across supported browsers.",
  },
  {
    title: "5. How Information Is Used",
    body: "Information is used to create and secure accounts, process orders, calculate wallet balances, review top-ups and withdrawals, support seller processing rules, communicate notices, prevent fraud, comply with legal duties, and improve the buyer and seller experience.",
  },
  {
    title: "6. Sharing and Operations",
    body: "Shopee may share necessary information with service providers, payment processors, delivery partners, administrators, compliance reviewers, and support teams when needed to operate the marketplace. We do not sell personal information as a standalone product.",
  },
  {
    title: "7. Retention and Security",
    body: "Records are retained for as long as needed for marketplace operations, accounting, compliance, dispute handling, security, and legitimate business purposes. Shopee uses reasonable technical and administrative safeguards, but users must also protect their passwords, devices, and verification codes.",
  },
  {
    title: "8. Your Responsibilities and Contact",
    body: "Keep your account details accurate, avoid sharing credentials, and contact Shopee Support if you believe your account, wallet, order, or personal information is at risk. Some information may need to be retained where required for security, legal, financial, or dispute reasons.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 text-neutral-900 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="border-b border-neutral-200 pb-6">
          <Link href="/register" className="text-sm font-semibold text-[#ee4d2d] no-underline">Back to signup</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-normal">Shopee Privacy Policy</h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            This policy explains how Shopee handles account, wallet, order, merchant verification, and support information.
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
          Use the Message Center or support channel inside your Shopee account for privacy, wallet, or merchant verification requests.
        </div>
      </article>
    </main>
  );
}
