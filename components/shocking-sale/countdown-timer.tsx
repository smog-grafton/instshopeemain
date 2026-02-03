"use client";

import { useState, useEffect, useRef } from "react";
import { FlipDigit } from "@/components/product-detail-section/flip-digit";

interface CountdownTimerProps {
  countdown: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

/**
 * Countdown timer: displays REMAINING time until a fixed end time.
 * Formula: remaining = endTime - now (so remaining DECREASES every second).
 * Never use (now - endTime) — that would be elapsed and would increase.
 */
export function CountdownTimer({ countdown }: CountdownTimerProps) {
  const endTimeMsRef = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (endTimeMsRef.current === null) {
      const totalMs =
        (countdown.hours * 3600 + countdown.minutes * 60 + countdown.seconds) * 1000;
      endTimeMsRef.current = Date.now() + totalMs;
    }

    const tick = () => {
      const endMs = endTimeMsRef.current;
      if (endMs == null) return;

      const nowMs = Date.now();
      const remainingMs = endMs - nowMs;

      if (remainingMs <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(remainingMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [countdown.hours, countdown.minutes, countdown.seconds]);

  const hoursStr = timeLeft.hours.toString().padStart(2, "0");
  const minutesStr = timeLeft.minutes.toString().padStart(2, "0");
  const secondsStr = timeLeft.seconds.toString().padStart(2, "0");

  return (
    <div
      className="[backface-visibility:hidden] text-white cursor-default items-center flex shrink-0 gap-0.5"
      aria-label={`ending in ${timeLeft.hours} hours ${timeLeft.minutes} minutes ${timeLeft.seconds} seconds`}
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
