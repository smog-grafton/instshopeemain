"use client";

import Image from "next/image";

interface ProductBadgeProps {
  badge: "choice" | "preferred" | "mall" | "top-picks";
}

const badgeImages: Record<ProductBadgeProps["badge"], string> = {
  choice: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4f05fdd32e72cde6dc74.png",
  preferred: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/4a0a35a9c169de389428.png",
  mall: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/6ba14252b9facdb2a91c.png",
  "top-picks": "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/aafff91b7caa45e7284b.png",
};

export function ProductBadge({ badge }: ProductBadgeProps) {
  const imageUrl = badgeImages[badge];

  // Smaller, more compact sizes to match screenshot
  const getBadgeSize = () => {
    if (badge === "choice") {
      return { width: 35, height: 14 }; // Top-left, very compact
    }
    if (badge === "top-picks") {
      return { width: 50, height: 16 }; // Top-right, compact
    }
    if (badge === "mall") {
      return { width: 35, height: 14 };
    }
    if (badge === "preferred") {
      return { width: 38, height: 15 }; // Top-left, compact red badge
    }
    return { width: 35, height: 14 };
  };

  const size = getBadgeSize();

  return (
    <div className="bg-contain bg-no-repeat">
      <Image
        src={imageUrl}
        alt={badge}
        width={size.width}
        height={size.height}
        className="object-contain"
        unoptimized
      />
    </div>
  );
}
