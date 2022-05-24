import "./Payment.css";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import CheckoutProduct from "./Checkout/CheckoutProduct";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import instance from "../axios";
import { useNavigate } from "react-router-dom";

function Payment() {
  let navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const element = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await instance({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket)}`,
      });
      console.log(response);
      setClientSecret(response.data);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log(paymentIntent);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/order");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <h2 className="payment_checkout">Checkout(0 items)</h2>
      <div className="payment_container">
        <div>
          <p className="payment_text">Delivery Address</p>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Amazon-Clone St </p>
            <p>New York, NY</p>
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
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket?.length} items):{" "}
                        <strong>{value}</strong>
                      </p>
                      <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button type="submission" disabled={disabled}>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
