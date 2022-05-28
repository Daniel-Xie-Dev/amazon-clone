import "./Detail.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import { Grid } from "@mui/material";
function Detail() {
  const { type, brand, doc_id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState();

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
  }, []);

  const handleIncDec = (bool) => {
    bool ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
  };

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
              <Grid container spacing={3}>
                <Grid className="grid_item" item xs="auto">
                  <RemoveCircleOutlineSharpIcon
                    className="detail_container_button"
                    sx={{ fontSize: 26 }}
                    onClick={() => handleIncDec(false)}
                  />
                </Grid>
                <Grid className="grid_item" item xs={4}>
                  {quantity}
                </Grid>
                <Grid className="grid_item" item xs="auto">
                  <AddCircleOutlineSharpIcon
                    className="detail_container_button"
                    color="primary"
                    sx={{ fontSize: 26 }}
                    onClick={() => handleIncDec(true)}
                  />
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="detail_container_section">
            <h3>Colors: </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
