import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tokogaspol88 - Toko Kebutuhan Otomotif Terpercaya",
  description: "Selamat datang di Tokogaspol88! Toko online terpercaya untuk kebutuhan otomotif Anda. Jual berbagai aksesoris dan spare part mobil berkualitas dengan harga terjangkau.",
  keywords: "tokogaspol88, toko otomotif, spare part mobil, aksesoris mobil, onderdil mobil, toko online otomotif",
  authors: [{ name: "Tokogaspol88" }],
  creator: "Tokogaspol88",
  publisher: "Tokogaspol88",
  openGraph: {
    title: "Tokogaspol88 - Toko Kebutuhan Otomotif Terpercaya",
    description: "Toko online terpercaya untuk kebutuhan otomotif Anda. Jual berbagai aksesoris dan spare part mobil berkualitas.",
    url: "https://tokogaspol88.com",
    siteName: "Tokogaspol88",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://tokogaspol88.com/logo.png",
        width: 400,
        height: 400,
        alt: "Tokogaspol88 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokogaspol88 - Toko Kebutuhan Otomotif Terpercaya",
    description: "Toko online terpercaya untuk kebutuhan otomotif Anda.",
    images: ["https://tokogaspol88.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
