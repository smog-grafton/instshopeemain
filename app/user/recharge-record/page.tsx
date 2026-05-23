import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function RechargeRecordPage() {
  return <UserDashboardLayout><BuyerOperationPage kind="recharge-record" /></UserDashboardLayout>;
}
