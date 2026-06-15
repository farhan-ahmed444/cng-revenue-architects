import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CnG Revenue Architects, LLC | Revenue Infrastructure for Scalable Growth",
  description:
    "We diagnose, architect, and align the commercial systems that drive sustainable enterprise expansion. Product. People. Process.",
  keywords: [
    "revenue architecture",
    "commercial infrastructure",
    "growth consulting",
    "business alignment",
    "process optimization",
    "enterprise growth",
  ],
  openGraph: {
    title: "CnG Revenue Architects, LLC",
    description:
      "Engineered by Us! Driven by You! Revenue Infrastructure Built for Scalable Growth.",
    url: "https://cngrevenuearchitects.com",
    siteName: "CnG Revenue Architects",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="antialiased bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
