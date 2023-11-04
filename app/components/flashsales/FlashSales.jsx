"use client";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Timer from "./timer/Timer";
import FlashSaleProducts from "./products/FlashSaleProducts";
import { useState } from "react";
import { productsData } from "@/app/constant/data";

export default function FlashSales() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);

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
    <div className="pt-12">
      <div className="">
        <small className="text-xxs font-bold text-red pl-5 title relative">
          Todays
        </small>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-bold">Flash Sales</h1>
          <Timer />
        </div>
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
      </div>
      <FlashSaleProducts
        currentIndex={currentIndex}
        showAllProducts={showAllProducts}
        setShowAllProducts={setShowAllProducts}
        products={products}
      />
    </div>
  );
}
