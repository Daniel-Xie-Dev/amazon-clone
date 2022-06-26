import "./BrandCard.css";

import React from "react";
import { useNavigate } from "react-router-dom";

function BrandCard({ object }) {
  const navigate = useNavigate();
  return (
    <div className="brandCard" onClick={() => navigate(`/search/${object?.brand}`)}>
      <img src={object?.image} alt="" className="brandCard_image" />
    </div>
  );
}

export default BrandCard;
