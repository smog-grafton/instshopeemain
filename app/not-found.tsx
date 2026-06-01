import Link from "next/link";
import { HeaderWithSearch } from "@/components/header-with-search";
import { TopNavbar } from "@/components/top-navbar";
import { SiteFooter } from "@/components/site-footer";
import { StorefrontMobileDock } from "@/components/storefront-mobile-dock";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] pb-28 lg:pb-0">
      <TopNavbar />
      <HeaderWithSearch />
      <main className="mx-auto flex min-h-[52vh] w-full max-w-[1200px] flex-col items-center justify-center px-4 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-[#ee4d2d]">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 9v4M12 17h.01M10.3 4.1 2.9 17a2 2 0 001.7 3h14.8a2 2 0 001.7-3L13.7 4.1a2 2 0 00-3.4 0z" />
          </svg>
        </div>
        <h1 className="mt-5 text-2xl font-semibold text-neutral-900">Page not found</h1>
        <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600">
          The page may have moved or the link is no longer available.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-sm bg-[#ee4d2d] px-5 py-2.5 text-sm font-semibold text-white no-underline">
            Go Home
          </Link>
          <Link href="/products" className="rounded-sm border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 no-underline">
            Browse Products
          </Link>
        </div>
      </main>
      <SiteFooter />
      <StorefrontMobileDock />
    </div>
  );
}
