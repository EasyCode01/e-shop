import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="container py-36 md:py-24">
      <nav className="flex gap-2 flex-wrap">
        <Link className="text-sm opacity-50" href="/account">
          Account
        </Link>
        <small>/</small>
        <Link className="text-sm opacity-50" href="/myaccount">
          My Account
        </Link>
        <small>/</small>
        <Link className="text-sm opacity-50" href="/products">
          Product
        </Link>
        <small>/</small>
        <Link className="text-sm opacity-50" href="/cart">
          View Cart
        </Link>
        <small>/</small>
        <Link className="text-sm" href="/checkout">
          Checkout
        </Link>
      </nav>

      {children}
    </div>
  );
}
