import { create } from "zustand"

interface CartItem{
_id:string
name:string
price:number
quantity:number
image?:string
}

interface CartStore{

cart:CartItem[]

addToCart:(item:CartItem)=>void
increaseQty:(id:string)=>void
decreaseQty:(id:string)=>void
removeFromCart:(id:string)=>void
clearCart:()=>void

}

export const useCartStore = create<CartStore>((set)=>({

cart:[],

addToCart:(item)=>
set((state)=>{
  const existing = state.cart.find((c)=>c._id === item._id)
  if(existing){
    return{
      cart: state.cart.map((c)=>
        c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
      )
    }
  }
  return{
    cart:[...state.cart,{...item,quantity:1}]
  }
}),

increaseQty:(id)=>
set((state)=>({
  cart: state.cart.map((c)=>
    c._id === id ? { ...c, quantity: c.quantity + 1 } : c
  )
})),

decreaseQty:(id)=>
set((state)=>({
  cart: state.cart
    .map((c)=>
      c._id === id ? { ...c, quantity: c.quantity - 1 } : c
    )
    .filter((c)=>c.quantity > 0)
})),

removeFromCart:(id)=>
set((state)=>({
  cart: state.cart.filter((c)=>c._id !== id)
})),

clearCart:()=> set({ cart: [] })

}))
