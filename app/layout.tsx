import type { Metadata } from "next";
import Script from "next/script";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CallFab } from "@/components/CallFab";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "ASR24 - Asistență Rutieră Non-Stop | 0767 39 39 39",
    template: "%s | ASR24",
  },
  description:
    "Club de asistență rutieră 24/7 în județul Argeș. Tractare auto, depanare la fața locului, start baterie, pană cauciuc. Un singur număr: 0767 39 39 39.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${anton.variable} ${archivo.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-paper grain">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18510380216"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18510380216');
          `}
        </Script>
        <Nav />
        {children}
        <Footer />
        <CallFab />
      </body>
    </html>
  );
}
