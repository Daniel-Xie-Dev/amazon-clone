import "./Order.css";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import OrderCard from "./OrderCard";

function Order() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="order">
      <div className="order_container">
        {orders?.map((order, index) => {
          return <OrderCard key={index} order={order} />;
        })}
      </div>
    </div>
  );
}

export default Order;
