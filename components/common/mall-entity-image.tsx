"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MALL_PLACEHOLDER_IMAGE, resolveMallImageSource } from "@/lib/mall";
import { isBackendImage } from "@/lib/utils";

interface MallEntityImageProps {
  alt: string;
  className?: string;
  sizes: string;
  src: string | null | undefined;
}

export function MallEntityImage({
  alt,
  className,
  sizes,
  src,
}: MallEntityImageProps) {
  const [imageSrc, setImageSrc] = useState(() => resolveMallImageSource(src));

  useEffect(() => {
    setImageSrc(resolveMallImageSource(src));
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      unoptimized={imageSrc.startsWith("http://") || imageSrc.startsWith("https://") || isBackendImage(imageSrc)}
      onError={() => {
        if (imageSrc !== MALL_PLACEHOLDER_IMAGE) {
          setImageSrc(MALL_PLACEHOLDER_IMAGE);
        }
      }}
    />
  );
}
