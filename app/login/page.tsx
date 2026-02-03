import { LoginPageHeader, LoginFormSection } from "@/components/auth";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Log In",
  description: "Log in to your Shopee account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoginPageHeader />
      <LoginFormSection />
      <SiteFooter />
    </div>
  );
}
