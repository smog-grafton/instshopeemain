import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function MyMessagePage() {
  return <UserDashboardLayout><BuyerOperationPage kind="my-message" /></UserDashboardLayout>;
}
