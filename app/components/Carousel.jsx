"use client";

import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Carousel({ prevCard, nextCard }) {
  return (
    <>
      <div className="flex justify-end mt-4">
        <div
          className="rounded-full bg-gray p-2 cursor-pointer flex justify-center items-center"
          onClick={prevCard}
        >
          <ArrowBack />
        </div>
        <div
          className="rounded-full bg-gray p-2 ml-4 cursor-pointer flex justify-center items-center"
          onClick={nextCard}
        >
          <ArrowForward />
        </div>
      </div>
    </>
  );
}
