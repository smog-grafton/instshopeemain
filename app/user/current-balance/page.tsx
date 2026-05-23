import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function CurrentBalancePage() {
  return <UserDashboardLayout><BuyerOperationPage kind="current-balance" /></UserDashboardLayout>;
}
