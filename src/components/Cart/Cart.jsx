import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const [quantity,totalPrice,totalShipping,tax,grandTotal] = props.allDataToShow;
    // console.log(props[0]);
    // const grandTotal = props.allDataToShow[4];

    return (
        <div className='cart'>
            <h4>Orders summary</h4>
            <p>Selected Items : {} </p>
            <p>Total Price : ${}</p>
            <p>Total Shipping charge : ${}</p>
            <p>Tax : ${}</p>
            <h6>Grand Total : ${}</h6>
        </div>
    );
};

export default Cart;