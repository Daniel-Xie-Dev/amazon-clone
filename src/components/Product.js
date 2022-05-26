import { useNavigate } from "react-router-dom";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, type, brand, title, image, price, rating }) {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div
      // onClick={() => {
      //   navigate(`/details/${type}/${brand}/${id}`);
      // }}
      className="product"
    >
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
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

      <button className="product_button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
