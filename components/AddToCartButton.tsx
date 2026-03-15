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
  const increaseQty = useCartStore((state) => state.increaseQty)
  const decreaseQty = useCartStore((state) => state.decreaseQty)
  const quantity =
    useCartStore((state) =>
      state.cart.find((c) => c._id === (product._id ?? product.slug))?.quantity
    ) ?? 0
  const price =
    product?.price?.ml500 ??
    product?.price?.g100 ??
    product?.price?.["500ml"] ??
    product?.price?.["100g"] ??
    product?.price ??
    0

  const id = product._id ?? product.slug

  return (
    <div className={`flex items-center justify-between gap-1.5 ${className}`}>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => decreaseQty(id)}
          className={`h-8 w-8 rounded-full border border-emerald-900/20 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 ${
            quantity === 0 ? "pointer-events-none opacity-40" : ""
          }`}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="inline-flex h-8 min-w-[2.5rem] items-center justify-center rounded-full border border-emerald-900/20 bg-white text-center text-sm font-semibold text-emerald-900 shadow-sm tabular-nums">
          {quantity}
        </span>
        <button
          onClick={() =>
            quantity === 0
              ? addToCart({
                  _id: id,
                  name: product.name,
                  price,
                  quantity: 1
                })
              : increaseQty(id)
          }
          className="h-8 w-8 rounded-full border border-emerald-900/20 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        onClick={() =>
          addToCart({
            _id: id,
            name: product.name,
            price,
            quantity: 1,
            image: product.image
          })
        }
        className="relative overflow-hidden rounded-full border border-emerald-900/30 bg-gradient-to-r from-emerald-950 via-emerald-800 to-teal-700 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg shadow-emerald-900/25 transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-800/40"
      >
        {quantity > 0 ? "Added" : "Add"}
      </button>
    </div>
  )
}
