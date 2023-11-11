import { FavoriteBorder } from "@mui/icons-material";
import React from "react";

export default function ProductColor({ product }) {
  return (
    <div className="py-5 flex flex-col gap-4">
      <div className="flex items-center">
        <span className="mr-2">Colours:</span>
        <div className="flex">
          <span className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer border border-gray-300 mr-2"></span>
          <span className="w-6 h-6 bg-red rounded-full cursor-pointer border border-gray-300 "></span>
        </div>
      </div>

      <div className="flex items-center">
        <span className="mr-4">Size:</span>
        <div className="flex flex-wrap">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="text-sm border border-gray-300 rounded px-3 py-1 mx-1 hover:bg-red hover:text-white "
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-between items-center mt-4 flex-wrap">
        <div className="border rounded border-gray-300">
          <button className="text-sm  border-r border-r-gray-300 px-3 py-2 hover:bg-red hover:text-white">
            -
          </button>
          <span className="px-4 py-1">1</span>
          <button className="text-sm border-l border-l-gray-300 px-3 py-2 hover:bg-red hover:text-white">
            +
          </button>
        </div>
        <div className="flex gap-2">
          <button
            disabled={!product.inStock}
            className={`${
              product.inStock ? "bg-red" : "bg-gray-500 cursor-not-allowed"
            } text-white p-2 rounded`}
          >
            Add To Cart
          </button>
          <button className="border border-deep-gray px-3 rounded">
            <FavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
}
