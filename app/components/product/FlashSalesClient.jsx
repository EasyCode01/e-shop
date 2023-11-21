"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import Carousel from "@/app/components/Carousel";

const FlashSalesClient = ({ products }) => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.categoryType === "Flash sales"
    );
    shuffleArray(filteredProducts);
    setFlashSaleProducts(filteredProducts);
  }, [products]);

  const nextCard = () => {
    if (currentIndex + 6 < flashSaleProducts.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayProducts = flashSaleProducts.slice(
    currentIndex,
    currentIndex + 6
  );

  return (
    <div>
      <Carousel prevCard={prevCard} nextCard={nextCard} />
      <div className="overflow-x-hidden space-x-4 slider my-5">
        {displayProducts.map((product) => (
          <ProductCard key={product._id} product={product} type="Flash sales" />
        ))}
      </div>
    </div>
  );
};

export default FlashSalesClient;
