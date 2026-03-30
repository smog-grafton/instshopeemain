"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getUiBlocks,
  resolveCountryIdForBrowser,
  type ApiUiBlock,
} from "@/lib/api-client";

export function FloatingPromo() {
  const [block, setBlock] = useState<ApiUiBlock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlock() {
      try {
        const countryId = await resolveCountryIdForBrowser();
        const blocks = await getUiBlocks({
          key: "floating_promo",
          country_id: countryId,
        });
        if (blocks.length > 0) {
          setBlock(blocks[0]);
        }
      } catch (error) {
        console.error("Failed to load floating promo:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlock();
  }, []);

  if (loading || !block || !block.imageSrc) {
    return null;
  }

  return (
    <div
      className="fixed bottom-20 right-24 z-[1000] hidden cursor-pointer xl:block"
      role="img"
      aria-label="Promotional banner"
    >
      <a href={block.href} className="block">
        <Image
          src={block.imageSrc}
          alt={block.title || "Promotional banner"}
          width={90}
          height={96}
          loading="lazy"
          className="inline h-24 w-[90px] align-bottom text-black/80"
          unoptimized
        />
      </a>
    </div>
  );
}
