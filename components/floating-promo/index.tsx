"use client";

import Image from "next/image";

const FLOATING_PROMO_IMAGE = "/images/home/floating/ordernow.gif";
const WIDTH = 90;
const HEIGHT = 96;

export function FloatingPromo() {
  return (
    <div
      className="fixed right-24 bottom-20 z-[1000] cursor-default"
      role="img"
      aria-label="Promotional banner"
    >
      <Image
        src={FLOATING_PROMO_IMAGE}
        alt="Banner"
        width={WIDTH}
        height={HEIGHT}
        loading="lazy"
        className="inline h-24 w-[90px] align-bottom text-black/80"
        unoptimized
      />
    </div>
  );
}
