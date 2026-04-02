"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { cn, isBackendImage } from "@/lib/utils";

const ProductCardReadyContext = createContext<(() => void) | null>(null);

export const PRODUCT_PLACEHOLDER_IMAGE = "/images/placeholders/shopee-product-placeholder.jpg";

const PRODUCT_CARD_BLUR_DATA_URL =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%23f1f2f4'/%3E%3Crect x='1.5' y='1.5' width='5' height='5' rx='1' fill='%23ffffff' fill-opacity='.58'/%3E%3C/svg%3E";

interface ProductCardLoadFrameProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  skeletonClassName?: string;
}

interface ProductCardImageProps {
  src?: string | null;
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
  unoptimized?: boolean;
  native?: boolean;
}

function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-30 flex flex-col bg-white/95 p-2",
        className,
      )}
    >
      <div className="product-card-shimmer relative w-full overflow-hidden rounded-sm bg-[#eef1f4] pt-[100%]">
        <div className="absolute inset-x-[17%] top-[15%] h-[56%] rounded-[1.25rem] border border-white/80 bg-white/55" />
        <div className="absolute inset-x-[32%] bottom-[18%] h-2.5 rounded-full bg-white/60" />
      </div>
      <div className="mt-2 flex flex-1 flex-col justify-between gap-3">
        <div className="space-y-2">
          <div className="product-card-shimmer h-3.5 w-full rounded-full bg-[#eef1f4]" />
          <div className="product-card-shimmer h-3.5 w-4/5 rounded-full bg-[#eef1f4]" />
        </div>
        <div className="space-y-2">
          <div className="product-card-shimmer h-4 w-24 rounded-full bg-[#eef1f4]" />
          <div className="flex items-center justify-between gap-2">
            <div className="product-card-shimmer h-3.5 w-16 rounded-full bg-[#eef1f4]" />
            <div className="product-card-shimmer h-3.5 w-12 rounded-full bg-[#eef1f4]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductCardLoadFrame({
  children,
  className,
  contentClassName,
  skeletonClassName,
}: ProductCardLoadFrameProps) {
  const [isReady, setIsReady] = useState(false);
  const markReady = useCallback(() => {
    setIsReady((current) => current || true);
  }, []);

  return (
    <ProductCardReadyContext.Provider value={markReady}>
      <div className={cn("relative", className)}>
        <div
          className={cn(
            "transition-opacity duration-300 ease-out",
            isReady ? "opacity-100" : "opacity-0",
            contentClassName,
          )}
        >
          {children}
        </div>
        {!isReady && <ProductCardSkeleton className={skeletonClassName} />}
      </div>
    </ProductCardReadyContext.Provider>
  );
}

export function ProductCardImage({
  src,
  alt,
  className,
  containerClassName,
  sizes,
  fill = false,
  width,
  height,
  loading = "lazy",
  priority = false,
  unoptimized,
  native = false,
}: ProductCardImageProps) {
  const markReady = useContext(ProductCardReadyContext);
  const normalizedSrc = src?.trim() || PRODUCT_PLACEHOLDER_IMAGE;
  const [currentSrc, setCurrentSrc] = useState(normalizedSrc);
  const [hasFallback, setHasFallback] = useState(!src?.trim());
  const [isLoaded, setIsLoaded] = useState(false);

  const handleReady = useCallback(() => {
    setIsLoaded(true);
    markReady?.();
  }, [markReady]);

  const handleError = useCallback(() => {
    if (!hasFallback) {
      setHasFallback(true);
      setCurrentSrc(PRODUCT_PLACEHOLDER_IMAGE);
      return;
    }

    handleReady();
  }, [handleReady, hasFallback]);

  const resolvedContainerClassName = cn(
    fill ? "absolute inset-0 h-full w-full" : "relative h-full w-full",
    "overflow-hidden bg-[#f5f5f5]",
    containerClassName,
  );

  const resolvedImageClassName = cn(
    "transition-opacity duration-300 ease-out",
    isLoaded ? "opacity-100" : "opacity-0",
    className,
  );

  const resolvedUnoptimized =
    typeof unoptimized === "boolean" ? unoptimized : isBackendImage(currentSrc);

  if (native) {
    return (
      <div className={resolvedContainerClassName}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentSrc}
          alt={alt}
          loading={loading}
          decoding="async"
          className={resolvedImageClassName}
          onLoad={handleReady}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div className={resolvedContainerClassName}>
      <Image
        src={currentSrc}
        alt={alt}
        fill={fill}
        width={fill ? undefined : (width ?? 640)}
        height={fill ? undefined : (height ?? 640)}
        className={resolvedImageClassName}
        sizes={sizes}
        loading={loading}
        priority={priority}
        unoptimized={resolvedUnoptimized}
        placeholder="blur"
        blurDataURL={PRODUCT_CARD_BLUR_DATA_URL}
        onLoad={handleReady}
        onError={handleError}
      />
    </div>
  );
}
