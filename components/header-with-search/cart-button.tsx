import Image from "next/image";

interface CartButtonProps {
  itemCount: number;
  compact?: boolean;
  className?: string;
}

export function CartButton({
  itemCount,
  compact = false,
  className = "",
}: CartButtonProps) {
  return (
    <div
      className={`relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm ${className}`}
      id="cart_drawer_target_id"
    >
      <div role="button">
        <div className={compact ? "py-1" : "py-1.5"}>
          <a
            className={`no-underline cursor-pointer outline-0 relative items-center flex focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+theme(width.2))] focus-visible:before:h-[calc(100%+theme(height.2))] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 ${
              compact ? "ml-0" : "ml-1.5"
            }`}
            id="cart_drawer_target_id"
            href="/cart"
          >
            <Image
              src="/images/svgs/header/cart.svg"
              alt="Shopping Cart"
              width={28}
              height={28}
              className={`align-baseline inline-block relative overflow-x-hidden overflow-y-hidden text-white stroke-white fill-current cursor-pointer ${
                compact ? "h-6 w-6 mr-0" : "h-7 w-7 mr-2.5 text-lg"
              }`}
            />
            {itemCount > 0 && (
              <span
                className={`absolute flex items-center justify-center rounded-full bg-white px-1 font-medium text-[#ee4d2d] ${
                  compact
                    ? "-right-1 -top-1 h-4 min-w-[16px] text-[10px]"
                    : "-right-0.5 -top-0.5 h-[18px] min-w-[18px] text-xs"
                }`}
                aria-hidden
              >
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
            <span className="w-px h-px absolute overflow-x-hidden overflow-y-hidden left-[-9999px]">
              Shopping Cart number of items in cart {itemCount}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
