import { productsData } from "@/app/constant/data";
import Image from "next/image";
import React from "react";

const OrderSummary = ({ orderItems }) => {
  // Calculate subtotal
  //   const subtotal = orderItems.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0
  //   );

  return (
    <div className="flex flex-col gap-4 shadow-lg w:full md:w-2/5">
      <ul className="px-8 ">
        {productsData.slice(0, 3).map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center gap-5 mb-4 p-4 shadow-md bg-white"
          >
            <div className="flex items-center gap-2">
              <Image
                src={item.image}
                alt={item.name}
                width={25}
                height={25}
                quality={100}
                objectFit="contain"
              />
              <span className="text-xs font-medium">{item.name}</span>
            </div>

            <span className="text-xs font-medium">
              ${item.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-5 px-8">
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

      <form className="flex flex-col gap-5">
        <ul className="px-8">
          <li className="flex items-center justify-between">
            <div>
              <input
                type="radio"
                id="bank"
                name="paymentMethod"
                value="bank"
                //   checked={paymentMethod === "bank"}
                //   onChange={handlePaymentChange}
              />
              <label htmlFor="bank" className="ml-2">
                Bank
              </label>
            </div>
            <Image
              src="/images/bank-logo.png"
              alt="Bank Logo"
              width={100}
              height={50}
              quality={100}
            />
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              //   checked={paymentMethod === "cash"}
              //   onChange={handlePaymentChange}
            />
            <label htmlFor="cash" className="ml-2">
              Cash on delivery
            </label>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row justify-between px-8 gap-2 md:gap-2">
          <input
            type="text"
            className="border border-deep-gray px-4 py-2 rounded-md focus:outline-none w-full md:w-3/5"
            placeholder="Coupon Code"
          />
          <button className="btn-primary w-full md:w-2/5">Apply Coupon</button>
        </div>

        <div className="p-8">
          <button className="btn-primary ">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default OrderSummary;
