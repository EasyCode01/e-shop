"use client";

import { useState } from "react";
import { productsData } from "../constant/data";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = productsData.flatMap((item) => item.products);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <>
      <div className="flex items-center ">
        <div
          className="rounded-full bg-gray p-2 cursor-pointer"
          onClick={prevSlide}
        >
          <ArrowBack />
        </div>
        <div
          className="rounded-full bg-gray p-2 ml-4 cursor-pointer"
          onClick={nextSlide}
        >
          <ArrowForward />
        </div>
      </div>
    </>
  );
}
