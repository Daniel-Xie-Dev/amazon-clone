import "./Review.css";

import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useStateValue } from "../../StateProvider";

function Review({ rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(rating);
  return (
    <div className="review">
      <h2>Customer Comments</h2>
      {rating?.map((item, index) => {
        return (
          <div className="review_container">
            <div className="review_user">
              <AccountCircleIcon />
              <h3>{item?.user}</h3>
            </div>
            <div className="review_star">
              {Array(item?.star)
                .fill(0)
                .map((_, index) => {
                  return <StarIcon />;
                })}

              {Array(5 - item?.star)
                .fill(0)
                .map((_, index) => {
                  return <StarBorderIcon />;
                })}
            </div>
            <p>{item?.review}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Review;
