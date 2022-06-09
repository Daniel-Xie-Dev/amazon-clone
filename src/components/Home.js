import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../firebase";

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

  useEffect(() => {
    shuffle();

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

        <div className="home_row">
          <Product
            id={product[shuffled[0]]?.id}
            type={product[shuffled[0]]?.data.type}
            brand={product[shuffled[0]]?.data.brand}
            title={product[shuffled[0]]?.data.title}
            price={product[shuffled[0]]?.data.price}
            image={product[shuffled[0]]?.data.image}
            rating={product[shuffled[0]]?.data.rating}
          />

          <Product
            id={product[shuffled[1]]?.id}
            type={product[shuffled[1]]?.data.type}
            brand={product[shuffled[1]]?.data.brand}
            title={product[shuffled[1]]?.data.title}
            price={product[shuffled[1]]?.data.price}
            image={product[shuffled[1]]?.data.image}
            rating={product[shuffled[1]]?.data.rating}
          />
        </div>

        <div className="home_row">
          <Product
            id={product[shuffled[2]]?.id}
            type={product[shuffled[2]]?.data.type}
            brand={product[shuffled[2]]?.data.brand}
            title={product[shuffled[2]]?.data.title}
            price={product[shuffled[2]]?.data.price}
            image={product[shuffled[2]]?.data.image}
            rating={product[shuffled[2]]?.data.rating}
          />

          <Product
            id={product[shuffled[3]]?.id}
            type={product[shuffled[3]]?.data.type}
            brand={product[shuffled[3]]?.data.brand}
            title={product[shuffled[3]]?.data.title}
            price={product[shuffled[3]]?.data.price}
            image={product[shuffled[3]]?.data.image}
            rating={product[shuffled[3]]?.data.rating}
          />

          <Product
            id={product[shuffled[4]]?.id}
            type={product[shuffled[4]]?.data.type}
            brand={product[shuffled[4]]?.data.brand}
            title={product[shuffled[4]]?.data.title}
            price={product[shuffled[4]]?.data.price}
            image={product[shuffled[4]]?.data.image}
            rating={product[shuffled[4]]?.data.rating}
          />
        </div>

        <div className="home_row">
          <Product
            id={product[shuffled[5]]?.id}
            type={product[shuffled[5]]?.data.type}
            brand={product[shuffled[5]]?.data.brand}
            title={product[shuffled[5]]?.data.title}
            price={product[shuffled[5]]?.data.price}
            image={product[shuffled[5]]?.data.image}
            rating={product[shuffled[5]]?.data.rating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
