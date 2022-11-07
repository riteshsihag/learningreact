import React from "react";
const CartContext = React.createContext({
   cartList : [],
   addCartItem : ()=>{},
   deleteCartItem : ()=>{},
   increaseItem : ()=>{},
   decreaseItem: ()=>{},
})
export default CartContext;