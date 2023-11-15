"use client";

import React from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import CouponForm from "../components/cart/CouponForm";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Page({ handleApplyCoupon }) {
  const {
    state: { cartProducts },
  } = useCart();

  return (
    <div className="container mx-auto py-8">
      {cartProducts && cartProducts.length > 0 ? (
        <>
          <div className="hidden md:grid grid-cols-4 items-center mb-4 p-8 bg-white shadow-md ">
            <div className="font-semibold col-span-1 text-center">Product</div>
            <div className="font-semibold col-span-1 text-center">Price</div>
            <div className="font-semibold col-span-1 text-center">Quantity</div>
            <div className="font-semibold col-span-1 text-center">Subtotal</div>
          </div>

          <CartItem />

          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="coupon-form mt-4">
              <CouponForm onApplyCoupon={handleApplyCoupon} />
            </div>
            <div className="mt-4">
              <CartSummary />
            </div>
          </div>
        </>
      ) : (
        <div className="text-center flex flex-col gap-5">
          <p className="text-lg font-medium">Your cart is currently empty.</p>
          <Link href="/products">
            <button className="btn-primary">Return to shop</button>
          </Link>
        </div>
      )}
    </div>
  );
}
