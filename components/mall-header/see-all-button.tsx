interface SeeAllButtonProps {
  href: string;
  text?: string;
}

export function SeeAllButton({ href, text = "See All" }: SeeAllButtonProps) {
  return (
    <div className="text-black/87">
      <button
        className="[appearance:auto] cursor-pointer tracking-[0] outline-0 justify-center text-sm font-light leading-none transition-colors duration-100 ease-in-out relative px-2 py-1.5 border-0 text-red-500 capitalize items-center flex focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+2px)] focus-visible:before:h-[calc(100%+2px)] focus-visible:before:absolute focus-visible:before:-m-px focus-visible:before:p-px focus-visible:before:rounded-sm focus-visible:before:-left-px focus-visible:before:-top-px focus-visible:before:outline-black/87"
      >
        <a
          className="cursor-pointer items-baseline flex active:outline-0 hover:outline-0 text-red-500 no-underline"
          href={href}
        >
          <div className="text-red-700 items-baseline h-5 flex">
            {text}
            <div className="bg-red-700 justify-center items-center w-5 h-5 flex ml-2 rounded-[50%]">
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                x="0"
                y="0"
                className="align-baseline fill-current h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden stroke-white w-2 text-xs"
              >
                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
              </svg>
            </div>
          </div>
        </a>
      </button>
    </div>
  );
}
