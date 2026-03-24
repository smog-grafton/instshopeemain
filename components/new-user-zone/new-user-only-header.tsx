import Link from "next/link";

/** Local asset (mirrors Shopee welcome-series ribbon); admin can override via UiBlock `new_user_zone_header`. */
export const NEW_USER_ZONE_DEFAULT_HEADER_IMAGE =
  "/images/new-user/new-user-only-banner.jpg";

export interface NewUserOnlyHeaderProps {
  imageSrc: string | null | undefined;
  href?: string | null;
  alt?: string | null;
}

export function NewUserOnlyHeader({
  imageSrc,
  href = "/m/welcome-series",
  alt = "New user only",
}: NewUserOnlyHeaderProps) {
  const src = imageSrc?.trim() || NEW_USER_ZONE_DEFAULT_HEADER_IMAGE;
  const safeAlt = alt?.trim() || "New user only";
  const linkHref = href?.trim();
  const isLink = Boolean(linkHref && linkHref !== "#");

  /** Asset JPEG includes a full-width white matte; darken vs this bg turns white into page grey. */
  const graphic = (
    <div className="w-full bg-[#f5f5f5]">
      <img
        src={src}
        alt={safeAlt}
        loading="lazy"
        width={1200}
        height={151}
        decoding="async"
        className="block h-auto w-full max-w-[1200px] align-bottom object-left object-contain mix-blend-darken"
      />
    </div>
  );

  return (
    <section
      className="w-full bg-transparent font-sans leading-[1.2] text-[rgba(0,0,0,0.87)]"
      aria-label={safeAlt}
    >
      <div className="mx-auto w-full max-w-[1200px] bg-transparent px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-5 lg:px-8 lg:pt-5">
        <div className="bg-transparent pl-2 sm:pl-3 md:pl-5 lg:pl-6">
          {isLink ? (
            <Link
              href={linkHref!}
              className="block bg-transparent outline-none hover:opacity-[0.98] active:opacity-95 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f5]"
            >
              {graphic}
            </Link>
          ) : (
            <div className="block bg-transparent">{graphic}</div>
          )}
        </div>
      </div>
    </section>
  );
}
