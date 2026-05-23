import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function BillingDetailsPage() {
  return <UserDashboardLayout><BuyerOperationPage kind="billing" /></UserDashboardLayout>;
}
