import "./Review.css";

import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useStateValue } from "../../StateProvider";

function Review({ rating }) {
  const [{ user }, dispatch] = useStateValue();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const changeOrder = () => {
      if (rating && user) {
        for (let i = 0; i < rating.length; i++) {
          if (rating[i].user === user.uid) {
            let object = rating.splice(i, 1);
            rating.unshift(object[0]);
            setOrder(rating);
            break;
          }
        }
      } else {
        setOrder(rating);
      }
    };
    changeOrder();
  }, [rating]);

  return (
    <div className="review">
      <h2>Customer Comments</h2>
      {order?.map((item, index) => {
        return (
          <div
            key={item?.user}
            className={
              index === 0 ? "personal_review_container" : "review_container"
            }
          >
            {index === 0 ? <h3>Your Comment</h3> : <></>}
            <div className="review_user">
              <AccountCircleIcon />
              <h3>{item?.user.length < 10 ? item?.user : "Mike"}</h3>
            </div>
            <div className="review_star">
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  return index < item?.star ? (
                    <StarIcon key={index} />
                  ) : (
                    <StarBorderIcon key={index} />
                  );
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
