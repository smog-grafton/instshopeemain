import { TopNavbar } from "@/components/top-navbar";
import { HeaderWithSearch } from "@/components/header-with-search";
import { FooterContent } from "@/components/footer-content";
import { SiteFooter } from "@/components/site-footer";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      <TopNavbar />
      <HeaderWithSearch />
      {children}
      <FooterContent />
      <SiteFooter />
    </div>
  );
}
