import { UserDashboardLayout } from "@/components/user-dashboard";
import { NotificationSettings } from "@/components/user-dashboard/notification-settings";

export default function UserNotificationSettingsPage() {
  return (
    <UserDashboardLayout>
      <NotificationSettings />
    </UserDashboardLayout>
  );
}
