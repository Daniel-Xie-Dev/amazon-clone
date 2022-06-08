import "./CheckoutProduct.css";
import React from "react";
import { useStateValue } from "../../StateProvider";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function CheckoutProduct({ id, image, title, price, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };

  const handleIncDec = (booleanFlag) => {
    dispatch({
      type: "INC_DEC_FROM_BASKET",
      item: {
        id: id,
      },
      isInc: booleanFlag,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <big>$</big>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_quantity">
          <p>Quantity: </p>
          <input
            className="checkoutProduct_input"
            placeholder={quantity}
          ></input>
          <ArrowDownwardIcon
            className="checkoutProduct_arrowButton"
            onClick={() => handleIncDec(false)}
          />
          <ArrowUpwardIcon
            className="checkoutProduct_arrowButton"
            onClick={() => handleIncDec(true)}
          />
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
