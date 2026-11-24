import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { BRAND_CONFIG } from "@/config/brand";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://birmal.in"),
  title: `${BRAND_CONFIG.name} | Strong Concentrated Floor Cleaner — Pine Fresh`,
  description:
    "BIRMAL Concentrated Floor Cleaner by Birrumalae Pharma. 2X tough on stains, 99.9% germ protection, safe on marble & granite, with natural long-lasting pine freshness.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "BIRMAL",
    "Floor Cleaner",
    "Concentrated Floor Cleaner",
    "Pine Floor Cleaner",
    "Birrumalae Pharma",
    "Hyderabad Floor Cleaner",
    "Marble Safe Cleaner",
    "Best Floor Cleaner India",
  ],
  authors: [{ name: "Birrumalae Pharma Private Limited" }],
  openGraph: {
    title: "BIRMAL Concentrated Floor Cleaner",
    description: "Strong Concentrated Cleaner — Freshness In Every Clean.",
    url: "https://birmal.in",
    siteName: "BIRMAL Official Website",
    images: [
      {
        url: "/images/products/bottle-lineup.png",
        width: 1200,
        height: 630,
        alt: "BIRMAL Floor Cleaner Lineup",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
