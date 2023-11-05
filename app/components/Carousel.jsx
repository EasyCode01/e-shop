"use client";

import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Carousel({ prevCard, nextCard }) {
  return (
    <>
      <div className="flex items-center ">
        <div
          className="rounded-full bg-gray p-2 cursor-pointer"
          onClick={prevCard}
        >
          <ArrowBack />
        </div>
        <div
          className="rounded-full bg-gray p-2 ml-4 cursor-pointer"
          onClick={nextCard}
        >
          <ArrowForward />
        </div>
      </div>
    </>
  );
}
