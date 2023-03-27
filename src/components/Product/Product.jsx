import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 style={{ marginBottom: '5px' }}>{name}</h4>
                <p style={{ marginTop: '0px', marginBottom: '5px' }}>Price : ${price}</p>
                <small>Manufacturer : {seller}</small><br />
                <small>Ratings : {ratings} stars</small>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;