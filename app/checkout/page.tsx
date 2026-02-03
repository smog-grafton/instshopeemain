import { Suspense } from "react";
import { CheckoutContent } from "@/components/checkout/checkout-content";
import { TopNavbar } from "@/components/top-navbar";
import { CheckoutHeader } from "@/components/checkout/checkout-header";

function CheckoutFallback() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <CheckoutHeader />
      <main
        role="main"
        className="w-[1200px] mx-auto mb-[70px] text-sm leading-tight text-black/80 mt-6 flex items-center justify-center min-h-[200px] text-black/54"
      >
        Loading…
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <CheckoutContent />
    </Suspense>
  );
}
