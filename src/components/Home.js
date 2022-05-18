import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
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
            id="1"
            title="SAMSUNG Galaxy S22+ Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
            price={799.99}
            image="https://m.media-amazon.com/images/I/61V49wCBDtL._AC_SX466_.jpg"
            rating={5}
          />

          <Product
            id="2"
            title="SAMSUNG Galaxy Buds Live True Wireless Earbuds US Version Active Noise Cancelling Wireless Charging Case Included, Mystic Black"
            price={94.99}
            image="https://m.media-amazon.com/images/I/71LcAql4+aL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="EVGA GeForce RTX 2060 12GB XC Gaming, 12G-P4-2263-KR, 12GB GDDR6,Dual Fans, Metal Backplate"
            price={406.99}
            image="https://m.media-amazon.com/images/I/71psWySiMAL._AC_SL1500_.jpg"
            rating={4}
          />

          <Product
            id="4"
            title="PowerColor Hellhound AMD Radeon RX 6600 Graphics Card with 8GB GDDR6 Memory"
            price={359.99}
            image="https://m.media-amazon.com/images/I/81gACcPPEyL._AC_SL1500_.jpg"
            rating={4}
          />

          <Product
            id="5"
            title="Alienware M15 R6, 15.6 inch QHD 240Hz Gaming Laptop - Intel Core i7-11800H, 16GB DDR4 RAM, 512GB SSD, NVIDIA GeForce RTX 3070 8GB GDDR6"
            price={1699.99}
            image="https://m.media-amazon.com/images/I/71PSUjIQKDS._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="HP Pavilion 27 Touch Desktop 1TB SSD Extreme (Intel Core i7-11700 Processor Turbo Boost to 4.50GHz, 16 GB RAM, 1 TB SSD, 27-inch FullHD Touchscreen, Win 11) PC Computer All-in-One"
            price={2299.99}
            image="https://m.media-amazon.com/images/I/610AAiDk5yL._AC_SL1392_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
