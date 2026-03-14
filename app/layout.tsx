import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Manrope, Playfair_Display } from "next/font/google"
import ScrollToTop from "@/components/ScrollToTop"

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
        <ScrollToTop />
        <div className="pt-20">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
