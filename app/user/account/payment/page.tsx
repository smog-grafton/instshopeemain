import { UserDashboardLayout } from "@/components/user-dashboard";
import { PaymentSettings } from "@/components/user-dashboard/payment-settings";

export default function UserPaymentPage() {
  return (
    <UserDashboardLayout>
      <PaymentSettings />
    </UserDashboardLayout>
  );
}
