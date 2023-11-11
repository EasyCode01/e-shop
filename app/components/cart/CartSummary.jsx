"use client";

import { useCartContext } from "@/app/context/CartContext";
import Link from "next/link";
import React from "react";

export default function CartSummary() {
  const [{ items }] = useCartContext();

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shippingCost = 0;

  const total = subtotal + shippingCost;

  return (
    <div className="p-8 shadow-md">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold">Cart Total</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between border-b border-deep-gray pb-2">
            <p>Subtotal: </p>
            <p>${subtotal}</p>
          </li>
          <li className="flex justify-between border-b border-deep-gray pb-2">
            <p>Shipping: </p>
            <p>{shippingCost > 0 ? `$${shippingCost.toFixed(2)}` : "Free"}</p>
          </li>
          <li className="flex justify-between">
            <p>Total: </p>
            <p>{total}</p>
          </li>
        </ul>
        <Link href="/checkout">
          <button className="btn-primary">Proceed To Checkout</button>
        </Link>
      </div>
    </div>
  );
}
