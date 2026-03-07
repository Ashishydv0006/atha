"use client"

import { useCartStore } from "@/store/cartStore"

export default function Cart(){

const cart = useCartStore((state)=>state.cart)

return(

<div className="p-10">

<h1 className="text-2xl font-bold mb-6">
Cart
</h1>

{cart.map((item,index)=>(

<div
key={index}
className="border p-4 mb-3"
>

<h2>{item.name}</h2>

<p>₹{item.price}</p>

</div>

))}

</div>

)

}