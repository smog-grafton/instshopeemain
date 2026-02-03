import { UserDashboardLayout } from "@/components/user-dashboard";
import { OrderUpdatesEmpty } from "@/components/user-dashboard/order-updates-empty";
import {
  OrderUpdateCard,
  MOCK_ORDER_UPDATES,
} from "@/components/user-dashboard/order-updates";

/** Set to false to show empty state instead of mock orders. */
const SHOW_MOCK_ORDER_UPDATES = true;

export default function UserNotificationsOrderPage() {
  const items = SHOW_MOCK_ORDER_UPDATES ? MOCK_ORDER_UPDATES : [];

  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm min-h-[400px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="pb-2.5 px-8">
              <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  Order Updates
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  Notifications about your orders
                </div>
              </div>
              {items.length === 0 ? (
                <OrderUpdatesEmpty />
              ) : (
                <div className="py-6 px-8 flex flex-col gap-3">
                  {items.map((item) => (
                    <OrderUpdateCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
