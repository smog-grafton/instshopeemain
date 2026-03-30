import { UserDashboardLayout } from "@/components/user-dashboard";
import { BuyerWalletPage } from "@/components/user-dashboard/buyer-wallet";

export default function UserWalletPage() {
  return (
    <UserDashboardLayout>
      <BuyerWalletPage />
    </UserDashboardLayout>
  );
}
