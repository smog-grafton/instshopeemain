import { Suspense } from "react";
import { UserDashboardLayout } from "@/components/user-dashboard";
import { PurchaseContent } from "./purchase-content";

function PurchaseFallback() {
  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px] flex items-center justify-center text-zinc-500 text-sm">
        Loading…
      </div>
    </UserDashboardLayout>
  );
}

export default function UserPurchasePage() {
  return (
    <Suspense fallback={<PurchaseFallback />}>
      <PurchaseContent />
    </Suspense>
  );
}
