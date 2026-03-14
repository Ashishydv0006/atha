"use client"

import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"

export default function Cart(){

const cart = useCartStore((state)=>state.cart)
const increaseQty = useCartStore((state)=>state.increaseQty)
const decreaseQty = useCartStore((state)=>state.decreaseQty)
const removeFromCart = useCartStore((state)=>state.removeFromCart)

const totalItems = cart.reduce((sum,item)=> sum + item.quantity, 0)
const totalPrice = cart.reduce((sum,item)=> sum + item.quantity * item.price, 0)

return(

<div className="mx-auto max-w-5xl px-4 py-12">

<div className="mb-6 flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/10 bg-emerald-50">
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-emerald-900"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 4h-2l-1 2h2l3 9h9l2-6h-10l-1-3zm2 14a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 9 18zm8 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 17 18z" />
    </svg>
  </div>
  <h1 className="text-3xl font-semibold text-emerald-900">
    Cart
  </h1>
</div>

{cart.length === 0 && (
  <div className="rounded-[32px] border border-emerald-200/70 bg-white/90 p-10 text-center shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center">
      <div className="relative h-16 w-16">
        <div className="cart-box-base" />
        <div className="cart-box-lid" />
      </div>
    </div>
    <p className="text-lg font-semibold text-slate-900">Your cart is empty</p>
    <p className="mt-2 text-sm text-slate-600">
      Add your favorite wellness blends to continue.
    </p>
  </div>
)}

{cart.length > 0 && (
<div className="grid gap-6 lg:grid-cols-3">
  <div className="grid gap-4 lg:col-span-2">
{cart.map((item,index)=>(

<div
key={index}
className="flex flex-col gap-3 rounded-2xl border border-emerald-100/80 bg-white/90 p-5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.6)] sm:flex-row sm:items-center sm:justify-between"
>

  <div className="flex items-center gap-4">
    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50">
      <Image
        src={item.image || "/images/logo.png"}
        alt={item.name || "Cart item"}
        fill
        sizes="64px"
        className="object-cover"
      />
    </div>
    <div>
      <h2 className="font-semibold text-slate-900">{item.name || "Item"}</h2>
      {String(item._id).startsWith("combo-") && (
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
          Combo Pack
        </p>
      )}
      <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
        Rs. {item.price} each
      </p>
    </div>
  </div>

<div className="flex items-center gap-3">
  <div className="flex items-center gap-2">
    <button
      onClick={() => decreaseQty(item._id)}
      className="h-8 w-8 rounded-full border border-emerald-900/20 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
      aria-label="Decrease quantity"
    >
      −
    </button>
    <span className="min-w-[2ch] text-center text-sm font-semibold text-emerald-900">
      {item.quantity}
    </span>
    <button
      onClick={() => increaseQty(item._id)}
      className="h-8 w-8 rounded-full border border-emerald-900/20 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>
  <div className="text-right">
    <p className="text-sm font-semibold text-emerald-900">
      Rs. {item.quantity * item.price}
    </p>
    <button
      onClick={() => removeFromCart(item._id)}
      className="text-xs font-semibold uppercase tracking-widest text-slate-500 transition hover:text-emerald-800"
    >
      Remove
    </button>
  </div>
</div>

</div>

))}
  </div>

  <div className="h-fit rounded-3xl border border-emerald-200/70 bg-white/90 p-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
    <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
      SUMMARY
    </p>
    <h2 className="mt-3 text-2xl font-semibold text-slate-900">
      Order Total
    </h2>
    <div className="mt-6 flex items-center justify-between text-sm text-slate-700">
      <span>Items</span>
      <span>{totalItems}</span>
    </div>
    <div className="mt-2 flex items-center justify-between text-sm text-slate-700">
      <span>Subtotal</span>
      <span>Rs. {totalPrice}</span>
    </div>
    <button className="mt-6 w-full rounded-full bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-emerald-900/25 transition hover:-translate-y-0.5">
      Checkout
    </button>
    <Link
      href="/#products"
      className="mt-3 block w-full rounded-full border border-emerald-900/20 bg-white px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-emerald-900 shadow-sm transition hover:bg-emerald-50"
    >
      Add More Items
    </Link>
  </div>
</div>
)}

</div>

)

}
