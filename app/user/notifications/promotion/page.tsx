import Link from "next/link";
import { UserDashboardLayout } from "@/components/user-dashboard";
import {
  PromotionsListWithLoader,
  MOCK_PROMOS,
} from "@/components/user-dashboard/promotions";

export default function UserNotificationsPromotionPage() {
  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="pb-2.5 px-8">
              <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100 flex items-center justify-between gap-4">
                <div>
                  <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                    Promotions
                  </h1>
                  <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                    Deals and voucher notifications
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-black/80 text-sm whitespace-nowrap hover:underline focus:outline-none focus-visible:underline"
                >
                  Mark all as read
                </Link>
              </div>
              <PromotionsListWithLoader basePromos={MOCK_PROMOS} />
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
