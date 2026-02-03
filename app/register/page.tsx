import { LoginPageHeader, SignupFormSection } from "@/components/auth";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Sign Up",
  description: "Create your Shopee account",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoginPageHeader title="Sign Up" />
      <SignupFormSection />
      <SiteFooter />
    </div>
  );
}
