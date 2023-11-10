"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../../components/ProductCard";
import { productsData } from "../../constant/data";

export default function ExploreProducts() {
  const [products, setProducts] = useState(productsData);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    const shuffledProducts = [...productsData];
    shuffleArray(shuffledProducts);
    setProducts(shuffledProducts);
  }, []);

  return (
    <section className="padding-y">
      <div className="container">
        <div className="flex justify-between gap-2">
          <SectionTitle label="Our Products" title="Explore Products" />
          <div className="self-end flex gap-2">
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center  bg-gray cursor-pointer">
              <ArrowBackIcon />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center  bg-gray cursor-pointer">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
            {products?.length &&
              products
                .slice(0, 8)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    type="Explore products"
                  />
                ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="btn-primary mt-2">View All products</button>
        </div>
      </div>
    </section>
  );
}
