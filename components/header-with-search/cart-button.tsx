import Image from "next/image";

interface CartButtonProps {
  itemCount: number;
}

export function CartButton({ itemCount }: CartButtonProps) {
  return (
    <div
      className="relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm"
      id="cart_drawer_target_id"
    >
      <div role="button">
        <div className="py-2.5">
          <a
            className="no-underline cursor-pointer outline-0 relative ml-1.5 items-center flex focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+theme(width.2))] focus-visible:before:h-[calc(100%+theme(height.2))] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87"
            id="cart_drawer_target_id"
            href="/cart"
          >
            <Image
              src="/images/svgs/header/cart.svg"
              alt="Shopping Cart"
              width={28}
              height={28}
              className="align-baseline inline-block relative text-lg mr-2.5 overflow-x-hidden overflow-y-hidden text-white stroke-white fill-current cursor-pointer w-7 h-7"
            />
            {itemCount > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-white text-[#ee4d2d] text-xs font-medium"
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
