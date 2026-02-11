import { Suspense } from "react";
import { LoginPageHeader, LoginFormSection } from "@/components/auth";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Log In",
  description: "Log in to your Shopee account",
};

function LoginFormWrapper() {
  return <LoginFormSection />;
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoginPageHeader />
      <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]">Loading...</div>}>
        <LoginFormWrapper />
      </Suspense>
      <SiteFooter />
    </div>
  );
}
