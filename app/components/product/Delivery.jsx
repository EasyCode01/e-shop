import { LocalShippingOutlined, RecyclingOutlined } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

export default function Delivery() {
  return (
    <div className="flex flex-col border border-deep-gray px-2">
      <div className="flex gap-5 items-center py-2 border-b border-b-deep-gray">
        <div className="">
          <LocalShippingOutlined />
        </div>
        <p className=" flex flex-col text-xs font-bold">
          <span>Free Delivery</span>
          <span className="underline">
            <Link href="/">
              Enter your postal code for delivery availability
            </Link>
          </span>
        </p>
      </div>
      <div className="flex gap-5 items-center py-2">
        <div className="">
          <RecyclingOutlined />
        </div>
        <p className="flex flex-col text-xs font-bold">
          <span>Return Delivery</span>
          <span>
            Free 30days Delivery Return.{" "}
            <Link href="/" className="underline">
              Details
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
