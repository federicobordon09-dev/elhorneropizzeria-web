import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { negocio } from "@/lib/datos-negocio";

const inter = Inter({
  variable: "--fuente-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--fuente-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(negocio.sitioWeb),
  title:
    "El Hornero Pizzería | Pizza Napolitana al Horno de Leña en La Consulta",
  description:
    "Disfrutá auténticas pizzas napolitanas al horno de leña en La Consulta. Masa artesanal, ingredientes seleccionados y Take Away. Hacé tu pedido por WhatsApp.",
  keywords: [
    "Pizza en La Consulta",
    "Pizzería en La Consulta",
    "Pizza Napolitana Mendoza",
    "Pizza al horno de leña",
    "Pizza artesanal",
    "Pizzería Valle de Uco",
    "Pizza Take Away",
    "Pizza Napolitana Valle de Uco",
  ],
  authors: [{ name: negocio.nombre }],
  creator: negocio.nombre,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: negocio.sitioWeb,
    siteName: negocio.nombre,
    title:
      "El Hornero Pizzería | Pizza Napolitana al Horno de Leña en La Consulta",
    description:
      "Auténticas pizzas napolitanas al horno de leña en La Consulta. Masa artesanal e ingredientes seleccionados. Pedí por WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Hornero Pizzería - Pizza Napolitana al Horno de Leña",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Hornero Pizzería | Pizza Napolitana en La Consulta",
    description:
      "Auténticas pizzas napolitanas al horno de leña. Take Away en La Consulta, Mendoza.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionConfig reducedMotion="never">{children}</MotionConfig>
      </body>
    </html>
  );
}
