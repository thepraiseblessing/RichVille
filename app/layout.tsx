import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import ThemeProvider from "@/components/theme-provider"
import "./globals.css"
import Footer from "@/components/footer"
import { Header } from "@/components/header"

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Richville Project Limited - Empowering Lives for Purpose and Financial Freedom",
  description:
    "Building a generation of purpose-driven, financially free individuals through strategic empowerment, business innovation, and wealth creation.",
  generator: "v0.app",
  metadataBase: new URL("https://www.richvilleprojectlimited.com"), 
  openGraph: {
    title: "Richville Project Limited",
    description: "Empowering lives for purpose and financial freedom.",
    url: "https://www.richvilleprojectlimited.com",
    siteName: "Richville Project Limited",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Richville Project Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richville Project Limited",
    description: "Empowering lives for purpose and financial freedom.",
    images: ["/favicon.ico"],
    creator: "@richvilleprojectlimited",
  },
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${raleway.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
