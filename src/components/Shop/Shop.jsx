import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import Header from "../Header/Header";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const[allDataToShow,setAllDataToShow] = useState([]); 

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1:  get id of the storedProduct
    for (const id in storedCart) {
      //step 2:  get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3 : add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the savedCart
        savedCart.push(addedProduct);
      }

      // console.log('added product', addedProduct);
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    if (!cart.includes(product)) {
      newCart = [...cart, product];
    } else {
      newCart = [...cart];
    }

    setCart(newCart);
    addToDb(product.id);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (let j = 0; j < cart.length; j++) {
      quantity = quantity + cart[j]["quantity"];
      totalPrice = totalPrice + cart[j].price * cart[j].quantity;
      totalShipping = totalShipping + cart[j].shipping;
    }
    console.log("Total : " + totalPrice);
    const tax = totalPrice * (7 / 100);
    const grandTotal = totalPrice + totalShipping + tax;
    const allData = [quantity,totalPrice,totalShipping,tax,grandTotal];
    setAllDataToShow(allData);
  };

  return (
    <div>
      <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart allDataToShow={allDataToShow}></Cart>
      </div>
    </div>
    </div>
  );
};

export default Shop;
