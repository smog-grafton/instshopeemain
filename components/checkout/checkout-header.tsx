"use client";

import Image from "next/image";
import Link from "next/link";

/** Checkout-specific header: orange logo + "Checkout" + search bar. */
export function CheckoutHeader() {
  return (
    <section
      className="bg-white border-b border-black/[0.09] flex items-center h-[100px] min-w-[1200px] mb-3"
      style={{ transition: "margin-top 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      <div className="w-[1200px] mx-auto">
        <div className="flex pl-[18px]">
          <Link
            href="/"
            className="flex items-end text-black/87 no-underline cursor-pointer bg-transparent"
          >
            <div className="block relative overflow-hidden w-[8.125rem] h-[46px] fill-[#ee4d2d]">
              <Image
                src="/images/svgs/header/logo-orange.svg"
                alt="InstShopee Logo"
                width={130}
                height={46}
                className="block w-[8.125rem] h-[46px] object-cover"
                priority
              />
            </div>
            <h1 className="text-[#ee4d2d] capitalize border-l border-[#ee4d2d] h-[30px] ml-4 pl-4 text-xl font-normal leading-[30px] m-0">
              Checkout
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}
