import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerAccountHome } from "@/components/user-dashboard/account-home";

export default function UserAccountHomePage() {
  return (
    <UserDashboardLayout>
      <BuyerAccountHome />
    </UserDashboardLayout>
  );
}
