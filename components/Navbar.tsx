"use client"

import { useCartStore } from "@/store/cartStore"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const cart = useCartStore((state) => state.cart)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        const goingDown = currentY > lastScrollY.current
        const nearTop = currentY < 80

        if (nearTop) {
          setIsVisible(true)
        } else if (goingDown) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }

        lastScrollY.current = currentY
        ticking.current = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-emerald-900/10 bg-gradient-to-r from-[#f3f1ea] via-white to-[#eef6f1] backdrop-blur-xl shadow-[0_12px_30px_-24px_rgba(15,23,42,0.7)] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Atha Ayurveda Logo"
            width={120}
            height={58}
          />
        </Link>

        <div className="hidden items-center gap-2 text-sm font-semibold text-slate-800 md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 transition hover:bg-emerald-50"
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="rounded-full px-4 py-2 transition hover:bg-emerald-50"
          >
            Products
          </Link>
          <Link
            href="/#combos"
            className="rounded-full px-4 py-2 transition hover:bg-emerald-50"
          >
            Combos
          </Link>
          <Link
            href="/why-atha"
            className="rounded-full px-4 py-2 transition hover:bg-emerald-50"
          >
            Why Atha
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-full border border-emerald-900/20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-4 py-2 text-white shadow-md shadow-emerald-900/25 transition hover:brightness-110"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold text-white">
              {cart.length}
            </span>
            <span>Cart</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-full border border-emerald-900/20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-900/25 transition hover:brightness-110"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold text-white">
              {cart.length}
            </span>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
