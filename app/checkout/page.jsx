import React from "react";
import BillingForm from "../components/checkout/BillingForm";
import OrderSummary from "../components/checkout/OrderSummary";

export default function page() {
  return (
    <div className="mt-16 ">
      <h1 className="font-semibold text-xl">Billing Details</h1>
      <div className="flex flex-col md:flex-row justify-between mt-8 gap-10">
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
}
