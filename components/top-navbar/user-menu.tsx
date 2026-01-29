import Image from "next/image";
import type { UserData } from "./data";

interface UserMenuProps {
  user: UserData;
}

export function UserMenu({ user }: UserMenuProps) {
  return (
    <div>
      <li className="justify-center items-center flex relative px-2.5 select-none text-white cursor-pointer after:hidden before:hidden hover:text-white/70">
        <div
          className="relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm"
          tabIndex={0}
          id="stardust-popover2"
        >
          <div role="button">
            <div className="items-center flex py-1.5">
              <div className="inline-block relative rounded-[50%] border border-solid border-black/9 w-6 h-6">
                <div className="bg-neutral-100 w-full relative overflow-x-hidden overflow-y-hidden pt-[100%] rounded-[50%]">
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    className="align-baseline fill-current w-4 h-4 inline-block overflow-x-hidden overflow-y-hidden stroke-stone-300 font-normal absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-base leading-4"
                  >
                    <g>
                      <circle
                        cx="7.5"
                        cy="4.5"
                        r="3.8"
                        strokeMiterlimit="10"
                        className="fill-none"
                      />
                      <path
                        d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        className="fill-none"
                      />
                    </g>
                  </svg>
                </div>
                <Image
                  src={user.avatarUrl}
                  alt={user.username}
                  width={24}
                  height={24}
                  className="align-baseline w-full h-full absolute rounded-[50%] left-0 top-0 focus-visible:outline-0 focus-visible:shadow-[0_0_0_10px_#fff,0_0_0_12px_#000000de]"
                />
              </div>
              <div className="text-ellipsis max-w-36 overflow-x-hidden overflow-y-hidden pl-1.5">
                {user.username}
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
