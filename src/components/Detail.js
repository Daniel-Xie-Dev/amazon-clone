import "./Detail.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
function Detail() {
  const { type, brand, doc_id } = useParams();
  const [item, setItem] = useState();
  console.log(type, brand, doc_id);

  useEffect(() => {
    const getItem = () => {
      db.collection("products")
        .doc(type)
        .collection(brand)
        .doc(doc_id)
        .get()
        .then((res) => {
          setItem(res.data());
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getItem();
    console.log(item);
  }, []);
  return (
    <div className="detail">
      <div className="detail_container">
        <img
          className="detail_container_image"
          src={item?.image}
          alt="missing"
        />
        <div className="detail_container_info">
          <p className="detail_container_title">{item?.title}</p>
          <p className="detail_container_rating">
            {Array(item?.rating)
              .fill()
              .map((star, index) => {
                return <p key={index}>⭐</p>;
              })}
          </p>
          <div className="detail_container_section">
            <h3>Price: </h3>
            <div>
              <small>$</small>
              {item?.price}
            </div>
          </div>
          <div className="detail_container_section">
            <h3>Quantity: </h3>
            <div>
              <RemoveCircleOutlineSharpIcon className="detail_container_button" />
              <AddCircleOutlineSharpIcon className="detail_container_button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
