import {
  Inter,
  Space_Grotesk,
} from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-inter",
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})
