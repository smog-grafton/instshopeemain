import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function SiteMessagePage() {
  return <UserDashboardLayout><BuyerOperationPage kind="site-message" /></UserDashboardLayout>;
}
