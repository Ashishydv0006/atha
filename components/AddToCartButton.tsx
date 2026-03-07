"use client"

import { useCartStore } from "@/store/cartStore"

export default function AddToCartButton({product}:any){

const addToCart = useCartStore((state)=>state.addToCart)

return(

<button

onClick={()=>addToCart({

_id:product._id,

name:product.name,

price:product.price["500ml"]

})}

className="bg-green-600 text-white px-4 py-2 rounded mt-3"

>

Add To Cart

</button>

)

}