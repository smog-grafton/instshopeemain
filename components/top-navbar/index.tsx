"use client";

import { LeftSection } from "./left-section";
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
  
  return (
    <div
      className={`[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 z-[400] h-9 relative min-w-0 w-full ${!isShop ? "bg-[#ee4d2d]" : ""}`}
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
  );
}
