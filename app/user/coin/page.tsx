import { UserDashboardLayout } from "@/components/user-dashboard";
import { ShopeeCoin } from "@/components/user-dashboard/coins";

export default function UserCoinPage() {
  return (
    <UserDashboardLayout>
      <ShopeeCoin />
    </UserDashboardLayout>
  );
}
