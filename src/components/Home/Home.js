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
  {
    brand: "Intel",
    image: "http://assets.stickpng.com/images/58568d224f6ae202fedf2720.png",
  },
  {
    brand: "NIVIDIA",
    image:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-p@2x.png",
  },
  {
    brand: "AMD",
    image: "https://logos-world.net/wp-content/uploads/2020/03/AMD-Symbol.png",
  },
  {
    brand: "Nintendo",
    image: "http://assets.stickpng.com/images/5a1c3678f65d84088faf1403.png",
  },
  {
    brand: "Dell",
    image:
      "https://www.freepnglogos.com/uploads/dell-png-logo/dell-png-logo-0.png",
  },
  {
    brand: "Sony",
    image: "http://assets.stickpng.com/images/5848242ecef1014c0b5e49c8.png",
  },
];

function Home() {
  const [product, setProduct] = useState([]);
  // const [shuffled, setShuffled] = useState([]);

  // const shuffle = () => {
  //   let temp = [];
  //   for (let array = [0, 1, 2, 3, 4, 5], i = array.length; i--; ) {
  //     var random = array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  //     temp.push(random);
  //   }
  //   setShuffled(temp);
  // };

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
    // const getProducts = () => {
    //   db.collection("products")
    //     .doc("Electronics")
    //     .collection("samsung")
    //     .onSnapshot((snapshot) => {
    //       setProduct(
    //         snapshot.docs.map((doc) => ({
    //           id: doc.id,
    //           data: doc.data(),
    //         }))
    //       );
    //     });
    // };
    // getProducts();
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
          src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"
        />
      </div>
      {renderBrands(0)}
      {renderBrands(3)}
      {renderBrands(6)}
    </div>
  );
}

export default Home;
