import { LoginPageHeader } from "@/components/auth";
import { ResetPasswordSection } from "@/components/auth/reset-password-section";
import { SiteFooter } from "@/components/site-footer";
import { Suspense } from "react";

export const metadata = {
  title: "Reset Password",
  description: "Reset your Shopee account password",
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoginPageHeader title="Reset Password" />
      <Suspense fallback={<div className="min-h-[600px] bg-neutral-50" />}>
        <ResetPasswordSection />
      </Suspense>
      <SiteFooter />
    </div>
  );
}
