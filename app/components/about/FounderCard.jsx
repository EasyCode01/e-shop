"use client";
import { useEffect, useState } from "react";
import { founders } from "@/app/constant/data";
import Image from "next/image";

export default function FounderCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [founders.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            width: `${founders.length * (100 / numVisibleCards)}%`,
            transform: `translateX(-${
              currentIndex * (100 / founders.length)
            }%)`,
          }}
        >
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-200 rounded-lg p-4 m-4 gap-4"
              style={{ width: `${100 / numVisibleCards}%` }}
            >
              <div
                className="relative"
                style={{ width: "100%", height: "0", paddingBottom: "100%" }}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">{founder.name}</h1>
                <small>{founder.role}</small>
                <ul className="flex gap-4">
                  {founder.icons.map((icon, idx) => (
                    <li key={idx}>{icon}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {founders.map((_, index) => (
          <span
            key={index}
            className={`inline-block h-3 w-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-red" : "bg-deep-gray"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
