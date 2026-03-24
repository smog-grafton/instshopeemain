/**
 * Hardcoded “Limited time welcome perks” ribbon (responsive srcset assets in /public/images/new-user).
 */

const SRC = "/images/new-user/welcome-perks-base.jpg";

const SRC_SET = [
  "/images/new-user/welcome-perks-480w.jpg 480w",
  "/images/new-user/welcome-perks-720w.jpg 720w",
  "/images/new-user/welcome-perks-960w.jpg 960w",
  "/images/new-user/welcome-perks-1440w.jpg 1440w",
  "/images/new-user/welcome-perks-1920w.jpg 1920w",
  "/images/new-user/welcome-perks-2880w.jpg 2880w",
].join(", ");

/** Matches Shopee layout intent: pick closest width for the main column. */
const SIZES =
  "(max-width: 480px) 480px, (max-width: 720px) 720px, (max-width: 960px) 960px, (max-width: 1440px) 1440px, (max-width: 1920px) 1920px, 2880px";

export function WelcomePerksRibbon() {
  return (
    <section
      className="w-full bg-transparent pt-2 sm:pt-2.5 md:pt-3"
      aria-label="Limited time welcome perks"
    >
      <div className="mx-auto w-full max-w-[1200px] bg-transparent px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="bg-transparent px-2 sm:px-3 md:px-5 lg:px-6">
          {/** JPEG includes a full-width white matte; darken vs #f5f5f5 removes the white strip. */}
          <div className="w-full bg-[#f5f5f5]">
            <img
              sizes={SIZES}
              srcSet={SRC_SET}
              src={SRC}
              alt="Limited time welcome perks"
              loading="lazy"
              width={1200}
              height={120}
              decoding="async"
              className="box-border block h-auto w-full border-0 align-bottom object-fill mix-blend-darken"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
