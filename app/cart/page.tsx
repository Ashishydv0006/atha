"use client"

import { useCartStore } from "@/store/cartStore"

export default function Cart(){

const cart = useCartStore((state)=>state.cart)

return(

<div className="mx-auto max-w-4xl px-4 py-12">

<h1 className="text-3xl font-semibold text-emerald-800 mb-6">
Cart
</h1>

{cart.length === 0 && (
  <p className="text-slate-600">Your cart is empty for now.</p>
)}

<div className="grid gap-4">
{cart.map((item,index)=>(

<div
key={index}
className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm"
>

<h2 className="font-semibold text-slate-900">{item.name}</h2>

<p className="text-emerald-800 font-semibold">Rs. {item.price}</p>

</div>

))}
</div>

</div>

)

}
