"use client"

import { useCartStore } from "@/store/cartStore"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const cart = useCartStore((state) => state.cart)

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-200/70 bg-gradient-to-b from-white via-emerald-50/70 to-emerald-100/60 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Atha Ayurveda Logo"
            width={120}
            height={58}
          />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700 md:inline">
            Ayurveda
          </span>
        </Link>

        <div className="flex items-center gap-4 text-sm font-semibold text-slate-800">
          <Link
            href="/"
            className="rounded-full px-4 py-2 transition hover:bg-emerald-100"
          >
            Home
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-full border border-emerald-900/30 bg-gradient-to-r from-emerald-900 to-emerald-700 px-4 py-2 text-white shadow-md shadow-emerald-900/20 transition hover:brightness-110"
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
