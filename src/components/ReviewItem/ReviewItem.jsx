import React from "react";
import "./ReviewItem.css";
import { BeakerIcon } from '@heroicons/react/24/solid';

const ReviewItem = ({ product , handleRemoveFromCart}) => {
  return (
    <div className="review-item">
      <div>
        <div>
          <img src={product.img} alt="" />
          <div className="details">
            <p className="name">{product.name}</p>
            <small>
              Price : <span className="price">${product.price}</span>
            </small>
            <small>
              Shipping charge :{" "}
              <span className="price">${product.shipping} </span>
            </small>
            <small>
              Quantity : <span className="price">{product.quantity}</span>
            </small>
          </div>
        </div>
        {/* <BeakerIcon className="h-6 w-6 icon text-blue-500" /> */}
        <BeakerIcon onClick={() => handleRemoveFromCart(product.id)} className="h-6 w-6 icon text-blue-500" />
      </div>
    </div>
  );
};

export default ReviewItem;
