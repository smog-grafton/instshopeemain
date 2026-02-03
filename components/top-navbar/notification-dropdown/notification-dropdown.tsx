import Link from "next/link";
import { NotificationItemRow } from "./notification-item-row";
import { notificationItems } from "./data";

interface NotificationDropdownProps {
  viewAllHref?: string;
}

export function NotificationDropdown({ viewAllHref = "/user/notifications/order" }: NotificationDropdownProps) {
  return (
    <div
      className="relative border border-black/[0.09] z-[500] overflow-visible"
      role="tooltip"
      aria-label="Notifications"
    >
      {/* Arrow pointing up at the notification link (right-aligned) */}
      <div className="absolute top-0 right-6 left-auto -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[10px] border-b-black/[0.09]" />
      <div className="absolute top-0 right-6 left-auto -translate-x-1/2 -translate-y-[2px] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[10px] border-b-white" />

      <div className="bg-white rounded-sm shadow-[0_1px_50px_rgba(0,0,0,0.2)] text-black overflow-hidden w-[25rem]">
        <div className="text-black/26 h-10 px-2.5 capitalize flex items-center text-sm">
          Recently Received Notifications
        </div>
        <div>
          {notificationItems.map((item) => (
            <NotificationItemRow key={item.id} item={item} />
          ))}
        </div>
        <Link
          href={viewAllHref}
          className="bg-[rgb(252,252,252)] text-black/80 h-10 w-[calc(100%-1.25rem)] mx-2.5 mb-2 flex justify-center items-center no-underline hover:text-black/80"
        >
          <span>View All</span>
        </Link>
      </div>
    </div>
  );
}
