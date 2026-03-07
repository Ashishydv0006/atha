"use client"

import { useCartStore } from "@/store/cartStore"
import Link from "next/link"

export default function Navbar(){

const cart = useCartStore((state)=>state.cart)

return(

<nav className="flex justify-between items-center p-4 bg-green-700 text-white">

<h1 className="text-xl font-bold">
Atha Ayurveda
</h1>

<div className="flex gap-6">

<Link href="/">Home</Link>

<Link href="/cart">
Cart ({cart.length})
</Link>

</div>

</nav>

)

}