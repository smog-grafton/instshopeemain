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
      className="relative flex shrink-0 justify-end"
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
