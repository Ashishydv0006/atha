"use client"

import { useCartStore } from "@/store/cartStore"

export default function AddToCartButton({
  product,
  className = ""
}: {
  product: any
  className?: string
}) {
  const addToCart = useCartStore((state) => state.addToCart)
  const price =
    product?.price?.ml500 ?? product?.price?.["500ml"] ?? product?.price ?? 0

  return (
    <button
      onClick={() =>
        addToCart({
          _id: product._id ?? product.slug,
          name: product.name,
          price
        })
      }
      className={`relative overflow-hidden rounded-full border border-emerald-900/30 bg-gradient-to-r from-emerald-950 via-emerald-800 to-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 ${className}`}
    >
      Add To Cart
    </button>
  )
}
