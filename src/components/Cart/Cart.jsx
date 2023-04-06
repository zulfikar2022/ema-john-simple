import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        product['quantity'] = product.quantity || 1;
        totalPrice += (product.price)*product.quantity;
        totalShipping += product.shipping;
        quantity += product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Orders summary</h4>
            <p>Selected Items : {quantity} </p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping charge : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>


        </div>
    );
};

export default Cart;