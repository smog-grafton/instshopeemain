import type { Metadata } from "next";
import "./globals.css";
import { LayoutWithChat } from "@/components/chat-widget/layout-with-chat";

export const metadata: Metadata = {
  title: {
    default: "InstShopee - E-commerce Platform",
    template: "%s | InstShopee",
  },
  description: "Multi-country e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutWithChat>{children}</LayoutWithChat>
      </body>
    </html>
  );
}
