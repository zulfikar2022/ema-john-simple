import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 style={{ marginBottom: '5px' }}>{name}</h4>
                <p style={{ marginTop: '0px', marginBottom: '20px' }}>Price : ${price}</p>
                <small>Manufacturer : {seller}</small><br />
                <small>Ratings : {ratings} stars</small>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;