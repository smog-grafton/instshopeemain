"use client";

import { useState, useEffect } from "react";
import { DigitFlip } from "./digit-flip";

interface CountdownTimerProps {
  countdown: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

// Functional countdown timer with flip-style animation
export function CountdownTimer({ countdown }: CountdownTimerProps) {
  // Calculate end time from initial countdown
  const getEndTime = () => {
    const now = new Date();
    const totalSeconds =
      countdown.hours * 3600 + countdown.minutes * 60 + countdown.seconds;
    return new Date(now.getTime() + totalSeconds * 1000);
  };

  const [endTime] = useState(() => getEndTime());
  const [timeLeft, setTimeLeft] = useState({
    hours: countdown.hours,
    minutes: countdown.minutes,
    seconds: countdown.seconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const hoursStr = timeLeft.hours.toString().padStart(2, "0");
  const minutesStr = timeLeft.minutes.toString().padStart(2, "0");
  const secondsStr = timeLeft.seconds.toString().padStart(2, "0");

  return (
    <div
      className="[backface-visibility:hidden] text-black cursor-default items-center flex scale-[0.84]"
      aria-label={`ending in ${timeLeft.hours} hours ${timeLeft.minutes} minutes ${timeLeft.seconds} seconds`}
      tabIndex={0}
    >
      <div className="box-content text-center bg-black justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden mb-1 px-[3px] py-px rounded-sm">
        <DigitFlip
          value={parseInt(hoursStr[0])}
          animationName="hour-ten"
          duration={360000}
        />
        <DigitFlip
          value={parseInt(hoursStr[1])}
          animationName="hour-digit"
          duration={36000}
        />
      </div>
      <div className="text-center [background-position-y:3px] flex-col w-[3px] h-4 text-xl flex mx-0.5 opacity-0">
        <div className="w-full h-3/6 relative">
          <span className="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex" />
        </div>
        <div className="w-full h-3/6 relative">
          <span className="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex" />
        </div>
      </div>
      <div className="box-content text-center bg-black justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden mb-1 px-[3px] py-px rounded-sm">
        <DigitFlip
          value={parseInt(minutesStr[0])}
          animationName="minute-ten"
          duration={3600}
        />
        <DigitFlip
          value={parseInt(minutesStr[1])}
          animationName="minute-digit"
          duration={600}
        />
      </div>
      <div className="text-center [background-position-y:3px] flex-col w-[3px] h-4 text-xl flex mx-0.5 opacity-0">
        <div className="w-full h-3/6 relative">
          <span className="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex" />
        </div>
        <div className="w-full h-3/6 relative">
          <span className="bg-current w-[3px] h-[3px] absolute rounded-[100%] left-0 top-[10%] flex" />
        </div>
      </div>
      <div className="box-content text-center bg-black justify-around min-w-5 h-4 text-xl leading-5 flex overflow-x-hidden overflow-y-hidden mb-1 px-[3px] py-px rounded-sm">
        <DigitFlip
          value={parseInt(secondsStr[0])}
          animationName="second-ten"
          duration={60}
        />
        <DigitFlip
          value={parseInt(secondsStr[1])}
          animationName="second-digit"
          duration={60}
        />
      </div>
    </div>
  );
}
