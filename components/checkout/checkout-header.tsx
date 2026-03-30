"use client";

import Image from "next/image";
import Link from "next/link";

/** Checkout-specific header: orange logo + "Checkout" title. */
export function CheckoutHeader() {
  return (
    <section
      className="mb-3 border-b border-black/[0.09] bg-white"
      style={{ transition: "margin-top 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center px-3 py-4 sm:px-4 lg:h-[100px] lg:px-0">
        <div className="flex items-end lg:pl-[18px]">
          <Link
            href="/"
            className="flex items-end text-black/87 no-underline cursor-pointer bg-transparent"
          >
            <div className="relative block h-9 w-auto overflow-hidden fill-[#ee4d2d] lg:h-[46px] lg:w-[8.125rem]">
              <Image
                src="/images/svgs/header/logo-orange.svg"
                alt="Shopee Logo"
                width={130}
                height={46}
                className="block h-9 w-auto object-cover lg:h-[46px] lg:w-[8.125rem]"
                priority
              />
            </div>
            <h1 className="m-0 ml-3 h-7 border-l border-[#ee4d2d] pl-3 text-lg font-normal capitalize leading-7 text-[#ee4d2d] lg:ml-4 lg:h-[30px] lg:pl-4 lg:text-xl lg:leading-[30px]">
              Checkout
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}
