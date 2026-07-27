import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ritual Spa | Nails — Hair",
  description:
    "Espacio creado para desconectarte del ruido y volver a sentirte bien contigo. Belleza, relajación y cuidado personal en un ambiente cálido, minimalista y premium.",
  openGraph: {
    title: "Ritual Spa — Nails — Hair",
    description:
      "Nail Salon, Head Spa Coreano y Pestañas / Lifting. Agenda tu ritual de cuidado.",
    locale: "es_EC",
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
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
