import { UserSidebar } from "./user-sidebar";

interface UserDashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Two-column layout: left sidebar (user info + nav) and main content slot.
 * Use for /user/purchase, /user/account/profile, etc.
 */
export function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
  return (
    <div
      className="[font-family:Roboto,SHPBurmese,SHPKhmer,Helvetica_Neue,Helvetica,Arial,文泉驛正黑,WenQuanYi_Zen_Hei,Hiragino_Sans_GB,儷黑_Pro,LiHei_Pro,Heiti_TC,微軟正黑體,Microsoft_JhengHei_UI,Microsoft_JhengHei,sans-serif] text-sm leading-tight text-black/80 transition-all duration-300 ease-in-out"
      id="user-dashboard"
    >
      <div className="w-[1200px] mx-auto flex pt-5 pb-12">
        <UserSidebar />
        {children}
      </div>
    </div>
  );
}
