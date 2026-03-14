"use client"

import Link from "next/link"
import { useCartStore } from "@/store/cartStore"
import { usePathname } from "next/navigation"

export default function CartBar() {
  const pathname = usePathname()
  const cart = useCartStore((state) => state.cart)
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0
  const totalPrice =
    cart?.reduce((sum, item) => sum + item.quantity * item.price, 0) ?? 0

  if (pathname === "/cart") return null
  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-emerald-900/10 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-4 py-3 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.7)]">
        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-100">
            Cart
          </p>
          <p className="text-sm font-semibold text-white">
            {totalItems} item{totalItems > 1 ? "s" : ""} · Rs. {totalPrice}
          </p>
        </div>
        <Link
          href="/cart"
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-emerald-900/25 transition hover:-translate-y-0.5 hover:bg-white/20"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 text-white"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7 4h-2l-1 2h2l3 9h9l2-6h-10l-1-3zm2 14a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 9 18zm8 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 17 18z" />
          </svg>
          View Cart
        </Link>
      </div>
    </div>
  )
}
