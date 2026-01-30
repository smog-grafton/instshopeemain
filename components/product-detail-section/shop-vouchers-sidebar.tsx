import type { ShopVoucherEntry } from "./data";

interface ShopVouchersSidebarProps {
  voucherList: ShopVoucherEntry[];
}

/** Perforated left edge: horizontal lines + scallop circles (matches ticket style). */
const LEFT_STRIP_BG = {
  backgroundImage: `linear-gradient(180deg,#fbc9c0 0.0625rem,transparent 0,transparent calc(100% - 0.0625rem),#fbc9c0 calc(100% - 0.0625rem)),linear-gradient(180deg,#fff4f4 0.0625rem,transparent 0,transparent calc(100% - 0.0625rem),#fff4f4 calc(100% - 0.0625rem)),radial-gradient(circle at 0 0.25rem, transparent 0, transparent calc(0.25rem - 0.0625rem), #fbc9c0 0, #fbc9c0 0.25rem, #fff4f4 0)`,
  backgroundSize: "0.0625rem 100%, 100% 100%, 0.0625rem 100%",
  backgroundRepeat: "repeat-y, no-repeat, repeat-y",
} as const;

function SidebarVoucherCard({ voucher }: { voucher: ShopVoucherEntry }) {
  return (
    <div className="h-28 mb-5 mt-1.5 w-48">
      <div className="w-48 h-28 relative">
        {/* Left strip with perforated edge */}
        <div
          className="w-28 h-full absolute overflow-x-hidden overflow-y-hidden rounded-tl-sm rounded-bl-sm border-y border-solid border-y-red-200 left-0 top-0"
          style={LEFT_STRIP_BG}
        />
        {/* Right area (pink tint) */}
        <div className="bg-red-50 w-[calc(100%-theme(width.28))] h-full absolute rounded-tr-sm rounded-br-sm border-r border-y border-solid border-red-200 right-0 top-0" />
        {/* Content layer */}
        <div className="h-full transition-all duration-1000 flex relative shadow border-r border-y border-solid border-transparent">
          <div
            className="flex-1 relative flex flex-col grow justify-center h-full overflow-x-hidden overflow-y-hidden pl-3 pr-1 py-0.5"
            role="presentation"
            tabIndex={0}
          >
            <div className="[clip:rect(0,0,0,0)] whitespace-nowrap w-px h-px absolute overflow-x-hidden overflow-y-hidden -m-px">
              <span aria-label="voucher" />
            </div>
            <div className="flex">
              <div className="text-red-500 whitespace-nowrap text-sm font-medium leading-4 text-ellipsis overflow-x-hidden overflow-y-hidden">
                {voucher.offer}
              </div>
            </div>
            <div className="text-red-500 text-xs leading-4 text-ellipsis [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden [text-align:unset] [word-break:break-word] [white-space:unset]">
              Min. Spend {voucher.minSpend}
            </div>
            <div className="text-ellipsis whitespace-nowrap flex overflow-x-hidden overflow-y-hidden mt-1.5 mb-1">
              {voucher.isWelcomeVoucher && (
                <div
                  className="text-red-500 text-ellipsis whitespace-nowrap overflow-x-hidden overflow-y-hidden my-px px-1 py-px rounded-sm border border-solid border-red-500 only:max-w-full"
                  aria-label="labelsShop Welcome Voucher"
                >
                  <div className="text-ellipsis items-center text-xs leading-4 overflow-x-hidden overflow-y-hidden only:max-w-full">
                    Shop Welcome Voucher
                  </div>
                </div>
              )}
            </div>
            <div className="text-ellipsis whitespace-nowrap text-xs leading-3 overflow-x-hidden overflow-y-hidden mr-1.5 mt-1.5 text-black/54">
              <div className="leading-[unset] whitespace-normal text-ellipsis [-webkit-line-clamp:2] [display:-webkit-box] overflow-x-hidden overflow-y-hidden">
                <span className="text-black/54 first-letter:capitalize [text-transform:unset]">
                  Valid Till: {voucher.validTill}
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-between shrink-0 items-center px-1.5 border-l border-l-gray-200 border-dashed"
            role="presentation"
          >
            <div />
            <div className="flex flex-col items-center flex">
              <div className="z-[1] justify-center items-center flex relative">
                <button
                  type="button"
                  className="text-white text-ellipsis capitalize whitespace-nowrap cursor-pointer [-webkit-line-clamp:1] outline-0 justify-center items-center min-w-14 h-9 text-xs flex relative overflow-x-hidden overflow-y-hidden shadow-sm px-[0.1875rem] py-0.5 rounded-sm border border-solid border-transparent bg-red-500"
                  aria-label="Claim"
                >
                  Claim
                </button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShopVouchersSidebar({ voucherList }: ShopVouchersSidebarProps) {
  return (
    <div className="w-60 ml-4 text-sm leading-tight text-black/80 shrink-0">
      <div className="bg-white overflow-x-hidden overflow-y-hidden shadow-sm mt-4 p-2.5 rounded-sm">
        <div
          className="mt-2.5 mb-5 text-black/40"
          tabIndex={0}
        >
          Shop Vouchers
        </div>
        <div className="overflow-y-auto pl-1 max-h-96" tabIndex={-1}>
          {voucherList.map((voucher, index) => (
            <SidebarVoucherCard
              key={`${voucher.offer}-${voucher.minSpend}-${index}`}
              voucher={voucher}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
