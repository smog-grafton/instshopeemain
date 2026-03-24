import Link from "next/link";
import type { ApiWelcomePerk } from "@/lib/api-client";

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function WelcomePerkImageBanner({ perk }: { perk: ApiWelcomePerk }) {
  if (!perk.bannerImageUrl) {
    return null;
  }

  const href = perk.linkUrl?.trim() || "#";
  const img = (
    <img
      src={perk.bannerImageUrl}
      alt=""
      loading="lazy"
      decoding="async"
      className="box-border block h-auto w-full border-0 align-bottom object-fill"
    />
  );

  return (
    <div className="mb-3 w-full last:mb-0 sm:mb-3.5">
      {isExternal(href) ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block outline-none hover:opacity-[0.99] active:opacity-95"
        >
          {img}
        </a>
      ) : (
        <Link
          href={href}
          className="block outline-none hover:opacity-[0.99] active:opacity-95"
        >
          {img}
        </Link>
      )}
    </div>
  );
}
