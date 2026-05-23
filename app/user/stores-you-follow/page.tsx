import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function StoresYouFollowPage() {
  return <UserDashboardLayout><BuyerOperationPage kind="followed-stores" /></UserDashboardLayout>;
}
