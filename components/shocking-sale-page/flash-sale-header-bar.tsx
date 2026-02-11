"use client";

import Image from "next/image";
import { CountdownTimer } from "@/components/shocking-sale/countdown-timer";
import type { ShockingSaleConfig } from "@/components/shocking-sale/data";

interface FlashSaleHeaderBarProps {
  config: ShockingSaleConfig;
}

/**
 * Centered white bar for the flash sale / shocking sale detail page:
 * decorative dashes, title logo, "ends in" label with clock icon, and countdown timer.
 * Reuses CountdownTimer from components/shocking-sale.
 */
export function FlashSaleHeaderBar({ config }: FlashSaleHeaderBarProps) {
  return (
    <div
      className="text-sm text-black/80 [pointer-events:auto] h-8 leading-8 mx-auto justify-center items-center flex"
      id="flash-sale-header-bar"
    >
      {/* Left dashes — inline and close to content (two dashes with small gap) */}
      <span className="shrink-0 flex items-center gap-0.5 mx-1.5" aria-hidden>
        <span className="w-4 border-b border-b-black/60" />
        <span className="w-4 border-b border-b-black/60" />
      </span>
      <div
        className="uppercase h-8 leading-8 inline-block pl-4 w-36 mr-3 relative shrink-0 flex items-center"
        aria-label={`title ${config.title}`}
      >
        <Image
          src="/images/home/shocking/element.svg"
          alt={config.title}
          width={144}
          height={32}
          className="h-full w-full object-contain object-center"
          unoptimized
        />
      </div>
      {/* "ends in" with clock icon — vertically centered */}
      <div
        className="whitespace-nowrap uppercase h-8 leading-8 mx-2.5 pl-5 shrink-0 bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/3b9d94a588dd77fd5ec6.png')`,
          backgroundSize: "16px",
          backgroundPosition: "0 center",
        }}
      >
        ends in
      </div>
      <div
        className="[backface-visibility:hidden] cursor-default text-black flex items-center h-8 scale-[0.84]"
        aria-label={`ending in ${config.countdown.hours} hours ${config.countdown.minutes} minutes ${config.countdown.seconds} seconds`}
        tabIndex={0}
      >
        <CountdownTimer countdown={config.countdown} endsAt={config.endsAt} />
      </div>
      {/* Right dashes — inline and close to content (two dashes with small gap) */}
      <span className="shrink-0 flex items-center gap-0.5 mx-1.5" aria-hidden>
        <span className="w-4 border-b border-b-black/60" />
        <span className="w-4 border-b border-b-black/60" />
      </span>
    </div>
  );
}
