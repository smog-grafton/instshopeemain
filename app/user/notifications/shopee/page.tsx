import Link from "next/link";
import { UserDashboardLayout } from "@/components/user-dashboard";
import {
  ShopeeUpdatesListWithLoader,
  MOCK_SHOPEE_UPDATES,
} from "@/components/user-dashboard/shopee-updates";

export default function UserNotificationsShopeePage() {
  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px] overflow-x-hidden overflow-y-hidden flex flex-col text-sm leading-tight text-black/80">
        <div className="pb-2.5 px-8">
          <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100 flex items-center justify-between gap-4">
            <div>
              <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                Shopee Updates
              </h1>
              <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                Platform news and tips
              </div>
            </div>
            <Link
              href="#"
              className="text-black/26 hover:text-black/54 text-sm whitespace-nowrap focus:outline-none"
            >
              Mark all as read
            </Link>
          </div>
          <ShopeeUpdatesListWithLoader baseUpdates={MOCK_SHOPEE_UPDATES} />
        </div>
      </div>
    </UserDashboardLayout>
  );
}
