import { redirect } from "next/navigation";
import { getSellerPortalHref } from "@/lib/account-routing";

export default function ApplyForMerchantPage() {
  redirect(getSellerPortalHref("/portal/my-onboarding?entry=merchant-application"));
}
