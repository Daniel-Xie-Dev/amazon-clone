import "./Checkout.css";

import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../StateProvider";
import Product from "../Product";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          alt=""
          src="https://www.tecnoyouth.it/wp-content/uploads/2014/08/Amazon-banner.png"
        />

        <div>
          <h2 className="checkout_title">Your shopping basket:</h2>
          {basket.map((element, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={element.id}
                image={element.image}
                title={element.title}
                price={element.price}
                rating={element.rating}
              />
            );
          })}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
