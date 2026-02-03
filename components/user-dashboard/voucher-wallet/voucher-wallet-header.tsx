import Link from "next/link";

export function VoucherWalletHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="capitalize text-xl font-medium text-black/80">
        Vouchers / Discounts
      </div>
      <div className="flex">
        <div className="border-l border-solid border-black/20">
          <Link
            href="/user/get-more-vouchers"
            className="cursor-pointer outline-none hover:outline-none text-red-500 text-sm leading-4 no-underline"
          >
            Get more vouchers
          </Link>
        </div>
        <div className="border-l border-[0.5px] border-l-black/20 ml-2.5 pl-2.5">
          <Link
            href="/user/voucher-wallet?page=history"
            className="cursor-pointer outline-none hover:outline-none text-red-500 text-sm leading-4 no-underline"
          >
            View voucher history
          </Link>
        </div>
        <div className="border-l border-[0.5px] border-l-black/20 ml-2.5 pl-2.5">
          <Link
            href="https://help.shopee.com.my/portal/article/78690"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer outline-none hover:outline-none text-sm leading-4 no-underline text-neutral-500"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
