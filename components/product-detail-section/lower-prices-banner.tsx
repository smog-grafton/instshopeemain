"use client";

import { useState, useEffect } from "react";
import { FlipDigit } from "./flip-digit";

/** Deep discount branding icon (original URL verbatim until assets are downloaded). */
const DEEP_DISCOUNT_ICON_URL =
  "https://proxy.extractcss.dev/https://down-my.img.susercontent.com/file/my-11134258-820li-mjxjt0sfsmis42";
/** Clock icon (original URL verbatim). */
const CLOCK_ICON_URL =
  "https://proxy.extractcss.dev/https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/26cb3f2fda38eb6ddcc1.svg";

interface LowerPricesBannerProps {
  /** Headline text, e.g. "Lower prices today!" */
  headline?: string;
  /** Countdown end time; default: now + 2 days */
  endDate?: Date;
}

function CountdownDigits({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = seconds.toString().padStart(2, "0");

  return (
    <div
      className="[backface-visibility:hidden] text-white cursor-default items-center flex shrink-0 gap-0.5"
      aria-label={`ending in ${hours} hours ${minutes} minutes ${seconds} seconds`}
      tabIndex={0}
    >
      <div className="box-content text-center bg-black justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden px-[3px] py-px">
        <FlipDigit value={parseInt(hoursStr[0], 10)} />
        <FlipDigit value={parseInt(hoursStr[1], 10)} />
      </div>
      <div className="box-content text-center bg-black justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden px-[3px] py-px">
        <FlipDigit value={parseInt(minutesStr[0], 10)} />
        <FlipDigit value={parseInt(minutesStr[1], 10)} />
      </div>
      <div className="box-content text-center bg-black justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden px-[3px] py-px">
        <FlipDigit value={parseInt(secondsStr[0], 10)} />
        <FlipDigit value={parseInt(secondsStr[1], 10)} />
      </div>
    </div>
  );
}

export function LowerPricesBanner({
  headline = "Lower prices today!",
  endDate,
}: LowerPricesBannerProps) {
  const [end] = useState<Date>(() => {
    if (endDate) return endDate;
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d;
  });

  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,sans-serif] text-sm leading-tight text-black/80 items-center h-9 flex px-5 bg-[linear-gradient(90deg,#0053de,#66a6ff)] mt-2.5"
      id="component"
    >
      <img
        alt="deep discount branding icon"
        src={DEEP_DISCOUNT_ICON_URL}
        className="align-baseline inline shrink-0 h-5 w-auto"
      />
      <span className="text-white text-ellipsis whitespace-nowrap text-sm leading-5 overflow-x-hidden overflow-y-hidden ml-2.5">
        {headline}
      </span>
      <img
        alt="icon clock"
        src={CLOCK_ICON_URL}
        className="align-baseline inline shrink-0 w-4 h-4 ml-auto"
      />
      <span className="shrink-0 text-white uppercase ml-1.5 mr-3 text-sm">
        ends in
      </span>
      <CountdownDigits
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
      />
    </div>
  );
}
