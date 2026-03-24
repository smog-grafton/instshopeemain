import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { SiteFooter } from "@/components/site-footer";
import { NewUserOnlyHeader } from "@/components/new-user-zone/new-user-only-header";
import { WelcomePerksRibbon } from "@/components/new-user-zone/welcome-perks-ribbon";
import { getCountryContext } from "@/lib/country";
import {
  getUiBlocksSafe,
  getWelcomePerksSafe,
  resolveCountryIdFromCode,
} from "@/lib/api-client";
import { WelcomePerksSection } from "@/components/new-user-zone/welcome-perks-section";

export const metadata = {
  title: "New User Zone",
  description: "Welcome perks and deals for new users.",
};

export default async function WelcomeSeriesPage() {
  const { code } = await getCountryContext();
  const countryId = await resolveCountryIdFromCode(code);
  const blocks = await getUiBlocksSafe({
    key: "new_user_zone_header",
    country_id: countryId,
  });
  const block = blocks[0];
  let welcomePerks = await getWelcomePerksSafe({ country_id: countryId });
  // If nothing matches the resolved country (e.g. perks seeded for another country), show global/unfiltered perks.
  if (welcomePerks.length === 0) {
    welcomePerks = await getWelcomePerksSafe();
  }

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
