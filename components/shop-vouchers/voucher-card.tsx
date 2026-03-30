"use client";

import type { ShopVoucher } from "./data";

const BORDER_COLOR = "rgb(248, 208, 211)";
const BG_LIGHT = "rgb(255, 244, 244)";

export function VoucherCard({ voucher }: { voucher: ShopVoucher }) {
  const hasProgress = voucher.usedPercent != null;

  return (
    <div className="touch-pan-y h-full flex-shrink-0 overflow-x-hidden">
      <div className="h-full">
        <div className="h-full pb-2 pt-1.5">
          <div className="relative flex h-[128px] w-full justify-center overflow-visible rounded-[2px] shadow-[0_2px_5px_rgba(0,0,0,0.07)]">
            {/* Tear-off left edge */}
            <div
              className="flex items-center justify-center rounded-l-[3px] border-t border-b min-w-[5px] ml-0.5 relative flex-shrink-0"
              style={{
                borderColor: BORDER_COLOR,
                background: `linear-gradient(90deg, transparent 0, transparent 4px, ${BG_LIGHT} 4px)`,
              }}
            >
              <div className="absolute left-0 top-0 w-[5px] h-[126px]">
                <div
                  className="absolute left-0 top-0 w-1 h-[126px]"
                  style={{
                    background: `radial-gradient(circle at 0 6px, transparent 0, rgba(0,0,0,0.03) 3px, ${BORDER_COLOR} 0, ${BORDER_COLOR} 4px, ${BG_LIGHT} 0) repeat-y`,
                    backgroundSize: "4px 10px",
                  }}
                >
                  <div
                    className="absolute left-0 top-0 w-px h-[126px]"
                    style={{
                      background: `repeating-linear-gradient(${BORDER_COLOR}, ${BORDER_COLOR} 3px, transparent 0, transparent 10px)`,
                      backgroundSize: "1px 10px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Main content */}
            <div
              className="flex flex-1 items-center justify-center pl-[7px] min-w-0 rounded-r-[2px] border border-t border-r border-b relative"
              style={{
                background: BG_LIGHT,
                borderColor: `${BORDER_COLOR} ${BORDER_COLOR} ${BORDER_COLOR} transparent`,
                borderLeftWidth: 0,
              }}
            >
              <div className="flex flex-1 justify-center h-[126px] min-w-0">
                <div className="flex flex-col justify-center max-w-full pr-0.5 relative">
                  <div className="text-[rgb(208,1,27)] pr-2">
                    <div className="flex">
                      <div className="text-base font-medium leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
                        {voucher.title}
                      </div>
                    </div>
                    <div className="text-sm font-normal leading-[22px] overflow-hidden text-ellipsis line-clamp-2">
                      {voucher.description}
                    </div>
                  </div>
                  {voucher.tag && (
                    <div className="mt-0.5 flex">
                      <div className="flex flex-[0_1_auto] overflow-hidden text-ellipsis self-start border rounded-[2px] box-border text-[rgb(208,1,27)] text-xs px-1 py-0.5 mr-0.5 max-w-full whitespace-nowrap border-[rgb(208,1,27)]">
                        <span className="flex-[0_1_auto] overflow-hidden text-ellipsis">{voucher.tag}</span>
                      </div>
                    </div>
                  )}
                  <span className="mt-1 block">
                    {hasProgress && (
                      <div className="mt-1">
                        <div className="rounded h-1 w-full overflow-hidden bg-black/[0.09]">
                          <div
                            className="h-full rounded"
                            style={{
                              width: `${voucher.usedPercent}%`,
                              background: "linear-gradient(270deg, rgb(255, 176, 0) 0%, rgb(235, 23, 23) 100%)",
                            }}
                          />
                        </div>
                        <div className="mt-1 line-clamp-2 text-[10px] leading-4 text-black/54">
                          {voucher.usedPercent}% used,{" "}
                          <span className="text-black/54">Valid Till: {voucher.validTill}</span>
                        </div>
                      </div>
                    )}
                    {!hasProgress && (
                      <div className="line-clamp-2 mt-1 text-[10px] leading-4 text-black/54">
                        Valid Till: {voucher.validTill}
                      </div>
                    )}
                  </span>
                </div>
              </div>

              {/* Claim button + voucher count */}
              <div className="flex items-center h-[126px]">
                <div className="flex items-center h-[126px]">
                  <button
                    type="button"
                    className="h-[34px] px-4 py-0 whitespace-nowrap flex-shrink-0 z-[1] flex items-center justify-center rounded-[2px] bg-[rgb(208,1,27)] text-white text-sm font-normal capitalize cursor-pointer mx-3 min-w-[60px] max-w-[190px] shadow-[0_1px_1px_rgba(0,0,0,0.09)] border-0"
                  >
                    {voucher.claimLabel ?? "Claim"}
                  </button>
                  {voucher.claimCount != null && voucher.claimCount > 0 && (
                    <div className="absolute right-0 top-2 flex flex-row items-center justify-center h-8 w-20 text-[rgb(208,1,27)] overflow-hidden">
                      <div className="flex flex-row items-center text-2xl font-bold leading-8 mr-1">
                        <span className="text-xl">+</span>
                        <span>{voucher.claimCount}</span>
                      </div>
                      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 overflow-hidden" aria-hidden>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 4C2.89543 4 2 4.89543 2 6V10.5H3C3.82843 10.5 4.5 11.1716 4.5 12C4.5 12.8284 3.82843 13.5 3 13.5H2V18C2 19.1046 2.89543 20 4 20H9V18H10V20H20C21.1046 20 22 19.1046 22 18V13.5H20.5C19.6716 13.5 19 12.8284 19 12C19 11.1716 19.6716 10.5 20.5 10.5H22V6C22 4.89543 21.1046 4 20 4H10V6H9V4H4ZM10 7.5H9V9.5H10V7.5ZM9 11H10V13H9V11ZM10 14.5H9V16.5H10V14.5Z"
                          fill="#d0011b"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Badge (x3, x10) top-right */}
              {voucher.badgeCount != null && voucher.badgeCount > 1 && (
                <div className="absolute -right-1 top-1 flex flex-col items-end text-[rgb(238,77,45)]">
                  <div className="flex items-center justify-center h-6 w-[47px] rounded-l-[20px] rounded-tr-[2px] rounded-br-none bg-[rgb(255,234,234)]">
                    <span className="text-xs">x</span>
                    <span className="text-sm font-medium">{voucher.badgeCount}</span>
                  </div>
                  <div
                    className="w-0 h-0 border-2 border-transparent border-l-[rgb(255,154,134)] border-b-transparent border-t-transparent"
                    style={{ borderLeftColor: "rgb(255, 154, 134)" }}
                  />
                </div>
              )}

              {/* Right divider line */}
              <div
                className="absolute right-0 top-0 w-px h-[126px]"
                style={{
                  background: "repeating-linear-gradient(rgb(232,232,232), rgb(232,232,232) 2px, transparent 2px, transparent 4px)",
                  backgroundSize: "1px 4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
