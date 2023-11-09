"use client";

import { hero } from "@/app/constant/data";
import { ArrowForwardOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function HeroCarousel() {
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % 3;
      setCurrentIndex(nextIndex);
    };
    let intervalId = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="bg-black text-white w-full md:w-3/4 my-6 relative overflow-hidden">
      <div
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        className="extra-width flex bg-dark transition-all duration-1000 ease-out"
      >
        {hero.map((product, index) => (
          <div
            key={index}
            className="flex flex-col-reverse md:flex-row  justify-around items-center w-full"
          >
            <div className="relative flex flex-col w-full md:w-1/2 p-4 md:p-10 gap-4 md:gap-8 justify-center items-start">
              <div className="flex items-center gap-2 ">
                <Image
                  className="w-10"
                  src={product.tinyImage}
                  alt={product.name}
                  quality={100}
                  width={40}
                  height={40}
                />
                <small>{product.name}</small>
              </div>
              <p className="text-xl md:text-3xl">{product.text.slice(0, 9)}</p>
              <p className="text-xl md:text-3xl">{product.text.slice(9)}</p>
              <Link href="/" className="underline">
                Shop Now <ArrowForwardOutlined />
              </Link>
            </div>
            <div className=" w-full md:w-1/2 h-60 relative">
              <Image
                src={product.image}
                alt={product.name}
                key={index}
                className="object-contain"
                fill={true}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex  justify-center gap-2 absolute w-full bottom-0 sm:bottom-4 ">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full bg-deep-gray ${
              currentIndex === index
                ? "bg-red border-2 border-solid border-white"
                : "bg-deep-gray"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}
