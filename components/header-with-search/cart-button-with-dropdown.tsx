"use client";

import { useRef, useState } from "react";
import { useCart } from "@/components/cart";
import { CartButton } from "./cart-button";
import { CartDropdown } from "@/components/cart";

export function CartButtonWithDropdown() {
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={anchorRef}
      className="relative flex-1 justify-center items-center flex mx-2.5 pb-1.5"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <CartButton itemCount={itemCount} />
      <CartDropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={anchorRef}
      />
    </div>
  );
}
