"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import React from "react";

export default function CartSummary() {
  const {
    state: { cartProducts },
  } = useCart();

  const subtotal = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const shippingCost = subtotal > 50 ? 0 : 5;

  const total = subtotal + shippingCost;

  return (
    <div className="p-8 shadow-md">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold">Cart Total</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between border-b border-deep-gray pb-2">
            <p>Subtotal: </p>
            <p>${subtotal.toFixed(2)}</p>
          </li>
          <li className="flex justify-between border-b border-deep-gray pb-2">
            <p>Shipping: </p>
            <p>{shippingCost > 0 ? `$${shippingCost.toFixed(2)}` : "Free"}</p>
          </li>
          <li className="flex justify-between">
            <p>Total: </p>
            <p>${total.toFixed(2)}</p>
          </li>
        </ul>
        <Link href="/checkout">
          <button className="btn-primary">Proceed To Checkout</button>
        </Link>
      </div>
    </div>
  );
}
