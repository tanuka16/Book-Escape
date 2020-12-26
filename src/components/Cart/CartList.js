import React from 'react';
import CartItem from './CartItem';


export default function CartList({value}){

const {cart} = value

  return(
    <div className="container-fluid">
    {/* loop through, for each and every item in our cart, return the cartItem; multiple items so setup the key */}
        {cart.map(item => {
          return  <CartItem key={item.id} item={item} value={value}/>
        })}

    </div>
  )
}
