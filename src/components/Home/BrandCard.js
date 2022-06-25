import "./BrandCard.css";

import React from "react";

function BrandCard({ object }) {
  return (
    <div className="brandCard">
      <h1>{object?.brand}</h1>
      <img src={object?.image} alt="" className="brandCard_image" />
    </div>
  );
}

export default BrandCard;
