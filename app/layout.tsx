import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeCoinUSA — Shop the USA, Pick Up in West Africa",
  description:
    "Browse 64,000+ products from top US retailers, pay with mobile money, and collect from your nearest warehouse across 10 West African countries.",
  keywords: [
    "LeCoinUSA",
    "cross-border e-commerce",
    "US products Africa",
    "mobile money shopping",
    "Walmart Africa",
    "shop USA from Africa",
    "West Africa e-commerce",
    "T-Money",
    "Orange Money",
    "MTN MoMo",
    "Wave",
  ],
  openGraph: {
    title: "LeCoinUSA — Shop the USA, Pick Up in West Africa",
    description:
      "Browse 64,000+ products from top US retailers, pay with mobile money, and collect from your nearest warehouse across 10 West African countries.",
    type: "website",
    locale: "en_US",
    siteName: "LeCoinUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeCoinUSA — Shop the USA, Pick Up in West Africa",
    description:
      "Browse 64,000+ products from top US retailers, pay with mobile money, and collect from your nearest warehouse across 10 West African countries.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
