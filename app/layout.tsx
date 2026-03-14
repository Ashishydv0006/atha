import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Manrope, Playfair_Display } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
