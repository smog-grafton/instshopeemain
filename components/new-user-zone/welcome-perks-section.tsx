import type { ApiWelcomePerk } from "@/lib/api-client";
import { WelcomePerkImageBanner } from "./welcome-perk-image-banner";
import { WelcomePerkInteractiveCard } from "./welcome-perk-interactive-card";

export function WelcomePerksSection({ perks }: { perks: ApiWelcomePerk[] }) {
  if (!perks.length) {
    return null;
  }

  const sorted = [...perks].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section
      className="w-full bg-transparent pb-1 pt-0 sm:pb-2 sm:pt-0.5"
      aria-label="Welcome perks offers"
    >
      <div className="mx-auto w-full max-w-[1200px] bg-transparent px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="bg-transparent px-2 sm:px-3 md:px-5 lg:px-6">
          {sorted.map((p) =>
            p.kind === "image_banner" ? (
              <WelcomePerkImageBanner key={p.id} perk={p} />
            ) : (
              <WelcomePerkInteractiveCard key={p.id} perk={p} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
