import React, { useEffect, useState } from "react";
import "./Cart.css";
import { getShoppingCart } from "../../utilities/fakedb";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [myCart , setMyCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setMyCart(...[savedCart]);
    
  }, [products]);

  let totalPrice = 0,shippingCharge = 1, tax = 0, grandTotal = 0,itemCount = 0;

  myCart.forEach(cart => {
    itemCount += cart.quantity;
    totalPrice += cart.price;
    shippingCharge += (cart.quantity*cart.shipping);
  });
  tax = totalPrice* 0.7;
  grandTotal = totalPrice+tax;

  return (
    <div className="cart">
      <h4>Orders summary</h4>
      <p>Selected Items : {itemCount} </p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total Shipping charge : ${shippingCharge}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
