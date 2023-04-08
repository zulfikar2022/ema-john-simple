import React from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    let quantity = 0;
    cart.forEach(c => {
        quantity += c.quantity;
    });
    return (
        <div className='shop-container'>

            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem product={product} key={product.id}></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Orders;