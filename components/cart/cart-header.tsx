import Image from "next/image";
import Link from "next/link";

/** Cart-specific header: orange logo + \"Shopping Cart\" + simple search bar. */
export function CartHeader() {
  return (
    <section className="bg-white border-b border-black/10 flex items-center h-[100px] min-w-[1200px]">
      <div className="w-[1200px] mx-auto">
        <div className="flex items-center">
          {/* Logo + \"Shopping Cart\" label */}
          <div className="flex flex-1 pl-[18px]">
            <Link
              href="/"
              className="flex items-end text-black/87 no-underline bg-transparent"
            >
              <div>
                <Image
                  src="/images/svgs/header/logo-orange.svg"
                  alt="InstShopee Logo"
                  width={160}
                  height={48}
                  className="block w-[8.125rem] h-[46px] overflow-hidden"
                  priority
                />
              </div>
              <div className="text-[20px] leading-[30px] h-[30px] mb-[1px] ml-[15px] pl-[15px] border-l border-[#ee4d2d] capitalize text-[#ee4d2d]">
                shopping cart
              </div>
            </Link>
          </div>

          {/* Cart search bar */}
          <div className="w-[38.8125rem] relative">
            <form
              role="search"
              autoComplete="off"
              className="flex h-10 items-stretch justify-between rounded-[2px] border-2 border-[#ee4d2d] bg-white"
            >
              <div className="flex flex-1">
                <div className="relative flex flex-1 box-border px-[10px]">
                  <input
                    aria-label="Shop Up to 50% Off 2.2 Deals Now!😍"
                    maxLength={128}
                    placeholder="Shop Up to 50% Off 2.2 Deals Now!😍"
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="shopee-searchbar-listbox"
                    aria-expanded={false}
                    role="combobox"
                    className="m-0 flex flex-1 items-center border-0 p-0 text-sm text-black/60 outline-none"
                  />
                </div>
              </div>
              <button
                type="button"
                className="flex h-9 w-20 cursor-pointer items-center justify-center border-0 bg-[#ee4d2d] text-sm text-white shadow-[rgba(0,0,0,0.09)_0px_1px_1px_0px] outline-none"
              >
                <Image
                  src="/images/svgs/header/search.svg"
                  alt="Search"
                  width={19}
                  height={19}
                  className="block h-[14px] w-4 fill-white"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

