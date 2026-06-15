import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-context";
import { LayoutWithChat } from "@/components/chat-widget/layout-with-chat";

export const metadata: Metadata = {
  title: {
    default: "InstShopee - Global Marketplace",
    template: "%s | InstShopee",
  },
  description: "A global marketplace for trusted sellers, everyday deals, and secure shopping.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <LayoutWithChat>{children}</LayoutWithChat>
        </AuthProvider>
      </body>
    </html>
  );
}
