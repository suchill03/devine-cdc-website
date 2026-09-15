import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.devinecdc.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Devine CDC | Child Development Centre", template: "%s | Devine CDC" },
  description: "Compassionate, evidence-based child development support and personalised therapy programmes in Gurugram.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Devine CDC", title: "Devine CDC | Child Development Centre", description: "Compassionate, evidence-based child development support for your child’s unique journey.", url: siteUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
