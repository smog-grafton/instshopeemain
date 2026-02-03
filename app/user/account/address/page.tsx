import { UserDashboardLayout } from "@/components/user-dashboard";
import { AddressHeader } from "@/components/user-dashboard/address";
import { AddressEmptyState } from "@/components/user-dashboard/address";

export default function UserAddressPage() {
  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <AddressHeader />
            <AddressEmptyState />
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
