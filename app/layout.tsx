import type { Metadata } from "next";
import "./globals.css";
import CannabisCursor from "@/components/CannabisCursor";

export const metadata: Metadata = {
  title: "Cannabis 420 Growers",
  description: "Premium Herbal Medicines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* This will only show on desktop automatically */}
        <CannabisCursor />
        {children}
      </body>
    </html>
  );
}