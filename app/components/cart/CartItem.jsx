import React from "react";
import Image from "next/image";
import { HighlightOffOutlined } from "@mui/icons-material";

export default function CartItem({ item, handleQuantityChange }) {
  return (
    <div
      className={`cart-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center mb-4 p-8 shadow-md bg-white relative group cursor-pointer`}
    >
      <div className="flex items-center space-x-4 col-span-1">
        <Image
          src={item.image}
          alt={item.name}
          width={35}
          height={35}
          quality={100}
          objectFit="contain"
        />
        <span>{item.name}</span>

        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 ">
          <button className="text-red">
            <HighlightOffOutlined />
          </button>
        </div>
      </div>

      <div className=" text-center">${item.price}</div>

      <div className=" text-center">
        <input
          type="number"
          className="form-input text-center border border-gray-300 rounded w-10"
          min="1"
          value={1}
          onChange={handleQuantityChange}
          aria-label={`Quantity for ${item.name}`}
        />
      </div>

      <div className=" text-center">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
