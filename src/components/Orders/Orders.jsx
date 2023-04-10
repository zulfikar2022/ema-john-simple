import React, { useState } from "react";
import "./Orders.css";
import Cart from "../Cart/Cart";
import { useLoaderData, useSearchParams } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    console.log(id);
    const remaining = cart.filter((c) => c.id !== id);
    removeFromDb(id);
    setCart(remaining);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to={"/checkout"}>
            <button className="proceed-checkout">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
