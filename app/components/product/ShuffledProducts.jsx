"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const ShuffledProducts = ({ initialProducts, type }) => {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    if (initialProducts) {
      const productsCopy = [...initialProducts];
      shuffleArray(productsCopy);
      setShuffledProducts(productsCopy);
    }
  }, [initialProducts]);

  return (
    <>
      {shuffledProducts.slice(0, 8).map((product) => (
        <ProductCard key={product._id} product={product} type={type} />
      ))}
    </>
  );
};

export default ShuffledProducts;
