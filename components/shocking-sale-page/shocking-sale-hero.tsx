/**
 * Hero / banner section for the shocking sale page.
 * Renders the main promotional banner container with background image
 * (gradient, horses, coins). Session bar (19:00 Ongoing, etc.) can be
 * rendered as children.
 */

const BANNER_BG_PATH = "/images/stores/assets/shocking-sale-hero-banner.jpeg";

interface ShockingSaleHeroProps {
  children?: React.ReactNode;
}

export function ShockingSaleHero({ children }: ShockingSaleHeroProps) {
  return (
    <div
      id="shocking-sale-hero"
      className="text-sm leading-tight text-black/80 w-[1200px] max-w-[100%] mx-auto pt-60 min-h-[200px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${BANNER_BG_PATH}')`,
      }}
    >
      {children}
    </div>
  );
}
