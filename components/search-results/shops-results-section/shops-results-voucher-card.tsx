import Link from "next/link";
import type { ShopsResultVoucher } from "./types";

interface ShopsResultsVoucherCardProps {
  voucher: ShopsResultVoucher;
}

/**
 * Voucher/promo card for the "Shops related to keyword" section.
 * Dashed border, discount text, min spend, Claim button.
 */
export function ShopsResultsVoucherCard({ voucher }: ShopsResultsVoucherCardProps) {
  const content = (
    <>
      <div className="flex-col flex-1 justify-center items-center flex px-2">
        <div className="flex-wrap justify-center items-baseline flex">
          <div className="text-red-700 text-3xl font-medium leading-9">
            {voucher.discountPercent}%
          </div>
          <div className="text-red-700 text-center text-2xl font-medium leading-7 px-0.5">
            Off
          </div>
        </div>
        <div className="text-ellipsis text-center [-webkit-line-clamp:2] [word-wrap:break-word] text-sm leading-5 [display:-webkit-box] overflow-x-hidden overflow-y-hidden mt-2 text-black/54">
          {voucher.minSpend}
        </div>
      </div>
      <div className="lg:p-2 max-sm:p-[7%] [border-top-style:dashed] relative p-1.5 border-t border-t-red-300 before:content-[''] before:z-[1] before:bg-white before:w-1 before:h-2 before:absolute before:-translate-y-2/4 before:-translate-x-px before:rounded-tr-md before:rounded-br-md before:border-r before:border-y before:border-solid before:border-red-300 before:left-0 before:top-0 after:content-[''] after:z-[1] after:bg-white after:w-1 after:h-2 after:absolute after:-translate-y-2/4 after:translate-x-px after:rounded-tl-md after:rounded-bl-md after:border-l after:border-y after:border-solid after:border-red-300 after:right-0 after:top-0">
        <div>
          <div>
            <button
              type="button"
              className="[appearance:auto] cursor-pointer outline-0 flex-none justify-center items-center inline-flex relative overflow-x-hidden overflow-y-hidden px-4 rounded-sm min-w-16 h-9 text-sm leading-4 font-normal w-full text-white bg-red-700 border border-solid border-transparent disabled:text-black/26 active:before:content-[''] active:before:absolute active:before:inset-0 active:before:bg-black/5 focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-solid disabled:bg-black/9"
            >
              <span className="text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden leading-9">
                Claim
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const wrapperClass =
    "bg-red-50 flex-col h-full flex rounded border border-solid border-red-300";

  if (voucher.claimHref) {
    return (
      <div aria-label="Shop voucher" className="h-full">
        <Link href={voucher.claimHref} className={`block h-full ${wrapperClass}`}>
          {content}
        </Link>
      </div>
    );
  }

  return (
    <div aria-label="Shop voucher" className={`h-full ${wrapperClass}`}>
      {content}
    </div>
  );
}
