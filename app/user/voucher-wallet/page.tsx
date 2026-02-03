import { UserDashboardLayout } from "@/components/user-dashboard";
import { VoucherWallet } from "@/components/user-dashboard/voucher-wallet";

export default function UserVoucherWalletPage() {
  return (
    <UserDashboardLayout>
      <VoucherWallet />
    </UserDashboardLayout>
  );
}
