"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/auth-context";
import type { FeatureIcon } from "./data";

interface FeatureIconsProps {
  icons: FeatureIcon[];
}

function resolveFeatureHref(icon: FeatureIcon, isLoggedIn: boolean): string {
  const label = icon.label.toLowerCase();
  const href = icon.href.toLowerCase();
  const isNewUserZone =
    label.includes("new user zone") ||
    href.includes("/m/welcome-series") ||
    href.includes("welcome-series");

  if (isNewUserZone && !isLoggedIn) {
    return "/register";
  }

  return icon.href;
}

export function FeatureIcons({ icons }: FeatureIconsProps) {
  const { isLoggedIn } = useAuth();

  return (
    <div className="mx-auto mt-2.5 flex min-h-28 w-full max-w-[1200px] flex-wrap justify-center gap-x-2 gap-y-4 bg-white px-2 py-2 sm:justify-around sm:px-4">
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={resolveFeatureHref(icon, isLoggedIn)}
          className="active:outline-0 hover:outline-0"
        >
          <div className="w-[4.5rem] hover:translate-y-[-0.0625rem] sm:w-24">
            <div className="mx-auto mb-2 mt-3 h-10 w-10 rounded-[50%] sm:mt-5 sm:h-11 sm:w-11">
              <div className="relative h-full">
                <div
                  className="h-full bg-contain bg-no-repeat transition-opacity duration-200"
                  style={{
                    backgroundImage: `url(${icon.iconUrl})`,
                  }}
                />
              </div>
            </div>
            <div className="mb-2 max-w-36 overflow-x-hidden overflow-y-hidden text-center text-[0.72rem] leading-4 tracking-[0] text-neutral-800 [display:-webkit-box] [-webkit-line-clamp:2] [word-wrap:break-word] whitespace-pre-line text-ellipsis sm:text-sm">
              {icon.label}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
