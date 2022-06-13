import "./Detail.css";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Grid } from "@mui/material";
import { useStateValue } from "../../StateProvider";

import Rating from "./Rating";
import Review from "./Review";
import e from "express";

function Detail() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const { type, brand, doc_id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState();
  const [clickStar, setClickStar] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  const addToCart = (e) => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: doc_id,
          quantity: quantity,
          title: item?.title,
          image: item?.image,
          price: item?.price,
        },
      });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const getItem = () => {
      db.collection("products")
        .doc(type)
        .collection(brand)
        .doc(doc_id)
        .get()
        .then((res) => {
          setItem(res.data());
          console.log(res.data());
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getItem();
  }, []);

  const handleIncDec = (bool) => {
    if (!bool && quantity !== 0) {
      setQuantity(quantity - 1);
    }

    if (bool) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <div className="detail">
      <div className="detail_container">
        <img
          className="detail_container_image"
          src={item?.image}
          alt="missing"
        />

        <div className="detail_description">
          <h3>About this item</h3>
          <ul>
            {item?.about.map((about, index) => {
              return (
                <li className="detail_listItem" key={index}>
                  {about}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="detail_container_info">
          <p className="detail_container_title">{item?.title}</p>

          <div className="detail_container_section">
            <h3>Price: </h3>
            <div>
              <big>$</big>
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
                    color={quantity !== 0 ? "primary" : ""}
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
            <div>
              {item?.color.map((color) => {
                return <p key={color}>{color}</p>;
              })}
            </div>
          </div>

          <div className="detail_container_section">
            <h3>Total: </h3>
            <div>
              <big>$</big> {(quantity * item?.price).toFixed(2)}
            </div>
          </div>

          <div className="detail_container_section">
            <button
              className="detail_button"
              onClick={addToCart}
              disabled={quantity === 0}
            >
              Add to Cart
            </button>
            <button className="detail_button" disabled={quantity === 0}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="detail_separator"></div>

      <div className="detail_container_description">
        <div className="detail_rating">
          <Rating rating={item?.rating} />
        </div>

        <div className="detail_review">
          <Review rating={item?.rating} />
        </div>

        <div className="detail_customer_review">
          <form onSubmit={handleSubmit}>
            {[...Array(5)].map((star, index) => {
              return (
                <button
                  key={index}
                  className="detail_starButton"
                  onClick={() => setClickStar(index)}
                  onMouseEnter={() => setHoverStar(index)}
                  onMouseLeave={() => setHoverStar(clickStar)}
                >
                  {index <= hoverStar ? (
                    <StarIcon className="detail_star" sx={{ fontSize: 36 }} />
                  ) : (
                    <StarBorderIcon
                      className="detail_star"
                      sx={{ fontSize: 36 }}
                    />
                  )}
                </button>
              );
            })}
            <textarea
              className="detail_customerText"
              maxLength={350}
              rows={5}
              cols={30}
            ></textarea>

            <button className="detail_review_submit" type="submit">
              Review
            </button>
          </form>
        </div>
      </div>

      <div className="detail_separator"></div>
    </div>
  );
}

export default Detail;
