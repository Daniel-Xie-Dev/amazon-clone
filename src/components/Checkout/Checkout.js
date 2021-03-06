import "./Checkout.css";

import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../StateProvider";

import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout_title">Your shopping basket:</h2>
          {basket.map((element, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={element.id}
                image={element.image}
                title={element.title}
                price={element.price}
                quantity={element.quantity}
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
