import "./OrderCard.css";
import React from "react";
import CheckoutProduct from "../Checkout/CheckoutProduct";

function OrderCard({ order }) {
  const getDate = () => {
    const date = new Date(order.data.created);
    return date.toLocaleString();
  };

  return (
    <div className="orderCard">
      <h2 className="orderCard_date">{getDate()}</h2>
      {order.data.basket.map((product, index) => {
        return (
          <div className="orderCard_container">
            <img className="orderCard_image" src={product.image} alt="" />
            <div className="orderCard_info">
              <p className="orderCard_title">{product.title}</p>
              <p className="orderCard_price">
                <small>$</small>
                <strong>{product.price}</strong>
              </p>
              <div className="orderCard_rating">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i}>⭐</p>
                  ))}
              </div>
              <button className="orderCard_button">Return Item</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderCard;
