import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${raleway.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className={`${raleway.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
