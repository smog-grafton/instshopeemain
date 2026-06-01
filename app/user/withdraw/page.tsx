import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerWithdrawPage } from "@/components/user-dashboard/buyer-withdraw";

export default function UserWithdrawPage() {
  return (
    <UserDashboardLayout>
      <BuyerWithdrawPage />
    </UserDashboardLayout>
  );
}
