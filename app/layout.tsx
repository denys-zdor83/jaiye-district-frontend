import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import StoreProvider from "@/store/StoreProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Jaiyé District — Nigerian Culinary Blog",
    template: "%s | Jaiyé District",
  },
  description:
    "Authentic Nigerian recipes, culinary stories, and a community built around the joy of African cooking.",
  keywords: ["Nigerian food", "African cuisine", "recipes", "Jollof rice", "culinary blog"],
  openGraph: {
    title: "Jaiyé District",
    description: "Where African Flavours Come Alive",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <StoreProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </StoreProvider>
      </body>
    </html>
  );
}
