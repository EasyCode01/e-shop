"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HighlightOffOutlined } from "@mui/icons-material";
import { useCartContext } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartItem() {
  const [{ items }, dispatch] = useCartContext();

  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    setLocalCart(items);
  }, [items]);

  const handleQuantityChange = (id, newQuantity) => {
    setLocalCart(
      localCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleUpdateCart = () => {
    localCart.forEach((item) => {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: item.quantity },
      });
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id },
    });
  };

  return (
    <div className="">
      {localCart.map((item) => (
        <div
          className={`cart-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center mb-4 p-8 shadow-md bg-white relative group cursor-pointer`}
          key={item.id}
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
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red"
              >
                <HighlightOffOutlined />
              </button>
            </div>
          </div>

          <div className=" text-center">${item.price}</div>

          <div className="flex items-center justify-center text-center">
            <button
              onClick={() =>
                item.quantity > 1 &&
                handleQuantityChange(item.id, item.quantity - 1)
              }
              className="px-2 bg-red text-white"
            >
              -
            </button>
            <span className="px-2">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="px-2 bg-red text-white"
            >
              +
            </button>
          </div>

          <div className=" text-center">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center">
        <Link href={"/products"}>
          <button className="border border-deep-gray  px-4 py-2 rounded-md hover:bg-red hover:text-white transition duration-300 ease-in-out">
            Return To Shop
          </button>
        </Link>
        <button
          onClick={handleUpdateCart}
          className="border border-deep-gray px-4 py-2 rounded-md hover:bg-red hover:text-white transition duration-300 ease-in-out"
        >
          Update Cart
        </button>
      </div>
    </div>
  );
}
