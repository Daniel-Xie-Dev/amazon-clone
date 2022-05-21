import "./Payment.css";
import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./Checkout/CheckoutProduct";

function Payment() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <h2 className="payment_checkout">Checkout(0 items)</h2>
      <div className="payment_container">
        <div>
          <p className="payment_text">Delivery Address</p>
          <div>
            <ul className="payment_address">
              <li>email</li>
              <li>Amazon-Clone React St</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="payment_text">Review items and delivery</p>
          <div className="payment_products">
            {basket?.map((product, index) => {
              return (
                <CheckoutProduct
                  key={index}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                />
              );
            })}
          </div>
        </div>

        <div>
          <p className="payment_text">Payment Method</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
