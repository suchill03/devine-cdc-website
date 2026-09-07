import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Devine Child Development Centre | Your Safe Space",
    template: "%s | Devine CDC",
  },
  description:
    "Child development support through personalised therapy programmes and consultation in Gurugram.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
