"use client";
import React from "react";

export default function CouponForm({ handleApllyCoupon }) {
  return (
    <div>
      <form
        onSubmit={() => handleApllyCoupon}
        className="flex flex-col md:flex-row gap-4 md:items-center"
      >
        <input
          type="text"
          className="border border-deep-gray px-4 py-2 rounded-md focus:outline-none"
          placeholder="Coupon Code"
        />
        <button className="btn-primary">Apply Coupon</button>
      </form>
    </div>
  );
}
