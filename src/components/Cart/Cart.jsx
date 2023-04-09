import React, { useEffect, useState } from "react";
import "./Cart.css";
import { getShoppingCart } from "../../utilities/fakedb";


const Cart = (props) => {
 
  const { cart } = props;
  console.log(cart);

  let total = 0,totalShipping = 0,quantity = 0;
  for (const product of cart) {
    total = total + (product.price)*(product.quantity);
    totalShipping  = totalShipping + (product.shipping)*(product.quantity);
    quantity = quantity + product.quantity;
  }
  
  const tax = total*0.07;
  const grandTotal = total+totalShipping+tax; 

  return (
    <div className="cart">
      <h4>Orders summary</h4>
      <p>Selected Items : {quantity} </p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping charge : ${totalShipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
