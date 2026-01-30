import { IconHeart } from "./icons";

/** Share buttons use only local assets from public/images/social (no external URLs). */
const SHARE_LINKS = [
  { label: "Share on Messenger", href: "#", icon: "/images/social/messenger.png" },
  { label: "Share on Facebook", href: "#", icon: "/images/social/facebook.png" },
  { label: "Share on Pinterest", href: "#", icon: "/images/social/pinterest.png" },
  { label: "Share on Twitter", href: "#", icon: "/images/social/x.png" },
] as const;

interface ProductShareFavoriteProps {
  favoriteCount: number;
}

export function ProductShareFavorite({ favoriteCount }: ProductShareFavoriteProps) {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-nowrap items-center shrink-0 border-r border-r-black/9 px-[30px]">
        <span className="text-[rgb(34,34,34)] text-base shrink-0">Share:</span>
        {SHARE_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="inline-flex shrink-0 items-center justify-center w-[25px] h-[25px] ml-1.5 border-0 outline-none appearance-none cursor-pointer relative focus-visible:outline-2 focus-visible:outline-black/80 focus-visible:outline focus-visible:rounded-sm"
          >
            <img src={icon} alt="" width={25} height={25} className="object-contain block" />
          </a>
        ))}
      </div>
      <div className="flex flex-1 min-w-0 justify-center items-center cursor-pointer pl-5">
        <button
          type="button"
          className="flex items-center gap-0 bg-transparent border-0 outline-none relative overflow-visible appearance-none cursor-pointer text-black/80 font-normal text-[14px] leading-[16.8px] m-0 py-1 px-0 rounded-sm hover:opacity-90 active:opacity-95 focus-visible:outline-2 focus-visible:outline-black/80 focus-visible:outline focus-visible:rounded-sm focus-visible:outline-offset-1"
          tabIndex={0}
          aria-label={`Favorite (${favoriteCount})`}
        >
          <IconHeart className="stroke-[#FF424F] shrink-0 mr-2.5 overflow-hidden" />
          <span className="text-[rgb(34,34,34)] text-base whitespace-nowrap">
            Favorite ({favoriteCount})
          </span>
        </button>
      </div>
    </div>
  );
}
