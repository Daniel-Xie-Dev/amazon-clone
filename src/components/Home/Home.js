import React, { useEffect, useState } from "react";
import "./Home.css";
import { db } from "../../firebase";
import BrandCard from "./BrandCard";

const brands = [
  {
    brand: "Samsung",
    image: "https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png",
  },
  {
    brand: "Apple",
    image:
      "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
  },
  {
    brand: "Google",
    image:
      "https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1",
  },
  { brand: "Intel", image: "" },
  { brand: "NIVIDIA", image: "" },
  { brand: "Dell", image: "" },
  { brand: "Sony", image: "" },
];

function Home() {
  const [product, setProduct] = useState([]);
  const [shuffled, setShuffled] = useState([]);

  const shuffle = () => {
    let temp = [];
    for (let array = [0, 1, 2, 3, 4, 5], i = array.length; i--; ) {
      var random = array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
      temp.push(random);
    }
    setShuffled(temp);
  };

  const renderBrands = (begin) => {
    return (
      <div className="home_row">
        <BrandCard object={brands[begin]} />
        <BrandCard object={brands[begin + 1]} />
        <BrandCard object={brands[begin + 2]} />
      </div>
    );
  };

  useEffect(() => {
    // shuffle();

    const getProducts = () => {
      db.collection("products")
        .doc("Electronics")
        .collection("samsung")
        .onSnapshot((snapshot) => {
          setProduct(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    };

    getProducts();
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
          src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"
        />

        {renderBrands(0)}
      </div>
    </div>
  );
}

export default Home;
