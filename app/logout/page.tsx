"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/auth-context";

/** Logout page: clears simulated auth and redirects to home. */
export default function LogoutPage() {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    router.replace("/");
  }, [logout, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(245,245,245)]">
      <p className="text-black/60">Logging out…</p>
    </div>
  );
}
