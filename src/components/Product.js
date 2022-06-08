import { useNavigate } from "react-router-dom";
import React from "react";
import "./Product.css";

function Product({ id, type, brand, title, image, price, rating }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/details/${type}/${brand}/${id}`);
      }}
      className="product"
    >
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img className="product_image" alt="" src={image} />
    </div>
  );
}

export default Product;
