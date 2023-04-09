import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);

    const handleRemoveFormCart = (id) => {
        console.log(id);
        const remaining = cart.filter(c => c.id!== id);
        removeFromDb(id);
        setCart(remaining);
    }
  
    return (
        <div className='shop-container'>

            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product={product} 
                        handleRemoveFormCart={handleRemoveFormCart}
                        ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;