"use client";

import { useEffect, useState } from "react";
import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { SiteFooter } from "@/components/site-footer";
import { NewUserOnlyHeader } from "@/components/new-user-zone/new-user-only-header";
import { WelcomePerksRibbon } from "@/components/new-user-zone/welcome-perks-ribbon";
import { WelcomePerksSection } from "@/components/new-user-zone/welcome-perks-section";
import {
  getUiBlocksSafe,
  getWelcomePerksSafe,
  resolveCountryIdForBrowser,
  type ApiUiBlock,
  type ApiWelcomePerk,
} from "@/lib/api-client";

export function WelcomeSeriesClient() {
  const [block, setBlock] = useState<ApiUiBlock | undefined>();
  const [welcomePerks, setWelcomePerks] = useState<ApiWelcomePerk[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadWelcomeSeries() {
      const countryId = await resolveCountryIdForBrowser();
      const [blocks, perks] = await Promise.all([
        getUiBlocksSafe({ key: "new_user_zone_header", country_id: countryId }),
        getWelcomePerksSafe(),
      ]);

      if (!cancelled) {
        setBlock(blocks[0]);
        setWelcomePerks(perks);
      }
    }

    void loadWelcomeSeries();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[rgba(0,0,0,0.8)] antialiased">
      <TopNavbar />
      <HeaderWithSearch />
      <main className="bg-transparent pb-16">
        <NewUserOnlyHeader
          imageSrc={block?.imageSrc}
          href={block?.href}
          alt={block?.title ?? "New user only"}
        />
        <WelcomePerksRibbon />
        <WelcomePerksSection perks={welcomePerks} />
      </main>
      <SiteFooter />
    </div>
  );
}
