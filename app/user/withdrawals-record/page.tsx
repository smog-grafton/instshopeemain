import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerOperationPage } from "@/components/user-dashboard/operation-page";

export default function WithdrawalsRecordPage() {
  return <UserDashboardLayout><BuyerOperationPage kind="withdrawals-record" /></UserDashboardLayout>;
}
