"use client";
import { useEffect, useState } from "react";
import { founders } from "@/app/constant/data";
import FounderCard from "./FounderCard";

export default function FounderList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = 3;

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % founders.length);
    };

    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${founders.length * (100 / numVisibleCards)}%`,
          transform: `translateX(-${
            (currentIndex % founders.length) * (100 / numVisibleCards)
          }%)`,
        }}
      >
        {founders.map((founder, index) => (
          <FounderCard
            key={index}
            founder={founder}
            numVisibleCards={numVisibleCards}
          />
        ))}
      </div>
    </div>
  );
}
