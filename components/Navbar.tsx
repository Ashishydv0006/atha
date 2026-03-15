"use client"

import { useCartStore } from "@/store/cartStore"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const totalItems = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  )
  const [isVisible, setIsVisible] = useState(true)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const productsCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
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
        <Link
          href="/"
          
        >
          <Image
            src="/images/Atha-logo.png"
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
          <div
            className="relative"
            onPointerEnter={() => {
              if (productsCloseTimeout.current) {
                clearTimeout(productsCloseTimeout.current)
                productsCloseTimeout.current = null
              }
              setIsProductsOpen(true)
            }}
            onPointerLeave={() => {
              productsCloseTimeout.current = setTimeout(
                () => setIsProductsOpen(false),
                120
              )
            }}
          >
            <Link
              href="/#products"
              className="flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-emerald-50"
              onFocus={() => setIsProductsOpen(true)}
              onBlur={() => setIsProductsOpen(false)}
            >
              Products
              <span className="text-xs text-emerald-700">v</span>
            </Link>
            <div className="absolute left-0 top-full h-2 w-40" />
            <div
              className={`absolute left-0 top-full mt-2 w-48 rounded-2xl border border-emerald-100/80 bg-white/95 p-2 text-sm shadow-[0_18px_40px_-28px_rgba(15,23,42,0.6)] transition ${
                isProductsOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <Link
                href="/juices"
                className="block rounded-xl px-3 py-2 font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                Juices
              </Link>
              <Link
                href="/powders"
                className="block rounded-xl px-3 py-2 font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                Powders
              </Link>
            </div>
          </div>
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
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 4h-2l-1 2h2l3 9h9l2-6h-10l-1-3zm2 14a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 9 18zm8 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 17 18z" />
              </svg>
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold text-white">
              {totalItems}
            </span>
            <span>Cart</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/20 bg-white/80 text-emerald-900 shadow-sm transition hover:bg-emerald-50"
          >
            <span className="text-lg">{isMobileMenuOpen ? "×" : "≡"}</span>
          </button>
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-full border border-emerald-900/20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-900/25 transition hover:brightness-110"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 4h-2l-1 2h2l3 9h9l2-6h-10l-1-3zm2 14a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 9 18zm8 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 17 18z" />
              </svg>
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold text-white">
              {totalItems}
            </span>
            <span>Cart</span>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-emerald-900/10 bg-white/95 px-4 py-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.6)] md:hidden">
          <div className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
            <Link
              href="/"
              className="rounded-2xl px-4 py-3 transition hover:bg-emerald-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="rounded-2xl border border-emerald-900/10 bg-emerald-50/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                Products
              </p>
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href="/juices"
                  className="rounded-xl px-3 py-2 text-emerald-900 transition hover:bg-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Juices
                </Link>
                <Link
                  href="/powders"
                  className="rounded-xl px-3 py-2 text-emerald-900 transition hover:bg-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Powders
                </Link>
              </div>
            </div>
            <Link
              href="/#combos"
              className="rounded-2xl px-4 py-3 transition hover:bg-emerald-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Combos
            </Link>
            <Link
              href="/why-atha"
              className="rounded-2xl px-4 py-3 transition hover:bg-emerald-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Atha
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
