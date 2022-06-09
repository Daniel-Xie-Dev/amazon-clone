import "./Rating.css";

import React, { useEffect, useRef, useState } from "react";

function Rating({ rating }) {
  const barWidth = useRef(null);
  const [width, setWidth] = useState(0);
  const [barArray, setBarArray] = useState([]);
  const getBarSize = () => {
    const newWidth = barWidth.current.clientWidth;
    setWidth(newWidth);
  };

  const getAverageStar = () => {
    let accumulator = 0;
    for (let obj of rating) {
      accumulator += obj.star;
    }
    return accumulator / rating?.length;
  };

  const getPercentage = (star) => {
    let counter = 0;
    for (let obj of rating) {
      if (obj.star === star) counter++;
    }

    return counter / rating.length;
  };

  useEffect(() => {
    if (width === 0) {
      window.addEventListener("resize", getBarSize);
      setWidth(barWidth.current.clientWidth);
    }

    let temp = [0, 0, 0, 0, 0];
    temp.map((_, index) => {
      const percent = rating ? getPercentage(5 - index) : 0;
      temp[index] = percent;
    });

    setBarArray(temp);
  }, [rating, width]);

  return (
    <div className="rating">
      <h2>Customer reviews</h2>
      <p>{rating && getAverageStar()}</p>
      <p>{rating?.length} global ratings</p>

      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index} className="rating_container">
              <p>{5 - index} star</p>
              <div ref={barWidth} className="rating_bar">
                <div
                  className="rating_value_bar"
                  style={{
                    width: `${barArray[index] * width}px`,
                  }}
                ></div>
              </div>
              <p>{barArray[index] * 100 + "%"}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Rating;
