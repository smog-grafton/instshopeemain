"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart-context";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement | null>;
}

export function CartDropdown({
  isOpen,
  onClose,
  anchorRef,
}: CartDropdownProps) {
  const { items } = useCart();

  if (!isOpen) return null;

  return (
    <div
      role="tooltip"
      aria-hidden="false"
      className="absolute top-[46px] right-0 z-[400] opacity-100 border border-black/9 will-change-transform"
      style={{
        transformOrigin: "376px 0px",
        animation: "0.2s cubic-bezier(0.4, 0, 0.6, 1) popover-enter-animation",
      }}
    >
      {/* Arrow */}
      <div
        className="absolute top-px left-[376px] z-[3] will-change-transform"
        style={{
          transform: "matrix(1, 0, 0, 1, -7, -10)",
          borderBottom: "10px solid rgba(0, 0, 0, 0.09)",
          borderLeft: "0 solid transparent",
          borderRight: "0 solid transparent",
        }}
      >
        <div
          className="absolute w-0 h-0 left-[-8px] bottom-[-10px]"
          style={{
            borderBottom: "10px solid rgb(255, 255, 255)",
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
          }}
        />
      </div>

      <div
        tabIndex={0}
        className="bg-white rounded-[2px] overflow-hidden w-[25rem] shadow-[rgba(0,0,0,0.2)_0px_1px_50px_0px]"
      >
        <h3 className="font-normal text-sm m-0 flex items-center text-black/26 h-10 pl-2.5 capitalize">
          Recently Added Products
        </h3>

        {items.length === 0 ? (
          <div className="box-border flex p-2.5 w-full text-black/54 text-sm">
            No items in cart
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={`${item.slug}-${item.colorLabel ?? ""}-${item.size ?? ""}-${index}`}
              className="box-border flex p-2.5 w-full relative"
            >
              <div className="border border-black/9 shrink-0 h-10 w-10 object-cover overflow-hidden relative">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-cover w-10 h-10"
                />
              </div>
              <div className="flex-1 min-w-0 ml-2.5 overflow-hidden">
                <div className="flex items-center">
                  <div className="text-sm font-medium leading-4 overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.title}
                  </div>
                  <div className="flex-1 min-w-0" />
                  <div className="flex items-center shrink-0 ml-10">
                    <span className="text-[rgb(238,77,45)]">RM{Number(item.price).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="flex items-center bg-[rgb(253,253,253)] text-xs h-10 leading-10 p-2.5 text-center capitalize">
          <div className="flex-1 min-w-0" />
          <Link
            href="/cart"
            className="text-white bg-[rgb(238,77,45)] outline-0 relative overflow-visible min-w-[60px] h-[34px] px-4 py-0 flex flex-col justify-center items-center capitalize cursor-pointer border-0 rounded-[2px] text-sm shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px] shrink-0 no-underline"
          >
            View My Shopping Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
