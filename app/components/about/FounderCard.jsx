"use client";
import React, { useEffect, useState } from "react";
import { founders } from "@/app/constant/data";
import Image from "next/image";

export default function FounderCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = 3;

  const KeyedMaterialUIIcon = ({ icon, index }) => {
    return React.cloneElement(icon, { key: index });
  };

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
          <div
            key={index}
            className="flex flex-col bg-gray-200 rounded-lg p-4 m-4 gap-4"
            style={{ width: `${100 / numVisibleCards}%` }}
          >
            <div className="bg-gray rounded-lg overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                width={250}
                height={100}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-medium">{founder.name}</h1>
              <small>{founder.role}</small>
              <ul className="flex gap-4">
                {founder.icons.map((icon, idx) => (
                  <li key={idx}>
                    <KeyedMaterialUIIcon icon={icon} index={idx} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
