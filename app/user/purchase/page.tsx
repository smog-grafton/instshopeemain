import { Suspense } from "react";
import { DashboardPageSkeleton } from "@/components/user-dashboard/dashboard-page-skeleton";
import { PurchaseContent } from "./purchase-content";

function PurchaseFallback() {
  return <DashboardPageSkeleton />;
}

export default function UserPurchasePage() {
  return (
    <Suspense fallback={<PurchaseFallback />}>
      <PurchaseContent />
    </Suspense>
  );
}
