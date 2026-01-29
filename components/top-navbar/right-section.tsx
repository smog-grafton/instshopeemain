import { LanguageSelector } from "./language-selector";
import { UserMenu } from "./user-menu";
import type { NavbarConfig } from "./data";

interface RightSectionProps {
  config: NavbarConfig;
}

export function RightSection({ config }: RightSectionProps) {
  return (
    <ul className="items-center h-9 flex">
      <li className="justify-center items-center flex relative select-none text-white cursor-pointer after:hidden before:hidden hover:text-white/70 peer/0">
        <div>
          <div
            className="relative focus-visible:outline-2 focus-visible:outline-solid focus-visible:rounded-sm"
            tabIndex={0}
            id="stardust-popover0"
          >
            <div role="button">
              <a
                className="no-underline text-current items-center flex py-1.5 active:outline-0 hover:outline-0"
                tabIndex={-1}
                href={config.notificationsUrl}
              >
                <svg
                  viewBox="3 2.5 14 14"
                  x="0"
                  y="0"
                  className="align-baseline fill-current inline-block relative w-3.5 h-5 overflow-x-hidden overflow-y-hidden"
                >
                  <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
                  <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
                </svg>
                <span className="capitalize text-sm font-light ml-1.5">
                  notifications
                </span>
              </a>
            </div>
          </div>
        </div>
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
      <UserMenu user={config.user} />
    </ul>
  );
}
