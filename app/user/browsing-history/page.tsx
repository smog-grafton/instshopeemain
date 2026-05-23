import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function BrowsingHistoryPage() {
  return <UserDashboardLayout><BuyerOperationPage kind="browsing-history" /></UserDashboardLayout>;
}
