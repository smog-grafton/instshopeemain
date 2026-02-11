"use client";

import { useState, useEffect } from "react";
import { IconHeart } from "./icons";
import { favoriteProduct, unfavoriteProduct, checkFavorite } from "@/lib/api-client";
import { useAuth } from "@/components/auth/auth-context";

interface ProductShareFavoriteProps {
  productSlug: string;
  favoriteCount: number;
  productTitle: string;
}

export function ProductShareFavorite({ productSlug, favoriteCount: initialFavoriteCount, productTitle }: ProductShareFavoriteProps) {
  const { user } = useAuth();
  const [favorited, setFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(initialFavoriteCount);
  const [loading, setLoading] = useState(false);
  const [shareLinks, setShareLinks] = useState<Array<{ label: string; href: string; icon: string }>>([]);

  // Generate share URLs only on client side to avoid hydration mismatch
  useEffect(() => {
    const productUrl = `${window.location.origin}/product/${productSlug}`;
    const encodedUrl = encodeURIComponent(productUrl);
    const encodedTitle = encodeURIComponent(productTitle);
    const encodedText = encodeURIComponent(`Check out ${productTitle} on Shopee!`);

    setShareLinks([
      {
        label: "Share on Messenger",
        href: `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=YOUR_APP_ID`,
        icon: "/images/social/messenger.png",
      },
      {
        label: "Share on Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        icon: "/images/social/facebook.png",
      },
      {
        label: "Share on Pinterest",
        href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`,
        icon: "/images/social/pinterest.png",
      },
      {
        label: "Share on Twitter",
        href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
        icon: "/images/social/x.png",
      },
    ]);
  }, [productSlug, productTitle]);

  // Check favorite status on mount
  useEffect(() => {
    if (user) {
      checkFavorite(productSlug)
        .then((response) => {
          setFavorited(response.favorited);
          setFavoriteCount(response.favoriteCount);
        })
        .catch(() => {
          // Silently fail if check fails
        });
    }
  }, [user, productSlug]);

  const handleFavoriteClick = async () => {
    if (!user) {
      // Could show a login prompt here
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      const response = favorited
        ? await unfavoriteProduct(productSlug)
        : await favoriteProduct(productSlug);
      
      setFavorited(response.favorited);
      setFavoriteCount(response.favoriteCount);
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-nowrap items-center shrink-0 border-r border-r-black/9 px-[30px]">
        <span className="text-[rgb(34,34,34)] text-base shrink-0">Share:</span>
        {shareLinks.length > 0 ? (
          shareLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex shrink-0 items-center justify-center w-[25px] h-[25px] ml-1.5 border-0 outline-none appearance-none cursor-pointer relative focus-visible:outline-2 focus-visible:outline-black/80 focus-visible:outline focus-visible:rounded-sm"
            >
              <img src={icon} alt="" width={25} height={25} className="object-contain block" />
            </a>
          ))
        ) : (
          // Placeholder during SSR/hydration
          <>
            <a href="#" className="inline-flex shrink-0 items-center justify-center w-[25px] h-[25px] ml-1.5" aria-hidden="true">
              <img src="/images/social/messenger.png" alt="" width={25} height={25} className="object-contain block" />
            </a>
            <a href="#" className="inline-flex shrink-0 items-center justify-center w-[25px] h-[25px] ml-1.5" aria-hidden="true">
              <img src="/images/social/facebook.png" alt="" width={25} height={25} className="object-contain block" />
            </a>
            <a href="#" className="inline-flex shrink-0 items-center justify-center w-[25px] h-[25px] ml-1.5" aria-hidden="true">
              <img src="/images/social/pinterest.png" alt="" width={25} height={25} className="object-contain block" />
            </a>
            <a href="#" className="inline-flex shrink-0 items-center justify-center w-[25px] h-[25px] ml-1.5" aria-hidden="true">
              <img src="/images/social/x.png" alt="" width={25} height={25} className="object-contain block" />
            </a>
          </>
        )}
      </div>
      <div className="flex flex-1 min-w-0 justify-center items-center cursor-pointer pl-5">
        <button
          type="button"
          onClick={handleFavoriteClick}
          disabled={loading || !user}
          className={`flex items-center gap-0 bg-transparent border-0 outline-none relative overflow-visible appearance-none cursor-pointer text-black/80 font-normal text-[14px] leading-[16.8px] m-0 py-1 px-0 rounded-sm hover:opacity-90 active:opacity-95 focus-visible:outline-2 focus-visible:outline-black/80 focus-visible:outline focus-visible:rounded-sm focus-visible:outline-offset-1 ${loading || !user ? 'opacity-50 cursor-not-allowed' : ''}`}
          tabIndex={0}
          aria-label={`Favorite (${favoriteCount})`}
        >
          <IconHeart 
            className={`shrink-0 mr-2.5 overflow-hidden ${favorited ? 'fill-[#FF424F] stroke-[#FF424F]' : 'stroke-[#FF424F]'}`} 
          />
          <span className="text-[rgb(34,34,34)] text-base whitespace-nowrap">
            Favorite ({favoriteCount})
          </span>
        </button>
      </div>
    </div>
  );
}
