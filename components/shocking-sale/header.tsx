import Link from "next/link";
import Image from "next/image";
import { CountdownTimer } from "./countdown-timer";
import type { ShockingSaleConfig } from "./data";

interface ShockingSaleHeaderProps {
  config: ShockingSaleConfig;
}

export function ShockingSaleHeader({ config }: ShockingSaleHeaderProps) {
  return (
    <div className="bg-white justify-between items-center h-8 flex px-5 py-4 border-b border-b-black/5">
      <div className="flex items-center h-8">
        <div className="uppercase h-8 leading-8 w-40 mr-3 relative flex items-center">
          <Image
            src="/images/home/shocking/element.svg"
            alt={config.title}
            width={160}
            height={32}
            className="h-full w-full object-contain"
            unoptimized
          />
        </div>
        <span className="shrink-0 text-black/80 uppercase ml-1.5 mr-3 text-sm h-8 flex items-center">
          ends in
        </span>
        <div className="h-8 flex items-center">
          <CountdownTimer countdown={config.countdown} endsAt={config.endsAt} />
        </div>
      </div>
      <Link
        href={config.seeAllHref}
        className="no-underline text-red-500 active:outline-0 hover:outline-0"
        aria-label={`click, enter flash sale button See All`}
      >
        See All&nbsp;
        <svg
          enableBackground="new 0 0 11 11"
          viewBox="0 0 11 11"
          x="0"
          y="0"
          className="align-baseline fill-current w-2.5 h-2.5 inline-block relative overflow-x-hidden overflow-y-hidden text-xs"
        >
          <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
        </svg>
      </Link>
    </div>
  );
}
