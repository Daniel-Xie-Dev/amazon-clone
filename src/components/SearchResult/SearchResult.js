import "./SearchResult.css";
import { db } from "../../firebase";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";

const brands = ["samsung"];

function SearchResult() {
  const { input } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await db
        .collection("products")
        .doc("Electronics")
        .collection(input.toLowerCase())
        .get()
        .then((snapshot) => {
          setProduct(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    };

    if (brands.includes(input.toLowerCase())) {
      getProducts();
    }

    getProducts();
  }, [input]);

  return (
    <div className="search_result">
      {product?.length === 0 ? (
        <h1>Loading products...</h1>
      ) : (
        product.map((item, index) => {
          return (
            <Product
              key={index}
              id={item.id}
              type={item.data.type}
              brand={item.data.brand}
              title={item.data.title}
              image={item.data.image}
              price={item.data.price}
              rating={item.data.rating}
            />
          );
        })
      )}
    </div>
  );
}

export default SearchResult;
