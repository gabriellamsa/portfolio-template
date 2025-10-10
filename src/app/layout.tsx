import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
} from "@/lib/jsonld";
import { organizationData, websiteData } from "@/config/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webluma | Desenvolvimento Web que Ilumina seu Negócio",
  description:
    "Criamos experiências digitais luminosas que transformam ideias em realidade. Sites modernos, landing pages e e-commerce com design único e alta conversão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = generateOrganizationJsonLd(organizationData);
  const websiteJsonLd = generateWebsiteJsonLd(websiteData);

  return (
    <html lang="pt-BR">
      <head>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
