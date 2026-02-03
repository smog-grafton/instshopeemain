import { LoginPageHeader, LoginQrSection } from "@/components/auth";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Log in with QR",
  description: "Scan QR code with Shopee App to log in",
};

export default function LoginQrPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoginPageHeader title="Log in with QR" />
      <LoginQrSection />
      <SiteFooter />
    </div>
  );
}
