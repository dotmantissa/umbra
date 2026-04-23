import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Umbra — Confidential OTC",
  description:
    "Institutional OTC trading desk with amount privacy on Arc Testnet. Hidden positions, verified settlement, regulatory audit trail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="pt-16 min-h-screen bg-arc-dark">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
