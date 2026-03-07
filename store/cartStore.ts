import { create } from "zustand"

interface CartItem{
_id:string
name:string
price:number
}

interface CartStore{

cart:CartItem[]

addToCart:(item:CartItem)=>void

}

export const useCartStore = create<CartStore>((set)=>({

cart:[],

addToCart:(item)=>
set((state)=>({
cart:[...state.cart,item]
}))

}))