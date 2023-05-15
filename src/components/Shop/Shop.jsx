import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from 'react-router-dom';

import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
     

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];

    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart,product];
    }
    else {
      exist.quantity = exist.quantity+1;
      // const remaining = cart.filter(pd => pd.id !== product.id);
      // newCart = [...remaining,exist];
      newCart = [...cart];
    }

    setCart(newCart);
    addToDb(product._id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
}

  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart
           cart={cart}
           handleClearCart={handleClearCart}
           >
            <Link to="/orders"> 
              <button className="review-order">Review Order</button>
            </Link>
           </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
