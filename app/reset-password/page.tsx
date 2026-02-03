import { LoginPageHeader } from "@/components/auth";
import { ResetPasswordSection } from "@/components/auth/reset-password-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Reset Password",
  description: "Reset your Shopee account password",
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoginPageHeader title="Reset Password" />
      <ResetPasswordSection />
      <SiteFooter />
    </div>
  );
}
