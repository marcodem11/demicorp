import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Demicorp | Portfolio of Marco De Michele",
  description:
    "Full-stack engineer crafting AI-powered products, automation, and scalable web/mobile platforms. Based in Puglia, working worldwide.",
  metadataBase: new URL("https://www.demicorp.it"),
  openGraph: {
    title: "Demicorp | Portfolio of Marco De Michele",
    description:
      "AI + product-focused full-stack engineer delivering SaaS, automation, and modern experiences.",
    url: "https://www.demicorp.it",
    siteName: "Demicorp",
  },
  alternates: {
    canonical: "https://www.demicorp.it",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
