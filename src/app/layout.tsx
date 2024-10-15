import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "j13a: Justin Michaliga",
  description: "Justin | Staff Product Engineer from Brooklyn",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
