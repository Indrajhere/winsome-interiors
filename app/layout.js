import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientLayout from "./client-layout";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.winsomeinteriors.com.au"),
  title: "Custom Kitchens & Interior Joinery in South Australia | Winsome Interiors",
  description:
    "Premium custom kitchens, cabinetry & interior joinery services in South Australia.",
  keywords: [
    "interior joinery Australia",
    "custom kitchens Adelaide",
    "cabinet makers South Australia",
    "wardrobes Adelaide",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Winsome Interiors",
    description:
      "Custom kitchens, cabinetry & interior solutions in South Australia",
    url: "https://www.winsomeinteriors.com.au",
    siteName: "Winsome Interiors",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          <Header />
          <main className="">
            {children}
          </main>
          <ScrollToTop />
          <Footer />
        </ClientLayout>

      </body>
    </html>
  );
}
