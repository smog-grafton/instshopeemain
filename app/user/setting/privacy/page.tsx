import { UserDashboardLayout } from "@/components/user-dashboard";
import { PrivacySettings } from "@/components/user-dashboard/privacy-settings";

export default function UserPrivacySettingsPage() {
  return (
    <UserDashboardLayout>
      <PrivacySettings />
    </UserDashboardLayout>
  );
}
