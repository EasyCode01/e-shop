"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HighlightOffOutlined } from "@mui/icons-material";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import toast from "react-hot-toast";

export default function CartItem() {
  const {
    state: { cartProducts },
    dispatch,
  } = useCart();

  const handleRemoveItem = (productId) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: productId,
    });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch({
      type: "UPDATE_ITEM_QUANTITY",
      payload: { _id: productId, quantity: newQuantity },
    });
  };

  const totalPrice = cartProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
    toast.success("Cart cleared successfully!");
  };
  return (
    <div className="">
      {cartProducts.map((item) => (
        <div
          className={`cart-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center mb-4 p-8 shadow-md bg-white relative group cursor-pointer`}
          key={item._id}
        >
          <div className="flex items-center space-x-4 col-span-1">
            <Link href={`/products/${item._id}`}>
              <Image
                src={item.images}
                alt={item.name}
                width={35}
                height={35}
                quality={100}
                objectFit="contain"
              />
            </Link>
            <span>{item.name}</span>

            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 ">
              <button
                onClick={() => handleRemoveItem(item._id)}
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
                handleQuantityChange(item._id, Math.max(1, item.quantity - 1))
              }
              className="px-2 bg-red text-white"
            >
              -
            </button>
            <span className="px-2">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
              className="px-2 bg-red text-white"
            >
              +
            </button>
          </div>

          <div className=" text-center">${totalPrice}</div>
        </div>
      ))}
      <div className="flex justify-between items-center">
        <Link href={"/products"}>
          <button className="border border-deep-gray  px-4 py-2 rounded-md hover:bg-red hover:text-white transition duration-300 ease-in-out">
            Return To Shop
          </button>
        </Link>
        <button
          onClick={clearCart}
          className="border border-deep-gray px-4 py-2 rounded-md hover:bg-red hover:text-white transition duration-300 ease-in-out"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
