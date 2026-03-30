"use client";
import { LeftSection } from "./left-section";
import { getSellerCentreHref } from "./left-section";
import { RightSection } from "./right-section";
import { mockNavbarConfig, mockShopNavbarConfig } from "./data";
import type { NavbarConfig } from "./data";
import { useAuth } from "@/components/auth/auth-context";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/lib/api-client";

export type TopNavbarVariant = "default" | "shop";

export interface TopNavbarProps {
  /** "shop" uses Shopee Home link and darker red background for shop/mall pages. */
  variant?: TopNavbarVariant;
  /** Optional config override; when variant is "shop", defaults to mockShopNavbarConfig. */
  config?: NavbarConfig;
}

const SHOP_TOP_BAR_BG = "rgb(208,1,27)";

export function TopNavbar({ variant = "default", config }: TopNavbarProps) {
  const { isLoggedIn, user: authUser } = useAuth();
  const [userProfile, setUserProfile] = useState<{ username: string; avatarUrl: string } | null>(null);
  const [sellerHref, setSellerHref] = useState(() =>
    config?.sellerCentreUrl && config.sellerCentreUrl !== "/portal"
      ? config.sellerCentreUrl
      : process.env.NEXT_PUBLIC_SELLER_CENTRE_URL || "#"
  );

  useEffect(() => {
    if (isLoggedIn && authUser) {
      async function loadProfile() {
        try {
          const profile = await getUserProfile();
          if (profile && profile.username) {
            setUserProfile({
              username: profile.username,
              avatarUrl: profile.avatarUrl ?? "",
            });
          }
        } catch (error) {
          console.error("Failed to load user profile:", error);
          // Use auth user as fallback
          if (authUser) {
            setUserProfile({
              username: authUser.username,
              avatarUrl: authUser.avatarUrl ?? "",
            });
          }
        }
      }
      loadProfile();
    }
  }, [isLoggedIn, authUser]);
  const baseConfig = variant === "shop" ? mockShopNavbarConfig : mockNavbarConfig;
  const resolvedConfig: NavbarConfig = config ?? {
    ...baseConfig,
    user: {
      ...baseConfig.user,
      username: userProfile?.username ?? authUser?.username ?? baseConfig.user.username,
      avatarUrl: (authUser?.avatarUrl ?? userProfile?.avatarUrl ?? baseConfig.user.avatarUrl) ?? "",
    },
  };
  const isShop = variant === "shop";
  const firstLink = resolvedConfig.firstLeftLink ?? {
    label: "Seller Centre",
    href: sellerHref,
  };
  const isFirstLinkExternal = firstLink.href.startsWith("http") || firstLink.href.startsWith("//");

  useEffect(() => {
    setSellerHref(getSellerCentreHref(resolvedConfig));
  }, [resolvedConfig.sellerCentreUrl]);
  
  return (
    <>
      <div
        className={`[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] relative z-[400] border-b border-white/15 text-sm leading-tight text-black/80 lg:hidden ${!isShop ? "bg-[#ee4d2d]" : ""}`}
        style={isShop ? { backgroundColor: SHOP_TOP_BAR_BG } : undefined}
      >
        <div className="mx-auto flex w-full items-center gap-2 overflow-x-auto whitespace-nowrap px-3 py-2 text-white [scrollbar-width:none] sm:px-4 [&::-webkit-scrollbar]:hidden">
          <a
            href={firstLink.href}
            {...(isFirstLinkExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="shrink-0 rounded-[2px] px-1 py-0.5 text-xs font-medium text-white no-underline hover:text-white/80"
          >
            {firstLink.label}
          </a>
          <span className="h-3.5 w-px shrink-0 bg-white/25" aria-hidden />
          <span className="shrink-0 text-[11px] font-light uppercase tracking-[0.08em] text-white/80">
            Follow us
          </span>
          <div className="flex items-center gap-2">
            {resolvedConfig.socialLinks.map((link, index) => (
              <a
                key={`${link.title}-${index}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="inline-block h-4 w-4 shrink-0 overflow-hidden rounded-[1px] bg-[url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/821f04b210432a71.png)] bg-size-[681.25%_356.25%] indent-[-9999px] no-underline"
                style={{
                  backgroundPosition: link.bgPosition,
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] relative z-[400] hidden h-9 min-w-0 w-full text-sm leading-tight text-black/80 lg:block ${!isShop ? "bg-[#ee4d2d]" : ""}`}
        id="component"
        style={isShop ? { backgroundColor: SHOP_TOP_BAR_BG } : undefined}
      >
        <nav
          className={`mx-auto items-center flex text-white w-full max-w-[1200px] px-3 sm:px-4 ${!isShop ? "max-w-6xl" : ""}`}
        >
          <LeftSection config={resolvedConfig} />
          <div className="flex-1"></div>
          <RightSection config={resolvedConfig} />
        </nav>
      </div>
    </>
  );
}
