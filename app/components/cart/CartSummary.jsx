import Link from "next/link";
import React from "react";

export default function CartSummary() {
  return (
    <div className="p-8 shadow-md">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold">Cart Total</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between border-b border-deep-gray pb-2">
            <p>Subtotal: </p>
            <p>$1650</p>
          </li>
          <li className="flex justify-between border-b border-deep-gray pb-2">
            <p>Shipping: </p>
            <p>Free</p>
          </li>
          <li className="flex justify-between">
            <p>Total: </p>
            <p>$1650</p>
          </li>
        </ul>
        <Link href="/checkout">
          <button className="btn-primary">Proceed To Checkout</button>
        </Link>
      </div>
    </div>
  );
}
