import type { Metadata } from "next"
import { DM_Mono, Inter } from "next/font/google"
import "normalize.css/normalize.css"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  weight: ["400", "500"],
  subsets: ["latin"],
})
const dmMono = DM_Mono({
  variable: "--font-mono",
  weight: "500",
  subsets: ["latin"],
})

const metaTitle = "Empty Fasting"
const metaDescription =
  "Empty is a beautiful and minimal companion for your intermittent fasting practice."
const metaImageUrl = "/social.png"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: metaTitle,
  description: metaDescription,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  robots: "all",
  openGraph: {
    images: [
      {
        url: metaImageUrl,
        width: 1200,
        height: 630,
        alt: metaTitle,
      },
    ],
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: metaTitle,
    siteName: metaTitle,
    description: metaDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    site: "@emptyfasting",
    images: [{ url: metaImageUrl, alt: metaTitle }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={[dmMono.variable, inter.variable].join(" ")}>
        {children}
      </body>
    </html>
  )
}
