import { type Metadata } from "next";
import { env } from "env.mjs";

export const metadata: Metadata = {
  title: {
    default: "Ungoogled Forms",
    template: "%s — Ungoogle Forms",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${env.NEXT_PUBLIC_APP_URL}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
