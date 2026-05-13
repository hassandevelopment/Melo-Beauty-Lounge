import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Mélo Beauty Lounge — Ladies Salon in Barbar, Bahrain",
  description:
    "Ladies-only beauty lounge in Barbar, Bahrain. Hair, nails, colour, treatments — and an in-house café. Book via WhatsApp. Open daily 10 AM – 9 PM.",
  keywords: [
    "salon Barbar",
    "ladies salon Bahrain",
    "nails Bahrain",
    "hair color Bahrain",
    "balayage Bahrain",
    "Olaplex Bahrain",
    "salon café Bahrain",
    "Mélo Beauty Lounge",
  ],
  openGraph: {
    type: "website",
    locale: "en_BH",
    siteName: "Mélo Beauty Lounge",
    images: [{ url: "/images/IMG_3913.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
