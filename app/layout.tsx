import type { Metadata } from "next"
import { DM_Mono, Inter } from "next/font/google"
import "normalize.css/normalize.css"
import "./globals.css"

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] })
const dmMono = DM_Mono({
  variable: "--font-mono",
  weight: "500",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Empty Fasting",
  description:
    "Empty is a beautiful and minimal companion for your intermittent fasting practice.",
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
