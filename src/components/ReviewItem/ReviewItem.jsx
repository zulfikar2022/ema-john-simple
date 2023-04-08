import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  return (
    <div className="review-item">
      <div>
        <img src={product.img} alt="" />
        <div className="details">
            <p className="name">{product.name}</p>
            <small>Price : <span className="price">${product.price}</span></small>
            <small>Shipping charge : <span className="price">${product.shipping} </span></small>
            <small>Quantity : <span className="price">{product.quantity}</span></small>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
