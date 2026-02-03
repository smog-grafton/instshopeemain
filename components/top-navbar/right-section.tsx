"use client";

import Link from "next/link";
import { LanguageSelector } from "./language-selector";
import { UserMenu } from "./user-menu";
import { NotificationTrigger } from "./notification-dropdown/notification-trigger";
import { useAuth } from "@/components/auth/auth-context";
import type { NavbarConfig } from "./data";

interface RightSectionProps {
  config: NavbarConfig;
}

export function RightSection({ config }: RightSectionProps) {
  const { isLoggedIn, user: authUser } = useAuth();

  return (
    <ul className="items-center h-9 flex">
      <li className="justify-center items-center flex relative select-none text-white cursor-pointer after:hidden before:hidden hover:text-white/70 peer/0">
        <NotificationTrigger notificationsUrl={config.notificationsUrl} />
      </li>
      <a
        className="no-underline justify-center items-center flex relative pr-2.5 select-none active:outline-0 hover:outline-0 text-white cursor-pointer before:content-[''] before:w-px before:h-4 before:absolute before:left-0 before:top-5 before:bg-black/26 after:hidden before:hidden hover:text-white/70 focus-visible:outline-0 focus-visible:shadow focus-visible:rounded-sm peer/1"
        href={config.helpUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
      >
        <div className="text-white justify-center items-center flex ml-2 mr-1.5">
          <svg
            viewBox="0 0 16 16"
            width="16"
            className="align-baseline fill-current inline-block relative overflow-x-hidden overflow-y-hidden w-5 h-5"
          >
            <g fillRule="evenodd" transform="translate(1)" className="fill-none">
              <circle cx="7" cy="8" r="7" className="stroke-current" />
              <path
                d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                className="fill-current"
              />
            </g>
          </svg>
        </div>
        <span className="cursor-pointer select-none capitalize items-center text-sm font-light flex text-current hover:before:hidden peer-hover/1:text-white/70">
          help
        </span>
      </a>
      <LanguageSelector currentLanguage={config.currentLanguage} />
      {isLoggedIn && authUser ? (
        <UserMenu
          user={{
            username: authUser.username,
            avatarUrl: authUser.avatarUrl,
          }}
        />
      ) : (
        <>
          <li className="justify-center items-center flex relative pl-2.5 select-none text-white cursor-pointer after:content-[''] after:[border-left-style:solid] after:[border-right-style:solid] after:w-0 after:h-4 after:absolute after:border-x after:-left-1.5 after:top-[calc(50%-theme(inset.2))] after:border-x-white/22 before:hidden hover:text-white/70">
            <Link
              href="/login"
              className="text-white outline-0 text-sm font-light no-underline relative p-1 hover:cursor-pointer hover:text-white/70"
            >
              Log In
            </Link>
          </li>
          <li className="justify-center items-center flex relative pl-2.5 select-none text-white cursor-pointer after:content-[''] after:[border-left-style:solid] after:[border-right-style:solid] after:w-0 after:h-4 after:absolute after:border-x after:-left-1.5 after:top-[calc(50%-theme(inset.2))] after:border-x-white/22 before:hidden hover:text-white/70">
            <Link
              href="/register"
              className="text-white outline-0 text-sm font-light no-underline relative p-1 hover:cursor-pointer hover:text-white/70"
            >
              Sign Up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
