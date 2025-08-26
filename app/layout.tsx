import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Richville Group Limited - Empowering Lives for Purpose and Financial Freedom",
  description:
    "Building a generation of purpose-driven, financially free individuals through strategic empowerment, business innovation, and wealth creation.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${raleway.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
