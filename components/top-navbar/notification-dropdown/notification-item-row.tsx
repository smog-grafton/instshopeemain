import Image from "next/image";
import type { NotificationItem } from "./data";

interface NotificationItemRowProps {
  item: NotificationItem;
}

export function NotificationItemRow({ item }: NotificationItemRowProps) {
  return (
    <div className="px-2.5 py-2 bg-[rgb(255,242,238)] cursor-pointer select-none flex">
      <div className="h-10 mr-1.5 w-10 flex-shrink-0 overflow-hidden flex justify-center items-center bg-[rgb(245,245,245)] box-border">
        <div className="h-10 w-full relative">
          <Image
            src={item.smallIcon}
            alt=""
            width={40}
            height={40}
            className="object-contain w-full h-full opacity-100 transition-opacity duration-200"
            unoptimized
          />
        </div>
      </div>
      <div className="mr-2.5 text-black/54 break-words min-w-0 flex-1">
        <div className="mb-1.5 text-black/80 text-sm">{item.title}</div>
        <div className="text-xs leading-[15px] mb-1.5">{item.description}</div>
        {item.banner && (
          <div className="flex">
            <div className="mt-1 mr-2.5 relative">
              <Image
                src={item.banner}
                alt=""
                width={324}
                height={162}
                className="object-contain object-center bg-white h-[162px] w-[20.25rem] max-w-full opacity-100 transition-opacity duration-200"
                unoptimized
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
